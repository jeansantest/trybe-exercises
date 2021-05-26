window.onload = function() {
  function backgroundColor(color) {
    let section = document.querySelector('.section')
    section.style.backgroundColor = color
    localStorage.setItem('backgroundColor', color)
  }

  function textColor(color) {
    let section = document.querySelector('.section')
    section.style.color = color
    localStorage.setItem('color', color)
  }

  function fontSize(size) {
    let section = document.querySelector('.section')
    section.style.fontSize = size
    localStorage.setItem('fontSize', size)
  }

  function lineHeight(line) {
    let section = document.querySelector('.section')
    section.style.lineHeight = line
    localStorage.setItem('lineHeight', line)
  }

  function fontFamily(font) {
    let section = document.querySelector('.section')
    section.style.fontFamily = font
    localStorage.setItem('fontFamily', font)
  }

  //backgroundButtons
  let backgroundColorButtons = document.querySelectorAll('#background-color>button');
  for(let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener('click', function(event) {
      backgroundColor(event.target.innerHTML)
    })
  }

  //textColorButtons
  let colorTextButtons = document.querySelectorAll('#text-color>button');
  for(let index = 0; index < colorTextButtons.length; index += 1) {
    colorTextButtons[index].addEventListener('click', function(event) {
      textColor(event.target.innerHTML)
    })
  }

  //fontSizeButtons
  let fontSizeButtons = document.querySelectorAll('#font-size>button');
  for(let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener('click', function(event) {
      fontSize(event.target.innerHTML)
    })
  }

  //lineHeightButtons
  let lineHeightButtons = document.querySelectorAll('#line-height>button')
  for(let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener('click', function(event) {
      lineHeight(event.target.innerHTML)
    })
  }

  //fontFamilyButtons
  let fontFamilyButtons = document.querySelectorAll('#font-family>button')
  for(let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener('click', function(event) {
      fontFamily(event.target.innerHTML)
    })
  }

  function init() {
    let backgroundColorStorage = localStorage.getItem('backgroundColor')
    if (backgroundColorStorage) backgroundColor(backgroundColorStorage)

    let textColorStorage = localStorage.getItem('color')
    if(textColorStorage) textColor(textColorStorage)

    let fontSizeStorage = localStorage.getItem('fontSize')
    if (fontSizeStorage) fontSize(fontSizeStorage)

    let lineHeightStorage = localStorage.getItem('lineHeight')
    if (lineHeightStorage) lineHeight(lineHeightStorage)
    
    let fontFamilyStorage = localStorage.getItem('fontFamily')
    if (fontFamilyStorage) fontFamily(fontFamilyStorage)
  }
  init()
}
