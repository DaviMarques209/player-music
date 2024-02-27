let musicas = [
    {titulo:'Dead Wrong', artista:'Desconhecido', src:'music/Dead Wrong - Jeremy Blake.mp3', img:'images/giancarlo-duarte-cTj8vbZeX44-unsplash.jpg'},
    {titulo:'Two Hearts', artista:'Desconhecido', src:'music/Two Hearts - TrackTribe.mp3', img:'images/tony-rojas-7kueosQ7Inc-unsplash.jpg'},
    {titulo:'Nature Nurture', artista:'Desconhecido', src:'music/Nature Nurture - Quincas Moreira.mp3', img:'images/neom-D1jr0Mevs-c-unsplash.jpg'},
    {titulo:'Five Of a Kind', artista:'Desconhecido', src:'music/FIVE OF A KIND - Density & Time.mp3', img:'images/eberhard-grossgasteiger-pj9-Gb8dEHE-unsplash.jpg'}
]

let indexMusica = 0;

let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim');

let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

document.querySelector('.play').addEventListener('click',tocarMusica);
document.querySelector('.pause').addEventListener('click',pausarMusica);

musica.addEventListener('timeupdate', andarBarra);

document.querySelector('.anterior').addEventListener('click',() => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 3;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.posterior').addEventListener('click',() => {
    indexMusica++;
    if(indexMusica > 3 ){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
};

function tocarMusica(){
    musica.play()
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
}

function pausarMusica(){
    musica.pause()
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'block';
}

function andarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
   
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

