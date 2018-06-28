import { Component, OnInit, AfterContentInit } from '@angular/core';
declare var CKEDITOR:any;

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    CKEDITOR.replace( 'ckeditor', {
      extraPlugins:'mathjax'
    });
    // console.log(CKEDITOR.config);
  }

  getContentNhapTay() {

  }
}
