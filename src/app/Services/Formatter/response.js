const { HTTP_INTERNAL_SERVER_ERROR } = require("../../constants/response")

exports.success = (message, data) => {
    return {
        success: true,
        message,
        data,
    }
}

exports.error = (code, msg) => {
    let message = code === HTTP_INTERNAL_SERVER_ERROR ? "Whoops, Something went wrong." : msg
    return {
        success: false,
        message,
    }
}
