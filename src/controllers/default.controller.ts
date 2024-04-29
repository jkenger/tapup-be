import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';

const getDefault = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).send('Welcome to TapUp BE API!');
});

const getActivatedDefault = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).send('Activated User');
});

export default {
  getDefault,
  getActivatedDefault
};
