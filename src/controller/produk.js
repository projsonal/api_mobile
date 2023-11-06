const getAllProd = (req,res) => {
    res.json({
        message: 'GET All product success',
    })
}

const createNewProd = async(req,res) => {
    res.json({
        message: 'CREATE new product success'
    })
}
module.export = {
    getAllProd,
    createNewProd
}