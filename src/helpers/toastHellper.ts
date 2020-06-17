import { toast } from "react-toastify";

export const toastError = (error:any) => {
    let message = null;
    if(typeof error === 'object' && error !== null){
        message = error.toString()
    }
    if(message !== null && typeof message !== undefined && message !== ''){
        toast.error(message)
    }
}