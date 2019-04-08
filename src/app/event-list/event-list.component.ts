import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
    selector    : 'app-event-list',
    templateUrl : './event-list.component.html',
    styleUrls   : [ './event-list.component.css' ]
})
export class EventListComponent implements OnInit {
    items: Observable<any[]>;

    constructor(db: AngularFirestore) {
        this.items = db.collection('events').valueChanges();
    }

    ngOnInit() {
    }

}
