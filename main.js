// 1. Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

let header = document.querySelector('.article__header')
header.textContent = "Welcome to the Samuel Blog"

//2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

let artHead = document.querySelectorAll('.article__header')

for (let i = 0; i < artHead.length; i++){
  artHead[i].classList.add('important')
}

//3. Obtain a reference the element with a class of dashed and remove it.

let dashed = document.querySelector('.dashed')
dashed.classList.remove('dashed')

//4. Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

let footer = document.querySelector('.article__footer')
footer.classList.add('goldenrod')
