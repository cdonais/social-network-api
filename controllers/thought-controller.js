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

    },
    addThought: ({ body }, res) => {
      Thought.create(body)
        .then((thoughtData) => {
          return User.findOneAndUpdate(
            { _id: body.userId },
            { $push: { thoughts: thoughtData._id }},
            { new: true }
          );
        })
    },
    deleteThought: (req, res) => {
      Thought.findOneAndDelete({ _id: req.params.id })
        .then(thought => {
          if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
          }
  
          // TODO: Remove the user's `thoughts` records
  
          return res.sendStatus(204);
        });
    },
  };



module.exports = thoughtController;