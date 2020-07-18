(function (){

var names =["Touheda" , "Akther", "Rabbi"];


for (var i = 0; i < name.length; i++) {
	var firstLetter = names[i].charAt(0).toLowerCase();

	if (firstLetter === 't') {
		byspeaker.speak(names[i]);
	}else{
		hellospeaker.speak(names[i]);
	}
}

})();
