import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../../services/app-service.service';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
    @Output() truyenLoaiToAddModal = new EventEmitter();
    @Output() truyenLoaiToSidebar = new EventEmitter();
    @Output("queryMethod") queryMethod = new EventEmitter();
    @Output("queryMethodTree") queryMethodTree = new EventEmitter();
    @Output("truyenBaoLoisToSideBar") truyenBaoLoisToSideBar = new EventEmitter();
    @Output("truyenMethodsToSidebar") truyenMethodsToSidebar = new EventEmitter();
    pushRightClass: string = 'push-right';
    loai: string = 'phương pháp';
    baolois = [];
    baolois_length = 0;
    arrayCheckBaoLoiExisted = [];

    admin: Boolean;
    // this.admin = false;
    // this.admin = this.appService.checkAdmin();
    constructor(
        private router: Router,
        private appService: AppServiceService
    ) {
        this.checkLocalStorageLoai();
        this.admin = false;
    }

    ngOnInit() {
        this.getBaoLois();
        this.admin = this.appService.checkAdmin();
        console.log(this.admin);
    }

    ngAfterViewInit() {
       
    }

    truyenLoaiToSidebarEmit() {
        if (this.loai == '') {
            this.truyenLoaiToSidebar.emit('');
        } else {
            this.truyenLoaiToSidebar.emit(this.loai);
        }

    }

    truyenLoaiToModalEmit() {
        if (this.loai == '') {
            this.loai = 'phương pháp';
            this.baoloi = '';
            this.truyenLoaiToAddModal.emit(this.loai);
            this.truyenLoaiToSidebar.emit(this.loai);
        } else {
            this.truyenLoaiToAddModal.emit(this.loai);

        }
    }

    checkLocalStorageLoai() {
        if (localStorage.getItem('loai') == null) {
            localStorage.setItem('loai', this.loai);
        }
        this.loai = localStorage.getItem('loai');
    }

    choose(loai) {
        this.loai = loai;
        this.baoloi = '';
        localStorage.setItem('loai', this.loai);
        this.queryMethodTree.emit('');
    }

    baoloi = '';

    chooseBaoLoi(baoloi) {
        // baoloi = "báo lỗi"
        this.baoloi = baoloi;
        this.loai = '';
        this.truyenBaoLoisToSideBar.emit(this.baolois);
        // console.log("truyen bao loi")
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    // pushRightClass: string = 'push-right';
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

    changeLang(language: string) {
        // this.translate.use(language);
    }

    queryMethodFunc() {
        this.queryMethod.emit("nothing");
    }

    queryMethodTreeFunc() {
        this.queryMethod.emit("nothing");
    }

    getBaoLois() {
        this.appService.getBaoLois().then(res => {
            for (let loi of res.data) {
                if (this.arrayCheckBaoLoiExisted.indexOf(loi.title) == -1) {
                    this.arrayCheckBaoLoiExisted.push(loi.title);
                    this.baolois.push(loi);
                }
            }
            // console.log(this.baolois)
            this.baolois_length = res.data.length;

        })
    }

    searchMethod() {
        let searchConent = $("#searchMethod").val().trim();
        // let searchConent = "a";
        // console.log(searchConent)
        this.appService.searchMethod(searchConent).then(res => {
            // console.log(res.data)
            $("#searchMethod").val("");
            $("#searchMethod").blur();
            this.truyenMethodsToSidebar.emit(res.data);
        })
    }

    logout() {
        localStorage.removeItem("user");
        this.router.navigate(['login'])
    }
}
