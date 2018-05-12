import { Component, OnInit, HostBinding, Input, Output ,EventEmitter } from '@angular/core';
import { Article } from './article.model';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

    @HostBinding("attr.class") cssClass="row";
    @Input() article:Article;
    @Output() onArticleSelected:EventEmitter<Article>;
    @Input() number:number;
    isBoolean:boolean;

    constructor() {
        this.onArticleSelected = new EventEmitter();
        this.isBoolean = true;
        // this.article = new Article(
        //     "Angular5",
        //     "http://angular.io",
        //     10
        // );
    }

    voteUp():boolean {
        this.article.voteUp();
        return false;
    }

    voteDown():boolean {
        this.article.voteDown();
        return false;
    }

    articleSelected():void {
        this.onArticleSelected.emit(this.article);
    }

    ngOnInit() {
    }

}
