import prisma from "../db/db.config.js";

export const deleteFacultyData = async (req, res) => {
  try {
    const { id } = req.body;
    const findData = await prisma.faculty.findUnique({
      where: {
        id: id,
      },
    });
    if (findData) {
      await prisma.faculty.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json({
        message:"faculty member deleted success."
      })
    }else{
        res.status(400).json({
            message:"failed to delete data."
        })
    }
  } catch (error) {
    res.status(500).json({
      message: "error deleting faculty members",
    });
  }
};
