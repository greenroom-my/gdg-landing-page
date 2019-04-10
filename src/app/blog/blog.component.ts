import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    items: Observable<any[]>;

    constructor(db: AngularFirestore) {
        this.items = db.collection('blog').valueChanges();
    }

    ngOnInit() {
    }

}
