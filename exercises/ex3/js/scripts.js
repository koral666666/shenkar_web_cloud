var counter = 0;
var num     = 0;

function NumberOfBoxes(){
    var mylastname  = document.getElementsByTagName("title")[0].innerText.replace("-","");
        mylastname = mylastname.split(" ")[1];
    
        return (mylastname.length) * 2;
}

function PlusOnClick()
{
    var main       = document.getElementsByTagName("main")[0];
    var boxesColor = ["#8ECC69","#619C43","#365729","#A38DC2","#6053A3","#31286F"];
    var star       = 0;
    ++counter;
    ++num;

    if(counter%3 == 0)
        star = 1;
    else
        star = 0;

    main.appendChild(CreatNewSection(counter, star, boxesColor[num]));

    if(num == '5')
        num = -1;
}

function CreatNewSection(counter, star, boxesColor){
    var newSection  = document.createElement("section");
        newSection.style.backgroundColor = boxesColor;

    var plus = document.createElement("section");

    var flagClicked = 0;
        
    if(star == '1'){
        newSection.style.backgroundImage    = "url(../images/code_icon.png)";
        newSection.style.backgroundPosition = "270px 2px";
        newSection.style.backgroundSize     = "47px";
    }
    else{
        newSection.style.backgroundImage    = "none";
        newSection.style.backgroundPosition = "none";
        newSection.style.backgroundSize     = "none";
    }

    if(counter == '1'){           
            plus.style.display         = "flex";
            plus.style.backgroundColor = boxesColor;
            plus.style.width           = "80px";
            plus.style.height          = "80px";
            plus.style.marginLeft      = "126.5px";
            plus.style.marginTop       = "126px";
            
            var horizontalLine = document.createElement("section");
            horizontalLine.style.backgroundColor = "#FFFFFF";
            horizontalLine.style.marginTop       = "35px";
            horizontalLine.style.width           = "80px";
            horizontalLine.style.height          = "10px";
            
            var verticalLine   = document.createElement("section");
            verticalLine.style.backgroundColor   = "#FFFFFF";
            verticalLine.style.marginLeft        = "-45px";
            verticalLine.style.width             = "10px";
            verticalLine.style.height            = "80px";

            plus.onclick   = function(){PlusOnClick();}

            plus.appendChild(horizontalLine);
            plus.appendChild(verticalLine);
            newSection.appendChild(plus);
        }
    else{
        newSection.onclick = function(){
            if(flagClicked == '0'){
                flagClicked = 1;
                newSection.style.backgroundColor    = "#FFFFFF";       
                newSection.style.backgroundImage    = "url(../images/shenkar_icon.png)";
                newSection.style.backgroundPosition = "center";
                newSection.style.backgroundSize     = "200px";
    
                plus.style.visibility               ="hidden";
            }
            else{
                flagClicked = 0;
                newSection.style.backgroundColor    = boxesColor;
                plus.style.visibility               ="visible";
            
                if(star == '1'){
                    newSection.style.backgroundImage    = "url(../images/code_icon.png)";
                    newSection.style.backgroundPosition = "270px 2px";
                    newSection.style.backgroundSize     = "47px";
                }
                else{
                    newSection.style.backgroundImage    = "none";
                    newSection.style.backgroundPosition = "none";
                    newSection.style.backgroundSize     = "none";
                }
            }
        }
    }

    return newSection;
}

window.onload = function Initialize(){
    var main       = document.getElementsByTagName("main")[0];
    var boxesNum   = NumberOfBoxes();
    var boxesColor = ["#8ECC69","#619C43","#365729","#A38DC2","#6053A3","#31286F"];
    var star       = 0;

    for(i=1, num=0; i<=boxesNum; ++i, ++num){
        if(i%3 == 0)
            star = 1;
        else
            star = 0;

        main.appendChild(CreatNewSection(++counter, star, boxesColor[num]));
        
        if(num == '5')
            num = -1;
        if(i == boxesNum)
            --num;
    }
}