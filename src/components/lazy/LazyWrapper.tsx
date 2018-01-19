import * as React from 'react';

interface ILazyWrapperState {
    loaded: boolean;
}

export class LazyWrapper extends React.Component<any, ILazyWrapperState> {
    component: any;

    constructor(props: any) {
        super(props);
        this.state = {
            loaded: false
        };
        this.loadComponent();
    }

    async loadComponent() {
        this.component = await import('./LazyPage');
        this.setState({ loaded: true });
    }

    render() {
        return this.component ? <this.component.default /> : <div>Loading...</div>;
    }
}
