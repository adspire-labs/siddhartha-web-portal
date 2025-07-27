import prisma from "../db/db.config.js";

export const deleteNewsData = async (req, res) => {
  try {
    const { id } = req.body;
    const findData = await prisma.news.findUnique({
      where: {
        id: id,
      },
    });
    if (findData) {
      await prisma.news.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json({
        message:"news deleted success."
      })
    }else{
        res.status(400).json({
            message:"failed to delete data."
        })
    }
  } catch (error) {
    res.status(500).json({
      message: "error deleting news",
    });
  }
};
