export const apiEndpoint = {
  addGallery: "http://api.sebs.edu.np/api/gallery/add",
  fetchGallery: "http://api.sebs.edu.np/api/gallery",
  deleteGallery: (id: number) =>
    `http://api.sebs.edu.np/api/gallery/delete/${id}`,
  addNews: "http://api.sebs.edu.np/api/news/add",
  fetchNews: "http://api.sebs.edu.np/api/news",
  deleteNews: (id: number) =>
    `http://api.sebs.edu.np/api/news/delete/${id}`,
  addfaculty: "http://api.sebs.edu.np/api/faculty/add",
  fetchFaculty: "http://api.sebs.edu.np/api/faculty",
  deleteFaculty: (id: number) =>
    `http://api.sebs.edu.np/api/faculty/delete/${id}`,
};
