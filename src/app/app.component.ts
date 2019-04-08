import {Component} from '@angular/core';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector    : 'app-root',
    templateUrl : './app.component.html',
    styleUrls   : [ './app.component.scss' ],
})

export class AppComponent {
    title = 'gdg';
    faArrowRight = faArrowRight;
    faFacebookF = faFacebookF;
    faTwitter = faTwitter;
    faInstagram = faInstagram;
}
