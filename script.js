function promise(value,timeOut) {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(value)
		},timeOut)
	})
}

async function calling() {
    let value = document.getElementById("text").value
    let timeOut = parseInt(document.getElementById("delay").value);


	let call = await promise(value,timeOut)
	document.getElementById("output").textContent =call
    console.log(call)
}


document.getElementById("btn").addEventListener("click", calling);