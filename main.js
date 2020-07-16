// For this project, we will be creating a very simple web page
//  to practice the basics of DOM manipulation
//   using document.createElement(), someElement.append(), and someElement.remove().

const bodyElement = document.querySelector('body')
const buttonElement = document.createElement('button')
buttonElement.append('remove')
bodyElement.append(buttonElement)

const mainElement = document.createElement('main')
bodyElement.append(mainElement)


// You can pick whichever image you'd like to display and whichever link you want
// to add, but these elements should work as intended 
// (e.g. the image element should display an actual image and the anchor tag should link
// to another page). Also, don't forget to add the classes you see above to the image and
// anchor elements.

const imgElement = document.createElement('img')
imgElement.src = 'LIFE.jpg'
imgElement.className = 'img'
mainElement.append(imgElement)


const anchorElement = document.createElement('a')
anchorElement.href = 'https://www.youtube.com/c/BeInspiredChannel/videos'
anchorElement.className = 'link'
anchorElement.append(' My Favorite YouTube Channel')
mainElement.append(anchorElement)


const imgElement2 = document.createElement('img')
imgElement2.src = 'NEVER.jpg'
imgElement2.className = 'img'
mainElement.append(imgElement2)

// Now, add a "click" event listener to the button element you created. On click, 
// remove the <main> element node from the page. After clicking this button, 
// the user should only see the button on the page and the DOM tree should look like this:

buttonElement.addEventListener('click', function(){
    mainElement.remove()
})