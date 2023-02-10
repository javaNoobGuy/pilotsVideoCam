
var res = null;

const getJsonArchive = async() => {
    const res = await fetch("http://127.0.0.1:5500/rpg/dataBase.Json");
    const data = await res.json();
    console.log(data);
    fazerUi(data);
}

getJsonArchive();

const fazerUi = (data) =>{

    let divButtons = document.createElement("div");
    divButtons.className = 'buttons-background-pilots';

    for(const property in data.personalidadesFamosas){

        let button = document.createElement('button');
        button.className = 'button';

        let card = document.createElement('div');
        card.className='card';

        let textos = document.createElement('div');
        textos.className = 'textos';

        let img = document.createElement('img');
        img.src = data.personalidadesFamosas[property].img;

        card.append(img);

        button.onclick = function () {
            currentPerson = data.personalidadesFamosas[property];
            racesMenu(currentPerson);
        };

        textos.innerText = data.personalidadesFamosas[property].nome;
        card.append(textos);
        button.append(card);

        console.log(property + " = " + data.personalidadesFamosas[property]);
        divButtons.append(button);
        
      }

    let div = document.getElementById("buttonsMother");
    console.log(div);
    div.append(divButtons);
    

}

const racesMenu = (racer) => {

    let videosRaces = document.getElementById("videosRaces");
    videosRaces.innerText = "";
    let divbuttonsMenu = document.createElement('div');
    divbuttonsMenu.className = 'buttons-background';

    for(corridaAtual in racer.corridas){

        let button = document.createElement('button');
        button.className = 'corridaButton';

        let img = document.createElement('img');
        img.src= racer.img;

        let corrida = document.createElement('div');
        corrida.className = 'corrida';

        let textos = document.createElement('div');
        textos.className='textos';
        textos.innerText= corridaAtual;

        corrida.append(textos);

        button.append(img);
        button.append(corrida);
        console.log(button);

        console.log(corridaAtual);

        let currentRace = corridaAtual;

        button.onclick = function(){
            
            let iframe = document.createElement('iframe');
            let video = document.getElementById('video');
            video.innerText="";
            iframe.width="560";
            iframe.height="315";
            iframe.src = racer.corridas[currentRace];
            iframe.title= "YouTube video player";
            iframe.frameBorder = "0";
            iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.allowFullscreen = true;
            video.append(iframe);
            
        }

        divbuttonsMenu.append(button);

    }

    videosRaces.append(divbuttonsMenu);
}





