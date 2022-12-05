const buttoggleModal = document.querySelectorAll('[data-show-modal]')

for (let i = 0; i < buttoggleModal.length; i++) {
    buttoggleModal[i].addEventListener('click',function(){
        let valuedataModalcontrol = buttoggleModal[i].getAttribute('data-show-modal')
        document.getElementById(valuedataModalcontrol).classList.toggle('show-modal')
    })    
}

