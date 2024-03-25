function addBook() {
    //Creating Data
    const book = { 
        id: Date.now(),
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
    deleteBox.value = b.id;
    deleteBox.setAttribute('name', 'deleteBox')
    deleteBox.setAttribute('class', b.id)
    book.setAttribute("class", "listedBooks__book")
    bookInfo.setAttribute('class','listedBooks__bookInfo')
    imageBook.setAttribute('src', b.imageBook);
    title.setAttribute('class', 'listedBooks__title');
    author.setAttribute('class', 'listedBooks__author');
    stock.setAttribute('class', 'listedBooks__stock');
    price.setAttribute('class', 'listedBooks__price');
    deleteBox.setAttribute('class', 'checkBox');
    title.textContent = b.title;
    author.textContent = b.author;
    stock.textContent = b.inventory
    price.textContent = b.price
    bookInfo.append(title, author, stock, price);
    book.append(imageBook, bookInfo, deleteBox);
   document.getElementById('listedBooks').append(book);

   console.log('appendBook function called for book with id: ' + b.id);

}


//Retrieving Data
function getBooks() {
const booksTwo = JSON.parse(localStorage.getItem('books')) || []
   
    if(booksTwo.length > 0) {
        booksTwo.forEach((b) => {
    
        })
} else {
    console.log('No Books');
}
}

//Deleting Data

function deleteBooks(id) {
    let books = JSON.parse(localStorage.getItem('books')) || [];

    books = books. filter(book => book.id != Number(id));

    localStorage.setItem('books', JSON.stringify(books));

    getBooks();

    console.log('it workds')
}



window.onload = () =>{ 
document.getElementById('listedBooks__deleteBtn').addEventListener('click', () => {
    const checkBoxes = document.getElementsByName('deleteBox');

    checkBoxes.forEach(checkBox => {
        if(checkBox.checked) {
            deleteBooks(Number(checkBox.value))
            checkBox.checked = false;
        }
    })
});

getBooks();  
  

}



