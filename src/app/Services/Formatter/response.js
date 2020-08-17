import { HTTP_INTERNAL_SERVER_ERROR } from '../../constants/response'

export const success = (message, data) => {
    return {
        success: true,
        message,
        data,
    }
}

export const error = (code, msg) => {
    let message = code === HTTP_INTERNAL_SERVER_ERROR ? 'Whoops, Something went wrong.' : msg
    return {
        success: false,
        message,
    }
}
