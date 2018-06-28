import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AppServiceService } from '../../services/app-service.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AnimateJqueryService } from '../../services/animate-jquery.service';
import { flyInOut } from '../../animation/animation';
import { Method } from '../../models/method';

declare var $: any;
declare var CKEDITOR: any;
declare var html2canvas: any;

@Component({
  selector: 'app-add-method-modal',
  templateUrl: './add-method-modal.component.html',
  styleUrls: ['./add-method-modal.component.css'],
  animations: [flyInOut]
})

export class AddMethodModalComponent implements OnInit {
  // Test 


  collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  @Output("queryMethodToUpdate") queryMethodToUpdate = new EventEmitter();
  method: Method;
  nhaptayFile;
  loai: string;
  tree = false;
  nhaptayHidden = true;
  LopChuyende: string;
  checkLopChuyende: boolean = true;
  displayContentNhapTay = true;
  videoURL = 'Chọn video';
  filesToUpload: Array<File> = [];
  contentNhapTay: String = "";
  // color primary - phương pháp
  color1_bg = '#0069d9';
  color1_color = '#fff';
  color1_border = '#0062cc';
  // color warning - công thức
  color2_bg = '#ffc107';
  color2_color = '#212529';
  color2_border = '#ffc107';

  // 1. khởi tạo Lý thuyết count - biến đếm
  // 2. khởi tạo Video count - biến đếm
  LTCount = 1;
  VCount = 1;

  // Time to save with file
  createdDate;

  constructor(
    private http: Http,
    private appService: AppServiceService
  ) {
    this.LopChuyende = 'Lớp';
    this.initMethod();
    // this.checkLocalStorageLoai();
  }

  ngOnInit() {
    this.check();
    this.addInputLyThuyet();
    this.addInputVideo();
    this.queryMethodTree();
    this.locArray();
  }

  locArray() {
    let _mons = [], _lops = [], _chuongs = [], _bais = [];
    this.appService.getListMethod().then(res => {
      for (let method of res.data) {
        if (_mons.indexOf(method.mon) == -1 && method.loai == "Lớp") {
          _mons.push(method.mon);
        }
        if (_lops.indexOf(method.lop) == -1 && method.loai == "Lớp") {
          _lops.push(method.lop);
        }
        if (_chuongs.indexOf(method.chuong) == -1 && method.loai == "Lớp") {
          _chuongs.push(method.chuong);
        }
        if (_bais.indexOf(method.bai) == -1 && method.loai == "Lớp") {
          _bais.push(method.bai);
        }
      }
      // console.log(_mons); console.log(_lops); console.log(_chuongs); console.log(_bais);
    })
  }
  // Lưu phương pháp/chuyên đề
  // Và nếu lưu thành công sẽ reset lại modal
  async luu() {
    // id #...Modal ý chỉ id trong modal để tránh nhầm lẫn với id có trong phương pháp
    let mon = $("#monModal").val();
    let loai = this.LopChuyende;
    let lop = $("#lopModal").val();
    let chuong = $("#chuongModal").val();
    let bai = $("#baiModal").val();
    let methodName = $("#method-name").val();
    // Kiểm tra trường nhập yêu cầu nhập tên không đc để trống
    if (methodName === '') {
      console.log('empty');
      $('#method-name-feedback').css('display', 'block');
      return;
    } else {
      $('#method-name-feedback').css('display', 'none');
    }

    let arrayLT = [];
    let url_upload = "";
    let nhaptay_name = "";

    if (loai == 'Chuyên đề') {
      url_upload = `${this.xulikhoangtrang(this.loai)}/${this.xulikhoangtrang(mon)}/${this.xulikhoangtrang(loai)}`;
      nhaptay_name = `${this.createdDate}_${this.xulikhoangtrang(methodName)}nhaptay.png`;
    } else {
      url_upload = `${this.xulikhoangtrang(this.loai)}/${this.xulikhoangtrang(mon)}/${this.xulikhoangtrang(loai)}/${this.xulikhoangtrang(lop)}/${this.xulikhoangtrang(chuong)}`;
      nhaptay_name = `${this.createdDate}_${this.xulikhoangtrang(bai)}-${this.xulikhoangtrang(methodName)}nhaptay.png`;
    }

    // 1. query tất cả input Lý Thuyết
    // 2. Khởi tạo array LT(arrayLT) lưu tên hình
    // 3. Vòng lặp để lấy tên hình đưa vào arrayLT
    let LTfiles = $('.lythuyet-input');
    for (let file of LTfiles) {
      if (file.files[0]) {
        arrayLT.push(`${this.createdDate}_` + file.files[0].name);
        const url = '/upload/photos'
        let formData = new FormData();
        let files: Array<File> = <Array<File>>file.files;
        formData.append(`hinh/${url_upload}`, files[0], `${this.createdDate}_` + files[0].name);
        this.http.post(url, formData)
          .map(files => files.json())
          .subscribe(files => console.log("files", files));
      }
    }

    await this.xemContentNhapTay();
    if (this.displayContentNhapTay === false) {
      this.getContentNhapTay(); // Lay noi dung nhap tay trc
      this.method.contentNhapTay = this.getContentNhapTay();
      if (this.method.contentNhapTay != "") {
        arrayLT.push(`${nhaptay_name}`);
        this.change2Canvas(url_upload, nhaptay_name);
      }
    }

    // 1. query tất cả input Video
    // 2. Khởi tạo array Video(arrayV) lưu tên hình
    // 3. Vòng lặp để lấy tên video đưa vào arrayV
    let Vfiles = $('.video-input');
    let arrayV = [];
    for (let file of Vfiles) {
      if (file.files[0]) {
        arrayV.push(`${this.createdDate}_` + file.files[0].name);

        const url = '/upload/photos'
        let formData = new FormData();
        let files: Array<File> = <Array<File>>file.files;
        formData.append(`video/${url_upload}`, files[0], `${this.createdDate}_` + files[0].name);
        this.http.post(url, formData)
          .map(files => files.json())
          .subscribe(files => console.log("files", files));

      }
    }

    this.method.method = this.loai;
    this.method.mon = mon;
    this.method.loai = loai;
    this.method.images = arrayLT;
    this.method.videos = arrayV;
    this.method.url = url_upload;

    if (loai === "Lớp") {
      this.method.lop = lop;
      this.method.chuong = chuong;
      this.method.bai = bai;
    }

    console.log(this.method);
    // lưu thông qua service app-service.service.ts
    // 1. Nếu lưu thành công thì alert "Lưu thành công" và reset lại modal
    // 2. Nếu lưu thất bại in ra console

    this.appService.pushFileToServer(this.method).then(res => {
      alert("Lưu thành công!");
      this.queryMethodToUpdate.emit("nothing");
      this.initMethod();
      this.resetAddMethodModal();
      console.log(res);
    }, res => {
      console.log(res);
    })
  }

  toggleLoai() {
    if (this.loai === 'công thức') {
      this.loai = 'phương pháp'
    } else { this.loai = 'công thức' }
    this.queryMethodTree();
  }

  toggleTree() {
    this.tree = !this.tree;
  }


  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    // this.product.photo = fileInput.target.files[0]['name'];
  }

  check() {
    if (this.LopChuyende === 'Lớp') {
      this.checkLopChuyende = true;
    } else {
      this.checkLopChuyende = false;
    }
  }

  changeLopChuyende() {
    if (this.LopChuyende == 'Lớp') {
      this.LopChuyende = 'Chuyên đề';
    } else {
      this.LopChuyende = 'Lớp';
    }
    this.check();
  }

  /**
   * add and delete for lythuyet input
   */
  addInputLyThuyet() {
    let lythuyet_input = `
    <div id="lythuyet${this.LTCount}" class="input-group mb-1 lythuyet-input-img">
      <div class="custom-file">
        <input type="file" class="custom-file-input lythuyet-input" id="lythuyet${this.LTCount}-input" onchange="onChangeImage(event, 'lythuyet${this.LTCount}URL', 'btn-xoa${this.LTCount}', 'label${this.LTCount}');">
        <label id='label${this.LTCount}' class="custom-file-label" for="lythuyet${this.LTCount}">Chọn hình</label>
      </div>
    </div>
    `;
    let lythuyet_img = `
    <div id="xoa${this.LTCount}" class="col-md-4">
      <div class="container_">
        <img id="lythuyet${this.LTCount}URL" class="img-fluid image ">
        <div class="middle">
          <button id="btn-xoa${this.LTCount}" class="btn btn-danger" onclick="deleteImageInput('lythuyet${this.LTCount}-input', 'lythuyet${this.LTCount}URL', 'btn-xoa${this.LTCount}', 'label${this.LTCount}')">Xóa</button>
        </div>
      </div>
    </div>
    `
    $("#lythuyet-input").append(lythuyet_input);
    $("#lythuyet-img").append(lythuyet_img);
    this.LTCount++;
  }
  deleteInputLyThuyet() {
    if (this.LTCount > 1) {
      this.LTCount--;
      $("div").remove(`#lythuyet${this.LTCount}`);
      $("div").remove(`#xoa${this.LTCount}`);
    }
    console.log(this.LTCount);
  }

  /** 
   * add and delete for video input
  */
  addInputVideo() {
    if (this.VCount > 6) return 0;
    let video_input = `
    <div id="video${this.VCount}" class="input-group mb-1 video-input-img">
      <div class="custom-file">
        <input type="file" class="custom-file-input video-input" id="video${this.VCount}-input" onchange="onChangeVideo(event, 'video${this.VCount}URL', 'xoaV${this.VCount}', 'btn-xoaV${this.VCount}', 'labelV${this.VCount}');">
        <label id='labelV${this.VCount}' class="custom-file-label" for="video${this.VCount}-input">Chọn Video</label>
      </div>
    </div>
    `;
    let video_url = `
    <div id="xoaV${this.VCount}" class="col-md-6 mb-2" style="display:none">
      <div class="container_" >
        <video id="video${this.VCount}URL" class="video img-thumbnail" controls>
          <source type="video/mp4">
          <source type="video/ogg"> Your browser does not support HTML5 video.
        </video>
        <div class="middle">
          <button id="btn-xoaV${this.VCount}" class="btn btn-danger" onclick="deleteVideoInput('video${this.VCount}-input', 'video${this.VCount}URL', 'xoaV${this.VCount}', 'btn-xoaV${this.VCount}', 'labelV${this.VCount}')">Xóa</button>
        </div>
      </div>
    </div> 
    `
    $("#video-input").append(video_input);
    $("#video-url").append(video_url);
    this.VCount++;
  }
  deleteInputVideo() {
    if (this.VCount > 1) {
      this.VCount--;
      $("div").remove(`#video${this.VCount}`);
      $("div").remove(`#xoaV${this.VCount}`);
    }
    console.log(this.VCount);
  }

  /** 
   * Reset modal function
  */
  resetAddMethodModal() {
    for (let i = this.LTCount - 1; i >= 0; i--) {
      $("div").remove(`#lythuyet${i}`);
      $("div").remove(`#xoa${i}`);
    }

    for (let i = this.VCount - 1; i >= 0; i--) {
      $("div").remove(`#video${i}`);
      $("div").remove(`#xoaV${i}`);
    }
    this.LTCount = 1;
    this.VCount = 1;
    this.displayContentNhapTay = true;
    this.nhaptayHidden = true;
    // $("#method-name").val('');
    this.addInputLyThuyet();
    this.addInputVideo();
    $("#method-name").focus();
  }

  luachon = null;
  methods = [];
  mons = []; lops = []; chuongs = []; bais = [];
  tenmon; tenlop; tenchuong;

  queryMethodTree() {
    this.MLCB_AddHandle('mon'); //
    this.MLCB_AddHandle('lop'); //
    this.MLCB_AddHandle('chuong'); //
    this.MLCB_AddHandle('bai');    //
  }

  // if array == true, array will be reset
  resetMonsLopsChuongsBais(mons, lops, chuongs, bais) {
    this.mons = mons == false ? this.mons : [];
    this.lops = lops == false ? this.lops : [];
    this.chuongs = chuongs == false ? this.chuongs : [];
    this.bais = bais == false ? this.bais : [];
  }

  // ------ THÊM MON, LOP, CHUONG, BAI ---------
  themMon() {
    this.resetFeedback();
    let tenmon = $("#monPath").val();
    tenmon = tenmon.trim();
    // check monPath empty or not
    this.checkEmpty('monPath', 'monPathFeedbackError').then(res => {
      this.appService.getListMethodTreeToCheck('mon', tenmon).then(res => {
        if (res.data.length == 0) {
          this.appService.postMethodTree('mon', { name: tenmon }).then(res => {
            this.messageMonSuccess = this.messages.uploadSuccess;
            $('#monPathFeedbackSuccess').css('display', 'block');
            this.MLCB_AddHandle('mon');
            $(`#monPath`).val('');
          })
        } else {
          this.messageMonError = this.messages.loiExisted;
          $('#monPathFeedbackError').css('display', 'block');
        }
        console.log(res.data)
      })
    }, res => {
      // If monPath empty
      this.messageMonError = this.messages.loiEmpty;
    })

  }
  themLop() {
    this.resetFeedback();
    let lop = $("#lopPath").val();
    lop = lop.trim();
    // check lopPath empty or not
    this.checkEmpty('lopPath', 'lopPathFeedbackError').then(res => {
      this.appService.getListMethodTreeToCheck('lop', lop).then(res => {
        if (res.data.length == 0) {
          this.appService.postMethodTree('lop', { name: lop }).then(res => {
            this.messageLopSuccess = this.messages.uploadSuccess;
            $('#lopPathFeedbackSuccess').css('display', 'block');
            this.MLCB_AddHandle('lop');
            $(`#lopPath`).val('');
          })
        } else {
          this.messageLopError = this.messages.loiExisted;
          $('#lopPathFeedbackError').css('display', 'block');
        }
      })
    }, res => {
      // If lopPath empty
      this.messageLopError = this.messages.loiEmpty;
    })
  }
  themChuong() {
    this.resetFeedback();
    let chuong = $("#chuongPath").val().trim();
    chuong = chuong.trim();
    // check chuongPath empty or not
    this.checkEmpty('chuongPath', 'chuongPathFeedbackError').then(res => {
      this.appService.getListMethodTreeToCheck('chuong', chuong).then(res => {
        if (res.data.length == 0) {
          this.appService.postMethodTree('chuong', { name: chuong }).then(res => {
            this.messageChuongSuccess = this.messages.uploadSuccess;
            $('#chuongPathFeedbackSuccess').css('display', 'block');
            this.MLCB_AddHandle('chuong');
            $(`#chuongPath`).val('');
          })
        } else {
          this.messageChuongError = this.messages.loiExisted;
          $('#chuongPathFeedbackError').css('display', 'block');
        }
        console.log(res.data)
      })
    }, res => {
      // If chuongPath empty
      this.messageChuongError = this.messages.loiEmpty;
    })
  }
  themBai() {
    this.resetFeedback();
    let bai = $("#baiPath").val();
    bai = bai.trim();
    // check baiPath empty or not
    this.checkEmpty('baiPath', 'baiPathFeedbackError').then(res => {
      this.appService.getListMethodTreeToCheck('bai', bai).then(res => {
        if (res.data.length == 0) {
          this.appService.postMethodTree('bai', { name: bai }).then(res => {
            this.messageBaiSuccess = this.messages.uploadSuccess;
            $('#baiPathFeedbackSuccess').css('display', 'block');
            this.MLCB_AddHandle('bai');
            $(`#baiPath`).val('');
          })
        } else {
          this.messageBaiError = this.messages.loiExisted;
          $('#baiPathFeedbackError').css('display', 'block');
        }
        console.log(res.data)
      })
    }, res => {
      // If baiPath empty
      this.messageBaiError = this.messages.loiEmpty;
    })
  }

  checkEmpty(idPath, idFeedback): Promise<any> {
    if ($(`#${idPath}`).val() == '') {
      $(`#${idFeedback}`).css("display", "block");
      return Promise.reject(false);
    } else {
      $(`#${idFeedback}`).css("display", "none");
    }
    return Promise.resolve(true);
  }

  feedbacks = [
    'monPathFeedbackSuccess',
    'monPathFeedbackError',
    'lopPathFeedbackSuccess',
    'lopPathFeedbackError',
    'chuongPathFeedbackSuccess',
    'chuongPathFeedbackError',
    'baiPathFeedbackError',
    'baiPathFeedbackSuccess'
  ]

  messageMonError = "";
  messageMonSuccess = "";
  messageLopError = "";
  messageLopSuccess = "";
  messageChuongError = "";
  messageChuongSuccess = "";
  messageBaiError = "";
  messageBaiSuccess = "";

  messages = {
    loiEmpty: "Không được để trống",
    loiExisted: "Đã tồn tại",
    loiNotExisted: 'Chưa tồn tại',
    uploadSuccess: "Đã thêm thành công",
    deleteSuccess: "Đã xóa thành công"
  }

  resetFeedback() {
    for (let feedback of this.feedbacks) {
      $(`#${feedback}`).css("display", "none");
    }
  }

  MLCB_AddHandle(loai) {
    this.appService.getListMethodTree(loai).then(res => {
      if (loai == 'mon') {
        this.mons = res.data.map(res => res.name);
        this.mons = this.mons.sort(this.collator.compare);
      } else if (loai == 'lop') {
        this.lops = res.data.map(res => res.name);
        this.lops = this.lops.sort(this.collator.compare);
      } else if (loai == 'chuong') {
        this.chuongs = res.data.map(res => res.name);
        this.chuongs = this.chuongs.sort(this.collator.compare);
      } else if (loai == 'bai') {
        this.bais = res.data.map(res => res.name);
        this.bais = this.bais.sort(this.collator.compare);
      }
    })
  }

  MLCB_DeleteHandle(loai) {
    this.resetFeedback();
    let ten = $(`#${loai}Path`).val();
    // check tenPath empty or not
    this.checkEmpty(`${loai}Path`, `${loai}PathFeedbackError`).then(res => {
      this.appService.getListMethodTreeToCheck(loai, ten).then(res => {
        if (res.data.length > 0) {
          this.appService.deleteMethodTree(loai, ten).then(res => {
            if (loai == 'mon') {
              this.messageMonSuccess = this.messages.deleteSuccess;
            } else if (loai == 'lop') {
              this.messageLopSuccess = this.messages.deleteSuccess;
            } else if (loai == 'chuong') {
              this.messageChuongSuccess = this.messages.deleteSuccess;
            } else if (loai == 'bai') {
              this.messageBaiSuccess = this.messages.deleteSuccess;
            }
            $(`#${loai}PathFeedbackSuccess`).css('display', 'block');
            this.MLCB_AddHandle(loai);
            $(`#${loai}Path`).val('');
          })
        } else {
          if (loai == 'mon') {
            this.messageMonError = this.messages.loiNotExisted;
          } else if (loai == 'lop') {
            this.messageLopError = this.messages.loiNotExisted;
          } else if (loai == 'chuong') {
            this.messageChuongError = this.messages.loiNotExisted;
          } else if (loai == 'bai') {
            this.messageBaiError = this.messages.loiNotExisted;
          }
          $(`#${loai}PathFeedbackError`).css('display', 'block');
        }
      })
    }, res => {
      // If monPath empty
      if (loai == 'mon') {
        this.messageMonError = this.messages.loiEmpty;
      } else if (loai == 'lop') {
        this.messageLopError = this.messages.loiEmpty;
      } else if (loai == 'chuong') {
        this.messageChuongError = this.messages.loiEmpty;
      } else if (loai == 'bai') {
        this.messageBaiError = this.messages.loiEmpty;
      }
    })
  }

  // --------------- Lien quan den NHAP TAY -------------------
  toggleNhapTay() {
    this.nhaptayHidden = !this.nhaptayHidden;
    this.displayContentNhapTay = !this.displayContentNhapTay;
    if (this.displayContentNhapTay == false) {
      this.xemContentNhapTay();
    }
  }

  xemContentNhapTay() {
    console.log("get nhap tay --- 11111")
    let content = CKEDITOR.instances.ckeditor.getData();
    $("#lythuyet-nhaptay").html(content);
  }

  getContentNhapTay() {
    let content = CKEDITOR.instances.ckeditor.getData();
    return content;
  }

  // transform lythuyet-nhaptay to image file
  async change2Canvas(url, name) {
    let canvas = await html2canvas(document.getElementById("lythuyet-nhaptay"));
    canvas.toBlob((blob) => {
      blob.lastModifiedDate = new Date();
      blob.name = name;
      let formData = new FormData();
      formData.append(`hinh/${url}`, blob, name);
      this.http.post('/upload/photos', formData)
        .map(files => files.json())
        .subscribe(files => console.log("files", files));
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
    this.method = new Method(
      "", // method
      "", // mon
      "", // mota
      "", // loai
      "", // lop
      "", // chuong
      "", // bai
      "", // title
      new Date(), // createdDate
      [], // images
      [], // videos
      [], // comments
      [], // comments_delete
      "", // noi dung nhap tay
      "", // url - noi chua duong dan hinh, video
    );
    this.createdDate = new Date().getTime();
  }
  // if (loai == 'Chuyên đề') {
  //   url_upload = `${this.xulikhoangtrang(this.loai)}/${this.xulikhoangtrang(loai)}`;
  //   nhaptay_name = `${this.createdDate}_${this.xulikhoangtrang(methodName)}nhaptay.png`;
  // } else {
  //   url_upload = `${this.xulikhoangtrang(this.loai)}/${this.xulikhoangtrang(loai)}/${this.xulikhoangtrang(lop)}/${this.xulikhoangtrang(mon)}/${this.xulikhoangtrang(chuong)}`;
  //   nhaptay_name = `${this.createdDate}_${this.xulikhoangtrang(bai)}-${this.xulikhoangtrang(methodName)}nhaptay.png`;
  // }
}





