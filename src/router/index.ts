import { Router } from 'express';
import { UserModel } from 'src/models/UserModel';
import { PostModel, PostType } from 'src/models/PostModel';
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

router.get('/posts/:id', async (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(400).json({
      message: 'Bad Request',
    });
  }

  try {
    res.json({
      data: await PostModel.findById<PostType>(req.params.id),
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
});
