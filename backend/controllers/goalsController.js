const asyncHandler = require('express-async-handler');



// @des = for getting Goals.
// @route = GET /api/Goals.
// @access = private.
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Goal show' })
})

// @des = for creating Goals.
// @route = POST /api/Goals.
// @access = private.
const setGoals = asyncHandler(async(req, res) => {

    if(!req.body.text){
        res.status(400) //.json({message: 'Bad request, use text in body'})
        throw new Error("please send 'text' in the body")
    }

    res.status(200).json({ message: `created Goal '${req.body.text}'` });

})

// @des = for updating Goals.
// @route = UPDATE /api/Goals/:Goalid.
// @access = private.
const putGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `updated Goal ${req.params.id}` });

})

// @des = for delete Goals.
// @route = DELETE /api/Goals/:Goalid.
// @access = private.
const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `deleted Goal ${req.params.id}` });

})


module.exports = {
    getGoals, setGoals, putGoals, deleteGoals
}