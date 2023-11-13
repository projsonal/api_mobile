const dbPool = require('../config/database');

const getAllUProduks = () => {
    const SQLQuery = 'SELECT * FROM produk';

    return dbPool.execute(SQLQuery);
}

const createNewProduks = (body) => {
    const SQLQuery = `  INSERT INTO produk (kode_produk, nama_produk, harga) 
                        VALUES ('${body.kode_produk}', '${body.nama_produk}','${body.harga}')` ;

    return dbPool.execute(SQLQuery);
}

const updateProduks = (body, idProduk) => {
    const SQLQuery = `  UPDATE produk
                        SET name='${body.kode_produk}', email='${body.nama_produk}', harga='${body.harga}' 
                        WHERE id=${idProduk}`;

    return dbPool.execute(SQLQuery);
}

const deleteProduks = (idProduk) => {
    const SQLQuery = `DELETE FROM produk WHERE id=${idProduk}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUProduks,
    createNewProduks,
    updateProduks,
    deleteProduks,
}