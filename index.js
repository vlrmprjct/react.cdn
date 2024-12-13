import { App } from './app';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Could not find root element!');
}

const rootElement = React.createElement(App);
ReactDOM.createRoot(root).render(rootElement);
