import { Component, OnInit,AfterViewInit, } from '@angular/core';
import { from, fromEvent } from "rxjs";
import { resolve } from "url";

@Component({
  selector: 'app-conversion-observables',
  templateUrl: './conversion-observables.component.html',
  styleUrls: ['./conversion-observables.component.css']
})
export class ConversionObservablesComponent implements OnInit,AfterViewInit{

 // creation of array
 postsArray = [
  { title: "Mani1", description: "Array 1of description1" },
  { title: "Mani2", description: "Array of description2" },
  { title: "Mani3", description: "Array of description3" },
];

// converting the array into observables
postsArrayObservable$ = from(this.postsArray);
// creation of promises
promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolve the promise. send data");
  }, 3000);
});

// converting the promises into observables
promiseObservable$ = from(this.promise);

constructor() {
  // converting array into observables and subscribe the array observables
  this.postsArrayObservable$.subscribe({
    next: (data) => console.log(data),
    error: (error) => console.log(error),
    complete: () => console.log("complete was done!"),
  });

  // converting promises into observables and subscribe the promises observables
  this.promiseObservable$.subscribe({
    next: (data) => console.log(data),
    error: (error) => console.log(error),
    complete: () => console.log("complete was done! promise done !!"),
  });
}
  ngOnInit(): void {
  }

//converting Document Event Handlers into observables and subscribe the Document Event Handlers observables
ngAfterViewInit(): void {
  fromEvent(document.getElementById("click-button"), "click").subscribe({
    next: (data) => console.log(data),
    error: (error) => console.log(error),
    complete: () => console.log("complete was done! Event Handling done !!"),
  });
}
}
