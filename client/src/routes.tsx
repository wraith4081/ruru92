import About from "pages/About";
import PrivateRoute from "./components/route/PrivateRoute";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";

const routes = [
    {
        path: '/',
        name: 'home',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                name: 'index',
                element: <Home />
            },
            {
                path: 'about',
                name: 'about',
                element: <About />
            }
        ]
    }
];

const AuthMap = (routes: any[]) => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if (route?.children) {
        route.children = AuthMap(route.children);
    }

    return route;
});

export default AuthMap(routes);