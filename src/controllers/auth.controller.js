import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'
import { createAccessToken } from '../libs/generateJwt.js'

export const register = async (req, res) => {
  const { username, email, password } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  const userFoundEmail = await User.findOne({ email })

  if (userFoundEmail) return res.status(400).json({ error: ['Email already exists'] })

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
    res.status(500).json({ error })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const userFind = await User.findOne({ email })

    if (!userFind) return res.status(404).json({ error: ['Email does not exist'] })

    const isMatch = await bcrypt.compare(password, userFind.password)

    if (!isMatch) return res.status(401).json({ error: ['Invalid password'] })

    const token = await createAccessToken({ id: userFind._id })

    res.cookie('access_token', token)
    res.json({
      id: userFind._id,
      username: userFind.username,
      email: userFind.email
    })
  } catch (error) {
    res.status(500).json({ error })
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

export const verifyToken = async (req, res) => {
  const { session } = req

  const userFound = await User.findById(session.id)

  if (!userFound) return res.status(404).json({ message: 'User not found' })

  return res.status(200).json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email
  })
}
