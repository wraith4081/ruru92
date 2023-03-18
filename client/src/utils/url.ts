import routes from "routes";

import { generatePath } from 'react-router-dom';

export default function url(path: string, params?: any) {
    let url: string = '', lastRoute: any;

    path.split('.').forEach(p => {
        if (!lastRoute) {
            lastRoute = routes.find(r => r.name === p);
            url = lastRoute.path;
        } else {
            lastRoute = lastRoute.children.find((r: any) => r.name === p);
            url += '/' + lastRoute.path;
        }
    });

    return generatePath(url.replace(/\/\//gi, '/'), params || {});
}