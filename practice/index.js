// ここから書いてください。

// 関数呼び出しの例
let domObj = document.getElementById("target");

const motivationalSpeechWallpaper = (message, colorCode, imgUrl, yPosition, xPosition, targetDom) => {
	// メッセージを表示するようのHTMLを準備
	let messageH3 = document.createElement("h3");
	messageH3.innerHTML = message;
	messageH3.style.color = `#${colorCode}`;
	messageH3.classList.add("papertext");

	// メッセージの位置を調整するためのdivを作成
	let messageDiv = document.createElement("div");
	messageDiv.classList.add("col-8");
	messageDiv.appendChild(messageH3);

	// 壁紙内の配置をするためのdivを設置
	let wallPaperDiv = document.createElement("div");

	// 横position の指定をする
	if (xPosition == "left") xPosition = "justify-content-start";
	else if (xPosition == "right") xPosition = "justify-content-end";
	else xPosition = "justify-content-center";

	// 縦position の指定をする
	if (yPosition == "top") yPosition = "align-items-start";
	else if (yPosition == "bottom") yPosition = "align-items-end";
	else yPosition = "align-items-center";

	wallPaperDiv.classList.add("vh-75", "p-md-5", "p-3", "my-5", "col-md-8", "col-md-8", "col-12", "d-flex", "imgBackground", xPosition, yPosition);
	wallPaperDiv.style.backgroundImage = `url(${imgUrl})`;
	wallPaperDiv.appendChild(messageDiv);

	// 壁紙を含めた配置をするためのdivを設置
	let wallPartsDiv = document.createElement("div");
	wallPartsDiv.classList.add("container", "d-flex", "justify-content-center");
	wallPartsDiv.appendChild(wallPaperDiv);

	// 最後にtargetとなるDOMへHTMLへ反映して完了
	targetDom.appendChild(wallPaperDiv);
}


motivationalSpeechWallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", "center", "center", domObj);

motivationalSpeechWallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left", domObj);

motivationalSpeechWallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right", domObj);
