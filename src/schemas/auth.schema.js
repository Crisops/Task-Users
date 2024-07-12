import z from 'zod'

export const registerSchema = z.object({
  username: z
    .string({
      required_error: 'Username is required',
      invalid_type_error: 'Username must be a string'
    }),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string'
    })
    .email({ message: 'Must be a valid email' }),
  password: z
    .string(
      {
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string'
      })
    .min(3,
      { message: 'Password must be at least 3 characters' }
    )
})

export const loginSchema = z.object({

  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string'
    })
    .email({ message: 'Must be a valid email' })
    .trim(),
  password: z
    .string(
      {
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string'
      })
    .min(3,
      { message: 'Password must be at least 3 characters' }
    )

})
