const express = require('express');
const router = express.Router();

// Profile Model
const Profile = require('../../models/Profile');

//@route GET api/profiles
//@desc Get all profiles
//@access Public
router.get('/', (req, res) => {
    Profile.find()
        .sort({ rank: -1 })
        .then(profiles => res.json(profiles));
});

router.get('/:id', (req, res) => {
    Profile.findById(req.params.id)
        .then(profile => res.json(profile))
        .catch(err => res.status(404).json(err));
});

router.put('/:id', (req, res) => {
    Profile.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(profile => res.json(profile))
        .catch(err => res.status(422).json(err));
});

module.exports = router;