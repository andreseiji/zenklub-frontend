import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.zenklub.com/professionals/:id', (req, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        id,
        name: 'Professional name',
      })
    );
  }),
];
