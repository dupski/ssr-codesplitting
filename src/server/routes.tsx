import * as Router from 'koa-router';

import * as React from 'react';
import { StaticRouter } from 'react-router-dom';
import { BasePage } from './BasePage';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { App } from '../components/App';

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

    const routerContext = {};
    const appBody = renderToString(
        <StaticRouter location={ctx.url} context={routerContext}>
            <App />
        </StaticRouter>
    );

    ctx.body = renderToStaticMarkup(
        <BasePage title="RevCRM" scripts={clientScripts} css={clientCss} content={appBody} />
    );
});

export { router };
