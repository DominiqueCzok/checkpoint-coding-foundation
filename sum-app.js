class SumApp {
  // Add you solution here

    constructor() {
      this.numbers = [];    
    }
    addNumber(n) {
      this.numbers.push(n);
    }
    getSum() {
      let sum = 0;
      for (let i = 0; i < this.numbers.length; i++) {
        sum = sum + this.numbers[i];
      }
      
      return sum;
    }
    reset() {
      this.numbers = [];
    }
} 

