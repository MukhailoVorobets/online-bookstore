package com.example.onlinebookstore.repository.book;

import com.example.onlinebookstore.entity.Book;
import java.util.List;

public interface BookRepository {
    Book save(Book book);

    List<Book> findAll();
}
