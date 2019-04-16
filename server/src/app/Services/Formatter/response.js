exports.success = (message, data) => {
  return {
    success: true,
    code: 200,
    message,
    data
  };
};

exports.error = (code, message) => {
  return {
    success: false,
    code: code,
    message
  };
};
