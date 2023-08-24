const todoModel = require("../models/todoModel")

//AGE DATA MONGODB TE IMPORT KORTE HBE
const postTodo = async (req, res) => {
    try {
        const todos = await todoModel.insertMany(req.body);
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getTodo = async (req, res) => {
    const ITEMS_PER_PAGE = 10;
    const page = parseInt(req.query.page) || 1;

    try {
        const totalCount = await todoModel.countDocuments({});
        const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

        const todos = await todoModel
            .find({})
            .skip((page - 1) * ITEMS_PER_PAGE) //first page kichu jeno skip na hoe aijonno 0 korahoeche
            .limit(ITEMS_PER_PAGE);

        res.json({ todos, totalPages });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = { postTodo, getTodo };