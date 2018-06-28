export class Method {
    constructor(
        public method: String,
        public mon: String,
        public mota: String,
        public loai: String,
        public lop: String,
        public chuong: String,
        public bai: String,
        public title: String,
        public createdDate: Date,
        public images: Array<String>,
        public videos: Array<String>,
        public comments: Array<String>,
        public comments_delete: Array<String>,
        public contentNhapTay: String,
        public url: String
    ) {
    }
}

// if (loai === "Chuyên đề") {
//     phuongphap = {
//         method: this.loai, 
//         mon: mon, 
//         loai: loai, 
//         title: methodName,
//         images: arrayLT,
//         videos: arrayV,
//         createdDate: new Date(),
//         comments: [],
//         comments_delete: []
//     };
// } else {
//     phuongphap = {
//         method: this.loai, 
//         mon: mon, 
//         loai: loai, 
//         lop: lop, 
//         chuong: chuong,
//         bai: bai, title: methodName,
//         images: arrayLT,
//         videos: arrayV,
//         createdDate: new Date(),
//         comments: [],
//         comments_delete: []
//     };
// }