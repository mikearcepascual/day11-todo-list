let myPromise = new Promise( (resolve, reject) => {
	let name = "Mike";
	if(name === "Mike"){
		resolve(`Hello ${name}!`);
	}
	else{
		reject("Name not found");
	}
});

myPromise.then((message) => {
	console.log(message)
}).catch((message) => {
	console.log(message)
})