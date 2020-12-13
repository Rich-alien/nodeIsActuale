const { Router } = require('express');
const usersRepository = require('../repositories/users.repository');

const router = new Router();

router.get('/', async (_request, response) => {
    const users = await usersRepository.getAll();
    response.render('pages/users/view', { users });
});
router.get('/specName', async (_request, response) => {
    const specials = await usersRepository.getSpecName();
    response.render('pages/users/viewSpecName', { specials });
});
router.get('/showGroup', async (_request, response) => {
    const users = await usersRepository.getSpecName();
    response.render('pages/users/showGroup', { users });
});



module.exports = router;