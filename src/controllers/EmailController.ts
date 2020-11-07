import { Request, Response } from 'express';

class EmailController {
  Post(req: Request, res: Response): Response {
    return res.send();
  }

  Get(req: Request, res: Response): Response {
    return res.send('All messages');
  }
}

export default new EmailController();
