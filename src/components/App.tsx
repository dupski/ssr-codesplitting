import * as React from 'react';

import { Route } from 'react-router-dom';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { LazyWrapper } from './lazy/LazyWrapper';

export class App extends React.Component {

    render() {
        return (
            <div>
                My App
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/lazy" component={LazyWrapper} />
            </div>
        );
    }
}
