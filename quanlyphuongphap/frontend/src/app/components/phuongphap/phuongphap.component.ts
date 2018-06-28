import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppServiceService } from '../../services/app-service.service';
declare var $: any;
@Component({
  selector: 'app-phuongphap',
  templateUrl: './phuongphap.component.html',
  styleUrls: ['./phuongphap.component.css']
})
export class PhuongphapComponent implements OnInit {
  @Output() truyenMethodToUpdate = new EventEmitter();
  @Output() truyenXoaBaoLoiToHeader = new EventEmitter();
  method: any = { comments: [] };
  methodCurrent: any = null;
  commentsNum;
  checkEdit = true;
  admin: Boolean;
  checkOpenVideo: Boolean = false;
  // checkOpenVideo: Boolean = true;

  constructor(
    private appService: AppServiceService
  ) {
    this.admin = false;
  }

  ngOnInit() {
    this.choosePagination(1);
    $("#selectNumsPerPage").val("5")
    this.admin = this.appService.checkAdmin();
  }


  check() {
    if (this.method.title == 'Nhấn tìm để lấy dữ liệu') {
      this.checkEdit = true;
    } else {
      this.checkEdit = false;
    }
    // sort comments by time soon
  }

  gotoBottom() {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  }

  goToBottom() {
    $("html, body").animate({ scrollTop: 3000 }, 1000);
    // console.log("gotoTop")
  }

  gotoTop(number) {
    // $(window).scrollTop(number, number);
    $("html, body").animate({ scrollTop: $(document).height() }, 4000);
    console.log("gotoTop")
  }

  truyenMethodToUpdateEmit() {
    this.truyenMethodToUpdate.emit(this.method);
  }

  commentsALL;
  comments;
  currentPage = 0;
  numPerPage = 5;
  numPages;
  numbers = [];

  paginationComments() {
    this.commentsALL = this.method.comments;
    if (this.method.comments) {
      this.numPages = Math.ceil(this.method.comments.length / this.numPerPage);
      this.numbers = [];
      for (let i = 1; i <= this.numPages; i++) {
        this.numbers.push(i)
      }
      this.comments = this.commentsALL
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
      this.choosePagination(this.currentPage + 1);
      this.paginationComments();
    }
  }

  previous() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.choosePagination(this.currentPage + 1);
      this.paginationComments();
    }
  }
  selectedPagination;

  choosePagination(number) {
    this.selectedPagination = number;
  }

  changeCurrentPage(event) {
    console.log(event.target.value);
    this.numPerPage = parseInt(event.target.value);
    this.paginationComments();
  }

  // Delete comment from comments and add to comments_delete
  deleteComment(comment) {
    for (let i = 0; i < this.method.comments.length; i++) {
      if (comment._id == this.method.comments[i]._id) {
        let commentTam = this.method.comments[i];
        commentTam.deleted_time = new Date();
        this.method.comments_delete.push(commentTam);
        this.method.comments.splice(i, 1);
        this.paginationComments();
        break;
      }
    }
    console.log(this.method);

    this.appService.deleteBaoLoiById(comment._id).then(res => {
      this.appService.updateMethod(this.method).then(res => {
        this.truyenXoaBaoLoiToHeader.emit(1);
        // alert("Xoa báo lỗi thành công!");
      }, res => console.log(res))
    }, res => console.log(res))
  }

  openVideo(event) {
    console.log(event.target);
    let user = JSON.parse(localStorage.user);
    console.log(user);
    if (this.checkOpenVideo === false) {
      this.checkOpenVideo = true;
    }
  }

  handleVideo(method) {
    console.log('check video dang dc chon hay chua')
    if(method !== this.methodCurrent) {
      this.checkOpenVideo = false;
      this.methodCurrent = method;
    }
  }
}
