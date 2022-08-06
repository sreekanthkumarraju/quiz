const {getQuestions,getQuestion,createQuestion, updateQuestion, deleteQuestion}=require('../controllers/functionsforquiz.js')
const express=require('express')
const router=express.Router()

router.route('/getQuestions').get(getQuestions)
router.route('/getQuestion/:id').get(getQuestion)

router.route('/createQuestion').post(createQuestion)
router.route('/updateQuestion/:id').put(updateQuestion)
router.route('/deleteQuestion/:id').delete(deleteQuestion)
module.exports=router;