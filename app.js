function addBook() {
    //Creating Data
    const book = { 
        deleteBox: Date.now(),
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        imageBook: document.getElementById('urlSite').value,
        inventory: document.getElementById('stock').value,
        price: document.getElementById('price').value
    }

    //Storing Data
    let books = JSON.parse(localStorage.getItem('books'))|| [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

    appendBook(book)

    console.log('addBook function called');
}


function appendBook(b) {
    const book = document.createElement('li')
    const bookInfo = document.createElement('div')
    const imageBook = document.createElement('img');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const stock = document.createElement('p');
    const price = document.createElement('p');
    const deleteBox = document.createElement('input');
    deleteBox.type = "checkbox";
    deleteBox.value = b.deleteBox;
    deleteBox.setAttribute('name', 'deleteBox')
    deleteBox.setAttribute('class', b.deleteBox)
    deleteBox.setAttribute('class', 'checkBox')
    book.setAttribute("class", "listedBooks__book")
    bookInfo.setAttribute('class','listedBooks__bookInfo')
    imageBook.setAttribute('src', b.imageBook);
    title.setAttribute('class', 'listedBooks__title');
    author.setAttribute('class', 'listedBooks__author');
    stock.setAttribute('class', 'listedBooks__stock');
    price.setAttribute('class', 'listedBooks__price');;
    title.textContent = b.title;
    author.textContent = b.author;
    stock.textContent = b.inventory
    price.textContent = b.price
    bookInfo.append(title, author, stock, price);
    book.append(imageBook, bookInfo, deleteBox);
   document.getElementById('listedBooks').append(book);

   console.log('appendBook function called for book with id: ' + b.deleteBox);

}


//Retrieving Data
function getBooks() {
const booksTwo = JSON.parse(localStorage.getItem('books')) || []
   
    if(booksTwo.length > 0) {
        booksTwo.forEach((b) => {
            appendBook(b);
        })
} else {
    console.log('No Books');
}
}

//Deleting Data

function deleteBooks(deleteBox) {
    let books = JSON.parse(localStorage.getItem('books')) || [];



    books = books. filter(book => book.deleteBox != Number(deleteBox));

    localStorage.setItem('books', JSON.stringify(books));

    const checkBox = document.querySelector('.checkBox[value="' + deleteBox + '"]');
    if(checkBox){
        checkBox.closest('.listedBooks__book').remove();
    }
    
    console.log('it works')
}

window.onload = () =>{ 
document.getElementById('listedBooks__deleteBtn').addEventListener('click', () => {
    const checkBoxes = Array.from(document.getElementsByName('deleteBox'));
    const checkedBoxes = checkBoxes.filter(checkBox => checkBox.checked)

    checkedBoxes.forEach(checkBox => {
            deleteBooks(Number(checkBox.value))
            checkBox.checked = false;
    })
});

getBooks();  

}



