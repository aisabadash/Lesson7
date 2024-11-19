// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
//
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

function Calculator() {
   this.a = null;
   this.b = null;

   this.readNumber = function() {
      let result = prompt(`Введіть число:`, 0);
      
      if (result === null) return;
      
      if ((result.trim() === "") || (isNaN(Number(result)))) {
         alert(`Невірно введено число!`);
         return;
      }
      return Number(result);      
   }

   this.read = function() {
      this.a = this.readNumber();
      if(this.a === undefined) return;  
      console.log(`a = ${this.a}`);

      this.b = this.readNumber();
      if(this.b === undefined) return;  
      console.log(`b = ${this.b}`);

      return true;  
   }

   this.sum = function() {
      let result = this.a + this.b;
      return `Sum = ${result}`;
   }

   this.mul = function() {
      let result = this.a * this.b;
      return `Mul = ${result}`;
   }
}

const obj = new Calculator();

if( obj.read()) {
   console.log(obj.sum());
   console.log(obj.mul());
}
