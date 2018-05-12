import { Component, Inject, ViewChild } from '@angular/core';
//////// loopback Import Module Start ////////
import { LoopBackConfig, LoopBackFilter } from './shared/sdk/index';
import { Members }  from './shared/sdk/models'
import { MembersApi } from './shared/sdk/services';
//////// loopback Import Module End ////////

import { Article } from './article/article.model';

declare var Chart:any;
Window['chartstorage'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles:Article[];
  ctx:any;
  @ViewChild("myCanvas") myCanvas:any;
  barChartData:any = {
    labels: ['January', 'February'],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: "#ff0000",
        data: [97, 24]
    }, {
        label: 'Dataset 2',
        backgroundColor: "#0000ff",
        data: [27, 99]
    }]

  };
  

  constructor(public membersApi:MembersApi) { // MembersApi Call
      this.articles = [
        new Article("Angular5", "http://angular.io", 10),
        new Article("Daum", "http://daum.net", 7),
        new Article("Naver", "http://naver", 4)
      ];
            
      // LoopBackConfig.filterOnUrl();
      this.findAll(); 
      // this.indertData();
      // this.updateData();
      // this.updateAttrsData();
      // this.deleteById("test18")
  }  

  findAll() {
    
    let filter:any = {
            where:{
                or:[
                    {comments:{like:'%하%'}}
                ]
            }
        };
    this.membersApi.find(filter).subscribe(
        result => {
            console.log(result, LoopBackConfig.isHeadersFilteringSet());
        }
    );
  }

  indertData() {
    let data = [
        {
            uid:"test15",
            password:"2222",
            name:"park",
            email:"park@naver.com",
            mobile_phone:"01066667777",
            phone:null,
            address:null,
            comments:null,
            regist_date:Date.now()
        },{
            uid:"test16",
            password:"2222",
            name:"kim",
            email:"kim@naver.com",
            mobile_phone:"01066667777",
            phone:null,
            address:null,
            comments:null,
            regist_date:Date.now()
        }
    ];

    this.membersApi.create(data).subscribe(
        result => {
            console.log(result);
        }
    );
  }

  updateData() {
    let data = {
        uid:"test10",
        password:"7777",
        name:"park10",
        email:"park7@naver.com",
        mobile_phone:"01066667777",
        phone:null,
        address:null,
        comments:null,
        regist_date:Date.now()
    };

    let whereobj = {
        or:[
            {uid:"test10"}
        ]
    };

    this.membersApi.updateAll(whereobj, data).subscribe(
        result => {
            console.log(result)
        }
    );
  }

  updateAttrsData() {
    let data = {
        password:"00000",
        name:"park10",
        email:"park10@naver.com",
        mobile_phone:"01066667777",
        phone:"03211112222",
        address:"Incheon",
        comments:"HaHaHa",
        regist_date:Date.now()
    };

    this.membersApi.updateAttributes("test10", data).subscribe(
        result => {
            console.log(result)
        }
    );
  }
        
  deleteById(_id) {
    this.membersApi.deleteById(_id).subscribe(
        result => {
            console.log(result)
        }
    );
  }

  addAticle(title:HTMLInputElement, link:HTMLInputElement):boolean {
      console.log(title.value+":"+link.value);
      this.articles.push(new Article(title.value, link.value, 0));
      title.value = "";
      link.value = "";
      return false;
  }

  articleValueEvent(article:Article):void {
      console.log(article);
  }

  sortedArticle():Article[] {
      return this.articles.sort(
          (a:Article, b:Article) => b.votes - a.votes
      );
  }

  ngAfterViewInit(): void {
    
    this.callChart()
    
    
  }

  callChart() {
    this.ctx = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
	Window['chartstorage'] = new Chart(this.ctx, {
		type: 'bar',
		data: this.barChartData,
		options: {
			title: {
				display: true,
				text: 'Chart.js Bar Chart - Stacked'
			},
			tooltips: {
				mode: 'index',
				intersect: false
			},
			responsive: true,
			scales: {
				xAxes: [{
					stacked: true,
				}],
				yAxes: [{
					stacked: true
				}]
			}
		}
    });
  }

  callUpdate() {
    
    Window['chartstorage'].data.datasets = [{
        label: 'Dataset 1',
        backgroundColor: "#ff0000",
        data: [50, 50]
    }, {
        label: 'Dataset 2',
        backgroundColor: "#0000ff",
        data: [50, 50]
    }]
    Window['chartstorage'].update()

  }

}
