import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const Context = createContext(undefined as any);

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(false);

    const [theme, setTheme] = useState<'light' | 'dark'>(localStorage.getItem('theme') as ('light' | 'dark') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', ['light', 'dark'].includes(theme) ? theme : 'light');
    }, [theme])

    const data = { user, setUser, theme, setTheme };

    return <Context.Provider value={data}>{children}</Context.Provider>;
};
export const useAuth = () => useContext(Context);