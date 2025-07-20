import { Stream } from "stream";
import cloudinary from "../cloudinary.js";
import prisma from "../db/db.config.js";

const addFaculty = async (req, res) => {
  try {
    const {
      name,
      position,
      qualification,
      experience,
      specializations, // <-- plural to match frontend
      email,
      phone,
      department,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    const bufferStream = new Stream.PassThrough();
    bufferStream.end(req.file.buffer);

    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "faculty" },
      async (error, result) => {
        if (error) {
          return res.status(500).json({
            error: "Cloudinary upload failed",
            detail: error,
          });
        }

        if (!result?.secure_url) {
          return res.status(500).json({ error: "Upload failed" });
        }

        try {
          const facultyData = await prisma.faculty.create({
            data: {
              name,
              email,
              phone,
              department,
              experience,
              position,
              qualification,
              specializations,
              photo: result.secure_url,
            },
          });

          res.status(201).json({
            success: true,
            message: "Faculty added successfully",
            facultyData,
          });
        } catch (dbError) {
          res.status(500).json({
            error: "Database error",
            detail: dbError.message,
          });
        }
      }
    );

    bufferStream.pipe(uploadStream);
  } catch (err) {
    console.error("Faculty upload error:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export default addFaculty;
