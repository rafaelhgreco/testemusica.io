let musicas = [
    {titulo:'BREAKING POINT', artista: 'JDSLVT', src:'song1.mp3', 
    img:'rafa.jpg'},
    {titulo:'Make a Sound ', artista: 'Autopilot Off', src:'song2.mp3', 
    img:'rafa2.jpg'},
    {titulo:'PRINCE OF DARKNESS', artista: 'SHADXWBXRN, ARCHEZ, KXNVRA', src:'song3.mp3', 
    img:'rafa3.jpg'}
];

let musica = document.querySelector('audio');

let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');

duracaoMusica.textContent = segundosparaminutos(Math.floor(musica.duration));

// EVENTOS
document.querySelector('span.botao-play').addEventListener('click', tocarMusica);

document.querySelector('span.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

document.querySelector('span.anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);   

});
document.querySelector('span.proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);

});
// FUNÇÕES

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosparaminutos(Math.floor(musica.duration));
    });

}

function tocarMusica(){
    musica.play();
    document.querySelector('span.botao-pause').style.display = 'block';
    document.querySelector('span.botao-play').style.display ='none';

}

function pausarMusica(){
    musica.pause();
    document.querySelector('span.botao-pause').style.display = 'none';
    document.querySelector('span.botao-play').style.display = 'block';

}

function atualizarBarra(){
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosparaminutos(Math.floor(musica.currentTime));


}

function segundosparaminutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
  
    }
    return campoMinutos+':'+campoSegundos;
}



