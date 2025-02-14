import mongoose from 'mongoose'
import { MONGODB_URI } from './config.js'

export async function connectDB () {
  try {
    const db = await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')
    return db
  } catch (error) {
    console.log(error.errorResponse.errmsg)
  }
}
