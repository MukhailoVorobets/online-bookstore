function createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}

function createBookCard(book) {
    const card = document.createElement("div");
    card.className = "book-card";

    card.appendChild(createElement("h3", "title", book.title));
    card.appendChild(createElement("p", "author", book.author));
    card.appendChild(createElement("p", "description", book.description));
    card.appendChild(createElement("p", "price", "$" + book.price));

    return card;
}

async function loadBooks() {
    const list = document.getElementById("book-list");

    try {
        const response = await fetch("/api/books");

        if (!response.ok) {
            throw new Error("Server returned " + response.status);
        }

        const page = await response.json();
        const books = page.content;

        list.innerHTML = "";

        if (books.length === 0) {
            list.textContent = "No books yet.";
            return;
        }

        books.forEach(book => list.appendChild(createBookCard(book)));
    } catch (error) {
        list.textContent = "Could not load books: " + error.message;
    }
}

loadBooks();