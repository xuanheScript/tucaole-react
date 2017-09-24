import { message,Modal } from 'antd';
import stateHoc from './stateHoc';
import Fetch from './fetch';
import { initLibraryConfigFunc } from "ws-web-utils";
export { fetchStatus,StorageModule,publicFunction } from "ws-web-utils";



initLibraryConfigFunc({
    ToastInfo : (content, duration, onClose)=>{
        message.info(content, duration, onClose)
    },
    ToastError : (content, duration, onClose)=>{
        message.error(content, duration, onClose)
    },
    ToastWarn : (content, duration, onClose)=>{
        message.warning(content, duration, onClose)
    },
    ToastHide : ()=>{
        message.destroy()
    },
    ModalAlert : (title,content,array)=>{
        Modal.confirm({
            title,
            content,
            okText: array[2].text,
            okType: 'danger',
            cancelText: array[1].text,
            onOk() {
                array[2].onPress()
            },
            onCancel() {
                array[1].onPress()
            },
        })
    },
})



export {
    stateHoc,
    Fetch,
}
