const imgList = document.querySelectorAll('img');

if(window.innerWidth >= 750) {
    imgList.forEach((img) => {
        if(img.src.includes('mobile')){
            img.src = img.src.replace('mobile', 'desktop');
            console.log(img.src);
        }
    })
}

