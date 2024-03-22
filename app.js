function addBook() {
    //Creating Data
    const book = { 
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        imageBook: document.getElementById('urlSite').value,
        inventory: document.getElementById('bookInventory__inStock').value,
        price: document.getElementById('price').value
    }

    //Storing Data
    let books = JSON.parse(localStorage.getItem('books'))|| [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

    getBooks();
    

}
//Retrieving Data
function getBooks() {
    document.getElementById('bookInventory__listedBooks').innerHTML = '';

    const booksTwo = JSON.parse(localStorage.getItem('books')) || []
   
    if(booksTwo.length > 0) {
         booksTwo.forEach((b) => {
            const bookInfo = document.createElement('div')
            const imageBook = document.createElement('img');
            const title = document.createElement('div');
            const author = document.createElement('div');
            const stock = document.createElement('div');
            const price = document.createElement('div');
            const deleteBox = document.createElement('input')
            bookInfo.setAttribute('class','bookInventory__bookInfo')
            imageBook.setAttribute('src', b.imageBook);
            title.setAttribute('class', 'bookInventory__title');
            author.setAttribute('class', 'bookInventory__author');
            stock.setAttribute('class', 'bookInventory__stock');
            price.setAttribute('class', 'bookInventory__price');
            deleteBox.setAttribute('class', 'checkBox');
            bookInfo.innerHTML = 
                `<img src="${b.imageBook}" alt="Book Image">
                <p class>${b.title}</p>
                <p>${b.author}</p>
                <p>${b.inventory}</p>
                <p>${b.price}</p>
                <input type="checkbox" name="checkBox">`
            ;
           document.getElementById('bookInventory__listedBooks').append(bookInfo)
        })
} else {
    console.log('No Books');
}
}

//Deleting Data

function deleteBooks() {

}


window.onload = getBooks();

