const express= require('express');
const router = express.Router();
const auth = require("../middleware/authmiddleware");

const {
    addCategory,
    getCategory,
    updateCategory,
    deleteCategory
} = require("../controllers/categoryController");

router.post("/", auth, addCategory);
router.get("/", auth, getCategory);
router.put("/:id", auth, updateCategory);
router.delete("/:id", auth, deleteCategory);

module.exports = router;