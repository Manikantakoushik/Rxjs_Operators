import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax'
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-ajax-operator',
  templateUrl: './ajax-operator.component.html',
  styleUrls: ['./ajax-operator.component.css']
})
export class AjaxOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    ajax(`https://jsonplaceholder.typicode.com/posts`).pipe(map((res)=>{
      // array 
    let data=[];
    for(let post of res.response){
      // pushing the particular value of api data
      data.push(post.title);
    }
    return data;
    })).subscribe((data)=>{
      console.log(data);
    });

    //getting the data from api in json  
    ajax.getJSON(`https://jsonplaceholder.typicode.com/posts`).subscribe((data)=>{
      console.log(data);
    })

    // posting the data in the form of json 
    ajax({
      url:`https://jsonplaceholder.typicode.com/posts`,
      method:'POST',
      headers:{
        'content-type':'application/json',
        Manikanta: 'Manikanta koushik',
      },
      body:{
        title:"Manikanta koushik",
      },
    }).subscribe((data)=>{
      console.log(data);
    })
  }

}
