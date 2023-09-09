import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { buildingFilterableFields } from './building.constants';
import { BuildingService } from './building.services';

const insertIntoBD = catchAsync(async (req, res) => {
  const { data } = req.body;
  const response = await BuildingService.insertIntoBD(data);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Building created successfully',
    data: response,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const filters = pick(req.query, buildingFilterableFields);
  const options = pick(req.query, ['sortBy', 'limit', 'page', 'sortOrder']);

  const response = await BuildingService.getAllFromDB(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building fetched successfully',
    meta: response.meta,
    data: response.data,
  });
});

const getByIdFromDB = catchAsync(async (req, res) => {
  const response = await BuildingService.getByIdFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building fetched successfully',
    data: response,
  });
});

const updateOneInDB = catchAsync(async (req, res) => {
  const response = await BuildingService.updateOneInDB(
    req.params.id,
    req.body.data
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building updated successfully',
    data: response,
  });
});

const deleteByIdFromDB = catchAsync(async (req, res) => {
  const response = await BuildingService.deleteByIdFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building deleted successfully',
    data: response,
  });
});

export const BuildingController = {
  insertIntoBD,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
