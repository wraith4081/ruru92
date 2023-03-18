import Footer from 'components/general/Footer'
import Header from 'components/general/Header'
import React from 'react'

import { Outlet } from 'react-router-dom'

function HomeLayout() {
    return (
        <div className='dark:bg-slate-800'>
            <Header />
            <main className='mt-20 overflow-hidden hide-scrollbar relative flex flex-col gap-y-8'>
                <div className='w-full min-h-[75vh]'>
                    <Outlet />
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default HomeLayout