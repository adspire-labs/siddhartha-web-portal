import prisma from "../db/db.config.js";

export const deleteGalleryData = async (req, res) => {
  try {
    const { id } = req.body;
    const findData = await prisma.gallery.findUnique({
      where: {
        id: id,
      },
    });
    if (findData) {
      await prisma.gallery.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json({
        message: "gallery data deleted success.",
      });
    } else {
      res.status(400).json({
        message: "failed to delete data.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "error deleting gallery data",
    });
  }
};
