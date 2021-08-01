class List<T> {
  private data: T[];

  // constructor(elements: T[]) {
  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  // addMultiple(elements: T[]): void {
  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

// const numbers = new List<number>([1, 2, 3]);
const numbers = new List<number>(1, 2, 3);

numbers.add(4);

// numbers.addMultiple([5, 6, 7, 8, 9, 10])
numbers.addMultiple(5, 6, 7, 8, 9, 10)

console.log(numbers.getAll());

const random = new List<number | string>(1, 'Dua', 'Tiga');

random.add(4);
random.addMultiple('Lima', 6, 7, 8, 9, 'Sepuluh')

console.log(random.getAll());