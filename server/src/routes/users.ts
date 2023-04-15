import { Router } from "express"
import { User } from "../models/User"
export const router = Router()

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving users' })
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) return res.status(400).json({ message: 'Incorrect username' })
        if (req.body.password !== user?.password) return res.status(400).json({ message: 'Incorrect password' })
        console.log("you are logged in")
        res.json({ message: 'login success' })
    } catch (err) {
        res.status(500).json({ message: 'Login Error' })
    }
})