const axios = require('axios');
const {v4:uuidv4} = require('uuid')
const URL = 'https://www.breakingbadapi.com/api/';



let a = [
    { id: 1, name: 'harry', img: 'algo', cumple: '00/00' },
    { id: 2, name: 'juanma', img: 'algo2', cumple: '00/00' }
];


const getCharacters = async (req, res) => {
    const {name} = req.query;
    if(name) {
        const {data} = await axios.get(`${URL}characters?name=${name}`);
        const character = data.map(c => {
            return {
                d: c.char_id,
                name: c.name,
                imagen: c.img,
                cumple: c.birthday, 
            }
        })
        return res.json(character)
    }
    try {
        const {data} = await axios.get(`${URL}characters`);
        const allCharacters = data.map((c) => {
            return {
                id: c.char_id,
                name: c.name,
                imagen: c.img,
                cumple: c.birthday,
            }
        })
        res.json(allCharacters)
    } catch (error) {
        console.log(error)
    }
};

const getCharacterById = async (req, res) => {
    try {
        const {id}= req.params;
        const {data} = await axios.get(`${URL}characters/${id}`);
        res.json(data);
    } catch (error) {
        console.log(error)
    }
};

const getQuotes = async (req, res) => {
    try {
        const {data} = await axios.get(`${URL}quotes`);
        res.json(data);
    } catch (error) {
        console.log(error)
    }
};

const addCharacter = async (req, res) => {
    try {
        const {name, img, cumple} = req.body;
        const pj = {
            id: uuidv4(),
            name,
            img,
            cumple,
        }
        return res.json(pj);
    } catch (error) {
        console.log(error)
    }
};

const getEpisodes = async (req, res) => {
    try {
        const {data} = await axios.get(`${URL}episodes`);
        res.json(data);
    } catch (error) {
        console.log(error)
    }
};

const getEpisodesById = async (req, res) => {
    try {
        const {id} = req.params;
        const {data} = await axios.get(`${URL}episodes/${id}`);
        res.json(data);
    } catch (error) {
        console.log(error)
    }
};

const editCharacter = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, cumple, img} = req.body;
        let pj = a.find(p => p.id === id)
        pj = {
            id,
            name,
            cumple,
            img
        };
        res.json(pj);
    } catch (error) {
        console.log(error)
    }
}

const deleteCharacter = async (req, res) => {
    try {
        const {id} = req.params;
        a = a.filter((p) => p.id !== id);
        res.json(`se eliminó`)
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getCharacters,
    getCharacterById,
    getQuotes,
    addCharacter,
    getEpisodes,
    getEpisodesById,
    editCharacter,
    deleteCharacter,
}