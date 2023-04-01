import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

import toast from 'react-hot-toast'

const Context = createContext(undefined as any);

export const PageContextProvider = ({ children }: any) => {

    const [theme, setTheme] = useState<'light' | 'dark'>(localStorage.getItem('theme') as ('light' | 'dark') || 'light');
    const [isJoyrided, setIsJoyrided] = useState(localStorage.getItem('isJoyrided') === 'true' || false);

    useEffect(() => {
        const currentVersion = '1.3';
        const cachedVersion = localStorage.getItem('localVersion');

        if (cachedVersion !== currentVersion) {
            localStorage.setItem('localVersion', currentVersion);
            toast.success(`Site başarıyla ${currentVersion} sürümüne güncellendi!`);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', ['light', 'dark'].includes(theme) ? theme : 'light');
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('isJoyrided', isJoyrided ? 'true' : 'false');
    }, [isJoyrided]);

    const data = { theme, setTheme, isJoyrided, setIsJoyrided };

    return <Context.Provider value={data}>{children}</Context.Provider>;
};
export const usePageContext = () => useContext(Context) as {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
    isJoyrided: boolean;
    setIsJoyrided: (isJoyrided: boolean) => void;
};