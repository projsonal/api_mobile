const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
    
        res.json({
            message: 'GET all member success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;

    if(!body.email || !body.nama || !body.password){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// const updateUser = async (req, res) => {
//     const {idUser} = req.params;
//     const {body} = req;
//     try {
//         await UsersModel.updateUser(body, idUser);
//         res.json({
//             message: 'UPDATE user success',
//             data: {
//                 id: idUser,
//                 ...body
//             },
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: 'Server Error',
//             serverMessage: error,
//         })
//     }
// }

const deleteUser = async (req, res) => {
    const {idMember} = req.params;
    try {
        await UsersModel.deleteUser(idMember);
        res.json({
            message: 'DELETE member success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
   
    deleteUser,
}