import { Request, RequestHandler, Response } from 'express';

import sendResponse from '../../../shared/sendResponse';
import { AnalyticsService } from './analytics.service';
import catchAsync from '../../../shared/catchasync';


const getUsersAnalytics: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AnalyticsService.getUsersAnalytics();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Retrieved user analytics',
      data: result,
    });
  },
);

const getCourseAnalytics: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AnalyticsService.getCourseAnalytics();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Retrieved Service analytics',
      data: result,
    });
  },
);

const getOrdersAnalytics: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AnalyticsService.getOrdersAnalytics();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Retrieved Bookings analytics',
      data: result,
    });
  },
);

export const AnalyticsController = {
  getUsersAnalytics,
  getCourseAnalytics,
  getOrdersAnalytics,
};
