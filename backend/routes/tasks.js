const express = require('express')
const {
  getTasks, 
  getTask, 
  createTask, 
  deleteTask, 
  updateTask
} = require('../controllers/taskController')

const router = express.Router()

// GET all workouts
router.get('/', getTasks)

// GET a single workout
router.get('/:id', getTask)

// POST a new workout
router.post('/', createTask)

// DELETE a workout
router.delete('/:id', deleteTask)

// UPDATE a workout
router.patch('/:id', updateTask)

module.exports = router