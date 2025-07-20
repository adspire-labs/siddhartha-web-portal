import Router from "express";
import { newsAddController } from "../controller/newsAddController.js";
import { getAllNewsController } from "../controller/getAllNewsController.js";
import upload from "../storage.js";
import addFaculty from "../controller/addFacultyData.js";
import { getAllFacultyData } from "../controller/getAllFacultyData.js";
import addGallery from "../controller/addGalleryData.js";
import { getAllGalleryData } from "../controller/getAllGalleryData.js";

const routes = Router();

routes.post("/api/news/add", newsAddController);
routes.get("/api/news", getAllNewsController);


routes.post("/api/faculty/add", upload.single("photo"), addFaculty);
routes.get('/api/faculty',getAllFacultyData)

routes.post('/api/gallery/add',upload.single('photo'),addGallery)
routes.get('/api/gallery',getAllGalleryData)

export default routes;
