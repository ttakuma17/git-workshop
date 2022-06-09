class Files {
	constructor(fileName, fileExtension, content, parentFolder) {
		this.fileName = fileName
		this.fileExtension = fileExtension
		this.content = content
		this.parentFolder = parentFolder
	}

	getLifetimeBandwidthSize() {
		if (this.content.length * 25 >= 1000) return (this.content.length * 25 / 1000) + "GB"
		return this.content.length * 25 + "MB"
	}
	prependContent(data) {
		this.content = data + this.content
		return this.content;
	}
	addContent(data, position) {
		let tmpFstring = this.content.slice(0, position)
		let tmpLstring = this.content.slice(position, this.content.length)
		return tmpFstring + data + tmpLstring
	}
	showFileLocation() {
		if (this.fileExtension != ".word" && this.fileExtension != ".png" && this.fileExtension != ".mp4" && this.fileExtension != ".pdf") this.fileExtension = ".txt";
		return this.parentFolder + " > " + this.fileName + this.fileExtension
	}

}

let assignment = new Files("assignment", ".word", "ABCDEFGH", "homework")
// console.log(assignment)
console.log(assignment.getLifetimeBandwidthSize())
console.log(assignment.prependContent("MMM"))
console.log(assignment.addContent("hello world", 5))
console.log(assignment.showFileLocation())

let blade = new Files("blade", ".php", "bg-primary text-white m-0 p-0 d-flex justify-content-center", "view")
// console.log(blade)
console.log(blade.getLifetimeBandwidthSize())
console.log(blade.addContent("font-weight-bold ", 11))
console.log(blade.showFileLocation())
