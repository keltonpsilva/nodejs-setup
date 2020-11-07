import { Request, Response } from 'express';

class HomeController {
  Index(req: Request, res: Response): Response {
    return res.send('Home Controller');
  }
}

export default new HomeController();
