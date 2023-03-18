import React from 'react'

import { NavLink } from 'react-router-dom';
import url from 'utils/url';

import { HiOutlineMoon, HiOutlineQuestionMarkCircle, HiOutlineSun } from 'react-icons/hi2'
import { useAuth } from 'context/AuthContext';

import classnames from 'classnames';

function Header() {
    const { theme, setTheme } = useAuth();

    return (
        <div className='fixed top-0 left-0 w-screen h-16 bg-slate-50 dark:border-slate-600 dark:bg-slate-700 border-b shadow-sm flex items-center justify-between lg:px-6 pr-6 pl-2 py-2 z-[999]'>
            <div>
                <NavLink to={url('home')} className='lg:block hidden font-maven text-2xl font-black leading-tight text-indigo-500 dark:text-white'>Ruru92</NavLink>
                <NavLink to={url('home')} className='block lg:hidden '><img className='w-16' src={theme == 'light' ? './logo512.png' : './logo-white.png'} alt="" /></NavLink>
            </div>
            <div className='flex gap-x-6 items-center'>
                <NavLink to={url('home.about')} className="flex text-slate-700 gap-x-1 items-center justify-center dark:text-slate-300">
                    <HiOutlineQuestionMarkCircle className='text-2xl' />
                    <p>About</p>
                </NavLink>
                <button onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light')
                }} className='relative w-10 h-10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors rounded-lg'>
                    <div className={classnames('absolute transition-opacity inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', {
                        'opacity-0 pointer-events-none': theme !== 'light',
                    })}>
                        <HiOutlineMoon size={20} className="dark:text-slate-100 text-slate-900" />
                    </div>
                    <div className={classnames('absolute transition-opacity inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', {
                        'opacity-0 pointer-events-none': theme !== 'dark',
                    })}>
                        <HiOutlineSun size={20} className="dark:text-slate-100 text-slate-900" />

                    </div>
                </button>
            </div>
        </div>
    )
}

export default Header