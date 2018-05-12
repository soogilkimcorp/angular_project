import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-userlist',
    templateUrl: './userlist.component.html',
    styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

    names: string[];

    constructor() {
        this.names = ["Ari", "Calos", "Felipe", "Nate"];
    }

    ngOnInit() {
        
    }

}
