import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';

const getDashboard = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).send('Dashboard');
});

const getActivatedDefault = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).send('Activated User');
});

export default {
  getDashboard,
  getActivatedDefault
};
