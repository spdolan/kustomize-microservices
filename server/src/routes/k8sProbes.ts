import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

const { OK } = StatusCodes;

/**
 * Field liveness probe.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getLiveness(req: Request, res: Response) {
    return res.status(OK).json({
      success: true
    });
}

/**
 * Field readiness probe.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getReadiness(req: Request, res: Response) {
    return res.status(OK).json({
      success: true
    });
}
