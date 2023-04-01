import React from 'react'

import { Link } from 'react-router-dom'

import { FaDiscord, FaGithub, FaGlobe } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className='w-screen px-6 py-4 bg-slate-200 flex lg:flex-row flex-col gap-y-6 text-slate-900 dark:bg-slate-700 dark:text-slate-200 justify-between'>
            <div>
                <p className='font-medium'>{t('maked_by') || 'This project is made by Wraith.'}</p>
                <p className='text-sm'>{t('for_more_info') || 'For more info, check the About page'}</p>

            </div>
            <div className='flex gap-x-4 text-slate-800 dark:text-slate-200'>
                <Link aria-label='Github Repo' to={'https://github.com/wraith4081/ruru92'}>
                <FaGithub size={24} />
                </Link>
                <Link aria-label={t('main_page') || 'Main Page'} to={'https://wraith.com.tr'}>
                    <FaGlobe size={24} />
                </Link>
                <Link aria-label={t('maker') || 'Maker'} to={'https://discord.com/users/523113284853825546'}>
                    <FaDiscord size={24} />
                </Link>
            </div>
        </footer>
    )
}

export default Footer