import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppServiceService } from '../../../services/app-service.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.css']
})
export class NavFilterComponent implements OnInit {
  collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  tam: string = "";
  mons = [];
  lops = [];
  chuongs = [];
  bais = [];
  methods = [];
  tenmon; tenlop; tenchuong;
  @Input() loai: string;
  @Output() truyenMethodsToSidebar = new EventEmitter();
  @Output() truyenMethodToPhuongPhap = new EventEmitter();
  baoloi = '';
  checkChuong = true;
  checkBai = true;
  checkLopChuyende: boolean = false;
  LopChuyende: string;
  // color primary
  color1_bg = '#0069d9';
  color1_color = '#fff';
  color1_border = '#0062cc';
  // color warning
  color2_bg = '#ffc107';
  color2_color = '#212529';
  color2_border = '#ffc107';

  constructor(
    private appService: AppServiceService
  ) {
    this.LopChuyende = 'Lớp';
    this.loai = localStorage.getItem('loai');
    this.queryMethodTree();
  }

  ngOnInit() {
    this.check();
    this.queryMethod();
  }

  queryMethodTree() {
    this.resetMonsLopsChuongsBais(true, true, true, true);
    this.appService.getListMethodByMethod(this.loai).then(res => {
      this.methods = res.data;
      this.monsHandle();
      this.lopsHandle();
      this.chuongsHandle();
      this.baisHandle();
      this.queryMethod();
    });
  }

  chonMon(event) {
    // we have had tenmon
    this.resetMonsLopsChuongsBais(false, true, true, true);
    this.tenmon = event.target.value;
    this.lopsHandle();
    this.chuongsHandle();
    this.baisHandle();
  }

  chonLop(event) {
    // we have had tenmon, tenlop
    this.resetMonsLopsChuongsBais(false, false, true, true);
    this.tenlop = event.target.value;
    this.chuongsHandle();
    this.baisHandle();
  }

  chonChuong(event) {
    // we have had tenmon, tenlop, tenchuong
    this.resetMonsLopsChuongsBais(false, false, false, true);
    this.tenchuong = event.target.value;
    this.baisHandle();
  }

  chonBai(event) {
  }

  check() {
    if (this.LopChuyende === 'Lớp') {
      this.checkLopChuyende = false;
    } else {
      this.checkLopChuyende = true;
    }
  }

  // Toogle Lớp and Chương
  changeLopChuyende() {
    if (this.LopChuyende == 'Lớp') {
      this.LopChuyende = 'Chuyên đề';
    } else {
      this.LopChuyende = 'Lớp';
    }
    this.check();
    this.queryMethod();
  }

  // Call to server to get data 
  // 1. công thức/ phương pháp  - this.loai
  // 2. Môn                     - mon
  // 3. 1-lớp/ 2-chuyên đề      - this.LopChuyenDe
  // 3. Lớp                     - lop
  // 4. Chương 
  // 5. Bài 
  queryMethod() {
    let mon = $("#mon").val();
    let lop = $("#lop").val();
    let chuong = this.checkChuong ? $("#chuong").val() : 'empty';
    let bai = this.checkBai ? $("#bai").val() : 'empty';
    // console.log(this.loai, mon, this.LopChuyende, lop, chuong, bai);
    let tam = this.loai == "công thức"? "congthuc": "phuongphap";
    this.appService.findById(tam, mon, this.LopChuyende, lop, chuong, bai)
      .then(res => {
        if (res.data.length == 0) {
          res.data = [{
            title: "Nhấn tìm để lấy dữ liệu"
          }]
        }
        this.truyenMethodsToSidebar.emit(res.data);
        this.truyenMethodToPhuongPhap.emit(res.data[0]);
      }, res => {
        console.log(res);
      })

  }

  
  toggleChuong() {
    this.checkChuong = !this.checkChuong;
    this.checkBai = this.checkChuong;
    console.log('chuong: ' + this.checkChuong);
    let display = this.checkChuong == false ? 'none' : 'block';
    $("#chuong").css("display", display, "important");
    $("#bai").css("display", display, "important");
    this.queryMethod();
  }

  toggleBai() {
    if (this.checkChuong == false) return;
    this.checkBai = !this.checkBai;
    console.log('bai:' + this.checkBai);
    let display = this.checkBai == false ? 'none' : 'block';
    $("#bai").css("display", display, "important");
    this.queryMethod();
  }

  // if array == true, array will be reset
  resetMonsLopsChuongsBais(mons, lops, chuongs, bais) {
    this.mons = mons == false ? this.mons : [];
    this.lops = lops == false ? this.lops : [];
    this.chuongs = chuongs == false ? this.chuongs : [];
    this.bais = bais == false ? this.bais : [];
  }

  monsHandle() {
    for (let method of this.methods) {
      if (this.mons.indexOf(method.mon) == -1) {
        this.mons.push(method.mon);
      }
    }
    this.tenmon = this.mons.sort(this.collator.compare)[0];
  }

  lopsHandle() {
    for (let method of this.methods) {
      if (this.lops.indexOf(method.lop) == -1 && method.loai == "Lớp" && method.mon == this.tenmon) {
        this.lops.push(method.lop);
      }
    }
    this.tenlop = this.lops.sort(this.collator.compare)[0];
  }

  chuongsHandle() {
    for (let method of this.methods) {
      if (this.chuongs.indexOf(method.chuong) == -1 && method.loai == "Lớp" && method.mon == this.tenmon && method.lop == this.tenlop) {
        this.chuongs.push(method.chuong);
      }
    }
    this.tenchuong = this.chuongs.sort(this.collator.compare)[0]; // 6.
  }
  
  baisHandle() {
    for (let method of this.methods) { // 7.
      if (this.bais.indexOf(method.bai) == -1 && method.loai == "Lớp" && method.mon == this.tenmon && method.lop == this.tenlop && method.chuong == this.tenchuong) {
        this.bais.push(method.bai);
      }
    }
    this.bais.sort(this.collator.compare);
  }

}
