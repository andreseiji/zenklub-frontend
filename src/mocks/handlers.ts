import {
  addDays,
  addHours,
  addMinutes,
  differenceInDays,
  setHours,
  setMinutes,
} from 'date-fns';
import { rest } from 'msw';
import { Schedule } from 'src/app/models/schedule';
import { BASE_API_URL } from 'src/config/api';

import * as details1 from './professionals/details-1.json';
import * as details2 from './professionals/details-2.json';
import * as details3 from './professionals/details-3.json';

export const handlers = [
  rest.get(`${BASE_API_URL}/professionals`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json([details1, details2, details3]));
  }),

  rest.get(`${BASE_API_URL}/professionals/:id`, (req, res, ctx) => {
    const { id } = req.params;

    if (id === '1') {
      return res(ctx.status(200), ctx.json(details1));
    }
    if (id === '2') {
      return res(ctx.status(200), ctx.json(details2));
    }
    if (id === '3') {
      return res(ctx.status(200), ctx.delay(10000), ctx.json(details3));
    }

    return res(ctx.status(404));
  }),

  rest.get(`${BASE_API_URL}/professionals/:id/schedule`, (req, res, ctx) => {
    const startDate = req.url.searchParams.get('startDate');
    const endDate = req.url.searchParams.get('endDate');

    if (startDate && endDate) {
      const slots: Schedule = [];

      const startDateTime = setHours(setMinutes(new Date(startDate), 0), 0);
      const endDateTime = setHours(setMinutes(new Date(endDate), 0), 0);

      const daysDiff = differenceInDays(endDateTime, startDateTime);

      const timeSlots = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

      /* This should simulate some available slots, but will change every time the API is called
        In production, it should be implemented by consuming a real API connected to a database */
      Array.from(Array(daysDiff).keys()).forEach((day) => {
        const dateTime = addDays(startDateTime, day);
        timeSlots.forEach((hours) => {
          if (Math.random() < 0.5) {
            const slot = addHours(dateTime, hours);
            slots.push({
              startTime: slot.toISOString(),
              endTime: addHours(slot, 1).toISOString(),
            });

            if (Math.random() < 0.5) {
              const newSlot = addMinutes(slot, 30);
              slots.push({
                startTime: newSlot.toISOString(),
                endTime: addHours(newSlot, 1).toISOString(),
              });
            }
          }
        });
      });

      return res(ctx.status(200), ctx.json(slots));
    }

    return res(ctx.status(404));
  }),
];
