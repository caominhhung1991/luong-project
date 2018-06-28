// Func change html by DIV to Canvas and convert to Blob
function change2Canvas() {
	// lythuyet-nhaptay
	// let contentNhapTay = $("#lythuyet-nhaptay").html();
	// html2canvas(document.getElementById("lythuyet-nhaptay"))
	// 	.then(canvas => {
	// 		changeCanvas2Blob()
	// 	})

	// for (let item of listIdDeDa) {
	// 	html2canvas(document.getElementById(item))
	// 		.then(canvas => {
	// 			changeCanvas2Blob(canvas, `${item}.png`);
	// 		})
	// }
}

// Convert canvas type to File type (Blob)
function changeCanvas2Blob(canvas, name) {
	let item = {
		canvas: null,
		blob: null
	};
	item.canvas = canvas;
	canvas.toBlob((blob) => {
		blob.lastModifiedDate = new Date();
		blob.name = name;
		item.blob = blob;
		json.push(item);
	}, "image/png");

}