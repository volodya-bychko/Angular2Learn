import { Component, OnInit, InjectionToken  } from '@angular/core';
import { ConstantsService } from '../services/constants/constants.service'
import { About } from '../models/about'

const aboutServiceInstance = new ConstantsService();

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    { provide: ConstantsService, useValue: aboutServiceInstance },
  ]
})
export class AboutComponent implements OnInit {
 content: About;

  constructor(private aboutService: ConstantsService) { }

  ngOnInit() {
    this.content = this.aboutService.ABOUT;
  }

}
