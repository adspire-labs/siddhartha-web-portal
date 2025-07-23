import prisma from "../db/db.config.js";

export const getAllFacultyData = async (req, res) => {
  try {
    const facultyData = await prisma.faculty.findMany();
    res.status(200).json({
      message: "sucess fetching the faculty data",
      facultyData,
    });
  } catch (error) {
    res.status(500).json({
      message: "error fetching faculty members",
    });
  }
};
