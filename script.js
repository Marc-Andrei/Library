function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readToggle = function () {
    if(this.read=="yes") {
        this.read = "no";
    }
    else {
        this.read = "yes";
    }
}


function addBook(book) {
    const newTr = document.createElement('tr');
    newTr.class = "Tr";
    for (property in book) {
        if (book.hasOwnProperty(property)) {
        const newTd = document.createElement('td');
        newTd.textContent = book[property];
        newTr.appendChild(newTd);
        }
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
    while (delButtons.children.length>0) {
        delButtons.removeChild(delButtons.children[0]);
}
    while (readButtons.children.length>0) {
        readButtons.removeChild(readButtons.children[0]);
    }
    for (let i=0; i < myLibrary.length; i++) {
        const rem = document.createElement("button");
        const read = document.createElement("button");
        rem.className = "delete";
        read.className = "read";
        rem.textContent = "Delete";
        read.textContent = "Read Toggle";
        rem.id = `${i}`;
        read.count = `${i}`;
        rem.addEventListener("click", (event) => {
            myLibrary.splice(event.target.id, 1);
            clearTable();
            updateTable(myLibrary);
            createRemoveButtons();
        } )

        read.addEventListener("click", (event) => {
            myLibrary[event.target.count].readToggle();
            clearTable();
            updateTable(myLibrary);
            createRemoveButtons();
        })
        readButtons.appendChild(read);

        delButtons.appendChild(rem);


        
    }
    }


const myLibrary = [];

const tableDiv = document.querySelector(".table") 
const delButtons = document.querySelector(".delButtons")
const readButtons = document.querySelector(".readButtons")
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





