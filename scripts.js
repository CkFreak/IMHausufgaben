

function playVid() {
  var vid = document.getElementById("thelab");
    vid.play();

}

function pauseVid() {
  var vid = document.getElementById("thelab");
    vid.pause();
}


function playsection1()
{
  var vid = document.getElementById("thelab");
  vid.currentTime=16;
  vid.play();
}

function playsection2()
{
  var vid = document.getElementById("thelab");
  vid.currentTime=41;
  vid.play();
}

function playsection3()
{
  var vid = document.getElementById("thelab");
  vid.currentTime=3;
  vid.play();
}

function playsection4()
{
  var vid = document.getElementById("thelab");
  vid.currentTime=173;
  vid.play();
}

function playsection5()
{
  var vid = document.getElementById("thelab");
  vid.currentTime=95;
  vid.play();
}

function getTime(event) {
    // The currentTime property returns the current position of the audio/video playback
    document.getElementById("time").innerHTML = event.currentTime;
}

function highlight(para)
{
  document.getElementById(para).style.color =  "White";
}
