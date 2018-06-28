

// lythuyetUrlId: id
// btnXoaId: id
function onChangeImage(event, lythuyetUrlId, btnXoaId, labelId) {
    // Window.webkitURL: MacOSX in Macbook
    // Window.URL: Windows Operation in Laptop
    var myURL = window.webkitURL || window.URL
    if(!event.target.files[0]) {
        console.log("k co file")
        return;
    }
    $(`#${btnXoaId}`).css('display', 'block');
    let output = document.getElementById(lythuyetUrlId);
    console.log(event.target.files[0]);
    output.src =  myURL.createObjectURL(event.target.files[0]);
    $(`#${labelId}`).html(event.target.files[0].name);
}

function onChangeVideo(event, videoUrlId, xoaVId, btnXoaVId, labelVId) {
    // Window.webkitURL: MacOSX in Macbook
    // Window.URL: Windows Operation in Laptop
    let myURL = window.webkitURL || window.URL

    let regMP4 = new RegExp("\.mp4$");
    if(!event.target.files[0]) {
        console.log("k co file")
        return;
    }
    if(regMP4.test(event.target.files[0].name) !== true) {
        alert("Không phải file định dạng .mp4!");
        return;
    }
    $(`#${xoaVId}`).css('display', 'block');
    $(`#${labelVId}`).html(event.target.files[0].name);
    let output = document.getElementById(videoUrlId);
    output.src = myURL.createObjectURL(event.target.files[0]);
}

function deleteImageInput(lythuyetInputId,lythuyetUrlId, btnXoaId, labelId) {
    // input field là ô nhập lythuyetInputId
    // xoaId là id vùng hiển thị hình
    $(`#${labelId}`).html("Chọn hình");
    $(`#${lythuyetUrlId}`).attr('src', null);
    $(`#${btnXoaId}`).css('display', 'none');
    $(`#${lythuyetInputId}`).val("");
}

function deleteVideoInput(videoInputId,videoUrlId, xoaVId, btnXoaVId, labelVId) {
    $(`#${labelVId}`).html("Chọn video");
    $(`#${videoUrlId}`).attr('src', null);
    $(`#${xoaVId}`).css('display', 'none', 'important');
    $(`#${videoInputId}`).val("");
}

function display(item, id) {
    console.log(item, "---NhapTayTam")
    let myURL = window.webkitURL
    let output = document.getElementById(id);
    output.src =  myURL.createObjectURL(item);
}
