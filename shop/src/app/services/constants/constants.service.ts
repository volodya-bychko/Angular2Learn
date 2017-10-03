import { Injectable } from '@angular/core';
import { About } from '../../models/about'

@Injectable()
export class ConstantsService {

  public get ABOUT(): About{
    const about = new About();
    about.App = "Online Shop";
    about.Ver = 1.3;

    return about;
  }

}
