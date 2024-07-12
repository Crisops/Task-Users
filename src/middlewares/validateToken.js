import jsw from 'jsonwebtoken'
import { JWT_SECRET } from '../config.js'

export const authRequired = (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) res.status(401).json({ message: 'Not Authorized' })

  jsw.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(401).json({ message: 'Invalid Token' })

    req.session = user

    next()
  })
}
