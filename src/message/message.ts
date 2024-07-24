import {ElMessage} from "element-plus";

export const error = (message:string) => {
    ElMessage({
        message:message,
        type: 'error',
    });
}

export const success = (message:string) => {
    ElMessage({
        message:message,
        type: 'success',
    });
}