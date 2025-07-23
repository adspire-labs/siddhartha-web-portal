// utils/storage.js
import multer from 'multer'

const storage = multer.memoryStorage(); // ✅ No disk write
const upload = multer({ storage });

export default upload;