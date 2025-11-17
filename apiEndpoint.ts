export const apiEndpoint = {
  addGallery: "https://api.sebs.edu.np/api/gallery/add",
  fetchGallery: "https://api.sebs.edu.np/api/gallery",
  deleteGallery: (id: number) =>
    `https://api.sebs.edu.np/api/gallery/delete/${id}`,
  addNews: "https://api.sebs.edu.np/api/news/add",
  fetchNews: "https://api.sebs.edu.np/api/news",
  deleteNews: (id: number) =>
    `https://api.sebs.edu.np/api/news/delete/${id}`,
  addfaculty: "https://api.sebs.edu.np/api/faculty/add",
  fetchFaculty: "https://api.sebs.edu.np/api/faculty",
  deleteFaculty: (id: number) =>
    `https://api.sebs.edu.np/api/faculty/delete/${id}`,
};
