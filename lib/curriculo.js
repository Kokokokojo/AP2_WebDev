function dropdown(element, nome){
    //feedback de click
    //alert(element.innerText)

    if(nome == "Hab"){
        const know = document.getElementById("Habilidades")
        if(know.style.display == "block"){
            know.style.display = "none"
        } else{
            know.style.display = "block"
        }   
    }
    
    if(nome == "Conh"){
        const skill = document.getElementById("Conhecimentos")
        if(skill.style.display == "block"){
            skill.style.display = "none"
        } else{
            skill.style.display = "block"
        }   
    }
}
function DarkMode(){
    document.body.classList.toggle('dark-mode');
}