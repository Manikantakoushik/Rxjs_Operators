import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { fromEvent, interval, Observable, Subscription } from "rxjs";
import { buffer, tap } from "rxjs/operators";

@Component({
  selector: "app-buffer-operator",
  templateUrl: "./buffer-operator.component.html",
  styleUrls: ["./buffer-operator.component.css"],
})
export class BufferOperatorComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  subcription: Subscription[] = new Array<Subscription>();
  intervalData: number[] = [];
  showData$!: Observable<Event>;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // fromEvent is the operator which will create the observable by click event
    this.showData$ = fromEvent(document.getElementById("ShowButton")!, "click");
  }

  // when ever user click on start interval then numbers will start with 1sec interval of time
  startInterval() {
    this.subcription.push(
      interval(1000)
        .pipe(
          tap((data) => {
            console.log(data);
          }),
          // buffer means collects value from the past as an array and emits that array only when another observable emits the value
          buffer(this.showData$)
        )
        .subscribe((data: number[]) => {
          data.forEach((val) => this.intervalData.push(val));
        })
    );
  }

  ngOnDestroy(): void {
    this.subcription.forEach((subsciption: Subscription) => {
      subsciption.unsubscribe();
    });
  }
}
