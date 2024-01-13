const music= new Audio("./assets/1.mp3");
//music.play();

const songs=[
    {
        id:'1',
        songName:` Tere Hawale <br>
         <div class="subtitle">Arijit Singh</div>`,
        poster:"./assets/mp1.webp"
    },
    {
        id:'2',
        songName:` Suno na Sangemarmar <br>
         <div class="subtitle">Arijit Singh    </div>`,
        poster:"./assets/mp2.jpg"
    },
    {
        id:'3',
        songName:` Chand Sifarish <br>
         <div class="subtitle">Sonu Nigam    </div>`,
        poster:"./assets/mp3.jpg"
    },
    {
        id:'4',
        songName:` Ram Siya Ram <br>
         <div class="subtitle"> Sachet    </div>`,
        poster:"./assets/mp4.webp"
    },
    {
        id:'5',
        songName:` Kaise Mujhe <br>
         <div class="subtitle"> Shreya Ghosal    </div>`,
        poster:"./assets/mp5.jpg"
    },
    {
        id:'6',
        songName:` Blank Space <br>
         <div class="subtitle"> Taylor Swift    </div>`,
        poster:"./assets/mp6.webp"
    },
    {
        id:'7',
        songName:` Hips Don't Lie <br>
         <div class="subtitle">Shakira    </div>`,
        poster:"./assets/mp7.webp"
    },
    {
        id:'8',
        songName:` Love Story <br>
         <div class="subtitle"> Taylor Swift    </div>`,
        poster:"./assets/mp8.jpg"
    },
    {
        id:'9',
        songName:` Whenever,Wherever <br>
         <div class="subtitle"> Shakira    </div>`,
        poster:"./assets/mp9.webp"
    },
    {
        id:'10',
        songName:` Mere Sapno ki Rani <br>
         <div class="subtitle"> Kishore Kumar    </div>`,
        poster:"./assets/mp10.jpg"
    },
    {
        id:'11',
        songName:` Yahan Wahan <br>
         <div class="subtitle"> Kishore Kumar    </div>`,
        poster:"./assets/mp11.jpeg"
    },
    {
        id:'12',
        songName:` Pal Pal Dil ke Pass <br>
         <div class="subtitle"> Kishore Kumar    </div>`,
        poster:"./assets/mp12.jpg"
    },
    {
        id:'13',
        songName:` JIska Mujhe Tha <br>
         <div class="subtitle"> Kishore Kumar    </div>`,
        poster:"./assets/mp13.jpg"
    },
    {
        id:'14',
        songName:` Raat Kali Ek Khwab <br>
         <div class="subtitle"> Kishore Kumar    </div>`,
        poster:"./assets/mp14.jpg"
    },
    {
        id:'15',
        songName:` Lag Jaa Gale <br>
         <div class="subtitle"> Lata    </div>`,
        poster:"./assets/mp15.jpg"
    },
    {
        id:'16',
        songName:` Tere Liye <br>
         <div class="subtitle"> Lata    </div>`,
        poster:"./assets/mp16.webp"
    },
    {
        id:'17',
        songName:` Tera Sath Hai <br>
         <div class="subtitle"> Lata    </div>`,
        poster:"./assets/mp17.webp"
    },
    {
        id:'18',
        songName:` Kora Kagaaz <br>
         <div class="subtitle"> Arijit Singh    </div>`,
        poster:"./assets/mp18.webp"
    },
    {
        id:'19',
        songName:` Dope Shope <br>
         <div class="subtitle"> Honey Singh    </div>`,
        poster: "./assets/mp19.jpg"
    },
    {
        id:'20',
        songName:` Blue Eyes <br>
         <div class="subtitle"> Honey Singh    </div>`,
        poster:"./assets/mp20.webp"
    }
]

let masterPlay= document.getElementById("masterPlay");
let wave= document.getElementById("wave");
let playerPlay=document.getElementById("playerPlay");




masterPlay.addEventListener("click",()=>{
    if(music.paused||music.currentTime<=0){
        music.play();
        wave.classList.add("activate");
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        playerPlay.classList.remove("fa-circle-play");
        playerPlay.classList.add("fa-circle-pause");
    } else{
        music.pause();
        wave.classList.remove("activate");
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        playerPlay.classList.add("fa-circle-play");
        playerPlay.classList.remove("fa-circle-pause");
    }
})

playerPlay.addEventListener("click",()=>{
    if(music.paused||music.currentTime<=0){
        music.play();
        wave.classList.add("activate");
        playerPlay.classList.remove("fa-circle-play");
        playerPlay.classList.add("fa-circle-pause");
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    } else{
        music.pause();
        wave.classList.remove("activate");
        playerPlay.classList.add("fa-circle-play");
        playerPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause")
    }
})




let index=0;
let title1=document.getElementById("title1");
let title=document.getElementById("title");
let masterPoster=document.getElementById("masterPoster");
let playPoster=document.getElementById("playPoster");

Array.from(document.getElementsByClassName("fa-play")).forEach((e)=>{
    e.addEventListener("click", (el)=>{
        index=el.target.id;
        music.src=`./assets/${index}.mp3`;
        music.play();
        wave.classList.add("activate");
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        playerPlay.classList.remove("fa-circle-play");
        playerPlay.classList.add("fa-circle-pause");

        let songTitles= songs.filter((em)=>{
            return em.id==index;
        });

        songTitles.forEach(em=>{
            let {songName, poster}=em;
            title1.innerHTML=songName;
            title.innerHTML=songName;
            masterPoster.src=poster;
            playPoster.src=poster;
        });

        

    })
})


let currentStart=document.getElementById("current-time");
let currentEnd=document.getElementById("total-time");
let timeline=document.getElementById("timeline");

music.addEventListener("timeupdate",()=>{
    let music_cur=music.currentTime;
    let music_dur=music.duration;

    let min1= Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);

    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(music_cur/60);
    let sec2=Math.floor(music_cur%60);

    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText=`${min2}:${sec2}`;

    let progressBar=parseInt((music_cur/music_dur)*100);
    timeline.value=progressBar;
    timeline.addEventListener("change",()=>{
        music.currentTime=(timeline.value*music_dur)/100;
    })
})

let previous=document.getElementById("previous");
let next=document.getElementById("next");

next.addEventListener("click",()=>{
    if(index>19)
        index=1;
    else{
        index+=1;
    }
    music.src=`./assets/${index}.mp3`;
    music.play();
    wave.classList.add("activate");
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    playerPlay.classList.remove("fa-circle-play");
    playerPlay.classList.add("fa-circle-pause");

    let songTitles= songs.filter((em)=>{
        return em.id==index;
    });

    songTitles.forEach(em=>{
        let {songName, poster}=em;
        title1.innerHTML=songName;
        title.innerHTML=songName;
        masterPoster.src=poster;
        playPoster.src=poster;
    });

})

previous.addEventListener("click",()=>{
    if(index<=1)
        index=20;
    else{
        index-=1;
    }
    music.src=`./assets/${index}.mp3`;
    music.play();
    wave.classList.add("activate");
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    playerPlay.classList.remove("fa-circle-play");
    playerPlay.classList.add("fa-circle-pause");

    let songTitles= songs.filter((em)=>{
        return em.id==index;
    });

    songTitles.forEach(em=>{
        let {songName, poster}=em;
        title1.innerHTML=songName;
        title.innerHTML=songName;
        masterPoster.src=poster;
        playPoster.src=poster;
    });

})

let vol=document.getElementById("vol");
let vol_icon=document.getElementById("vol-icon");
let volumeline=document.getElementById("volumeline");

vol.addEventListener("change",()=>{

    music.volume=volumeline.value/100;

    if(volumeline.value==0){
        vol_icon.classList.remove("fa-volume-high");
        vol_icon.classList.remove("fa-volume-low");
        vol_icon.classList.add("fa-volume-xmark");
    }
    if(volumeline.value>0){
        vol_icon.classList.remove("fa-volume-high");
        vol_icon.classList.add("fa-volume-low");
        vol_icon.classList.remove("fa-volume-xmark");
    }
    if(volumeline.value>=50){
        vol_icon.classList.add("fa-volume-high");
        vol_icon.classList.remove("fa-volume-low");
        vol_icon.classList.remove("fa-volume-xmark");
    }
});

//search data start

let s_res=document.getElementsByClassName("result")[0];
songs.forEach(ele=>{
    const {id, songName, poster}=ele;
    let card=document.createElement("a");
    card.classList.add("box");
    card.href="#"+id;
    card.innerHTML=`
    <img src="${poster}"/>
    <div class="cont">
        ${songName}
    </div>`;
    s_res.appendChild(card);

})

let ip=document.getElementsByTagName("input")[0];
ip.addEventListener("keyup",()=>{
    let ip_val=ip.value.toUpperCase();
    let items=s_res.getElementsByTagName("a");

    for (let index = 0; index < items.length; index++) {
        let as=items[index].getElementsByClassName("cont")[0];
        let text=as.textContent||as.innerHTML;

        if(text.toUpperCase().indexOf(ip_val)>-1)
        {
            items[index].style.display="flex";
        }
        else{
            items[index].style.display= "none";
        }
        if(ip_val==0){
            s_res.style.display="none";
        }
        else{
            s_res.style.display="";
        }
     }
})

//search data end