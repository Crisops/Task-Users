export const validationShema = (schema) => (req, res, next) => {
  const validation = schema.safeParse(req.body)

  try {
    if (!validation.success) throw validation.error

    next()
  } catch (error) {
    const messages = error.issues.map(error => error.message)

    res.status(400).json({ error: messages })
  }
}
