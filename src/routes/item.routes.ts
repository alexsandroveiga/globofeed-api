import { Router } from 'express';

import Item from '../models/Item';

const itemRouter = Router();

itemRouter.post('/', async (req, res) => {
  // const { title, image_url, synopsis, excerpt, age_restriction } = req.body;

  const item = await Item.create(req.body);

  return res.json(item);
});

itemRouter.get('/', async (req, res) => {
  const item = await Item.find({}, null, { sort: { createdAt: -1 } });

  return res.json(item);
});

export default itemRouter;
