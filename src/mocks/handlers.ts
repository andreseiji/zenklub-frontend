import { rest } from 'msw';
import { BASE_API_URL } from 'src/config/api';

export const handlers = [
  rest.get(`${BASE_API_URL}/professionals/:id`, (req, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        id,
        name: 'Professional name',
      })
    );
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
