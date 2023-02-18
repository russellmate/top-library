const addBookModal = document.querySelector('.hidden');
const addBook = document
	.querySelector('.add-book')
	.addEventListener('click', () => {
		addBookModal.classList.add('new-book-modal');
		addBookModal.classList.remove('hidden');
	});
const modalExit = document
	.querySelector('.modal-exit')
	.addEventListener('click', () => {
		addBookModal.classList.add('hidden');
		addBookModal.classList.remove('new-book-modal');
	});

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

//const theHobbit = new Book('The Hobbit', 'JRR Tolkien', 500, '')

let myLibrary = [];

function displayLibrary() {
	myLibrary.forEach(item => {
			const libraryBooks = document.querySelector('.library-books');
			const bookCard = document.createElement('li');
			const bookTitle = document.createElement('p');
			const bookAuthor = document.createElement('p');
			const bookPages = document.createElement('p');
			const bookRead = document.createElement('INPUT').setAttribute('type', 'checkbox');
			//const bookRemove = document.createElement('button');
		
			bookCard.classList.add('book-card');
			bookCard.setAttribute('id', myLibrary.indexOf(item));
		
			bookTitle.textContent = item.title;
			bookCard.appendChild(bookTitle);
		
			bookAuthor.textContent = item.author;
			bookCard.appendChild(bookAuthor);
		
			bookPages.textContent = item.pages;
			bookCard.appendChild(bookPages);

		if(document.querySelector('#new-book-read').value === true) {
			bookRead.checked = true;
		} else {
			bookRead.checked = false;
		}
			bookCard.appendChild(bookRead);
		
			libraryBooks.appendChild(bookCard);
		}
	);
}

window.onload = displayLibrary()

function addBookToLibrary() {
	let newBook = new Book(
		document.querySelector('#new-book-title').value,
		document.querySelector('#new-book-author').value,
		document.querySelector('#new-book-pages').value,
		document.querySelector('#new-book-read').value
	);
	myLibrary.push(newBook);
	saveData();
	addBookModal.classList.add('hidden');
	addBookModal.classList.remove('new-book-modal');
	document.querySelector('.new-book-form').reset();
}

const addToLibrary = document.querySelector('.add-to-library');
addToLibrary.addEventListener('click', addBookToLibrary());

function saveData() {
	localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

//function loadData() {}

console.log(myLibrary);
