import { Router } from 'express';

import Item from '../models/Item';

const categoryRouter = Router();

categoryRouter.get('/:title', async (req, res) => {
  const { title } = req.params;

  const item = await Item.find({ type: title }, null, {
    sort: { createdAt: -1 },
  });

  return res.json(item);
});

export default categoryRouter;
