import { useRef, useEffect } from 'react';

import classnames from 'classnames';

import { HiMinus, HiPlus, HiOutlineWrenchScrewdriver, HiOutlineArrowPathRoundedSquare, HiXMark } from 'react-icons/hi2'
import { destroyModal } from 'utils/modal';
import { useTranslation } from 'react-i18next';

const data = [
    {
        version: '1.3',
        date: new Date(1680307200000),
        changes: [
            {
                type: 'added',
                detail: {
                    tr: 'Changelog eklendi',
                    en: 'Changelog added'
                }
            },
            {
                type: 'added',
                detail: {
                    tr: 'Çevrimdışı mod eklendi',
                    en: 'Offline mode added'
                }
            },
            {
                type: 'fixed',
                detail: {
                    tr: 'Changelogdaki responsive sorunu düzeltildi',
                    en: 'Fixed responsive problem in Changelog'
                }
            },
            {
                type: 'fixed',
                detail: {
                    tr: 'Web standartlarına uymayan birkaç yer düzeltildi',
                    en: 'Fixed a few places that do not comply with web standards'
                }
            },
            {
                type: 'fixed',
                detail: {
                    tr: 'Web standartlarına uymayan birkaç yer düzeltildi',
                    en: 'Fixed a few places that do not comply with web standards'
                }
            }
        ]
    },
    {
        version: '1.2',
        date: new Date(1680134400000),
        changes: [
            {
                type: 'added',
                detail: {
                    tr: 'Changelog eklendi',
                    en: 'Changelog added'
                }
            },
            {
                type: 'added',
                detail: {
                    tr: 'Başlangıça joyride eklendi',
                    en: 'Joyride added to the homepage'
                }
            },
            {
                type: 'added',
                detail: {
                    tr: 'Toaster eklendi',
                    en: 'Toaster added'
                }
            },
            {
                type: 'added',
                detail: {
                    tr: 'Sürüm güncelleme bildirimleri eklendi',
                    en: 'Version update notifications added'
                }
            },
            {
                type: 'fixed',
                detail: {
                    tr: 'Başlangıçtaki 404 hatası düzeltildi',
                    en: 'Fixed 404 error on the homepage'
                }
            }
        ]
    },
    {
        version: '1.1',
        date: new Date(1679961600000),
        changes: [
            {
                type: 'added',
                detail: {
                    tr: 'Ruru92-IKE yayımlandı',
                    en: 'Ruru92-IKE published'
                }
            },
            {
                type: 'added',
                detail: {
                    tr: 'Google Analytics eklendi',
                    en: 'Google Analytics added'
                }
            },
            {
                type: 'fixed',
                detail: {
                    tr: 'Ana sayfa girişlerindeki hatalar düzeltildi',
                    en: 'Fixed some errors on the homepage'
                }
            },
            {
                type: 'fixed',
                detail: {
                    tr: 'Web standartlarına uymayan birkaç yer düzeltildi',
                    en: 'Fixed a few places that do not comply with web standards'
                }
            }
        ]
    },
    {
        version: '1.0',
        date: new Date(1679011200000),
        changes: [
            {
                type: 'added',
                detail: {
                    tr: 'İlk sürüm yayınlandı!',
                    en: 'First version published!'
                }
            }
        ]
    },
    
]



export default function ChangelogModal() {
    const Parent = useRef<HTMLDivElement>(null);
    const { i18n, t } = useTranslation();


    useEffect(() => {
        if (!Parent.current) return;
        Parent.current.classList.remove('opacity-0');
    }, [Parent])

    return (
        <div ref={Parent} className="transition-opacity opacity-0 px-6 py-4 md:rounded-xl bg-slate-100 dark:bg-slate-700 font-inter flex flex-col w-screen h-[100dvh] md:w-auto md:min-w-[90vw] md:min-h-[90vh] md:max-h-[90vh]">
            <div className='flex items-center justify-between text-slate-900 dark:text-slate-100 border-b border-slate-300 dark:border-slate-500 pb-4'>
                <h1 className='text-2xl font-maven font-black'>{t('changelog') || 'Changelog'}</h1>
                <button onClick={(e) => {
                    e.stopPropagation();
                    Parent.current?.classList.add('opacity-0');
                    setTimeout(() => {
                        destroyModal();
                    }, 200);
                }}>
                    <HiXMark size={28} />
                </button>
            </div>
            <div className='grow flex flex-col gap-y-6 overflow-y-scroll py-2 hide-scrollbar'>
                {
                    data.map((version, index) => (
                        <div key={index}>
                            <div className='flex items-center gap-x-2'>
                                <h2 className='text-slate-900 dark:text-slate-100 text-lg font-semibold'>{t('version') || 'Version'} {version.version}</h2>
                                <p className='text-slate-500 dark:text-slate-400 text-sm'>{version.date.toLocaleDateString()}</p>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                {
                                    version.changes.map((change, index) => (
                                        <div key={index} className={classnames("flex gap-x-2 rounded px-2 py-1 items-center text-sm", {
                                            'bg-green-500/20 text-green-500': change.type === 'added',
                                            'bg-yellow-500/20 text-yellow-500': change.type === 'changed',
                                            'bg-red-500/20 text-red-500': change.type === 'removed',
                                            'bg-blue-500/20 text-blue-500': change.type === 'fixed',
                                        })}>
                                            {
                                                {
                                                    added: <HiPlus />,
                                                    changed: <HiOutlineWrenchScrewdriver />,
                                                    removed: <HiMinus />,
                                                    fixed: <HiOutlineArrowPathRoundedSquare />
                                                }[change.type]
                                            }
                                            <p>{(change.detail as any)[i18n.language] || change.detail['en']}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}