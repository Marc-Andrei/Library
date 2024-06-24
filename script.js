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
    newTr.class = "Tr";
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

function createRemoveButtons() {
    /*const rem = document.createElement("button");
    rem.class = "delete";
    rem.textContent = "Delete";
    rem.id = body.children.length - 1;
    console.log(rem.id);
    rem.appendChild
    rem.addEventListener ("click" () => {
*/
    while (delButtons.children.length>0) {
        delButtons.removeChild(delButtons.children[0]);
}
    for (let i=0; i < myLibrary.length; i++) {
        const rem = document.createElement("button");
        rem.className = "delete";
        rem.textContent = "Delete";
        rem.id = `${i}`;
        rem.addEventListener("click", (event) => {
            myLibrary.splice(event.target.id, 1);
            clearTable();
            updateTable(myLibrary);
            createRemoveButtons();
        } )

        delButtons.appendChild(rem);


        
    }
    }

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");
const deepWork = new Book("Deep Work", "Cal Newport", "230", "reading");
const ess = new Book("ess", "Cal Newport", "230", "reading");

const library = [hobbit, deepWork, ess];
const myLibrary = [];

const tableDiv = document.querySelector(".table") 
const delButtons = document.querySelector(".delButtons")
const body = document.querySelector('tbody');
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
    newBookTitle.value = "";
    newBookAuthor.value = "";
    newBookPages.value = "";
    newBookRead.value = "";
    myLibrary.push(newBook);
    clearTable();
    updateTable(myLibrary);
    createRemoveButtons();
    dialog.close();
});





