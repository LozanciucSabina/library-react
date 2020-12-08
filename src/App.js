import React, { Component } from "react";

import Book from "./components/Book/Book";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { db } from "./base";
import "./styles/style.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      filters: {
        author: [],
        publisher: [],
        categories: [],
        year: [],
        language: [],
      },
    };
  }

  async componentDidMount() {
    const books = await db
      .collection("books")
      .get()
      .then((querySnapshot) => querySnapshot.docs.map((doc) => doc.data()));
    const booksWithUrl = books.map((book) => ({
      ...book,
      url: `/${book.title.toLowerCase().replace("?", "").split(" ").join("-")}`,
    }));
    this.setState({ books: booksWithUrl });
  }

  handleFilterChange({ target: { id, name, checked } }) {
    const getFilterData = () => {
      const filter = [...this.state.filters[name]];

      if (checked) {
        filter.push(id);
      } else {
        filter.splice(filter.indexOf(id), 1);
      }

      return filter;
    };

    this.setState({
      filters: {
        ...this.state.filters,
        [name]: getFilterData(),
      },
    });
  }

  selectBooksByCheckedFilters(filters) {
    const { books } = this.state;
    const booksToBeDisplayed = [];
    for (let key in filters) {
      console.log(Boolean(!filters[key].length === false));
      if (!filters[key].length === false) {
        console.log("key:", key);
        console.log("filters[key]:", filters[key]);
        books.forEach((book) => {
          if (!booksToBeDisplayed.includes(book)) {
            console.log(booksToBeDisplayed);
            if (filters[key].includes(String(book[key]))) {
              booksToBeDisplayed.push(book);
            }
          }
        });
      }
    }

    return booksToBeDisplayed;
  }

  render() {
    const { books, filters } = this.state;
    return (
      <Router>
        <Header />

        <Route exact path="/">
          <Cards books={this.selectBooksByCheckedFilters(this.state.filters)} />
          <Sidebar
            books={books}
            filters={filters}
            handleFilterChange={(e) => this.handleFilterChange(e)}
          />
        </Route>

        {this.state.books.map((book) => {
          return (
            <Route path={book.url} key={book.title}>
              <Book {...book} />
            </Route>
          );
        })}
      </Router>
    );
  }
}
