const { Router } = require("express");
const router = Router();

const {
    getCharacters,
    getCharacterById,
    getQuotes,
    addCharacter,
    getEpisodes,
    getEpisodesById,
    editCharacter,
    deleteCharacter
} = require ('../contrllers')

// Aqui crearemos nuestras rutas
router.get('/characters', getCharacters);
router.get('/characters/:id', getCharacterById);
router.get('/quotes', getQuotes);
router.post('/characters', addCharacter);
router.get('/episodes', getEpisodes);
router.get('/episodes/:id', getEpisodesById);
router.put('/characters/:id', editCharacter);
router.delete('/characters/:id', deleteCharacter);

module.exports = router;
