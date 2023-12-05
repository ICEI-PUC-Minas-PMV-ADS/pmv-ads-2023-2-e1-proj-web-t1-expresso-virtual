let condicional = 0;

btnMenu.onclick = () => {
    if(condicional == 0){
        navbar.style.height = '400px';
        navbar.style.marginBotton = '20px';
        condicional = 1;
    }else{
        navbar.style.height = '90px';
        navbar.style.marginBotton = '0';
        condicional = 0;
    }

}