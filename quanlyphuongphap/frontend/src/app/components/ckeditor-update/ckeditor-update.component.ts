import { Component, OnInit, AfterContentInit } from '@angular/core';
declare var CKEDITOR:any;
@Component({
  selector: 'app-ckeditor-update',
  templateUrl: './ckeditor-update.component.html',
  styleUrls: ['./ckeditor-update.component.css']
})
export class CkeditorUpdateComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    CKEDITOR.replace( 'ckeditorUpdate' );
  }
}
