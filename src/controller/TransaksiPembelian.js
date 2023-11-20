const UsersModel = require('../models/TransaksiPembelian');

const getAllTransaksiPembelian = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllTransaksiPembelian();
    
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

const createNewTransaksiPembelian = async (req, res) => {
    const {body} = req;

    if(!body.email || !body.name || !body.addres){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await UsersModel.createNewTransaksiPembelian(body);
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

const detailTransaksiPembelian = async (req, res) => {
    const { idProduk } = req.params;

    try {
        const data = await UsersModel.getTransaksiPembelianById(idProduk);

        if (!data) {
            return res.status(404).json({
                message: 'Produk tidak ditemukan',
                data: null,
            });
        }

        // Mendapatkan atribut dari data yang diperlukan
        const { nomorFaktur, kodeBarang, namaBarang, satuan, hargaSatuan } = data;

        // Melakukan perhitungan SubTotal
        const subTotal = jumlahBarang * hargaSatuan; // Pastikan jumlahBarang ada di data atau dapat dihitung dari data lain yang tersedia

        res.json({
            message: 'GET detail Transaksi Pembelian success',
            data: {
                nomorFaktur: nomorFaktur,
                kodeBarang: kodeBarang,
                namaBarang: namaBarang,
                satuan: satuan,
                hargaSatuan: hargaSatuan,
                subTotal: subTotal,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};



const updateTransaksiPembelian = async (req, res) => {
    const { nomorFaktur } = req.params;
    const { body } = req;
    try {
        // Memperbarui atribut-atribut yang diperlukan dalam body
        const updatedData = {
            nomorFaktur: body.nomorFaktur,
            kodeBarang: body.kodeBarang,
            namaBarang: body.namaBarang,
            satuan: body.satuan,
            hargaSatuan: body.hargaSatuan,
            // Jika perlu, tambahkan logika untuk menghitung subTotal di sini
        };

        await UsersModel.updateTransaksiPembelian(updatedData, nomorFaktur);
        res.json({
            message: 'UPDATE Transaksi Pembelian success',
            data: {
                id: nomorFaktur,
                ...updatedData,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};


const deleteTransaksiPembelian = async (req, res) => {
    const { nomorFaktur } = req.params;
    try {
        await UsersModel.deleteTransaksiPembelian(nomorFaktur);
        res.json({
            message: 'DELETE Data Transaksi Pembelian success',
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};


module.exports = {
    getAllTransaksiPembelian,
    createNewTransaksiPembelian,
    detailTransaksiPembelian,
    updateTransaksiPembelian,
    deleteTransaksiPembelian,
}