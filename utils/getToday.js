const getToday = () => {
  const currentDate = new Date();
  return `${currentDate.getFullYear()}${currentDate.getMonth()}${currentDate.getDate()}`;
};

exports.getToday = getToday;
