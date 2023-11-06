const getAllUsers = (req,res) => {
    res.json({
        message: 'GET All users success',
    })
}

const createNewUser = async(req,res) => {
    console.log(req.body);
    res.json({
        message: 'CREATE new user success',
        data:req.body
    })
}
module.export = {
    getAllUsers,
    createNewUser
}