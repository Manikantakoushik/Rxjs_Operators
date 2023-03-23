import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrls: ['./replaysubject.component.css']
})
export class ReplaysubjectComponent implements OnInit {
  constructor() { }
  
  ngOnInit() {
    // in replay subject can have two parameters one is bufferSize and other is window Time
    let replaysubject$ =new ReplaySubject(2,4000 /* windowTime */);
    replaysubject$.next(1);

    replaysubject$.subscribe((data)=>{
      console.log('observer 1 '+ data);
    },(error)=>{
      console.log('observer 1 '+error);
    });

    replaysubject$.next(2);
    replaysubject$.next(3);
    replaysubject$.next(4);
    // even though you have any error the same error will send to the all observer
    // replaysubject$.error('error occured')

    // after the particular time it will execute
    setTimeout(()=>{
    replaysubject$.subscribe((data)=>{
      console.log('observer 2 '+ data);
    },(error)=>{
      console.log("observer 2 "+error);
    });
    // replaysubject$.next(5);
  },3000);
  }

}
