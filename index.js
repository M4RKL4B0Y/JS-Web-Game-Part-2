function newImage(url){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}

function move(image){
    image.style.position = 'fixed'
    

    function moveToCoordinates (left, bottom) {
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'
    }
    return {
        to: moveToCoordinates
    }
}





function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}


function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', function(){
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
}

let inventory = document.createElement('div')
  
function newInventory(){
  
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}

newInventory()
move(newImage('assets/green-character.gif')).to(900,250)
move(newImage('assets/tree.png')).to(100, 650)
move(newImage('assets/pillar.png')).to(750, 250)
move(newImage('assets/pine-tree.png')).to(750, 650)
move(newImage('assets/crate.png')).to(150, 150)
move(newImage('assets/well.png')).to(400, 575)
move(newImage('assets/boulder.png')).to(300,300)

newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)




