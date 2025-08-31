async function getsongs(folder) {
    let fetcher= await fetch(`./songs/${folder}`)
    let response= await fetcher.text()
    
    let div= document.createElement("div")
    div.innerHTML= response
    let anchors= div.getElementsByTagName("a")
    let songs=[]
    for (let index = 0; index < anchors.length; index++) {
        const element = anchors[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
        
    }

    return songs
}
let audio= new Audio()
const playmusic=(track)=>{
    audio.src=track
    audio.play()
    play.src="pause.svg"
    document.querySelector(".songinfo").innerHTML=track.split("/").pop().replaceAll("%20"," ").replaceAll(".mp3","")
    document.querySelector(".songtime").innerHTML="00/00"
}
function formatTime(seconds) {
    // Handle invalid values
    if (isNaN(seconds) || seconds < 0) return "00:00";

    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);

    // Pad with 0 if needed
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    return `${mins}:${secs}`;
}

async function main() {
    let songs= await getsongs("POPCULTURE")
    let currentsongindex=0;

    let songlist= document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        let songname= song.split("/").pop()
        songname=songname.replaceAll("%20"," ")
        songname=songname.replaceAll(".mp3","")
        songlist.innerHTML += `
    <li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>${songname}</div>
            
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img src="play.svg" alt="">
        </div>
    </li>`
        
    }
    
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach((li,index) => {
        li.addEventListener("click",element=>{
            playmusic(songs[index])
            // playmusic(e.querySelector(".info").firstElementChild.innerHTML)
        })
    });
    play.addEventListener("click",()=>{
        if (audio.paused){
            audio.play()
            play.src="pause.svg"
        }else{
            audio.pause()
            play.src="play (1).svg"
        }
    })
    audio.addEventListener('timeupdate',()=>{
        let current = formatTime(audio.currentTime)
        let duration = formatTime(audio.duration)
        document.querySelector(".songtime").innerHTML=`${current}/${duration}`
        document.querySelector(".circle").style.left= (audio.currentTime/audio.duration)*100 +"%"
    })
    // document.querySelector(".seekbar").addEventListener("click",e=>{
    //     document.querySelector(".circle").style.left=(e.offsetX/e.target.getBoundingClientRect().width)*100 +"%"
    //     audio.currentTime = audio.duration * (e.offsetX / e.target.getBoundingClientRect().width)

    // })
    document.querySelector(".seekbar").addEventListener("click", e => {
    let seekbarWidth = e.target.getBoundingClientRect().width;
    let clickX = e.offsetX;


    let percent = clickX / seekbarWidth;

    document.querySelector(".circle").style.left = percent * 100 + "%";


    audio.currentTime = percent * audio.duration;
});
    document.querySelector(".hamburger").addEventListener("click",(e)=>{
        document.querySelector(".left").style.left="0"
    })
    document.querySelector(".close").addEventListener("click",(e)=>{
        document.querySelector(".left").style.left="-100%"
    })
    previous.addEventListener("click",(e)=>{
        console.log("Previous clicked")
        console.log(audio)
        currentsongindex--
        if(currentsongindex<0){
            currentsongindex=songs.length-1
            
        }
        playmusic(songs[currentsongindex])

    })
    next.addEventListener("click",(e)=>{
        console.log("next clicked")
        console.log(audio)
        currentsongindex++
        if(currentsongindex>=songs.length) currentsongindex=0
        playmusic(songs[currentsongindex])
    })
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",e=>{
        audio.volume=parseInt(e.target.value)/100
    })
    Array.from(document.getElementsByClassName('card')).forEach(card=>{
        card.addEventListener("click", async ()=>{
            let foldernew= card.dataset.folder
            songs= await getsongs(foldernew)
            currentsongindex=0
            let songlist= document.querySelector(".songlist ul")
            songlist.innerHTML=""
            for (const song of songs) {
        let songname= song.split("/").pop()
        songname=songname.replaceAll("%20"," ")
        songname=songname.replaceAll(".mp3","")
        songlist.innerHTML += `
    <li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>${songname}</div>
            
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img src="play.svg" alt="">
        </div>
    </li>`
        
    }
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach((li,index) => {
        li.addEventListener("click",element=>{
            playmusic(songs[index])
        })
    });

       playmusic(songs[0])     

        })
    })
    
}
main()