import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Gabriel isleno resume';
  age?:number;
  language?:string;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
}

  ngOnInit(): void {
    const today = moment();
    const bday = moment('1994-30-07', 'YYYY-DD-MM');

    this.age = today.diff(bday, 'years');
  }

  toggleTranslation() {
    if (this.translate.currentLang == 'es') {
      this.translate.use('en');
    }
    else {
      this.translate.use('es');
    }
  }
}
