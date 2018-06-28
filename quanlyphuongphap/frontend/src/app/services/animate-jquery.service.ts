import { Injectable } from '@angular/core';
declare var $:any;

@Injectable()
export class AnimateJqueryService {

  constructor() { }

  fadeIn(id) {
    $(`#${id}`).toggleClass("fadeIn");
    setTimeout(()=> {
      $(`#${id}`).toggleClass("fadeIn");
    }, 400)
  }
}
