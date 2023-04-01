import {useEffect} from 'react';
import { useModals } from "utils/modal"
import modalData from "modals";

export default function Modal() {
    const modals = useModals();

    useEffect(() => {
        if (modals.length > 0) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [modals])
    

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
            {modals.map((modal: any) => {
                const queryResult = modalData.find(m => m.name === modal.name);

                if (!queryResult) return;

                return <queryResult.element />
            })}
        </div>
    )
}