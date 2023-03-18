import { useAuth } from "context/AuthContext";

import { Navigate } from "react-router-dom";
import url from "utils/url";

export default function PrivateRoute({ children }: any) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to={url('home')} />
    }

    return children;
}