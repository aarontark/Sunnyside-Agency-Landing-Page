const imgList = document.querySelectorAll('img');
const hamburgerBtn = document.querySelector('.hamburger-img');
const navCorner = document.querySelector('.nav-corner');
const navBtns = document.querySelector('.nav-btns');

hamburgerBtn.addEventListener('click', () => {
    if(navCorner.style.display === 'none' || navCorner.style.display == '') {
        navCorner.style.display = 'block';
        navBtns.style.display = 'flex';
    } else {
        navCorner.style.display = 'none';
        navBtns.style.display = 'none';
    }
})

if(window.innerWidth >= 750) {
    imgList.forEach((img) => {
        if(img.src.includes('mobile')){
            img.src = img.src.replace('mobile', 'desktop');
        }
    })
}

