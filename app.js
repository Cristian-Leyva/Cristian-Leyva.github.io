let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoOpening = document.querySelectorAll('.opening');
let logoHello = document.querySelectorAll('.hello');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        logoHello.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 100)
        })
    })
    setTimeout(()=>{
        logoHello.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50)
        })
    }, 2000)

    setTimeout(()=>{
        logoOpening.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 80)
        })
    }, 3000)
    setTimeout(()=>{
        logoOpening.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50)
        })
    }, 6000)

    setTimeout(()=>{
        intro.style.top = '-100vh';
    }, 7000)
})
