
const cat_result = document.getElementById('cat_result');

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" height="500px" />`
		});
}

window.onload = getRandomCat;