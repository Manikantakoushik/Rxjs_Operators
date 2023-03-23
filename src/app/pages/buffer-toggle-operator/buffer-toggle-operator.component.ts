import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { bufferToggle, take, tap } from "rxjs/operators";

@Component({
  selector: "app-buffer-toggle-operator",
  templateUrl: "./buffer-toggle-operator.component.html",
  styleUrls: ["./buffer-toggle-operator.component.css"],
})
export class BufferToggleOperatorComponent implements OnInit, OnDestroy {
  subcription: Subscription[] = new Array<Subscription>();
  constructor() {}

  ngOnInit() {
    // tap operator is used when ever the observable emit the value print that we use tap operator
    // for buffer toggle we have to give the opening and closing
    let opening = interval(6000).pipe(tap(() => console.log("open")));
    // the closing buffer should be the function
    let closing = (data: number) =>
      interval(3000).pipe(tap(() => console.log("close")));

    this.subcription.push(
      interval(1000)
        .pipe(
          tap((data) => console.log(data)),
          // Buffers the source Observable values starting from an emission from openings and ending when the output of closingSelector emits.
          // Collects values from the past as an array. Starts collecting only when opening emits, and calls the closingSelector function to get an Observable that tells when to close the buffer.
          // in buffer toggle we have have to pass the two parameters when the buffer has to start and close the buffer
          bufferToggle(opening, closing),
          take(3)
        )
        .subscribe((data) => {
          console.log(data);
        })
    );
  }

  ngOnDestroy(): void {
    this.subcription.forEach((subsciption: Subscription) => {
      subsciption.unsubscribe();
    });
  }
}
