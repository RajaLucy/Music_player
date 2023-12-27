
let aud=document.getElementById('audio');
let imge=document.getElementById('imge');
let nex=document.querySelector('next');
let nam=document.getElementById('name');
let Fnam=document.getElementById('fname');
let singer=document.getElementById('singername');
let Movie=document.getElementById('moviename');
let Image=document.getElementById('image');

window.document.body.style.background="black";
function pause()
{
    if(aud.paused)
    {
        aud.play();
        imge.innerHTML='<img  src="../sources/pause.png" alt="">';
    }
    else{
        aud.pause();
        imge.innerHTML='<img  src="../sources/paus.png" alt="">';
    }
}




var index=0;

var array = [

    {
        song:'../sources/s1.m4a',
        name:"Ravana",
        movie:"Jai Lava kusha",
        singer:"Divya Kumar",
        image:'../sources/images.jpg'

    
    },
    {
        song:'../sources/s2.m4a',
        name:"Tring",
        movie:"Jai Lava kusha",
        singer:"Jaspreet Jasz",
        image:'../sources/images.jpg'
    
    },
    {
        song:'../sources/s3.m4a',
        name:"Dochesta",
        movie:"Jai Lava kusha",
        singer:"Nakash",
        image:'../sources/images.jpg'
    
    }

];
   


function next(){

    index = (index + 1) % array.length;

    loadTrack();

}

function prev() {
    index = (index - 1 + array.length) % array.length;
    loadTrack();
}

function loadTrack()
{
    aud.src = array[index].song;
   nam.innerHTML=array[index].name;
   Fnam.innerHTML="Name: "+array[index].name;
   singer.innerHTML="Singer: "+array[index].singer;
   Movie.innerHTML="Movie Name: "+array[index].movie;
   Image.src = array[index].image;
    aud.load();
    pause();
}


loadTrack();








// var trackIndex = 0;
// var tracks = [
//     '../sources/s2.m4a',
//     '../sources/s3.m4a',
//     '../sources/s4.m4a'
//     // Add more tracks as needed
// ];



// function next() {
//     trackIndex = (trackIndex + 1) % tracks.length;
//     loadTrack(tracks[trackIndex]);
// }

// // function previousTrack() {
// //     trackIndex = (trackIndex - 1 + tracks.length) % tracks.length;
// //     loadTrack(tracks[trackIndex]);
// // }

// function loadTrack(track) {
//     aud.src = track;
//     aud.load();
//     pause(); // Start playing the new track automatically
// }

