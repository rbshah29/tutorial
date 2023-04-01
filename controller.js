const router = require('express').Router();
const log4js = require('log4js');
const AJV = require('ajv');
const _ = require('lodash');

const jsonSchema = require('./schema.json');
const util = require('./utils')

const { userModel } = require("./model")
const logger = log4js.getLogger('controller');
const validate = (new AJV()).compile(jsonSchema);

function updateItem(id, updatedItem) {
    if (id) {
        dummyData.map((data, index) => {
            if (data.id === id)
                dummyData[index] = updatedItem;
        })
        return true;
    }
    return false;
}

router.get("/", async (req,res)=>{
    try {
        
        const data = await userModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.log("Error occured", error);
    }
})

router.get('/:id', async (req, res)=> {
    try {
        const data = await userModel.findById(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        console.log("Error occured", error);
    }
});

router.post('/', function (req, res) {
    async function execute() {
        const payload = req.body;
        if (!validate(payload)) {
            return res.status(400).json(validate.errors);
        }
        let resp = await userModel.create(payload)
        console.log(resp)
        res.status(200).json({
            message: "User added",
            success: true
        }
        );
    }
    execute().catch(err => {
        logger.error(err);
        res.status(500).json({ message: err.message });
    });
});

router.put('/:id', function (req, res) {
    async function execute() {
        if (!req.params.id) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        let resp = await userModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        if (resp) {
            res.json(resp);
        } else {
            res.status(404).send('Document not found');
        }

    }execute()

});

router.delete('/:id', function (req, res) {
    async function execute() {
        if (!req.params.id) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        let resp = await userModel.findByIdAndDelete(req.params.id);
        if (resp) {
            res.json(resp);
        } else {
            res.status(404).send('Document not found');
        }
    }
    execute().catch(err => {
        logger.error(err);
        res.status(500).json({ message: err.message });
    });
});

module.exports = router;