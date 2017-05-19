function startClouds(){
    var cloudArray = new Array();
    cloudArray.push(document.getElementById("binaryBites"));
    cloudArray.push(document.getElementById("masterMind"));
    cloudArray.push(document.getElementById("cipher"));
    cloudArray.push(document.getElementById("oldPortfolio"));
    setCloudSpace(cloudArray);
    for(i=0; i<cloudArray.length; i++){
        animateMe(cloudArray[i].img, 20);
    }
};

function setCloudSpace(cloudArray){
    for(i=0; i<cloudArray.length; i++){
    yPos = (Math.random()*300) +1
    xPos = (Math.random()*1500) +1
    cloudArray[i].style.top= yPos+"px";
    cloudArray[i].style.left= xPos+"px";
    cloudArray[i].style.width= 500+"px";
    cloudArray[i].style.height= 300+"px";
    cloudArray[i].style.border= "1px #CCC solid";
    }    
};

function placeClouds(cloudArray){
    for(i=0; i<cloudArray.length; i++){
    yPos = (Math.random()*500) +1
    xPos = (Math.random()*1500) +1
    cloudArray[i].style.top= yPos+"px";
    cloudArray[i].style.left= xPos+"px";
    }

};

function animateMe(targetElement, speed){
    $("img").animate(
        {
        'left': $(document).width() + 200
        }, 
        { 
        duration: speed, 
        complete: function(){
            animateMe(this, speed);
            }
        }
    );
    
};