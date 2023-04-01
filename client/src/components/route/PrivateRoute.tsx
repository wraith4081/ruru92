/*
import { usePageContext } from "context/PageContext";

import { Navigate } from "react-router-dom";
import url from "utils/url";
*/

export default function PrivateRoute({ children }: any) {
    /* 
    const { user } = usePageContext();

    if (!user) {
        return <Navigate to={url('home')} />
    }
    */
    return children;
}