import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { bufferTime } from "rxjs/operators";

@Component({
  selector: "app-buffer-time-operator",
  templateUrl: "./buffer-time-operator.component.html",
  styleUrls: ["./buffer-time-operator.component.css"],
})
export class BufferTimeOperatorComponent implements OnInit, OnDestroy {
  subcription: Subscription[] = new Array<Subscription>();
  constructor() {}

  ngOnInit() {
    this.subcription.push(
      // Buffers the source Observable values for a specific time period.
      // Collects values from the past as an array, and emits those arrays periodically in time.
      // the 2nd parameter will create new buffer at that particular time.
      interval(1000)
        .pipe(bufferTime(2000, 3000))
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
