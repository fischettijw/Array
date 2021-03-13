class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    get(index) {
        return this.data[index];
    }

    delete(index) {
        const item = this.data[index];
        delete this.data[index]; //delete specified index
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1]; //delete original last index
        this.length--;
    }
}

const arr = new MyArray();
let item1 = null;
let item2 = null;
console.clear();

// arr.push('0 - Joseph Fischetti');

// arr.push('1 - Migual');

// arr.push('2 - Abigail');

// arr.push(123);

// arr.push([1, 2, 3, 4]);

// arr.push('last - nobody')
// item1 = arr.pop();
// item2 = arr.get(1);
// arr.delete(1);

console.log(`item1 = ${item1}`)
console.log(`item2 = ${item2}`)
console.log(arr);