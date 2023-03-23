import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-simplesubject",
  templateUrl: "./simplesubject.component.html",
  styleUrls: ["./simplesubject.component.css"],
})
export class SimplesubjectComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // subject has been intialized
    let subject$ = new Subject();
    // subject have one observer there is not data to emit
    subject$.subscribe((data) => {
      console.log("observer 1  " + data);
    });
    // subject have emited a value and have one observer so the above one is exicuted
    subject$.next(1);
    // subject have another observer there is not data to emit
    subject$.subscribe((data) => {
      console.log("observer 2  " + data);
    });
    // now the subject emited the value it will check how many observer have there it will send the data to all observers
    subject$.next(2);
   
  }
}
