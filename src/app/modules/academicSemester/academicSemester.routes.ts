import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemster.validation';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromBD);
router.get('/:id', AcademicSemesterController.getDataById);
router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemesterController.insertIntoDB
);

export const AcademicSemesterRoute = router;
