function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {

}

function addBook(book) {
    const newTr = document.createElement('tr');
    for (property in book) {
        const newTd = document.createElement('td');
        newTd.textContent = book[property];
        newTr.appendChild(newTd);
    }
    body.appendChild(newTr);
}

function updateTable (libArr) {
    libArr.forEach(currentBook => {
        addBook(currentBook);
    });
}

function clearTable() {
    while (body.children.length>0) {
        body.removeChild(body.children[0]);
    }
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");
const deepWork = new Book("Deep Work", "Cal Newport", "230", "reading");
const ess = new Book("ess", "Cal Newport", "230", "reading");

const library = [hobbit, deepWork, ess];
const myLibrary = [];

const body = document.querySelector('tbody');
const th = document.createElement('th');
const tr = document.createElement('tr')
const newBookBtn = document.querySelector('.new');
const dialog = document.querySelector("dialog");
const submit = document.querySelector(".submitBook");
const newBookTitle = document.querySelector("#title")
const newBookAuthor = document.querySelector("#author")
const newBookPages = document.querySelector("#pages")
const newBookRead = document.querySelector("#read")

newBookBtn.addEventListener ("click", () => {
    dialog.showModal();
}
)
submit.addEventListener ("click", (event) => {
    event.preventDefault();
    const newBook = new Book(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.value);
    myLibrary.push(newBook);
    clearTable();
    updateTable(myLibrary);


    dialog.close();
});





