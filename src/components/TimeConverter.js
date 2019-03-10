const TimeConverter = sec => {
  var sec;
  var date = new Date(sec * 1000);
  var timestr = date.toLocaleTimeString('en-GB');
  return timestr;
};

export default TimeConverter;
