import { Router } from 'express';
import { UserModel } from 'src/models/UserModel';
import type { Request, Response } from 'express';

export const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.status(200).send('ok');
});

router.get('/users', async (req: Request, res: Response) => {
  try {
    res.json({
      data: await UserModel.all(),
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});

router.get('/posts/:id', (req: Request, res: Response) => {
  res.status(200).send(`post: ${req.params.id}`);
});
