// // lib/multer.js
// import multer from 'multer';
// import path from 'path';

// const storage = multer.memoryStorage(); // Store files in memory (as buffer)

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 10 * 1024 * 1024, // 10 MB file size limit
//   },
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /jpeg|jpg|png/;
//     const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
//     const mimeType = fileTypes.test(file.mimetype);

//     if (extname && mimeType) {
//       return cb(null, true); // File is accepted
//     }
//     return cb(new Error('Only images (JPEG, JPG, PNG) are allowed'), false);
//   },
// });

// export default upload;
