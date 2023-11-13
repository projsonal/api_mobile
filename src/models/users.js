const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM member';

    return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO member (nama, email, password) 
                        VALUES ('${body.nama}', '${body.email}', '${body.password}')`;

    return dbPool.execute(SQLQuery);
}

// const updateUser = (body, idUser) => {
//     const SQLQuery = `  UPDATE member 
//                         SET name='${body.nama}', email='${body.email}', password='${body.password}' 
//                         WHERE id=${idUser}`;

//     return dbPool.execute(SQLQuery);
// }

const deleteUser = (idMember) => {
    const SQLQuery = `DELETE FROM member WHERE id=${idMember}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUser,
  
    deleteUser,
}