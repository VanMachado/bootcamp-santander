const catBtn = document.querySelector('#change-cat');
const catImg = document.querySelector('#cat');

catBtn.addEventListener('click', function() {
	const XHR = new XMLHttpRequest();
	
	XHR.onreadystatechange = function() {
		
		if(XHR.readyState == 4 && XHR.status == 200) {
			catImg.src = JSON.parse(XHR.responseText).file;
		}
	}

	XHR.open("GET", "https://aws.random.cat/meow");
	
	XHR.send();
});

// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
// const catBtn = document.getElementById('change-cat');

// const getCats = async () => {      

// 	const data = await fetch(BASE_URL)
//         .then((res) => res.json())
//         .catch((e) => console.log(e));

//     return data.webpurl;    
// };

// const laodImg = async () => {    
//     const catImg = document.getElementById('cat');
//     catImg.src = await getCats();
// };

// catBtn.addEventListener('click', laodImg);

// laodImg();