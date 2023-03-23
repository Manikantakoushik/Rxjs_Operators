import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-operators-basics",
  templateUrl: "./operators-basics.component.html",
  styleUrls: ["./operators-basics.component.css"],
})
export class OperatorsBasicsComponent implements OnInit, OnDestroy {
  subcription: Subscription[] = new Array<Subscription>();

  ngOnInit() {
    const newobservable = interval(1000);

    this.subcription.push(
      newobservable.subscribe((data) => {
        // logic
        if (data % 2 === 0) {
          console.log("Even number-" + data);
        }
      })
    );

    this.subcription.push(
      // by operators
      newobservable
        .pipe(
          filter((number) => {
            return number % 2 === 0;
          }),
          // we can update or change the data
          map((data) => {
            return "even number " + data;
          })
        )
        .subscribe((res) => {
          console.log("operator " + res);
        })
    );
  }

  ngOnDestroy(): void {
    this.subcription.forEach((subsciption: Subscription) => {
      subsciption.unsubscribe();
    });
  }
}
