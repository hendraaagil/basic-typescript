import Asus from './Asus';
import Macbook from './Macbook';

const asus = new Asus('Vivobook', false, true);
asus.pressA();
console.log(asus);
asus.printInformation();

const macbook = new Macbook(2020, true, false);
macbook.pressB();
macbook.pressC();
console.log(macbook);
macbook.printInformation();