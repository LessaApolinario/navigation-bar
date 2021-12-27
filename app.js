const div = document.getElementById('container')
const header = document.createElement('header')
div.append(header)

const nav = document.createElement('nav')
header.append(nav)

const ul = document.createElement('ul')
nav.append(ul)

let lisAsArray = new Array(4).fill()

lisAsArray.map((newListItem) => {
  newListItem = document.createElement('li')
  newListItem.classList.add('listItem')
  ul.append(newListItem)
})

const lis = document.querySelectorAll('.listItem')

const selectNavBarContent = (navBarItem) => {
  const navBarItems = {
    0: 'HomePage',
    1: 'Blog',
    2: 'Contact',
    3: 'About',
  }

  return navBarItems[navBarItem]
    ? navBarItems[navBarItem]
    : 'Não existe um item correspondente!'
}

lis.forEach((item, index) => {
  item.innerHTML = selectNavBarContent(index)
})
