import * as Router from 'koa-router';

import * as React from 'react';
import { BasePage } from './BasePage';
import { renderToStaticMarkup } from 'react-dom/server';

const router = new Router();

router.get('/static/*', async (ctx) => {
    ctx.status = 404;
});

const clientScripts = [
    '/static/clientlibs.js',
    '/static/client.js'
];

const clientCss: string[] = [];

router.get('/*', async (ctx) => {
    const appBody = 
    ctx.body = renderToStaticMarkup(
        <BasePage title="RevCRM" scripts={clientScripts} css={clientCss} />
    );
});

export { router };
