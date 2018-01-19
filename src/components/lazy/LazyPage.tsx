import * as React from 'react';

console.log('LazyPage module has loaded');

export default class LazyPage extends React.Component {

    render() {
        return (
            <div>This page component is lazy-loaded</div>
        );
    }
}
