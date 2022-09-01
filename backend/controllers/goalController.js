const aysncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')


// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = aysncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json({goals})
})

// @desc SET goals
// @route POST /api/goals
// @access Private
const setGoal = aysncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = aysncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGoal)
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = aysncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found')
    }
    await goal.remove()
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
})

// @desc Get goal
// @route GET /api/goals/:id
// @access Private
const getGoal = aysncHandler(async (req, res) => {
    res.status(200).json({message: `GET GOAL ${req.params.id}`})
})


module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal, getGoal
}