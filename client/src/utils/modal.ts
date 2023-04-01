import store from "store";
import { append, destory, destoryAll } from "store/modal";
import {useSelector} from "react-redux";

export const useModals = () => useSelector((state: any) => state.modal.modals);
export const createModal = (name: string, data: object | false = false) => store.dispatch(append({
    name,
    data
}));
export const destroyModal = () => store.dispatch(destory());
export const destroyAllModal = () => store.dispatch(destoryAll());