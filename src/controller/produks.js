const UsersModel = require('../models/produks');

const getAllProduks = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllProduks();
    
        res.json({
            message: 'GET all produks success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewProduks = async (req, res) => {
    const {body} = req;

    if(!body.email || !body.name || !body.addres){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await UsersModel.createNewProduks(body);
        res.status(201).json({
            message: 'CREATE new produks success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const detailProduk = async (req, res) => {
    const { idProduk } = req.params;

    try {
        const data = await UsersModel.getProdukById(idProduk);

        if (!data) {
            return res.status(404).json({
                message: 'Produk tidak ditemukan',
                data: null,
            });
        }

        res.json({
            message: 'GET detail produk success',
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};


const updateProduks = async (req, res) => {
    const {idProduks} = req.params;
    const {body} = req;
    try {
        await UsersModel.updatProduks(body, idProduks);
        res.json({
            message: 'UPDATE produks success',
            data: {
                id: idProduks,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteProduks = async (req, res) => {
    const {idProduks} = req.params;
    try {
        await UsersModel.deletProduks(idProduks);
        res.json({
            message: 'DELETE produks success',
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
    getAllProduks,
    createNewProduks,
    detailProduk,
    updateProduks,
    deleteProduks,
}