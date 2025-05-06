
const incomeSchema = require('../models/incomeModel');

exports.addIncome = async(req, res) => {
    const{title,amount,category,description,date} = req.body;
    const income=  incomeSchema({title,amount,category,description,date});
    try {
        if(!title || !amount || !category || !description || !date){
            return res.status(400).json({message:"All fields are required"});
        }
        if(amount <= 0 || !amount ==='number'){
            return res.status(400).json({message:"Amount cannot be negative"});
        }
        await income.save();
        return res.status(200).json({message:"Income added successfully"});
    } catch (error) {
        return res.status(500).json({message:"server error"});
    }
}

exports.getIncomes = async(req,res)=>{
try {
    const incomes = await incomeSchema.find().sort({createdAt:-1});
    res.status(200).json({incomes:incomes})
}
catch(err){
res.status(500).json({message:"server error"})
}

}
exports.deleteIncome=async (req,res) => {
    
        const {id}=req.params;
        console.log(req.params);
        
        await incomeSchema.findByIdAndDelete(id).then((income)=>{
            res.status(200).json({message:"Income deleted successfully"})
        })
        .catch(err=>{
            res.status(500).json({message:"server error "});
        })
    
}
