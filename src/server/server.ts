
import * as path from 'path';

import * as Koa from 'koa';
import * as mount from 'koa-mount';
import * as serve from 'koa-static';
import * as body from 'koa-bodyparser';
import * as session from 'koa-session';

import { logger } from './logging';
import { config } from './config';
import { router } from './routes';

const staticPath = path.join(__dirname, '..', '..', 'dist', 'static');

const app = new Koa();

app.use(logger);
app.use(mount('/static', serve(staticPath)));
app.use(body()); // TODO Set options
app.use(session({ key: 'revcrm' }, app));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.port);

console.log(`Server running on port ${config.port}`);
