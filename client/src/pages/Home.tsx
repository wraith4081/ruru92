import React from 'react'

import Ruru256 from 'lib/Ruru256';
import { useTranslation } from 'react-i18next';

function Home() {

    const {t} = useTranslation();

    const [data, setData] = React.useState({
        input: '',
        output: '',
        key: ''
    });

    return (
        <div className='w-[90%] mx-auto flex flex-col gap-y-2'>
            <label htmlFor='encoded' className='font-inter text-slate-700 dark:text-slate-100 font-semibold'>{t('decoded_text')}:</label>
            <textarea name='encoded' id='encoded' className='w-full border resize-none px-4 py-1.5 rounded-lg font-source outline-none focus:border-indigo-500 transition-all dark:text-slate-100 dark:border-slate-600 dark:bg-slate-700' onChange={(e) => {
                const encoded = Ruru256.Encode(e.target.value);
                setData({
                    key: encoded.key,
                    output: encoded.encoded,
                    input: e.target.value
                })
            }} value={data.input} cols={30} rows={10}></textarea>
            <label htmlFor='decoded' className='font-inter text-slate-700 dark:text-slate-100  font-semibold'>{t('encoded_text')}:</label>
            <textarea name="decoded" id="decoded" className='w-full border resize-none px-4 py-1.5 rounded-lg font-source outline-none focus:border-indigo-500 transition-all dark:text-slate-100 dark:border-slate-600 dark:bg-slate-700' onChange={(e) => {
                setData({
                    ...data,
                    input: Ruru256.Decode(Ruru256.reverseString(data.key), e.target.value),
                    output: e.target.value
                })
            }} value={data.output} cols={30} rows={10}></textarea>
            <label htmlFor='key' className='font-inter text-slate-700 dark:text-slate-100  font-semibold'>{t('key')}:</label>
            <input name="key" id="key" type='text' className='w-full border px-4 py-1.5 rounded-lg font-source outline-none focus:border-indigo-500 transition-all dark:text-slate-100 dark:border-slate-600 dark:bg-slate-700' onChange={(e) => {
                setData({
                    ...data,
                    input: Ruru256.Decode(Ruru256.reverseString(data.key), data.output),
                    key: e.target.value
                })
            }} value={data.key} />

        </div>
    )
}

export default Home