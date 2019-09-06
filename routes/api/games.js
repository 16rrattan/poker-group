const express = require('express');
const router = express.Router();

// Game Model
const Game = require('../../models/Game');

//@route GET api/games
//@desc Get all games
//@access Public
router.get('/', (req, res) => {
    Game.find()
        .sort({ date: -1 })
        .then(games => res.json(games));
});

//@route POST api/games
//@desc Create a post
//@access Public
router.post('/', (req, res) => {
    const newGame = new Game({
        name: req.body.name,
        gametype: req.body.gametype,
        buyin: req.body.buyin,
        cashout: req.body.cashout,
        placeleft: req.body.placeleft
    });

    newGame.save().then(game => res.json(game));
});

//@route DELETE api/games
//@desc Delete a game
//@access Public
router.delete('/:id', (req, res) => {
    Game.findById(req.params.id)
        .then(game => game.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;