import React from 'react'

import { Link } from 'react-router-dom'
import url from 'utils/url'

import { FaDiscord, FaGithub, FaGlobe } from 'react-icons/fa'

function Footer() {

    return (
        <footer className='w-screen px-6 py-4 bg-slate-200 flex lg:flex-row flex-col gap-y-6 text-slate-900 dark:bg-slate-700 dark:text-slate-200 justify-between'>
            <div>
                <p className='font-medium'>Bu proje <Link to={'https://discord.com/users/523113284853825546'} className="link">Wraith#0001</Link> tarafından yapılmıştır.</p>
                <p className='text-sm'>Detaylı bilgi için <Link className='link' to={url('home.about')}>Hakkında</Link> sayfasına bakınız</p>

            </div>
            <div className='flex gap-x-4 text-slate-800 dark:text-slate-200'>
                <Link aria-label='Github Repo' to={'https://github.com/wraith4081/ruru92'}>
                <FaGithub size={24} />
                </Link>
                <Link aria-label='Main Page' to={'https://wraith.com.tr'}>
                    <FaGlobe size={24} />
                </Link>
                <Link aria-label="Maker's Discord" to={'https://discord.com/users/523113284853825546'}>
                    <FaDiscord size={24} />
                </Link>
            </div>
        </footer>
    )
}

export default Footer