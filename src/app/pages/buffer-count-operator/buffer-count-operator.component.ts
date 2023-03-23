import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, pipe, Subscription } from "rxjs";
import { bufferCount } from "rxjs/operators";

@Component({
  selector: "app-buffer-count-operator",
  templateUrl: "./buffer-count-operator.component.html",
  styleUrls: ["./buffer-count-operator.component.css"],
})
export class BufferCountOperatorComponent implements OnInit, OnDestroy {
  subcription: Subscription[] = new Array<Subscription>();
  constructor() {}

  ngOnInit() {
    // Buffers the source Observable values until the size hits the maximum bufferSize given
    // Collects values from the past as an array, and emits that array only when its size reaches bufferSize.
    this.subcription.push(
      interval(1000)
        .pipe(bufferCount(3))
        .subscribe((data) => {
          // console.log(data);
        })
    );
    // suppose if we have two parameter in buffercount it will emits the array when emited values are equal to the 2nd parameter
    this.subcription.push(
      interval(1000)
        .pipe(bufferCount(3, 1))
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
