/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


class Calculator{
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    sum() {
      const sum = this.num1 + this.num2;
      console.log(sum);
    }
    substraction() {
        const substraction = this.num1 - this.num2;
        console.log(substraction);
    }
    multiplication() {
      const multiplication = this.num1 * this.num2;
      console.log(multiplication);
    }
    division() {
      const division = this.num1 / this.num2;
      console.log(division);
    }
  }
  
  const twoAndFive = new Calculator(2,5);
  console.log(twoAndFive);
  
  twoAndFive.sum();
  twoAndFive.substraction();
  twoAndFive.multiplication();
  twoAndFive.division();




