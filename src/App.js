import React, { Component } from "react";

import Book from "./components/Book/Book";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/style.css";
import { db } from "./base";

export default class App extends Component {
  state = {
    books: [],
  };

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

  render() {
    return (
      <>
        <Router>
          <Header />

          <Route exact path="/">
            <Cards books={this.state.books} />
          </Route>

          <Sidebar books={this.state.books} />

          <Switch>
            {this.state.books.map((book) => {
              return (
                <Route path={book.url} key={book.title}>
                  <Book {...book} />
                </Route>
              );
            })}
          </Switch>
        </Router>
      </>
    );
  }
}
