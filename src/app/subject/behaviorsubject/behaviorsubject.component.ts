import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviorsubject',
  templateUrl: './behaviorsubject.component.html',
  styleUrls: ['./behaviorsubject.component.css']
})
export class BehaviorsubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // behavioursubject have intial value
    let behavioursubject$ = new BehaviorSubject(0);
  
    behavioursubject$.subscribe((data) => {
      // intial value is send by the behaviour subject 
      console.log("observer 1  " + data);
    });
    
    behavioursubject$.next(1); //intial value is updated with the latest value and send the data

    behavioursubject$.subscribe((data) => {
      console.log("observer 2  " + data);
    });
   
    behavioursubject$.next(2); //intial value is updated with the latest value and send the data
   
  }

}
