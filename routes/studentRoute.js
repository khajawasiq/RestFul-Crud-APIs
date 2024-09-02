import {Router} from 'express';
import { getStudents,create, update, deleteStudent } from '../Controllers/studentController.js';

const studentRoute=Router();

studentRoute.get('/getAllStudents', getStudents);
studentRoute.put('/update/:id', update);
studentRoute.delete('/delete/:id', deleteStudent);
studentRoute.post('/create', create);

export default studentRoute;