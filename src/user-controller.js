const User = require('./user-model');

const getUser = async (req, res) => {
    const id = req.params.id;
    let users;
    if (id) {
        users = await User.findById(id)

    } else {
        users = await User.find()
    }
    res.send(users);
}

const createUser = async (req, res) => {

    const user = await User.create(req.body);
    res.send(user);
}

module.exports = {
    getUser,
    createUser,
}
