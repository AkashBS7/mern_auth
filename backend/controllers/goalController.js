const aysncHandler = require('express-async-handler')


// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = aysncHandler(async (req, res) => {
    res.status(200).json({message: 'GET GOALS'})
})

// @desc SET goals
// @route POST /api/goals
// @access Private
const setGoal = aysncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Create GOAL'})
})

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = aysncHandler(async (req, res) => {
    res.status(200).json({message: `Update GOAL ${req.params.id}`})
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = aysncHandler(async (req, res) => {
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