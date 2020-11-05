import React, { Component } from "react";

import Book from "../Book/Book";

import { Grid, Card, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  root: {
    maxWidth: "100%",
    width: "600px",
    margin: "auto",
  },
  child: {
    maxWidth: "150px",
  },
  hideTitle: {
    display: "none",
  },
};

class Cards extends Component {
  render() {
    const { classes, books } = this.props;

    return (
      <Grid container justify="center" className={classes.root} spacing={2}>
        {books.map(({ title, image, url }) => (
          <Grid
            item
            className={classes.child}
            xs={12}
            sm={6}
            md={4}
            xl={3}
            key={title}
          >
            <Link to={url}>
              <Card className={classes.child}>
                <Book
                  image={image}
                  title={title}
                  titleStyles={classes.hideTitle}
                />
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(Cards);
