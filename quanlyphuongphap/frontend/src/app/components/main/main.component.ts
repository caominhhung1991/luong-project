import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AppServiceService } from '../../services/app-service.service';
declare var $:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('header') header;
  @ViewChild('addMethodModal') addMethodModal;
  @ViewChild('sidebar') sidebar;
  @ViewChild('navFilter') navFilter;
  @ViewChild('phuongphap') phuongphap;
  @ViewChild('updateMethodModal') updateMethodModal;

  constructor(
    private appService: AppServiceService
  ) { }

  ngAfterViewInit() {
    $('[data-toggle="tooltip"]').tooltip(
      {
        delay: {"show":400, "hide": 100}
      }
    )
}

  // Hàm truyền tới component AppAddMethodModal
  truyenLoaiToAddModal(loai) {
    this.addMethodModal.loai = loai;
    console.log("\ncomponent parent nhận từ header và truyền cho modal add \n" + loai);
  }

  truyenLoaiToSidebar(loai) {
    this.sidebar.loai = loai;
    this.navFilter.loai = loai;
    this.sidebar.baoloi = '';
    this.navFilter.baoloi = '';
  }

  truyenLoaiToHeader(loai) {
    this.header.loai = loai;
    this.header.baoloi = '';
    this.navFilter.loai = loai;
    this.navFilter.baoloi = '';
  }
 
  truyenMethodsToSidebar(methods) {
    this.sidebar.methods = methods;
    this.sidebar.methodSelected = methods[0];
    this.sidebar.setCurrentPage(0);
  }
 
  truyenMethodToDisplay(method) {
    this.phuongphap.handleVideo(method);
    this.phuongphap.method = method;
    this.phuongphap.check();
    this.phuongphap.setCurrentPage(0);
    
    this.updateMethodModal.countNhapTay = 1;
    this.updateMethodModal.nhaptayHidden = true;
    this.updateMethodModal.displayContentNhapTay = true;
  } 
  
  truyenMethodToUpdate(method) {
    this.updateMethodModal.nhanMethodFromPhuongPhap(method);

  }
  queryMethod(nothing) {
    // this.navFilter.methods
    this.navFilter.queryMethodTree();
    // this.navFilter.queryMethod();
  }
  queryMethodTree(nothing) {
    // this.navFilter.qu
  }

  queryMethodToUpdate(nothing) {
    this.navFilter.queryMethodTree();
    this.navFilter.queryMethod();
  }

  truyenBaoLoisToSideBar(baolois) {
    this.sidebar.baolois = baolois;
    this.sidebar.baoloiSelected = baolois[0];
    this.sidebar.baoloi = 'Báo lỗi';
    this.navFilter.baoloi = 'Báo lỗi';
    console.log(baolois[0])
    if(baolois[0] !== undefined) {
      this.appService.getMethodById(baolois[0].method_id).then(res => {
        let comments = res.data[0].comments;
        comments.sort(function(a, b) {
          return b.created_time.localeCompare(a.created_time)
        })
        this.phuongphap.method = res.data[0];
        this.phuongphap.gotoBottom();
        this.phuongphap.check();
        this.phuongphap.setCurrentPage(0);
      }, res => {
        console.log(res);
      })
    }
    
  }

  truyenXoaBaoLoiToHeader(event) {
    this.header.baolois_length = this.header.baolois_length - event;
  }

  goToBottom(event) {
    this.phuongphap.gotoBottom();
  }
}
