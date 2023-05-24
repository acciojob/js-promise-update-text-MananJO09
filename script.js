//your JS code here. If required.
let promise = new Promise((resolve , reject)=>{
	setTimeout(()=>{
		resolve("Hello world!")
	},1000)
})

promise.then((text)=>{
	document.querySelector("#output").innerText = text
})