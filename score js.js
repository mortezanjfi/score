var h1 = document.querySelector("h1"),
    h4 = document.querySelector("h4"),
    input = document.querySelector("input"),
    pone = document.querySelector("#pone"),
    ptwo = document.querySelector("#ptwo"),
    reset = document.querySelector("#reset"),
    p1score = 0,
    p2score = 0,
    endScore = 7,
    endGame = false;

// ============funcs============
pone.addEventListener("click",function(){
    if (!endGame && endScore >= p1score){
        p1score++;
        document.querySelector("span").innerHTML = p1score;    
        if(p1score === endScore) {
            document.querySelector("span").style.color = "green";
            pone.classList.add("green");
            endGame = true;
        }
    }
})

ptwo.addEventListener("click",function(){
    if (!endGame && endScore >= p2score){
        p2score++;
        document.getElementsByTagName("span")[1].innerHTML = p2score;
        if(p2score === endScore) {
            document.getElementsByTagName("span")[1].style.color = "green";
            endGame = true;
        }
    }
})

input.addEventListener("change",function(){
    if (!endGame){
        h4.innerHTML = "Playing to: " + this.value;
        endScore = Number(this.value);
    }
})

reset.addEventListener("click",function(){
    p1score = 0,
    p2score = 0,
    endScore = 7
    endGame = false;
    input.value = null;
    h4.innerHTML = "Playing to: " + endScore;
    document.querySelector("span").style.color = "black";
    document.querySelector("span").innerHTML = p1score;    
    document.getElementsByTagName("span")[1].style.color = "black";
    document.getElementsByTagName("span")[1].innerHTML = p2score; 
})