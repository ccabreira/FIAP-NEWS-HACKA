const express = require("express");
const multer = require("multer");
const { getNews, createNews } = require("../controllers/newsController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", getNews);
router.post("/", upload.single("image"), createNews);

module.exports = router;


