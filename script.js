const allRead = document.querySelector('#allread');
const count = document.querySelector('#span3');
const inlineBlock = document.querySelectorAll('inlineblock')
const unreadDot = document.querySelectorAll('.unreadDot');
const unread = document.querySelectorAll('.unread');

const profile = document.querySelectorAll('.profile');

let notify = 3;
count.innerHTML = notify;
//count.innerHTML = unread.length;

allRead.addEventListener('click', () => {
    count.innerHTML = '0'
    for(let i = 0; i < unread.length; i++){
    unread[i].style.backgroundColor = 'transparent'
    }   
})

allRead.addEventListener('click', () => {
    for(let i = 0; i < unreadDot.length; i++){
        unreadDot[i].innerHTML = ''
    }
})



 profile.forEach(prof => {
    prof.classList.remove('unread')
 })

unread.forEach((elem) => {
 elem.addEventListener('click', () => {
    elem.style.backgroundColor = 'transparent';
    count.innerHTML = notify--;
    unreadDot.style.display = 'none';
     
 })
 if (notify <= 0) {
    return 0;
 }
 
})








console.log(unread.length--)
