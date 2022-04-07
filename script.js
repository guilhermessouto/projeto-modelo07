function menuOpen(){
    let nav = document.getElementById('nav')
    nav.classList.toggle('active',)
}

function buttonHelp(){
    let help = document.getElementById('help')
    help.classList.add('toggleHelp')


    help.innerHTML = '<div id="help-1"><a href="#">About</a> <a href="#">Contact Us</a> <a href="#">Blog</a> <textarea placeholder="Enter your message"></textarea></div>'
}


