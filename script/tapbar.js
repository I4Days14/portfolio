function clickli(file){
    const a_href = file.querySelector('a').href;
    window.location.href = a_href
    
}
function uibutton(){
    const locations = window.location.pathname;
    const linkli = document.querySelectorAll('nav li');
    
    linkli.forEach(link =>{
        
        const a_href = link.querySelector('a');

        
    
        if(a_href.pathname === locations){
            a_href.id = 'active';
            link.classList.add('active');
            
        }
        if(locations === "/test/page/" && a_href.className === "tarbar-home"){
            a_href.id = 'active';
            link.classList.add('active');
        }
       
    })
}
uibutton()
