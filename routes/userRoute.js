import { Router } from 'express';
import { fetch,create,update, deleteUser } from "../Controllers/userController.js";

const route=Router();
route.post('/create', create);
route.put('/update/:id', update);
route.delete('/delete/:id', deleteUser);
route.get("/getAllUsers",fetch);
export default route;  