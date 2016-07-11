window.addEventListener("load", function () {
	var video = document.getElementById("thelab");
	introduction = 16;
	photoShooting = 42;
	showdown = 95;
	outro = 173;

    video.addEventListener("timeupdate", function () {
		if (this.currentTime >= introduction)
    {
            highlight('button1', 'button4');
          }
    if (this.currentTime >= photoShooting)
    {
            highlight('button2', 'button1');
    }
    if (this.currentTime >= showdown)
    {
            highlight('button3', 'button2');
    }
    if (this.currentTime >= outro)
    {
            highlight('button4', 'button3');
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

function highlight(para, para2)
{
  document.getElementById(para).style.color =  "White";
  unHighlight(para2);
}

function unHighlight(para)
{
  document.getElementById(para).style.color =  "Black";
}

function update()
{

    if(!video.paused && !video.ended)
    {

        if(video.currentTime >= 16)
            {
                highlight('button1');
            }
        else if(video.currentTime >= 41)
            {
                highlight('button2');
            }

        setTimeout(function(){update();}, 100);
    }
}
