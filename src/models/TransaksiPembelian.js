const dbPool = require('../config/database');

const getAllTransaksiPembelian = () => {
    const SQLQuery = 'SELECT * FROM transaksiPembelian';

    return dbPool.execute(SQLQuery);
}

const createNewTransaksiPembelian = (body) => {
    const SQLQuery = `  
        INSERT INTO TransaksiPembelian (nomorFaktur, kodeBarang, namaBarang, satuan, hargaSatuan, subTotal) 
        VALUES ('${body.nomorFaktur}', '${body.kodeBarang}', '${body.namaBarang}', '${body.satuan}', '${body.hargaSatuan}', '${body.subTotal}')
    `;

    return dbPool.execute(SQLQuery);
}


const getTransaksiPembelianById = (idTransaksiPembelian) => {
    const SQLQuery = `SELECT nomorFaktur, kodeBarang, namaBarang, satuan, hargaSatuan FROM TransaksiPembelian WHERE id = ${idTransaksiPembelian}`;
    return dbPool.execute(SQLQuery, [idTransaksiPembelian]);
};


const updateTransaksiPembelian = (body, idTransaksiPembelian) => {
    const SQLQuery = `  
        UPDATE TransaksiPembelian
        SET nomorFaktur='${body.nomorFaktur}', kodeBarang='${body.kodeBarang}', namaBarang='${body.namaBarang}', satuan='${body.satuan}', hargaSatuan='${body.hargaSatuan}' 
        WHERE id=${idTransaksiPembelian}
    `;

    return dbPool.execute(SQLQuery);
}


const deleteTransaksiPembelian = (idTransaksiPembelian) => {
    const SQLQuery = `DELETE FROM TransaksiPembelian WHERE id=${idTransaksiPembelian}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllTransaksiPembelian,
    createNewTransaksiPembelian,
    getTransaksiPembelianById,
    updateTransaksiPembelian,
    deleteTransaksiPembelian,
}