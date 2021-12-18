const express = require("express"); 
const multer = require("multer");

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}
const postController = require("../app/controllers/PostController");
// var upload = multer({ dest: '../public/image/'})

const router = express.Router();

let image;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/public/image");
  },
  filename: function (req, file, cb) {
    console.log(req.file);
    image = Date.now() + "-" + file.fieldname;
    localStorage.setItem('image', image);
    cb(null, image + ".png");
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  console.log("Success", req.file);
      postController(req, res);
});
router.get("/", (req, res) => {
  res.render("post");
});

module.exports = router;
