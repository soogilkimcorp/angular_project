import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-simplehttp',
  templateUrl: './simplehttp.component.html',
  styleUrls: ['./simplehttp.component.css']
})
export class SimplehttpComponent implements OnInit {

  data:Object;
  loading:boolean;

  constructor(private http:Http) {

  }

  ngOnInit() {
  }

  // GET
  // makeRequest():void {
  //   this.loading = true;
  //   this.http.get("http://jsonplaceholder.typicode.com/posts/1").subscribe(
  //     data => {
  //       this.data = data;
  //       this.loading = false;
  //     }
  //   );
  // }

  // POST
  makeRequest():void {
    this.loading = true;
    this.http.post("http://jsonplaceholder.typicode.com/posts", JSON.stringify({body:"bar", title:"foo", userId:1})).subscribe(
      data => {
        this.data = data;
        this.loading = false;
      }
    );
  }

}
