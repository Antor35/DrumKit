window.onload=function(){

	window.addEventListener("keydown",playSound); 


	function playSound (e){ 
		const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
		const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
		if(!audio)return ; // simple return the function to stop together
		audio.currentTime = 0;
		audio.play();	
		key.classList.add("playing");
	 }


	const keys = document.querySelectorAll(".key");

	function removetransition(e){
		if(e.propertyName !== 'transform') return ; // skip if this is not a transform
		this.classList.remove("playing");
	}

	
	keys.forEach(key => key.addEventListener("transitionend",removetransition));
};