import express from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "../generated/prisma/index.js";
import jwt from 'jsonwebtoken'


const prisma = new PrismaClient();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET

// Sign in
router.post("/signIn", async (req, res) => {
  try {
    const user = req.body;

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(user.password, salt)

    const userDB = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashPassword,
      },
    });

    res.status(201).json(userDB);
  } catch (error) {
    res.status(500).json({ message: "Server Error, try again later." });
  }
});

// Login

router.post('/login', async(req,res) => {
  try {
    const userInfo =req.body 

    // Search if the User info is in the DB
    const user = await prisma.user.findUnique({
      where:{email: userInfo.email},
    })

    // Check if user exists in DB
    if(!user){
      return res.status(404).json({message: "User not found!"})
    }

    // Check the typed password match the password in DB
    const isMatch = await bcrypt.compare(userInfo.password, user.password)
    if(!isMatch){
      return res.status(400).json({message:"Wrong password"})
    }

    // Generate the JWT token
    const token = jwt.sign({id:user.id}, JWT_SECRET, {expiresIn:'1d'})

    res.status(200).json(token)
  } catch (error) {
  res.status(500).json({ message: "Server Error, try again later." });    
  }
})

export default router;
