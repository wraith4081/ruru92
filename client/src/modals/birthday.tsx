import { useRef, useEffect, useState } from 'react';

import { destroyModal } from 'utils/modal';

import Confetii from 'react-canvas-confetti'

export default function BirthdayModal() {
    const Parent = useRef<HTMLDivElement>(null);

    const [isFire, setIsFire] = useState(false);

    useEffect(() => {
        if (!Parent.current) return;
        setTimeout(() => {

            Parent.current!.classList.remove('opacity-0');
        }, 500)
    }, [Parent])

    return (
        <>
            <div ref={Parent} className="font-inter transition-opacity opacity-0 px-6 py-4 md:rounded-xl bg-slate-100 dark:bg-slate-700 font-inter w-screen h-[100dvh] md:w-auto md:min-w-[50vw] md:max-w-[50vw] md:min-h-[75vh] md:max-h-[75vh] flex flex-col gap-y-4 sm:gap-y-6 items-center justify-center z-[99999]">

                <Confetii gravity={1.5} scalar={1.125} particleCount={500} startVelocity={55} className='absolute inset-0 w-screen h-screen' fire={isFire} spread={360} />
                <div className='text-center'>
                    <h2 className=' dark:text-slate-300 text-slate-700 text-lg uppercase'>Today's something special</h2>
                    <h1 className='font-maven text-block text-slate-900 dark:text-slate-100 text-4xl sm:text-5xl font-black'>Happy Birthday Ruru!</h1>
                </div>
                <div className='dark:text-slate-300 text-slate-700 w-2/3 text-center flex flex-col gap-y-2'>
                    <p>
                        We created this project for Ruru, the beautiful person and the reason behind it, on her {new Date().getFullYear() - 1999}th birthday!
                    </p>
                    <p>
                        I realized this project thanks to this person who reflects his quality with his drawings, impresses and entertains everyone with his voice. If I didn't know him, this project wouldn't exist today. I wouldn't have met the people I met, thanks to him and his excellent audience. All thanks to this wonderful person who calls himself Ruru. Happy birthday, Ruru!
                    </p>
                </div>
                <button onClick={() => {
                    setIsFire(x => !x);

                    setTimeout(() => {
                        Parent.current!.classList.add('opacity-0');
                        setTimeout(() => {
                            destroyModal();

                            if (localStorage.getItem('isJoyrided') !== 'true') {
                                window.location.reload();
                            }
                        }, 550)
                    }, 5000)
                }} disabled={isFire} className='px-4 py-2 rounded-lg bg-indigo-500 font-medium text-white w-1/3 h-[50px] z-10 transition-opacity disabled:opacity-50'>
                    Celebrate
                </button>
            </div>
        </>
    )
}