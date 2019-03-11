const DayConverter = (sec) => {
  let options = {weekday: 'long'}
  let date = new Date(sec * 1000);
  let timestr = date.toLocaleDateString('en-GB',options);
  return timestr;
}

export default DayConverter;