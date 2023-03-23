import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { map, mergeMap } from "rxjs/operators";

@Component({
  selector: "app-map-operator",
  templateUrl: "./map-operator.component.html",
  styleUrls: ["./map-operator.component.css"],
})
export class MapOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //this is higher order Observables
    of(1, 2, 3)
      .pipe(
        map((value) => {
          //outer observable
          //Here the map is returning the observable instead of number or value so we have to subscribe the observable
          return of(value * 10); //inner observable
        })
      )
      .subscribe((data) => {
        // subscribing for the outer observable
        console.log(data);
        // here the getting data is observable so we need to subscribe the observable
        data.subscribe((res) => {
          //subscribing for the inner observable
          console.log(res);
        });
      });
      //this not the crt approach using subscribe inside the subscribe inorder to overcome we use higher order mapping operators
      of(1,2,3).pipe(mergeMap((data)=>{
        return of(data*10);
      }),
      // mergeMap((obs)=> obs)
      
      ).subscribe((res)=>{
        console.log("higher order observable-"+res);
      })

  }
}
