function startClouds(){
    var cloudArray = new Array();
    cloudArray.push(document.getElementById("binaryBites"));
    cloudArray.push(document.getElementById("masterMind"));
    cloudArray.push(document.getElementById("cipher"));
    cloudArray[3] = document.getElementById("oldPortfolio");
    yPos = (Math.random()*500) +1
    xPos = (Math.random()*1500) +1
    cloudArray[2].style.top= yPos+"px";
    cloudArray[2].style.left= xPos+"px";
    placeClouds(cloudArray);
};

function placeClouds(cloudArray){
    for(i=0; i<cloudArray.length; i++){
    yPos = (Math.random()*500) +1
    xPos = (Math.random()*1500) +1
    cloudArray[i].style.top= yPos+"px";
    cloudArray[i].style.left= xPos+"px";
    }

};