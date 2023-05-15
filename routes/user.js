const { Router} = require('express');
const { 
    get,
    put,
    post,
    deleteUser } = require('../controllers/users.controller')

const router = Router();


router.get('/', get);

router.put('/:id', put);

router.post('/', post);

router.delete('/', deleteUser);


module.exports = router;