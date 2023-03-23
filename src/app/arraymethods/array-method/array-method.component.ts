import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-array-method",
  templateUrl: "./array-method.component.html",
  styleUrls: ["./array-method.component.css"],
})
export class ArrayMethodComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  map() {
    // map() creates a new array from calling a function for every array element.
    // map() calls a function once for each element in an array.
    // map() does not execute the function for empty elements.
    // map() does not change the original array
    let numbers = [1, 2, 3, 4];
    console.log("Before Map method " + numbers);
    let doubleNumbers = numbers.map((x) => x * 2);
    console.log("After Map method " + doubleNumbers);
  }

  filter() {
    // The filter() method creates a new array filled with elements that pass a test provided by a function.
    // The filter() method does not execute the function for empty elements.
    // The filter() method does not change the original array.
    // we have an array we need the element which satisfy the condition then we have to use filter
    // Inside the filter we have to use call back function we can give three parameters (element,index,Array)
    let numbers = [1, 2, 3, 4, 5, 6];
    console.log("Before Filter method " + numbers);
    let evenNumbers = numbers.filter((x, y, arr) => {
      x % 2 === 0;
    });
    console.log("After Filter method even number of array " + evenNumbers);
  }

  reduce() {
    // In reduce we need to pass the two parameter one is call back function,accumulator
    let numbers = [1, 2, 3, 4];
    // in reduce method if we take addition then the 2nd parameter default will be 0 and if we take multiplicaton then the 2nd parameter default will be 1
    let sum = numbers.reduce((accumulor, x) => accumulor + x, 0);
    console.log("Before the reduce method  " + numbers);
    console.log("After the reduce method " + sum);
    // The reduce() method does not execute the function for empty array elements.
    // The reduce() method does not change the original array.
    const numbers1 = [15.5, 2.3, 1.1, 4.7];

    const result = numbers1.reduce(getSum, 0);
    console.log("After reduce method 1    "+result);
    
    function getSum(total, num) {
      return total + Math.round(num);
    }
  }

  sort() {
    let fruits = ["banana", "apple", "cherry", 223, 34, 32, 53, "nan"];
    console.log("Before sort method  " + fruits);
    fruits.sort();
    console.log("After sort method  " + fruits);
    // By default, the .sort() method sorts elements in alphabetical order
    let numbers = [23, 28, 234, 84];
    console.log("Numbers by default " + numbers);
    numbers.sort();
    console.log("Numbers sort by default " + numbers);
    // if we want to sort the ascending order
    // If we want to sort descending order we have to give b-a
    let number = [23, 28, 234, 84];
    console.log("Array of numbers " + numbers);
    numbers.sort((a, b) => {
      return a - b;
    });
    console.log("Number sort in ascending order " + number);
  }

  sortobjects(){
    const a = [
      { name: "John", age: 30, city: "New York" },
      { name: "Jane", age: 25, city: "London" },
      { name: "Jim", age: 35, city: "Paris" },
    ];

    a.sort((a,b) => {
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if(a.name < b.name) return -1;
      return 0;
    })
    console.log(a);
    


  }

  slice() {
    // To get some part of an Array
    // slice will have two parameters slice(start,end) 2nd parameter will take -1 of it
    let numbers = [1, 2, 3, 4, 5, 6, 7];
    console.log("Before the slice method (slice(2,5)) are  " + numbers);
    console.log("slice " + numbers.slice(2, 5));
  }

  splice() {
    // Removes and add some elements at some locations
    // syntax:splice(at which index we have to remove the elements ,number of elements to remove,add the elements to add the array)
    let numbers = [4, 7, 81, 10];
    console.log(
      "Before splice syntax of splice[2,1,7,8,9,10] are   " + numbers
    );
    // it will show the removed elements
    console.log(numbers.splice(2, 1, 7, 8, 9, 10));
  }

  concat() {
    // in concat two array are in same type
    let array1 = ["banana", "apple"];
    console.log("array 1  " + array1);
    let array2 = ["cherry", "kiwi"];
    console.log("array 2  " + array2);
    let array3 = array1.concat(array2);
    console.log("After concat " + array3);

    let number1 = [1, 2, 3, 4];
    console.log("number1   " + number1);
    let number2 = [5, 6, 7, 8];
    console.log("number 2  " + number2);
    let number3 = number1.concat(number2);
    console.log("After concat " + number3);
  }

  push() {
    // push means it will add the elements at the end of the array..
    let number = [12, 23, 45, 66, 2];
    console.log(
      "Before Pushing the elements,elements 345,34 pushed in array" + number
    );
    number.push(345, 34);
    console.log("After pushing the elements are " + number);
  }

  pop() {
    // pop means it will remove the last element of the array..
    let number = [12, 23, 45, 66, 2];
    console.log("Before Pop the elements are " + number);
    number.pop();
    console.log("After pop the element are " + number);
  }

  shift() {
    // The shift() method removes the first array element and "shifts" all other elements to a lower index
    let number = [12, 23, 45, 66, 2];
    console.log("Before shift the element   " + number);
    number.shift();
    console.log("After shift the element " + number);
  }

  unshift() {
    // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
    let number = [12, 23, 45, 66, 2];
    console.log(
      "Before Unshift the element are and 345,34 are added elements " + number
    );
    number.unshift(345, 34);
    console.log("After Unshift the element " + number);
  }

  find() {
    // Find method is call back Function
    // It return the First element of array for which callback function return true
    // The find() method returns undefined if no elements are found
    // The find() method does not change the original array
    let places = ["Hyderabad", "Vijayawada", "Delhi", "Vizag"];
    console.log(
      "Before calling the find method, In find method we return the value which start with V of Array " +
        places
    );
    var place = places.find(function (ele) {
      return ele.startsWith("V");
    });
    console.log("After calling the find method " + place);
  }

  some() {
    // some method is simlar to the Find method but find will return the value,some will return the boolena value
    // If the value don't match with the array then find method will return the undefined and some method will return the false
    let places = ["Hyderabad", "Vijayawada", "Delhi", "Vizag"];
    console.log(
      "Before calling the find method, In find method we return the value which start with V of Array " +
        places
    );
    var place = places.some(function (ele) {
      return ele.startsWith("V");
    });
    console.log("After calling the find method " + place);
  }

  join() {
    // syntax:array.join(separator)
    // join will convert the array to string
    // It concatenate all the elements of an array and returns new string separated by separator
    let places = ["Hyderabad", "Vijayawada", "Delhi", "Vizag"];
    console.log("Before Join array method ");
    console.log(places);
    let place = places.join();
    console.log(place);

    // console.log("After the Join array methods " +place);
  }

  foreach() {
    // every element of array we want to excute a function then we have to use Foreach method.
    // It will take the input as the callback function.
    var salaries = [50000, 45000, 55000, 60000];
    console.log(salaries);
    salaries.forEach(increment);
    function increment(salary, index) {
      console.log(salary);
      let increment = salary / 10;
      salaries[index] = salary + increment;
    }
    console.log(salaries);
  }

  forin() {
    // let a=['mango','apple',"banana","pineapple"];
    const a = { name: "John", age: 30, city: "New York" };
    // { name: "Jane", age: 25, city: "London" },
    // { name: "Jim", age: 35, city: "Paris" },
    // ];

    console.log("values of array");
    console.log(a);
    for (let index in a) {
      console.log(index + ":" + a[index]);
      // console.log(a[index]);
    }
  }

  forof() {
    // let a=['mango','apple',"banana","pineapple"];
    const a = [
      { name: "John", age: 30, city: "New York" },
      { name: "Jane", age: 25, city: "London" },
      { name: "Jim", age: 35, city: "Paris" },
    ];

    console.log("values of array");
    console.log(a);
    for (let value of a) {
      console.log(value);
    }
  }

  include() {
    // includes method will see that the required element is present in array or not and return the boolean value...
    let number = [1, 2, 3, 4, 5, 6];
    console.log("array element:-");
    console.log(number);
    console.log("10 is present in the array");
    console.log(number.includes(10));
    console.log("5 is present in the array");
    console.log(number.includes(5));
  }

  from() {
    // from method will convert it into array..
    let name = "abcdefghi";
    console.log(Array.from(name));
  }

  arrayobject() {
    const arrayOfObjects = [
      { name: "John", age: 30, city: "New York" },
      { name: "Jane", age: 25, city: "London" },
      { name: "Jim", age: 35, city: "Paris" },
    ];

    let a = arrayOfObjects.map(function abc(value) {
      return { name: value.name, age: value.age };
    });
    console.log(a);
  }

  arrayfilter() {
    const arrayOfObjects = [
      { name: "John", age: 30, city: "New York" },
      { name: "Jane", age: 25, city: "London" },
      { name: "Jim", age: 35, city: "Paris" },
    ];

    const a = arrayOfObjects.filter((ele) => {
      return ele.age >= 30;
    });
    console.log(a);
  }

  mapfilter() {
    const arrayOfObjects = [
      { name: "John", age: 30, city: "New York" },
      { name: "Jane", age: 25, city: "London" },
      { name: "Jim", age: 35, city: "Paris" },
    ];

    const b = arrayOfObjects
      .filter((ele) => ele.age >= 30)
      .map((ele) => {
        return { name: ele.name, age: ele.age };
      });
    console.log(b);
  }

  concatstring() {
    let text1 = "Hello";
    let text2 = "World!..";
    let text3 = text1.concat(text2);
  }
}
