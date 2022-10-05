let tempo = 60;
container_tempo = document.getElementById('container-tempo');
abrirNivel = document.getElementById('escolhenivel')
buttonEasy = document.getElementById('easy')
buttonNormal = document.getElementById('normal')
buttonHard = document.getElementById('hard')
abrirMenu = document.getElementById('abrirMenu');
menu = document.getElementById('menu');
restart = document.getElementById('restart');
resume = document.getElementById('resume');
quit = document.getElementById('quit');


function reiniciaGame(){
    document.location.reload();
}

let intervalo = setInterval( callback, 1000 );

function callback() {
    tempo -= 1;
    container_tempo.innerHTML = tempo;
    if (tempo === 0) {
        document.getElementById('modalLose').style.display="block"
        clearInterval( intervalo );
    }
}

function exibeJogo(){
    document.getElementById('iniciar').style.display="block";
    document.getElementById('towerOne').style.display="flex";
    document.getElementById('towerTwo').style.display="flex";
    document.getElementById('towerthree').style.display="flex";
    document.getElementById('nivel').style.display="none";
}

function towerCreate(){
    let base = document.createElement('div');
    base.setAttribute('id', 'base');

    let towerPin1 = document.createElement("div");
    towerPin1.setAttribute("id", "towerOne");
    towerPin1.setAttribute("class", "pin");
    
    let towerPin2 = document.createElement("div");
    towerPin2.setAttribute("id", "towerTwo");
    towerPin2.setAttribute("class", "pin");

    let towerPin3 = document.createElement("div");
    towerPin3.setAttribute("id", "towerthree");
    towerPin3.setAttribute("class", "pin");

    document.body.appendChild(base);
    base.appendChild(towerPin1);
    base.appendChild(towerPin2);
    base.appendChild(towerPin3);

}towerCreate()


buttonEasy.onclick = () => {
    easyGame();
}

buttonNormal.onclick = () => {
    normalGame();
}

buttonHard.onclick = () => {
    hardGame();
}

function createDiskEasy() {
    let disk1 = document.createElement("div");
    disk1.setAttribute("class", "disk");
    disk1.setAttribute("id", "disk1");
    document.getElementById("towerOne").appendChild(disk1);
  
    
    let disk2 = document.createElement("div");
    disk2.setAttribute("class", "disk");
    disk2.setAttribute("id", "disk2");
    document.getElementById("towerOne").appendChild(disk2);
  
    
    let disk3 = document.createElement("div");
    disk3.setAttribute("class", "disk");
    disk3.setAttribute("id", "disk3");
    document.getElementById("towerOne").appendChild(disk3);

    let disk4 = document.createElement("div");
    disk4.setAttribute("class", "disk");
    disk4.setAttribute("id", "disk4");
    document.getElementById("towerOne").appendChild(disk4);
  
}
  

function createDiskNormal() {
    let disk1 = document.createElement("div");
    disk1.setAttribute("class", "disk");
    disk1.setAttribute("id", "disk1");
    document.getElementById("towerOne").appendChild(disk1);
  
    
    let disk2 = document.createElement("div");
    disk2.setAttribute("class", "disk");
    disk2.setAttribute("id", "disk2");
    document.getElementById("towerOne").appendChild(disk2);
  
    
    let disk3 = document.createElement("div");
    disk3.setAttribute("class", "disk");
    disk3.setAttribute("id", "disk3");
    document.getElementById("towerOne").appendChild(disk3);

    let disk4 = document.createElement("div");
    disk4.setAttribute("class", "disk");
    disk4.setAttribute("id", "disk4");
    document.getElementById("towerOne").appendChild(disk4);

    let disk5 = document.createElement("div");
    disk5.setAttribute("class", "disk");
    disk5.setAttribute("id", "disk5");
    document.getElementById("towerOne").appendChild(disk5);
  
}

function createDiskHard() {
    let disk1 = document.createElement("div");
    disk1.setAttribute("class", "disk");
    disk1.setAttribute("id", "disk1");
    document.getElementById("towerOne").appendChild(disk1);
  
    
    let disk2 = document.createElement("div");
    disk2.setAttribute("class", "disk");
    disk2.setAttribute("id", "disk2");
    document.getElementById("towerOne").appendChild(disk2);
  
    
    let disk3 = document.createElement("div");
    disk3.setAttribute("class", "disk");
    disk3.setAttribute("id", "disk3");
    document.getElementById("towerOne").appendChild(disk3);

    let disk4 = document.createElement("div");
    disk4.setAttribute("class", "disk");
    disk4.setAttribute("id", "disk4");
    document.getElementById("towerOne").appendChild(disk4);

    let disk5 = document.createElement("div");
    disk5.setAttribute("class", "disk");
    disk5.setAttribute("id", "disk5");
    document.getElementById("towerOne").appendChild(disk5);

    let disk6 = document.createElement("div");
    disk6.setAttribute("class", "disk");
    disk6.setAttribute("id", "disk6");
    document.getElementById("towerOne").appendChild(disk6);
  
}

document.getElementById("towerOne").addEventListener("click", switchDisk)

document.getElementById("towerTwo").addEventListener("click", switchDisk)

document.getElementById("towerthree").addEventListener("click", switchDisk)

abrirMenu.addEventListener('click', mainMenu);

restart.addEventListener('click', restartGame);

resume.addEventListener('click', resumeGame);

quit.addEventListener('click', quitGame);


function easyGame() {
    createDiskEasy();
    exibeJogo();
}

function normalGame() {
    createDiskNormal();
    exibeJogo();
}

function hardGame() {
    createDiskHard();
    exibeJogo();
}

function mainMenu(e) { 
    menu.classList.add("visivel");
}

function restartGame(e) {
    document.location.reload();
}

function resumeGame(e) {
    menu.classList.remove('visivel');
}

function quitGame(e) {
    window.location.href = "https://ultima.school/";
}

let clickSituation = true;
let lastRemovedChild = null;
let lastRemovedWidth = -1;

function switchDisk(e){ 
    let lastDisk = e.currentTarget.lastElementChild;
    if (clickSituation === true && e.currentTarget.childElementCount > 0){ 
        lastRemovedWidth = lastDisk.clientWidth;
        clickSituation = false;
        lastRemovedChild = e.currentTarget.removeChild(lastDisk);
        a = document.getElementById('container-peca');
        a.appendChild(lastRemovedChild);
    }else if (clickSituation === false && rules(lastDisk) === true ){
        clickSituation = true
        e.currentTarget.appendChild(lastRemovedChild);
        win();
    }
}

function rules (lastDisk){
    if (lastDisk === null){
    return true
    }else if (lastDisk.clientWidth <= lastRemovedWidth){
       return false
   }else{ 
       return true
   }
}

function win(){
    let towerWin1 = document.getElementById("towerOne");
    let towerWin2 = document.getElementById("towerTwo");
    let towerWin3 = document.getElementById("towerthree");
    if(towerWin1.lastElementChild === null && towerWin2.lastElementChild === null){
        document.getElementById('modalWin').style.display="block"
        clearInterval( intervalo );
    }
    if(towerWin1.lastElementChild === null && towerWin3.lastElementChild === null){
        document.getElementById('modalWin').style.display="block"
        clearInterval( intervalo );
    }
}