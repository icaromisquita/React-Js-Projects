import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'

import auth from './middlewares/auth.js'

const app = express()
app.use(express.json())
/* 3 routes
Public
    Sign in, Log in
Private
    List Users
*/
app.use('/', publicRoutes)
app.use('/',auth, privateRoutes)


app.listen(3000, () => console.log("Server listening 🚀"))