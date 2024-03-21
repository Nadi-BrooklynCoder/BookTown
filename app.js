let title = document.getElementById('title').value;
let author = document.getElementById('author').value;
let imageBook = document.getElementById('urlSite').value;
let inventory = document.getElementById('bookInventory__inStock').value;
let price = document.getElementById('price').value;
let listedBooks = document.getElementsByClassName('bookInventory__listedBooks');
let addBook = document.getElementById('formInfo')

// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// itemsArray.forEach(addTask);

// function addTask(text) {
//     const p = document.createElement('p');
//     p.textContent = text;
//     listedBooks.append(p);
// }

// function add() {
//     itemsArray.push(input.value);
//     localStorage.setItem('items', JSON.stringify(itemsArray));
// }

addBook.addEventListener('submit', function (e) {
    e.preventDefault();
    const bookData = {
        title: title.value,
        author: author.value,
        imageBook: imageBook.value,
        inventory: inventory.value,
        price: price.value
    };
    saveBookData(bookData);

})

function saveBookData(bookData){
    let storedBookData = JSON.parse(localStorage.getItem('bookData')) || [];

    storedBookData.push(bookData);

    localStorage.setItem('bookData', JSON.stringify(storedBookData) )

}

console.log(saveBookData())



