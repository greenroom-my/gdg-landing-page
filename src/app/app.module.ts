import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {EventListComponent} from './event-list/event-list.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {BlogComponent} from './blog/blog.component';
import {BannerComponent} from './banner/banner.component';

@NgModule({
    declarations : [
        AppComponent,
        NavbarComponent,
        EventListComponent,
        BlogComponent,
        BannerComponent
    ],
    imports      : [
        AngularFireModule.initializeApp(environment.firebase),
        BrowserModule,
        FontAwesomeModule,
        NoopAnimationsModule,
        AngularFirestoreModule,
    ],
    providers    : [],
    bootstrap    : [ AppComponent ]
})

export class AppModule {}
