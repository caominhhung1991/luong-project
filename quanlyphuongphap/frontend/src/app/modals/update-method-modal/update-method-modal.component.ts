import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppServiceService } from '../../services/app-service.service';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Method } from '../../models/method';
declare var $: any;
declare var jquery: any;
declare var CKEDITOR: any;
declare var html2canvas: any;
@Component({
  selector: 'app-update-method-modal',
  templateUrl: './update-method-modal.component.html',
  styleUrls: ['./update-method-modal.component.css']
})
export class UpdateMethodModalComponent implements OnInit {
  method_: Method;
  @Output("queryMethodToUpdate") queryMethodToUpdate = new EventEmitter();
  @Output() truyenXoaBaoLoiToHeader = new EventEmitter();
  method: any = {};
  CHON_HINH = "Chọn hình";
  CHON_VIDEO = "Chọn Video";
  LTCount = 1;
  VCount = 1;

  LopChuyende: string;
  checkLopChuyende: boolean = true;
  nhaptayHidden = true;
  displayContentNhapTay = true;
  // Time to save with file
  createdDate;

  videoURL = 'Chọn video';
  // color primary - phương pháp
  color1_bg = '#0069d9';
  color1_color = '#fff';
  color1_border = '#0062cc';
  // color warning - công thức
  color2_bg = '#ffc107';
  color2_color = '#212529';
  color2_border = '#ffc107';

  constructor(
    private http: Http,
    private appService: AppServiceService
  ) {
    this.LopChuyende = 'Lớp';
    // this.checkLocalStorageLoai();
  }

  ngOnInit() {
    this.initMethod();
  }
  // Lưu phương pháp/chuyên đề
  // Và nếu lưu thành công sẽ reset lại modal
  updateMethod() {
    // id #...Modal ý chỉ id trong modal để tránh nhầm lẫn với id có trong phương pháp
    this.checkValidation().then(res => {
      // console.log("success" + res);
      this.method.title = $("#method-name-update").val();

      let url_upload = "";
      let nhaptay_name = "";
      // kiem tra nhaptay da nhap hay chua.
      // neu 
      if (this.method.loai == 'Chuyên đề') {
        url_upload = `${this.xulikhoangtrang(this.method.method)}/${this.xulikhoangtrang(this.method.mon)}/${this.xulikhoangtrang(this.method.loai)}`;
        nhaptay_name = `${this.createdDate}_${this.xulikhoangtrang(this.method.title)}nhaptay.png`;
      } else {
        url_upload = `${this.xulikhoangtrang(this.method.method)}/${this.xulikhoangtrang(this.method.mon)}/${this.xulikhoangtrang(this.method.loai)}/${this.xulikhoangtrang(this.method.lop)}/${this.xulikhoangtrang(this.method.chuong)}`;
        nhaptay_name = `${this.createdDate}_${this.xulikhoangtrang(this.method.bai)}-${this.xulikhoangtrang(this.method.title)}nhaptay.png`;
      }
      // 1. query tất cả input Lý Thuyết
      // 4. Cập nhật lại danh sách hình
      let LTfiles = $('.lythuyetUpdate-input');
      for (let file of LTfiles) {
        if (file.files[0]) {
          // let indexHinh = this.appService.arrayObjectIndexOf(LTfiles, file);
          // this.method.images[indexHinh] = file.files[0].name;
          this.uploadFile(file, 'hinh/' + url_upload);
        }
      }

      // 1. query tất cả input Video
      let Vfiles = $('.video-input');
      for (let file of Vfiles) {
        if (file.files[0]) {
          // let indexVideo = this.appService.arrayObjectIndexOf(Vfiles, file);
          // this.method.videos[indexVideo] = file.files[0].name;
          this.uploadFile(file, 'video' + url_upload);
        }
      }

      // delete old image/video name to update;
      this.method.images = [];
      this.method.videos = [];
      let labelLTUpdate = $(".labelLTUpdate");
      for (let i = 0; i < labelLTUpdate.length; i++) {
        this.method.images[i] = $(`#${labelLTUpdate[i].id}`).html();
        console.log(this.method.images[i])
      }

      this.xemContentNhapTay();

      if (this.displayContentNhapTay === false) {
        let indexOfNhapTay = -1;
        this.method.contentNhapTay = this.getContentNhapTay();
        console.log(this.method.contentNhapTay)
        for (let i = 0; i < this.method.images.length; i++) {
          if (this.method.images[i].indexOf("nhaptay") !== -1) {
            indexOfNhapTay = i;
            break;
          }
        }

        if (this.method.contentNhapTay != "") {
          if (indexOfNhapTay == -1) {
            this.method.images.push(`${nhaptay_name}`);
          } else {
            this.method.images[indexOfNhapTay] = `${nhaptay_name}`;
          }

          this.change2Canvas(url_upload, nhaptay_name);
        }
      }

      let labelVUpdate = $(".labelVUpdate");
      for (let i = 0; i < labelVUpdate.length; i++) {
        this.method.videos[i] = $(`#${labelVUpdate[i].id}`).html();
      }
      console.log(this.method);
      // lưu thông qua service app-service.service.ts
      // 1. Nếu lưu thành công thì alert "Lưu thành công" và reset lại modal
      // 2. Nếu lưu thất bại in ra console

      this.appService.updateMethod(this.method).then(res => {
        console.log(this.appService.messages.updateSuccess)
        alert(this.appService.messages.updateSuccess);
        $("#updateMethodModal").modal("hide");
        // location.reload();
      }, res => console.log(res))

    }, res => {
      console.log("fail" + res)
    });
  }

  xoaMethod() {
    let checkConfirm = confirm("Khi chọn OK dữ liệu sẽ bị xóa mất trên hệ thống và không thể phục hồi!");
    if (checkConfirm) {
      for (let comment of this.method.comments) {
        this.appService.deleteBaoLoiById(comment._id).then(res => {
        }, res => console.log(res))
      }
      this.appService.addMethodToMethodDeleted(this.method).then(res => {

      }, res => console.log(res))

      this.appService.deleteMethod(this.method).then(res => {
        $("#updateMethodModal").modal('hide');
        this.queryMethodToUpdate.emit("12345");
        // this.navFilterComponent.queryMethod();
      }, res => console.log(res));
    }
    this.truyenXoaBaoLoiToHeader.emit(this.method.comments.length);
  }

  // Kiểm tra hợp lệ trước khi update hoặc upload video
  checkValidation(): Promise<any> {
    $('#hinh-feedback-update').css('display', 'none');
    $('#video-feedback-update').css('display', 'none');
    $('#method-name-feedback-update').css('display', 'none');

    // Kiểm tra trường nhập yêu cầu nhập tên không đc để trống    
    let methodName = $("#method-name-update").val();
    if (methodName === '') {
      $('#method-name-feedback-update').css('display', 'block');
      return Promise.reject(false);
    }

    // labelUpdate
    // Kiểm tra input image không được để trống vì nó ảnh hưởng tới index khi update
    let labelLTUpdate = $(".labelLTUpdate");
    for (let item of labelLTUpdate) {
      if ($(`#${item.id}`).html() == this.CHON_HINH) {
        $('#hinh-feedback-update').css('display', 'block');
        return Promise.reject(false);
      }
    }
    let labelVUpdate = $(".labelVUpdate");
    for (let item of labelVUpdate) {
      if ($(`#${item.id}`).html() == this.CHON_VIDEO) {
        $('#video-feedback-update').css('display', 'block');
        return Promise.reject(false);
      }
    }

    return Promise.resolve(true);
  }

  uploadFile(file, location) {
    console.log(location)
    const url = '/upload/photos';
    let formData = new FormData();
    let files: Array<File> = <Array<File>>file.files;
    formData.append(location, files[0], files[0].name);
    this.http.post(url, formData)
      .map(files => files.json())
      .subscribe(files => console.log("files", files));
  }

  onChangeImage(lythuyetURL, nameFile, labelId, url) {
    $(`#${lythuyetURL}`).attr('src', `../upload/hinh/${url}/${nameFile}`);
    $(`#${labelId}`).html(nameFile);
    // console.log(lythuyetURL)
  }

  onChangeVideo(videoURL, nameFile, labelId, xoaVUpdate, url) {
    $(`#${videoURL}`).html(`<source src="../upload/video/${url}/${nameFile}" type="video/mp4"></source>`)
    $(`#${xoaVUpdate}`).css("display", "block");
    $(`#${labelId}`).html(nameFile);
    // console.log(videoURL)
  }

  nhanMethodFromPhuongPhap(method) {
    this.method = method;
    console.log(this.method);
    $("#lythuyet-input-update").html('');
    $("#lythuyet-img-update").html('');
    $("#video-input-update").html('');
    $("#video-url-update").html('');
    this.LTCount = 1;
    this.VCount = 1;
    for (let i = 0; i < this.method.images.length; i++) {
      // <img id="lythuyet${this.LTCount}UpdateURL" class="img-fluid image ">
      this.addInputLyThuyet();
      // this.LTCount++;
      this.onChangeImage(`lythuyet${i + 1}UpdateURL`, this.method.images[i], `label${i + 1}Update`, this.method.url);
    }

    for (let i = 0; i < this.method.videos.length; i++) {
      this.addInputVideo();
      // this.VCount++;
      // this.onChangeVideo(`video${i + 1}UpdateURL`, this.method.videos[i], `labelV${i+1}Update`);
      this.onChangeVideo(`video${i + 1}UpdateURL`, this.method.videos[i], `labelV${i + 1}Update`, `xoaV${i + 1}Update`, this.method.url);
    }
    this.demHinhvaVideo();
  }
  /**
   * add and delete for lythuyet input
   */
  addInputLyThuyet() {
    let lythuyet_input = `
    <div id="lythuyet${this.LTCount}Update" class="input-group mb-1 lythuyet-input-img">
      <div class="custom-file">
        <input type="file" class="custom-file-input lythuyetUpdate-input" id="lythuyet${this.LTCount}Update-input" onchange="onChangeImage(event, 'lythuyet${this.LTCount}UpdateURL', 'btn-xoa${this.LTCount}Update', 'label${this.LTCount}Update');">
        <label id='label${this.LTCount}Update' class="custom-file-label labelLTUpdate" for="lythuyet${this.LTCount}Update">Chọn hình</label>
      </div>
    </div>
    `;
    let lythuyet_img = `
    <div id="xoa${this.LTCount}Update" class="col-md-4">
      <div class="container_">
        <img id="lythuyet${this.LTCount}UpdateURL" class="img-fluid image ">
        <div class="middle">
          <button id="btn-xoa${this.LTCount}Update" class="btn btn-danger" onclick="deleteImageInput('lythuyet${this.LTCount}Update-input', 'lythuyet${this.LTCount}UpdateURL', 'btn-xoa${this.LTCount}Update', 'label${this.LTCount}Update')">Xóa</button>
        </div>
      </div>
    </div>
    `
    $("#lythuyet-input-update").append(lythuyet_input);
    $("#lythuyet-img-update").append(lythuyet_img);
    this.LTCount++;
    this.demHinhvaVideo();
  }
  deleteInputLyThuyet() {
    if (this.LTCount > 1) {
      this.LTCount--;
      $("div").remove(`#lythuyet${this.LTCount}Update`);
      $("div").remove(`#xoa${this.LTCount}Update`);
      this.demHinhvaVideo();
    }
  }
  /** 
   * add and delete for video input
  */
  addInputVideo() {
    if (this.VCount > 6) return 0;
    let video_input = `
    <div id="video${this.VCount}Update" class="input-group mb-1 video-input-img">
      <div class="custom-file">
        <input type="file" class="custom-file-input video-input" id="video${this.VCount}Update-input" onchange="onChangeVideo(event, 'video${this.VCount}UpdateURL', 'xoaV${this.VCount}Update', 'btn-xoaV${this.VCount}Update', 'labelV${this.VCount}Update');">
        <label id='labelV${this.VCount}Update' class="custom-file-label labelVUpdate" for="video${this.VCount}Update-input">Chọn Video</label>
      </div>
    </div>
    `;
    let video_url = `
    <div id="xoaV${this.VCount}Update" class="col-md-6 mb-2" style="display:none">
      <div class="container_" >
        <video id="video${this.VCount}UpdateURL" class="video img-thumbnail" controls>
          
        </video>
        <div class="middle">
          <button id="btn-xoaV${this.VCount}Update" class="btn btn-danger" onclick="deleteVideoInput('video${this.VCount}Update-input', 'video${this.VCount}UpdateURL', 'xoaV${this.VCount}Update', 'btn-xoaV${this.VCount}Update', 'labelV${this.VCount}Update')">Xóa</button>
        </div>
      </div>
    </div>
    `
    $("#video-input-update").append(video_input);
    $("#video-url-update").append(video_url);
    this.VCount++;
    this.demHinhvaVideo();
  }
  deleteInputVideo() {
    if (this.VCount > 1) {
      this.VCount--;
      $("div").remove(`#video${this.VCount}Update`);
      $("div").remove(`#xoaV${this.VCount}Update`);
      this.demHinhvaVideo();
    }
  }

  /** 
   * Reset modal function
  */
  resetAddMethodModal() {
    for (let i = this.LTCount - 1; i >= 0; i--) {
      $("div").remove(`#lythuyet${i}Update`);
      $("div").remove(`#xoa${i}Update`);
    }

    for (let i = this.VCount - 1; i >= 0; i--) {
      $("div").remove(`#video${i}Update`);
      $("div").remove(`#xoaV${i}Update`);
    }
    this.LTCount = 1;
    this.VCount = 1;
    $("#method-name-update").val('');
    this.addInputLyThuyet();
    this.addInputVideo();
    $("#method-name-update").focus();
  }


  demHinhvaVideo() {
    // console.log(`Hinh: ${this.LTCount} - Video: ${this.VCount}`);
  }
  // --------------- Lien quan den NHAP TAY -------------------
  countNhapTay = 1;
  toggleNhapTay() {
    this.nhaptayHidden = !this.nhaptayHidden;
    this.displayContentNhapTay = !this.displayContentNhapTay;
    if (this.displayContentNhapTay == false) {
      if (this.countNhapTay == 1) {
        this.countNhapTay++;
        CKEDITOR.instances.ckeditorUpdate.setData(this.method.contentNhapTay);
      }
      this.xemContentNhapTay();
    }
    // console.log(this.countNhapTay, this.nhaptayHidden, this.displayContentNhapTay)
  }

  xemContentNhapTay() {
    let content = CKEDITOR.instances.ckeditorUpdate.getData();
    $("#lythuyet-nhaptay-update").html(content);
  }

  getContentNhapTay() {
    let content = CKEDITOR.instances.ckeditorUpdate.getData();
    return content;
  }

  // transform lythuyet-nhaptay to image file
  async change2Canvas(url, name) {
    let canvas = await html2canvas(document.getElementById("lythuyet-nhaptay-update"));
    canvas.toBlob((blob) => {
      blob.lastModifiedDate = new Date();
      blob.name = name;
      let file = { files: [blob] }
      this.uploadFile(file, "hinh/" + url);
    }, "image/png")
  }

  xulikhoangtrang(name) {
    let result = "";
    for (let i = 0; i < name.length; i++) {
      if (name[i] !== " ") {
        result += name[i];
      }
    }
    return result;
  }

  initMethod() {
    this.createdDate = new Date().getTime();
  }

}
