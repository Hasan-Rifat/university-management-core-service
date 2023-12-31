import express from 'express';
import { AcademicDepartmentRoute } from '../modules/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoute } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.routes';
import { BuildingRoutes } from '../modules/building/building.routes';
import { FacultyRoutes } from '../modules/faculty/faculty.routes';
import { roomRoutes } from '../modules/room/room.routes';
import { StudentRoutes } from '../modules/student/student.routes';

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
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/buildings',
    route: BuildingRoutes,
  },
  {
    path: '/rooms',
    route: roomRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
