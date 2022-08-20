const { Thought, User } = require('../models');

const thoughtController = {
    getAllThoughts: (req, res) =>{
        Thought.find()
          .select('-__v')
          .then(thoughtData => res.json(thoughtData))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
    },
    getSingleThought: (req, res) => {
        const thoughtId = req.params.id;

        Thought.findOne({ _id: thoughtId })
          .then(thoughtData => res.json(thoughtData))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });

    }
}

module.exports = thoughtController;