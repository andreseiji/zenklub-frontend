import { rest } from 'msw';
import { BASE_API_URL } from 'src/config/api';

import * as details1 from './professionals/details-1.json';
import * as details2 from './professionals/details-2.json';

export const handlers = [
  rest.get(`${BASE_API_URL}/professionals/:id`, (req, res, ctx) => {
    const { id } = req.params;

    if (id === '1') {
      return res(ctx.status(200), ctx.json(details1));
    }

    if (id === '2') {
      return res(ctx.status(200), ctx.json(details2));
    }

    return res(ctx.status(400));
  }),

  rest.get(`${BASE_API_URL}/professionals/:id/schedule`, (req, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        id,
        name: 'Professional schedule',
      })
    );
  }),
];
