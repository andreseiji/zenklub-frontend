import { rest } from 'msw';
import { BASE_API_URL } from 'src/config/api';

import * as details1 from './professionals/details-1.json';
import * as details2 from './professionals/details-2.json';

import * as schedule1 from './professionals/schedule-1.json';
import * as schedule2 from './professionals/schedule-2.json';

export const handlers = [
  rest.get(`${BASE_API_URL}/professionals`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json([details1, details2]));
  }),

  rest.get(`${BASE_API_URL}/professionals/:id`, (req, res, ctx) => {
    const { id } = req.params;

    if (id === '1') return res(ctx.status(200), ctx.json(details1));
    if (id === '2') return res(ctx.status(200), ctx.json(details2));

    return res(ctx.status(404));
  }),

  rest.get(`${BASE_API_URL}/professionals/:id/schedule`, (req, res, ctx) => {
    const { id } = req.params;

    if (id === '1') return res(ctx.status(200), ctx.json(schedule1));
    if (id === '2') return res(ctx.status(200), ctx.json(schedule2));

    return res(ctx.status(404));
  }),
];
