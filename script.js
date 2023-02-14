    function change(){
    var currId = document.getElementById("secret-value").value;

    const appearAnimation = [
        {transform: "rotate(10deg)"},
        {transform: "rotate(-10deg)"}
    ];

    const time = {
        duration: 200,
        iteration: 1,
    };

    // document.getElementById("main-text").animate(disappearAnimation, time);
    if(currId === "1"){
        document.getElementById("main-text").innerHTML = "Thank you ya Coklatnya :>";
        document.getElementById("secret-value").value = "2";
    } else if(currId === "2"){
        document.getElementById("main-text").innerHTML = "Maaf gak gak bisa kasih cokelat kali ini :(";
        document.getElementById("secret-value").value = "3";
    } else if(currId === "3"){
        document.getElementById("main-text").innerHTML = "Semoga cepat dapat ayang :v";
        document.getElementById("secret-value").value = "4";
    } else {
        document.getElementById("main-text").innerHTML = "Happy Valentine Dede";
        document.getElementById("secret-value").value = "1";
    }
    document.getElementById("main-text").animate(appearAnimation, time);   
    
}