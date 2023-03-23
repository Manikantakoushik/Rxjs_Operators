import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { take, takeLast } from "rxjs/operators";

@Component({
  selector: "app-takelast-operator",
  templateUrl: "./takelast-operator.component.html",
  styleUrls: ["./takelast-operator.component.css"],
})
export class TakelastOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Waits for the source to complete, then emits the last N values from the source, as specified by the count argument
    // what ever the parameter is passed in takelast,that value the memery is alloctaed it will store the value after the complete method at a time send the emited values
    // Using takeLast with an observable that never completes will result in an observable that never emits a value.
    // here interval emits the infinite values so we can use take opertor after that takelast is used.
    interval(500)
      .pipe(take(10), takeLast(5))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
