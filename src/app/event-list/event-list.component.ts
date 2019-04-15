import {Component, NgModule, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
    selector    : 'app-event-list',
    templateUrl : './event-list.component.html',
    styleUrls   : [ './event-list.component.css' ],
})

@NgModule({
    // imports : [ NguCarouselModule ]
})

export class EventListComponent implements OnInit {
    items: Observable<any[]>;

    constructor(db: AngularFirestore) {
        this.items = db.collection('events').valueChanges();
    }

    ngOnInit() {
    }
}

