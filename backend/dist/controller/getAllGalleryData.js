import prisma from "../db/db.config.js";

export const getAllGalleryData = async (req, res) => {
  try {
    const galleryData = await prisma.gallery.findMany();
    res.status(200).json({
      message: "sucess fetching the gallery data",
      galleryData,
    });
  } catch (error) {
    res.status(500).json({
      message: "error fetching gallery data",
    });
  }
};
