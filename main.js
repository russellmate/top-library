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
}

const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

const libraryBooks = document.querySelector('.library-books');

function displayLibrary() {
	myLibrary.forEach((item, i) => {
		const bookCard = document.createElement('li');
		bookCard.classList.add('book-card');
		bookCard.setAttribute('data-index', `${i}`);

		const bookTitle = document.createElement('p');
		bookTitle.textContent = `Title: ${item.title}`;
		
		const bookAuthor = document.createElement('p');
		bookAuthor.textContent = `Author: ${item.author}`;
		
		const bookPages = document.createElement('p');
		bookPages.textContent = `Pages: ${item.pages}`;
		
		const bookRead = document.createElement('div');
		bookRead.setAttribute('id', 'new-book-read');
		const readTitle = document.createTextNode('Read?');
		bookRead.appendChild(readTitle);
		const bookReadSelect = document.createElement('select');
		bookRead.appendChild(bookReadSelect);
		bookReadSelect.style.marginLeft = '1rem';
		const readYes = document.createElement('option');
		readYes.value = 'Yes';
		readYes.text = 'Yes';
		const readNo = document.createElement('option');
		readNo.value = 'No';
		readNo.text = 'No';
		bookReadSelect.add(readYes, null);
		bookReadSelect.add(readNo, null);

		const bookRemove = document.createElement('button');
		bookRemove.setAttribute('id', 'delete');	
		bookRemove.textContent = 'Delete';
		bookRemove.addEventListener('click', () => {
			libraryBooks.removeChild(bookCard)
			myLibrary.splice(bookCard, 1);
		})
		
		bookCard.appendChild(bookTitle);
		bookCard.appendChild(bookAuthor);
		bookCard.appendChild(bookPages);
		bookCard.appendChild(bookRead);
		bookCard.appendChild(bookRemove);
		libraryBooks.appendChild(bookCard);
		}
		);
		saveData();
}

function addBookToLibrary(i) {
	const bookCard = document.createElement('div');
	bookCard.classList.add('book-card');
	bookCard.setAttribute('data-index', `${i}`);

	const title = document.querySelector('#new-book-title').value
	const bookTitle = document.createElement('p');
	bookTitle.textContent = `Title: ${title}`;

	const author = document.querySelector('#new-book-author').value
	const bookAuthor = document.createElement('p');
	bookAuthor.textContent = `Author: ${author}`;

	const pages = document.querySelector('#new-book-pages').value; 
	const bookPages = document.createElement('p');
	bookPages.textContent = `Pages: ${pages}`;

	const bookRead = document.createElement('div');
	bookRead.setAttribute('id', 'new-book-read');
	const readTitle = document.createTextNode('Read?');
	bookRead.appendChild(readTitle);
	const bookReadSelect = document.createElement('select');
	bookRead.appendChild(bookReadSelect);
	bookReadSelect.style.marginLeft = '1rem';
	const readYes = document.createElement('option');
	readYes.value = 'Yes';
	readYes.text = 'Yes';
	const readNo = document.createElement('option');
	readNo.value = 'No';
	readNo.text = 'No';
	bookReadSelect.add(readYes, null);
	bookReadSelect.add(readNo, null);
	
	const bookRemove = document.createElement('button');
	bookRemove.setAttribute('id', 'delete');
	bookRemove.textContent = 'Delete';
	bookRemove.addEventListener('click', () => {
		libraryBooks.removeChild(bookCard)
		myLibrary.splice(bookCard, 1);
	})

	const newBook = new Book(title, author, pages);
	myLibrary.push(newBook);
	saveData();
	bookCard.appendChild(bookTitle);
	bookCard.appendChild(bookAuthor);
	bookCard.appendChild(bookPages);
	bookCard.appendChild(bookRead);
	bookCard.appendChild(bookRemove);
	libraryBooks.appendChild(bookCard);
	addBookModal.classList.add('hidden');
	addBookModal.classList.remove('new-book-modal');
	document.querySelector('.new-book-form').reset();
}

const addToLibrary = document.querySelector('.add-to-library');
addToLibrary.addEventListener('click', addBookToLibrary());

function saveData() {
	localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}