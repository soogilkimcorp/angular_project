import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var BubbleChart: any;

@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit {
  id:string;
  data:any = [{
    "label": "LOTTE",
    "size": 139,
    "count": 139,
    "tipo": "LOTTE",
    "year": 2012
  }, {
      "label": "INS",
      "size": 36,
      "count": 36,
      "tipo": "INS",
      "year": 2013
  }, {
      "label": "MINDS",
      "size": 63,
      "count": 63,
      "tipo": "MINDS",
      "year": 2016
  }, {
      "label": "LAB",
      "size": 211,
      "count": 211,
      "tipo": "LAB",
      "year": 2010
  }, {
      "label": "SEOUL",
      "size": 28,
      "count": 28,
      "tipo": "SEOUL",
      "year": 2015
  }, {
      "label": "Management",
      "size": 99,
      "count": 99,
      "tipo": "Management",
      "year": 2010
  }, {
      "label": "MUNICIPALIDAD",
      "size": 256,
      "count": 256,
      "tipo": "MUNICIPALIDAD",
      "year": 2014
  }, {
      "label": "LÁZARO",
      "size": 53,
      "count": 53,
      "tipo": "LÁZARO",
      "year": 2011
  }, {
      "label": "ELIZARDO AQUINO",
      "size": 173,
      "count": 173,
      "tipo": "ELIZARDO AQUINO",
      "year": 2011
  }, {
      "label": "FILADELFIA",
      "size": 22,
      "count": 22,
      "tipo": "FILADELFIA",
      "year": 2010
  }];

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(
      params => {
          this.id = params["id"];
        }
    );

    console.log(route.params, this.id)
  }

  ngOnInit() {
  }

  /*
  ////////////////// 외부 자바스크립트 라이브러리의 실행 ////////////////////////////////////////
  1.
  "scripts": [ // angular-cli.json 원하는 es5 이하 스크립트 라이브러리를 등록한다.
    "../node_modules/bubbles-chart.full.js"
  ],

  2.  
  declare var BubbleChart: any; // component import등 호출부 상단에 역참조 변수 선언을 한다(안해도 es5는 실행되지만 터미널에서 에러가 발생하므로 에러방지 차원에서 선언 함)

  3.
  ngAfterViewInit(): void { // ngAfterViewInit 후크를 선언후 안에다 es5 코딩 ngOnInit 후크안에 넣어도 작동됨(초기화 후크에 넣는것이 핵심)
    // es5 코딩
  }
  
  4.
  ng serve // 모든 작업후 서버 재시작
  */

  ngAfterViewInit(): void {

    let options = {
        container: "#test",
        label: "label",
        size: "size"
    };

    let viz = new BubbleChart(options);
    viz.data(this.data);

    console.log(viz)

    // 마우스 이벤트로 적용시
    // var d = this.data;

    // function call() {
    //   let options = {
    //     container: "#test",
    //     label: "label",
    //     size: "size"
    //   };
    //   let viz = new BubbleChart(options);
    //   viz.data(d);
    // }

    // document.addEventListener("mousedown", call);
  }

}
