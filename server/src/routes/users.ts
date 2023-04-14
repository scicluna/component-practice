import { Router } from "express";
import { User } from "../models/User";

const userRouter = Router();

userRouter.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving users' })
    }
})

userRouter.post('/users', async (req, res) => {
    try {
        const user = await User.findOne(req.body.username)
        if (!user) res.status(404).json({ message: 'Incorrect username' })
        if (req.body.password !== user?.password) res.status(404).json({ message: 'Incorrect password' })
        res.json({ message: 'login success' })
    } catch (err) {
        res.status(500).json({ message: 'Login Error' })
    }
})

export default userRouter