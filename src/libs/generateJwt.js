import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config.js'

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' }, (error, token) => {
      if (error) reject(error)
      resolve(token)
    })
  })
}
