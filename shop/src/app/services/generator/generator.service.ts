import { Injectable, InjectionToken } from '@angular/core';

export const Generator = new InjectionToken<GeneratorService>('Generator');


@Injectable()
export class GeneratorService {
  constructor(private length: number) {
   }

  getRandomString(): string{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < this.length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
