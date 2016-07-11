window.addEventListener("load", function () {
	var video = document.getElementById("thelab");
	introduction = 16;
	photoShooting = 41;
	showdown = 95;
	outro = 173;
	var introductionText = "'IM macht Spaß.";
	var photoShootingText = "Es war so wenig Arbeitsaufwand wie dieses Design schön ist."
	var showdownText = "Keine Ahnung zu haben macht mega Spaß."
	var outroText = "Vor allem wenn man keine klaren Anweisungen bekommt. Yey."

    video.addEventListener("timeupdate", function ()
	{
	if (this.currentTime >= introduction && this.currentTime < photoShooting)
    {
		highlight('button1');
		writeText(introductionText);
	}
	else{
		unHighlight('button1');
	}
    if (this.currentTime >= photoShooting && this.currentTime < showdown)
    {
		highlight('button2');
		writeText(photoShootingText);
    }
	else{
		unHighlight('button2');
	}
    if (this.currentTime >= showdown && this.currentTime < outro)
    {
		highlight('button3');
		writeText(showdownText);
    }
	else{
		unHighlight('button3');
	}
    if (this.currentTime >= outro && this.currentTime < this.duration)
    {
		highlight('button4');
		writeText(outroText);
    }
	else{
		unHighlight('button4');
	}

    }, false);

}, false);

function playVid() {
  var vid = document.getElementById("thelab");
    vid.play();

}

function pauseVid() {
  var vid = document.getElementById("thelab");
    vid.pause();
}


function playSectionIntroduction()
{
  var vid = document.getElementById("thelab");
  vid.currentTime=16;
  vid.play();
}

function playSectionPhotoShooting()
{
  var vid = document.getElementById("thelab");
  vid.currentTime=41;
  vid.play();
}

function playSectionShowdown()
{
  var vid = document.getElementById("thelab");
  vid.currentTime=95;
  vid.play();
}

function playSectionOutro()
{
  var vid = document.getElementById("thelab");
  vid.currentTime=173;
  vid.play();
}

function getTime(event) {
    // The currentTime property returns the current position of the audio/video playback
    document.getElementById("time").innerHTML = event.currentTime;
}

function highlight(para)
{
  document.getElementById(para).style.color =  "magenta";
}

function unHighlight(para)
{
  document.getElementById(para).style.color =  "Black";
}

function writeText(para)
{
	document.getElementById("Text").innerHTML = para;
}
