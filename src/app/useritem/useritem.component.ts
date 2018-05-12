import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-useritem',
    templateUrl: './useritem.component.html',
    styleUrls: ['./useritem.component.css']
})
export class UseritemComponent implements OnInit {
    @Input() name:string;
    addr:string;

    constructor() {
        this.addr = "Incheon";
    }

    ngOnInit() {
    }

}
