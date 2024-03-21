function addBook() {
    //Retrieveing Data
    const book = { 
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        imageBook: document.getElementById('urlSite').src,
        inventory: document.getElementById('bookInventory__inStock').value,
        price: document.getElementById('price').value
    }

    //Storing Data
    let books = JSON.parse(localStorage.getItem('books'))|| [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

    getBooks();
}

function getBooks() {
    const booksTwo = JSON.parse(localStorage.getItem('books')) || []
   
    if(booksTwo.length > 0) {
        document.getElementById('bookInventory__listedBooks'),textContent = '';
         booksTwo.forEach((b) => {
            const bookListed = document.createElement('div');
            bookListed.innerHTML = 
                `<p>${b.title}</p>
                <p>${b.author}</p>
                <img src="${b.imageBook}" alt="Book Image">
                <p>${b.inventory}</p>
                <p>${b.price}</p>
                <input type="checkbox" name="checkbox">
                `

            ;
           document.getElementById('bookInventory__listedBooks').appendChild(bookListed)
        })
} else {
    console.log('No Books')
}
}

getBooks();


