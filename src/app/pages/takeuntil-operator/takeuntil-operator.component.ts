import { AfterViewInit, Component, OnInit } from "@angular/core";
import { fromEvent, interval, Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-takeuntil-operator",
  templateUrl: "./takeuntil-operator.component.html",
  styleUrls: ["./takeuntil-operator.component.css"],
})
export class TakeuntilOperatorComponent implements OnInit, AfterViewInit {
  buttonEvent!: Observable<Event>;
  constructor() {}
  ngOnInit() {}

  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(
      document.getElementById("takeUntil")!,
      "click"
    );
  }

  startTimer() {
    // Emits the values emitted by the source Observable until a notifier Observable emits a value.
    // Lets values pass until a second Observable, notifier, emits a value. Then, it completes.
    // takeUntil subscribes and begins mirroring the source Observable. It also monitors a second Observable, notifier that you provide. If the notifier emits a value, the output Observable stops mirroring the source Observable and completes. If the notifier doesn't emit any value and completes then takeUntil will pass all values.
    interval(500)
      .pipe(takeUntil(this.buttonEvent))
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log("complete done");
        }
      );
  }
}
