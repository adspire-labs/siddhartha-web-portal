import prisma from "../db/db.config.js";

export const getAllNewsController = async (req, res) => {
  try {
    const newsData = await prisma.news.findMany({});
    res.status(200).json({
      newsData,
    });
  } catch (error) {
    res.status(500).json({
      message: "failed to fetch data",
    });
  }
};
