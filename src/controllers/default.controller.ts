import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';

const getDefault = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).send('Welcome to TapUp BE API!');
});

export default {
  getDefault
};
