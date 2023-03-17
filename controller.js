const router = require('express').Router();
const log4js = require('log4js');
const AJV = require('ajv');
const _ = require('lodash');

const jsonSchema = require('./schema.json');
const util = require('./utils')

const logger = log4js.getLogger('controller');
const validate = (new AJV()).compile(jsonSchema);

var dummyData =
    [
        {
            "id": "User001",
            "firstName": "Rutvik",
            "lastName": "Shah",
            "email": 123
        }
    ]

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

router.get('/', function (req, res) {
    async function execute() {
        res.status(200).json({
            message : "User Retrival",
            success : true,
            user : {dummyData}
        });
    }
    execute().catch(err => {
        logger.error(err);
        res.status(500).json({ message: err.message });
    });
});

router.get('/:id', function (req, res) {
    async function execute() {
        if (!req.params.id) {
            return res.status(400).json({
                message: 'Invalid ID'
            });
        }
        filterData = _.filter(dummyData, User => {
            return User.id === req.params.id
        })
        if (!filterData) {
            res.status(404).json({
                message: 'Document Not Found'
            });
        } else {
            res.status(200).json({success : true,
                user : {filterData}
            });
        }
    }
    execute().catch(err => {
        logger.error(err);
        res.status(500).json({ message: err.message });
    });
});

router.post('/', function (req, res) {
    async function execute() {
        const payload = req.body;
        if (!validate(payload)) {
            return res.status(400).json(validate.errors);
        }
        payload.id = util.generateId()
        dummyData.push(payload)
        res.status(200).json({
            message : "User added",
            success : true
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
        filterData = _.filter(dummyData, User => {
            return User.id === req.params.id
        })
        console.log(filterData)
        if (!filterData) {
            res.status(404).json({ message: 'Document Not Found' });
        } else {
            const payload = { ...filterData[0], ...req.body }
            console.log(payload)
            if (_.isEqual(payload, filterData)) {
                return res.status(200).json(payload);
            }
            if (!validate(payload)) {
                return res.status(400).json(validate.errors);
            }
            updateItem(req.params.id, payload);
            console.log(dummyData)
            // res.status(200).json(dummyData[req.params.id]);
            res.status(200).json({
                message: "success",
                success: true
            });
        }
    }
    execute().catch(err => {
        logger.error(err);
        res.status(500).json({ message: err.message });
    });
});

router.delete('/:id', function (req, res) {
    async function execute() {
        if (!req.params.id) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        filterData = _.filter(dummyData, User => {
            return User.id === req.params.id
        })
        if (!filterData) {
            res.status(404).json({ message: 'Document Not Found' });
        } else {
            const deleteData = dummyData.splice(filterData, 1);;
            res.status(200).json({ message: 'Document Removed' });
        }
    }
    execute().catch(err => {
        logger.error(err);
        res.status(500).json({ message: err.message });
    });
});

module.exports = router;