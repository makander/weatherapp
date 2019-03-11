const TimeConverter = (sec) => {
    let date = new Date(sec * 1000);
    let timestr = date.toLocaleTimeString('en-GB');
    let formatedtime = timestr.slice(0, timestr.lastIndexOf(":"));
    return formatedtime;
  }
export default TimeConverter;

