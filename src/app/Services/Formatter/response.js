exports.success = (message, data) => {
  return {
    success: true,
    code: 200,
    message,
    data
  };
};

exports.error = (code, msg) => {
  let message = code === 500 ? "Whoops, Something went wrong." : msg;
  return {
    success: false,
    code: code,
    message
  };
};
