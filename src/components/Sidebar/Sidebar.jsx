import React, { Component } from "react";

import { Paper } from "@material-ui/core";

import {
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

class Sidebar extends Component {
  render() {
    const { books } = this.props;

    let keysSet = [];
    let filteredKeys = [];
    books.forEach((book) => {
      let allKeys = Object.keys(book);
      filteredKeys = allKeys.filter(
        (key) =>
          key === "publisher" ||
          key === "year" ||
          key === "categories" ||
          key === "author"
      );

      filteredKeys.forEach((key) => {
        if (!keysSet.includes(key)) {
          keysSet.push(key);
        }
      });
    });

    let categories = {};

    filteredKeys.map((key) => (categories[key] = []));

    filteredKeys.forEach((key) =>
      books.forEach((book) => {
        if (!categories[key].includes(book[key])) {
          if (typeof book[key] === "string") {
            if (book[key].includes(",") || book[key].includes("and")) {
              let separator = book[key].includes(",") ? "," : "and";
              let splitComposedCategory = book[key].split(separator);
              splitComposedCategory.forEach((category) => {
                categories[key].push(category.trim());
              });
            } else {
              categories[key].push(book[key]);
            }
          } else categories[key].push(book[key]);
        }
      })
    );

    return null;
    // {
    //   for(let key in categories){
    //     <Paper>
    //       <FormLabel>{key}</FormLabel>
    //       <FormGroup>
    //       {categories.key.map(category =>
    //         <FormControlLabel
    //             control={
    //               <Checkbox checked="true" onChange="function" name={category} />
    //             }
    //             label={category}
    //           />)}
    //       </FormGroup>
    //     </Paper>
    //     }
    // }
  }
}

export default Sidebar;
