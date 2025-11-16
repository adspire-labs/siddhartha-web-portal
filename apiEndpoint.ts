export const apiEndpoint = {
  addGallery: "http://161.129.67.102:30085/api/gallery/add",
  fetchGallery: "http://161.129.67.102:30085/api/gallery",
  deleteGallery: (id: number) =>
    `http://161.129.67.102:30085/api/gallery/delete/${id}`,
  addNews: "http://161.129.67.102:30085/api/news/add",
  fetchNews: "http://161.129.67.102:30085/api/news",
  deleteNews: (id: number) =>
    `http://161.129.67.102:30085/api/news/delete/${id}`,
  addfaculty: "http://161.129.67.102:30085/api/faculty/add",
  fetchFaculty: "http://161.129.67.102:30085/api/faculty",
  deleteFaculty: (id: number) =>
    `http://161.129.67.102:30085/api/faculty/delete/${id}`,
};
