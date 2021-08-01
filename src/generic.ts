function getData(value: any) {
  return value;
}

console.log(getData('Hendra Agil').length);
console.log(getData(123456).length); // undefined

// Generic
function myData<T>(value: T) {
  return value;
}

console.log(myData('Hendra Agil').substr(0, 6));
console.log(myData(123456));

// Generic Arrow Function
// const arrowFunc = <T>(value: T) => {
const arrowFunc = <T,>(value: T) => {

}
