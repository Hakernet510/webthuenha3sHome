const express = require("express"); 
const multer = require("multer");

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}
const postController = require("../app/controllers/PostController");
// var upload = multer({ dest: '../public/image/'})

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../image");
  },
  filename: function (req, file, cb) {
    console.log(req.file);

    cb(null, Date.now() + "-" + file.fieldname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image1"), (req, res) => {
      console.log(req.body, req.file, 25);
      postController(req, res);
});
router.get("/", (req, res) => {
  res.render("post");
});

module.exports = router;
