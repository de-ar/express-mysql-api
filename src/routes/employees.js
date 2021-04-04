const router = require('express').Router()
const db = require('../db')

router.get('/', (req, res) => {
  try {
    db.query('SELECT * FROM EMPLOYEE;', (err, data) => {
      if (err) return res.status(400).json({ error: err, data: [] })
      return res.status(200).json({ error: '', data })
    })
  } catch (err) {
    return res.status(500).json({ error: err, data: [] })
  }
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  try {
    db.query('SELECT * FROM EMPLOYEE WHERE empno = ?;', [id], (err, data) => {
      if (err) return res.status(400).json({ error: err, data: {} })
      if (data.length === 0)
        return res
          .status(404)
          .json({ error: `employee with id '${id}' not found`, data: {} })
      return res.status(200).json({ error: '', data: data[0] })
    })
  } catch (err) {
    return res.status(500).json({ error: err, data: {} })
  }
})

module.exports = router
