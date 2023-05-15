const { response } = require('express')

const get = (req, res = response) => {
    const {id, nombre} = req.query
    res.status(200).json({
        message: 'get from controller',
        idnombre
    });
};

const put = (req, res = response) => {
    const id = req.params.id;
    res.json({
        message: `put from controller - update del id ${id}`
    });
}

const post = (req, res = response) => {   
    console.log(req.body);
    const body = req.body;
    res.json({
        message: `post from controller, nombre recibidos en el body = ${body.nombre}`
    });
}

const deleteUser = (req, res = response) => {
    res.json({
        message: 'delete from controller'
    });
}


module.exports = {
    get,
    put,
    post,
    deleteUser
};