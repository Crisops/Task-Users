import cors from 'cors'

const ACCEPT_DOMAIN = [
  'http://localhost:3000',
  'http://localhost:4321',
  'http://localhost:5173'
]

export const middlewareCors = ({ acceptOrigin = ACCEPT_DOMAIN } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptOrigin.includes(origin)) return callback(null, true)
    if (!origin) return callback(null, true)

    return callback(new Error('Not allowed by CORS'))
  },
  credentials: true
})
