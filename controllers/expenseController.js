
const expenseSchema = require('../models/expenseModel');

exports.addExpense = async(req, res) => {
    const{title,amount,category,description,date} = req.body;
    const expense=  expenseSchema({title,amount,category,description,date});
    try {
        if(!title || !amount || !category || !description || !date){
            return res.status(400).json({message:"All fields are required"});
        }
        if(amount <= 0 || !amount ==='number'){
            return res.status(400).json({message:"Amount cannot be negative"});
        }
        await expense.save();
        return res.status(200).json({message:"expense added successfully"});
    } catch (error) {
        return res.status(500).json({message:"server error"});
    }
}

exports.getExpense = async(req,res)=>{
try {
    const expenses = await expenseSchema.find().sort({createdAt:-1});
    res.status(200).json({expenses:expenses})
}
catch(err){
res.status(500).json({message:"server error"})
}

}
exports.deleteExpense=async (req,res) => {
    
        const {id}=req.params;
        console.log(req.params);
        
        await expenseSchema.findByIdAndDelete(id).then((expense)=>{
            res.status(200).json({message:"expense deleted successfully"})
        })
        .catch(err=>{
            res.status(500).json({message:"server error "});
        })
    
}
