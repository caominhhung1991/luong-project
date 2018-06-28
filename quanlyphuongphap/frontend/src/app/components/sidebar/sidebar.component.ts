import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppServiceService } from '../../services/app-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() truyenLoaiToAddModal = new EventEmitter();
  @Output() truyenLoaiToHeader = new EventEmitter();
  @Output() truyenMethodToDisplay = new EventEmitter();
  @Output() goToBottom = new EventEmitter();

  methods:any = [{title: "Chưa có dữ liệu"}];
  methodSelected:any = this.methods[0];
  loai:string;
  baolois = [];
  baoloi = '';
  baoloiSelected = [];

  isActive: boolean = false;
  showMenu: string = '';
  pushRightClass: string = 'push-right';

  admin: Boolean;
    // this.admin = false;
    // this.admin = this.appService.checkAdmin();

  constructor(
    private appService: AppServiceService
  ) { 
    this.checkLocalStorageLoai();
    this.admin = false;
  }

  ngOnInit() {
    this.admin = this.appService.checkAdmin();
    // this.choosePagination(1);
  }

  truyenLoaiToModalEmit() {
    this.truyenLoaiToAddModal.emit(this.loai);
  }
  truyenLoaiToHeaderEmit() {
    this.truyenLoaiToHeader.emit(this.loai);
    this.baoloi = '';
  }
  chooseMethod(method, event) {
    this.methodSelected = method;
    this.truyenMethodToDisplay.emit(method);
  }

  choose(loai) {
    this.loai = loai;
    localStorage.setItem('loai', this.loai);
  }

  checkLocalStorageLoai() {
    if (localStorage.getItem('loai') == null) {
        localStorage.setItem('loai', this.loai);
    }
    this.loai = localStorage.getItem('loai');
  }


  eventCalled() {
    this.isActive = !this.isActive;
  }
 
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  } 

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }
 
  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

  chooseBaoLoi(baoloi) {
    this.baoloiSelected = baoloi;
    this.appService.getMethodById(baoloi.method_id).then(res => {
      let comments = res.data[0].comments;
      comments.sort(function(a, b) {
        return b.created_time.localeCompare(a.created_time)
      })
      this.truyenMethodToDisplay.emit(res.data[0]);
    }, res => {
      console.log(res);
    })
  }

  goToBottomEmit() {
    this.goToBottom.emit("nothing");
  }

  methodsALL;
  currentPage = 0; // vi tri hien tai dang chon
  numPerPage = 10; // so luong hien thi tren 1 trang
  numPages; // so luong trang 
  numbers = [];

  paginationComments() {
    this.methodsALL = this.methods;
    if (this.methods) {
      this.numPages = Math.ceil(this.methods.length / this.numPerPage);
      this.numbers = [];
      for (let i = 1; i <= this.numPages; i++) {
        this.numbers.push(i)
      }
      this.methods = this.methodsALL
        .slice(this.currentPage * this.numPerPage, (this.currentPage + 1) * this.numPerPage);
    }

  }

  setCurrentPage(number) {
    this.currentPage = number;
    this.paginationComments();
  } 

  next() {
    if (this.currentPage < this.numPages - 1) {
      this.currentPage++;
      this.choosePagination(this.currentPage+1);
      this.methods = this.methodsALL
        .slice(this.currentPage * this.numPerPage, (this.currentPage + 1) * this.numPerPage);
    }
  } 

  previous() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.choosePagination(this.currentPage+1);
      this.methods = this.methodsALL
        .slice(this.currentPage * this.numPerPage, (this.currentPage + 1) * this.numPerPage);
    }
  }

  selectedPagination = 1;

  choosePagination(number) {
    this.selectedPagination = number;
    this.currentPage = number - 1;
    this.methods = this.methodsALL
        .slice((this.currentPage) * this.numPerPage, (this.currentPage + 1) * this.numPerPage);
  }



}
