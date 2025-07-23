import prisma from "../db/db.config.js";

export const newsAddController = async (req, res) => {
  const { title, excerpt, category, type, featured } = req.body;
  try {
    const addNews = await prisma.news.create({
      data: {
        title,
        excerpt,
        category,
        type,
        featured,
      },
    });

    res.status(200).json({
      message: "News created !",
      data: {
        addNews,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while adding news",
    });
  }
};
