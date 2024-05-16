import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { appService } from '../services';
import prisma from '../client';
import { User } from '@prisma/client';

const getDashboard = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).send('Dashboard');
});

const activateCard = catchAsync(async (req, res) => {
  const code = req.body.code;
  const user = req.user as User;
  const result = await appService.activateCard(code, user.id);
  res.status(httpStatus.OK).send(result);
});

const getTapupCards = catchAsync(async (req, res) => {
  const paramUserId = req.params.id;
  const businessCards = await prisma.tapupCards.findMany({
    where: {
      userId: +paramUserId
    }
  });
  res.status(httpStatus.OK).send(businessCards);
});

export default {
  getDashboard,
  activateCard,
  getTapupCards
};
