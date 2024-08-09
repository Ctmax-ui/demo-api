const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModle');



// @des = for getting Goals.
// @route = GET /api/Goals.
// @access = private.
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @des = for creating Goals.
// @route = POST /api/Goals.
// @access = private.
const setGoals = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400) //.json({message: 'Bad request, use text in body'})
        throw new Error("please send 'text' in the body")
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal);

})

// @des = for updating Goals.
// @route = UPDATE /api/Goals/:Goalid.
// @access = private.
const putGoals = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400) //.json({message: 'Bad request, use text in body'})
        throw new Error("please send 'text' in the body")
    }

    const goal = Goal.findById(req.params.id)

    if (!goal) { res.status(400); throw new Error('goal not found') }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id,req.body, {new: true})

    res.status(200).json(updateGoal);

})

// @des = for delete Goals.
// @route = DELETE /api/Goals/:Goalid.
// @access = private.
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) { 
        res.status(400); 
        throw new Error('goal not found'); 
    }

    const deltedG = await goal.deleteOne();

    // const deletedTheGoal = await Goal.findByIdAndDelete(req.params.id)


    res.status(200).json({id: req.params.id});

})


module.exports = {
    getGoals, setGoals, putGoals, deleteGoals
}