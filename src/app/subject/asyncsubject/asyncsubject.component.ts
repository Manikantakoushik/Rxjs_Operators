import { Component, OnInit } from "@angular/core";
import { async } from "@angular/core/testing";
import { AsyncSubject } from "rxjs";

@Component({
  selector: "app-asyncsubject",
  templateUrl: "./asyncsubject.component.html",
  styleUrls: ["./asyncsubject.component.css"],
})
export class AsyncsubjectComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let asyncsubject$ = new AsyncSubject();

    asyncsubject$.subscribe((data) => {
      console.log("observer 1  " + data);
    });

    asyncsubject$.next(1);
    asyncsubject$.next(2);
    asyncsubject$.next(3);
    asyncsubject$.error("error occured");
    // here the subscriber will not get the data until the the complete method will executed
    asyncsubject$.complete();
    // and also it will emit the only the last value before complete method

    setTimeout(() => {
      asyncsubject$.subscribe((data) => {
        console.log("observer 2  " + data);
      });
      // if we use below complete method by commenting the above complete method 
      // then we will get both observer 1 and observer 2 will excute at a time
      // asyncsubject$.complete();
    }, 3000);
  }
}
