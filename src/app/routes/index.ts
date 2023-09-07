import express from 'express';
import { AcademicFacultyRoute } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.routes';
import { AcademicDepartmentRoute } from '../modules/academicDepartment/academicDepartment.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoute,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoute,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
