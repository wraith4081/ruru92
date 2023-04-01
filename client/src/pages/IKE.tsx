import React from 'react'

import Ruru256 from 'lib/Ruru256';
import { useTranslation } from 'react-i18next';

function IKE() {

    const {t} = useTranslation();

    const [data, setData] = React.useState({
        input: '',
        output: ''
    });

    return (
        <div className='w-[90%] mx-auto flex flex-col gap-y-2'>
            <p className='font-inter text-slate-700 dark:text-slate-100 font-semibold'>{t('decoded_text') || 'Decoded text'}:</p>
            <textarea className='w-full border resize-none px-4 py-1.5 rounded-lg font-source outline-none focus:border-indigo-500 transition-all dark:text-slate-100 dark:border-slate-600 dark:bg-slate-700' onChange={(e) => {
                const data = Ruru256.EncodeWithIKE(e.target.value);

                const output = Ruru256.ConvertToIKE(data.key, data.encoded);
                
                setData({
                    input: e.target.value,
                    output
                })
            }} value={data.input} cols={30} rows={10}></textarea>
            <p className='font-inter text-slate-700 dark:text-slate-100  font-semibold'>{t('encoded_text') || 'Encoded text'}:</p>
            <textarea className='w-full border resize-none px-4 py-1.5 rounded-lg font-source outline-none focus:border-indigo-500 transition-all dark:text-slate-100 dark:border-slate-600 dark:bg-slate-700' onChange={(e) => {
                const data = Ruru256.DecodeFromIKE(e.target.value);

                setData({
                    input: data,
                    output: e.target.value
                })
            }} value={data.output} cols={30} rows={10}></textarea>
        </div>
    )
}

export default IKE