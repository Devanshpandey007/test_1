const express= require('express');
const router = express.Router();
const auth = require("../middleware/authmiddleware");

const {
    addService,
    getService,
    updateService,
    deleteService
} =  require("../controllers/serviceController");

router.post('/:categoryId/service', auth, addService);
router.get("/:categoryId/services", auth, getService);
router.put('/:categoryId/service/:serviceId', auth, updateService);
router.delete('/:categoryId/service/:serviceId', auth, deleteService);


module.exports = router;