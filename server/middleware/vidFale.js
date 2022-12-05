const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/vid');
  },
  filename(req, file, cb) {
    cb(null, `${new Date().toISOString()}-${file.originalname}`);
  },
});

// const types = ['image/png', 'image/jpeg', 'image/jpg'];

// const fileFilter = (req, file, cd) => {
//   if (types.includes(file.mimetype)) {
//     cd(null, true);
//   } else {
//     cd(null, false);
//   }
// };

module.exports = multer({ storage });
