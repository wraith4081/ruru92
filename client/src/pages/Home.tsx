import React from 'react'

import Ruru256 from 'lib/Ruru256';

function Home() {

    const [data, setData] = React.useState({
        input: '',
        output: '',
        key: ''
    });

    return (
        <div className='w-[90%] mx-auto flex flex-col gap-y-2'>
            <p className='font-inter text-slate-700 dark:text-slate-100 font-semibold'>Şifrelenmemiş yazı:</p>
            <textarea className='w-full border resize-none px-4 py-1.5 rounded-lg font-source outline-none focus:border-indigo-500 transition-all dark:text-slate-100 dark:border-slate-600 dark:bg-slate-700' onChange={(e) => {
                const encoded = Ruru256.Encode(e.target.value);
                setData({
                    key: encoded.key,
                    output: encoded.encoded,
                    input: e.target.value
                })
            }} value={data.input} cols={30} rows={10}></textarea>
            <p className='font-inter text-slate-700 dark:text-slate-100  font-semibold'>Şifrelenmiş yazı:</p>
            <textarea className='w-full border resize-none px-4 py-1.5 rounded-lg font-source outline-none focus:border-indigo-500 transition-all dark:text-slate-100 dark:border-slate-600 dark:bg-slate-700' onChange={(e) => {
                setData({
                    ...data,
                    input: Ruru256.Decode(Ruru256.reverseString(data.key), e.target.value),
                    output: e.target.value
                })
            }} value={data.output} cols={30} rows={10}></textarea>
            <p className='font-inter text-slate-700 dark:text-slate-100  font-semibold'>Anahtar:</p>
            <input type='text' className='w-full border px-4 py-1.5 rounded-lg font-source outline-none focus:border-indigo-500 transition-all dark:text-slate-100 dark:border-slate-600 dark:bg-slate-700' onChange={(e) => {
                setData({
                    ...data,
                    key: e.target.value
                })
            }} value={data.key} />

        </div>
    )
}

export default Home