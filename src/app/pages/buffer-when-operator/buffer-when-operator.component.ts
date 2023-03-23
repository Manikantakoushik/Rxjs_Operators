import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { bufferWhen, tap } from "rxjs/operators";

@Component({
  selector: "app-buffer-when-operator",
  templateUrl: "./buffer-when-operator.component.html",
  styleUrls: ["./buffer-when-operator.component.css"],
})
export class BufferWhenOperatorComponent implements OnInit, OnDestroy {
  subcription: Subscription[] = new Array<Subscription>();
  constructor() {}

  ngOnInit() {
    let x = 0;
    // Buffers the source Observable values, using a factory function of closing Observables to determine when to close, emit, and reset the buffer
    // Collects values from the past as an array. When it starts collecting values, it calls a function that returns an Observable that tells when to close the buffer and restart collecting

    this.subcription.push(
      interval(500)
        .pipe(
          tap((i) => (x = i)),
          // buffer when operator will use factory function which will emit the value after 2secs
          bufferWhen(() => {
            // dynamic observable emition
            if (x > 10) {
              console.log("x value" + x);
              return interval(1000);
            }
            // after every 2 secs the buffer is closed automatically and emits the value in array till 2secs what the data is stored in buffer
            return interval(2000);
          })
          // we can do dynamic observable emition in bufferwhen,not on the buffer this is the difference between buffer and bufferwhen
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
