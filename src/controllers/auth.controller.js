import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'
import { createAccessToken } from '../libs/generateJwt.js'

export const register = async (req, res) => {
  const { username, email, password } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    })

    const userSaved = await newUser.save()

    const payload = { id: userSaved._id }

    const token = await createAccessToken(payload)

    res.cookie('access_token', token)
    res.status(200).json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const userFind = await User.findOne({ email })

    if (!userFind) return res.status(404).json({ error: 'User not found' })

    const isMatch = await bcrypt.compare(password, userFind.password)

    if (!isMatch) return res.status(401).json({ error: 'Invalid password' })

    const token = await createAccessToken({ id: userFind._id })

    res.cookie('access_token', token)
    res.json({
      id: userFind._id,
      username: userFind.username,
      email: userFind.email
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const logout = async (req, res) => {
  res.clearCookie('access_token')
  res.sendStatus(200)
}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.session.id)

  if (!userFound) return res.status(404).json({ error: 'User not found' })

  const { _id, username, email } = userFound

  res.json({
    id: _id,
    username,
    email
  })
}
