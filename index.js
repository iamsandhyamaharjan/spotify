let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let gif = document.getElementById('gif')
let masterSongPlay = document.getElementById('masterSongPlay')

let songItem =Array.from( document.getElementsByClassName('songItem'))

let myProgressBar = document.getElementById('myProgressBar')
let songs=[
    {songName: "tu jaane na ",filePath:"songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "feeling 22 ",filePath:"songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "shake it off ",filePath:"songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "Baarishein",filePath:"songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "aauna aauna ",filePath:"songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "kahi na  ",filePath:"songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "Baby ",filePath:"songs/7.mp3",coverPath: "covers/7.jpg"},
    {songName: "tu jaane na ",filePath:"songs/8.mp3",coverPath: "covers/8.jpg"},
    {songName: "tu jaane na ",filePath:"songs/9.mp3",coverPath: "covers/9.jpg"},
    {songName: "tu jaane na ",filePath:"songs/10.mp3",coverPath: "covers/10.jpg"},
    {songName: "tu jaane na ",filePath:"song/1.mp3",coverPath: "covers/1.jpg"},
]
songItem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songsName")[0].innerText = songs[i].songName

})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause')
gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songsItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')

    })
}
Array.from(document.getElementsByClassName('songsItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays()
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongPlay.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;

        audioElement.currentTime=0
        audioElement.play()

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')


    
    })
})

    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>=9)
        {
            songIndex = 0
        }
        else{
            songIndex+=1
        }
        audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongPlay.innerText = songs[songIndex].songName;

        audioElement.currentTime=0
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')


    })

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex = 0
    }
    else{
        songIndex-=1
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongPlay.innerText = songs[songIndex].songName;
        audioElement.currentTime=0
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')

})