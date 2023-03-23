import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.css']
})
export class TakeOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Emits only the first count values emitted by the source Observable
    // Takes the first count values from the source, then completes.
    // suppose the parameter in take operator is more then the emited value then it will allow all the emited values
    interval(1000).pipe(take(5)).subscribe((data)=>{
      console.log(data);
    },(error)=>{
      console.log(error);
    },
    () =>{
      console.log("completed")
    })

  }

}
