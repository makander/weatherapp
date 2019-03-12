const UnixToDate = (sec) => {
let date = new Date( 1000 * sec);
let formatedDate = date.toISOString().substring(0, 10);
return formatedDate;

}

export default UnixToDate;