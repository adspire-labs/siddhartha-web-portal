export const apiEndpoint = {
  addGallery: "https://sebss.onrender.com/api/gallery/add",
  fetchGallery: "https://sebss.onrender.com/api/gallery",
  deleteGallery: (id: number) =>
    `https://sebss.onrender.com/api/gallery/delete/${id}`,
  addNews: "https://sebss.onrender.com/api/news/add",
  fetchNews: "https://sebss.onrender.com/api/news",
  deleteNews: (id: number) =>
    `https://sebss.onrender.com/api/news/delete/${id}`,
  addfaculty: "https://sebss.onrender.com/api/faculty/add",
  fetchFaculty: "https://sebss.onrender.com/api/faculty",
  deleteFaculty: (id: number) =>
    `https://sebss.onrender.com/api/faculty/delete/${id}`,
};
