import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// declare variable jquery and $ to use jquery plugin
declare var jquery: any;
declare var $: any;

@Injectable()
export class AppServiceService {
  messages = {
    updateSuccess: "Update thành công!",
    updateError: "Update thất bại!",
    addSuccess: "Thêm mới thành công!",
    addError: "Thêm mới thất bại!"
  }
  result: any;
  loai: string = 'phương pháp';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private _http: Http
  ) { }

  getUserLogin() {
    let user = {};
    if(localStorage.user) {
      return true;
    }
    return false;
  }

  checkAdmin() {
    let user;
    if(localStorage.user) {
      user = JSON.parse(localStorage.user);
      return user.role === 'ADMIN_ROLE' ? true : false;
    }
    return false;
  }
  
  dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }

  // dynamicSortBaoLoiByTime(property) {
  //   var sortOrder = 1;
  //   if(property[0] === "-") {
  //       sortOrder = -1;
  //       property = property.substr(1);
  //   }
  //   return function (a,b) {
  //       var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
  //       return result * sortOrder;
  //   }
  // }

  getListMethod(): Promise<any> {
    const url = `/api/method`;
    return this._http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => this.result = res.json())
      .catch(this.handleError)
  }
  getMethodById(id): Promise<any> {
    const url = `/api/method/id/${id}`;
    return this._http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => this.result = res.json())
      .catch(this.handleError)
  }

  getListMethodByMethod(loai): Promise<any> {
    const url = `/api/method/${loai}`;
    return this._http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => this.result = res.json())
      .catch(this.handleError)
  }
 
  findById(loai, mon, lopChuyenDe, lop, chuong, bai) {
    const url = `/api/${loai}/${mon}/${lopChuyenDe}/${lop}/${chuong}/${bai}`;
    console.log(url);
    // console.log(url);
    return this._http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => this.result = res.json())
      .catch(this.handleError)
  }
  
  // Upload image method
  pushFileToServer(phuongphap: any): Promise<any> {
    // let _loai = loai === 'phương pháp' ? 'phuongphap' : 'congthuc';
    const url = `/api/method`;

    return this._http.post(url, JSON.stringify(phuongphap), { headers: this.headers })
      .toPromise()
      .then(res => this.result = res.json())
      .catch(this.handleError)
  }

  addMethodToMethodDeleted(method:any):Promise<any> {
    const url = `/api/method_deleted`;

    return this._http.post(url, JSON.stringify(method), { headers: this.headers })
      .toPromise()
      .then(res => this.result = res.json())
      .catch(this.handleError)
  }

  // Update method
  updateMethod(method: any):Promise<any> {
    const url = `/api/method/${method._id}`;
    return this._http.put(url, JSON.stringify(method), {headers: this.headers})
      .toPromise()
      .then((method)=>this.result=method)
      .catch(this.handleError)
  }

  deleteMethod(method: any): Promise<void> {
    const url = `/api/method/${method._id}`;
    console.log(url);
    return this._http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // Find index in array object
  arrayObjectIndexOf(myArray, searchItem) {
    for(let i=0; i<myArray.length; i++) {
      if(myArray[i]==searchItem) {
        return i;
      }
    }
    return -1;
  }

  // ------------- TREE -------------------
  // Lấy cây phân cấp công thức/ phương pháp
  postMethodTree(loai, name):Promise<any> {
    const url = `/api/methodtree/${loai}`;
    console.log(loai, name);
    return this._http.post(url, JSON.stringify(name), {headers: this.headers})
      .toPromise()
      .then(res => this.result = res.json())
      .catch(this.handleError)
  }

  getListMethodTree(loai):Promise<any> {
    const url = `/api/methodtree/${loai}`;
    return this._http.get(url, {headers: this.headers})
    .toPromise()
    .then(res => this.result = res.json())
    .catch(this.handleError)
  }

  getListMethodTreeToCheck(loai, name):Promise<any> {
    const url = `/api/methodtree/${loai}/${name}`;
    return this._http.get(url, {headers: this.headers})
    .toPromise()
    .then(res => this.result = res.json())
    .catch(this.handleError)
  }

  deleteMethodTree(loai, name):Promise<any> {
    const url = `/api/methodtree/${loai}/${name}`;
    return this._http.delete(url, {headers: this.headers})
    .toPromise()
    .then(res => this.result = res.json())
    .catch(this.handleError)
  }

  // ---------------- QUERY GHICHU TEST --------
  getMethodTest(id):Promise<any> {
    const url = `/api/ghichu/${id}`;
    return this._http.get(url, {headers:this.headers})
      .toPromise()
      .then(res => this.result = res.json())
      .catch(this.handleError)
  }



  getBaoLois():Promise<any> {
    const url= `/ghichu/baoloi`;
    return this._http.get(url, {headers:this.headers})
      .toPromise()
      .then(res => this.result = res.json())
      .catch(this.handleError)
  }

  deleteBaoLoiById(id):Promise<any> {
    const url= `/ghichu/baoloi/${id}`;
    return this._http.delete(url, {headers:this.headers})
      .toPromise()
      .then(res => this.result = res.json())
      .catch(this.handleError)
  }



  // ----------------- SEARCH METHOD -------------------
  searchMethod(text):Promise<any> {
    const url = `/ghichu/search/${text}`;
    return this._http.get(url, {headers: this.headers})
      .toPromise()
      .then(res => this.result = res.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //for demo purposes only
    return Promise.reject(error.massage || error);
  }
}
 