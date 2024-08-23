import { rest } from 'msw';

const publicKey = 'caa605ac9607a904ac4277866f4bbb23';
const timeStamp = '1723536781813';
const hashKey = 'ab47f2dac9b62b45e88ef8605f5d3adb';
const limit = 8;
const offset = 0;

export const handlers = [
  rest.get(`https://gateway.marvel.com:443/v1/public/comics`, (req, res, ctx) => {
    const { limit: queryLimit, offset: queryOffset } = req.url.searchParams;

    // Ensure the request matches the expected limit and offset
    if (queryLimit === `${limit}` && queryOffset === `${offset}`) {
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            results: [
              {
                id: 1,
                title: 'Marvel Previews (2017)',
                thumbnail: {
                  path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada',
                  extension: 'jpg'
                }
              }
            ]
          }
        })
      );
    } else {
      return res(ctx.status(400));
    }
  })
];
