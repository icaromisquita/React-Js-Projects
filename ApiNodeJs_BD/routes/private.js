import express from 'express'
import { PrismaClient } from "../generated/prisma/index.js";

const router = express.Router()
const prisma = new PrismaClient()

router.get('/list-users', async (req, res) => {
    try {

        const users = await prisma.user.findMany({omit:{password:true}}) 
        

        res.status(200).json({message:"Users listed with success", users})
    } catch (err) {
        res.status(500).json({message:"User not logged"})
    }
})

export default router