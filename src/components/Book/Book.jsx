import React, { Component } from "react";

import { storage } from "../../base";

import {
  CardMedia,
  Box,
  Container,
  Typography,
  withStyles,
} from "@material-ui/core";

const styles = {
  root: {},
  imageSettings: {
    backgroundSize: "contain",
    height: "200px",
  },
};

class Book extends Component {
  state = {
    url: "",
  };

  async componentDidMount() {
    const { image } = this.props;
    const imageRef = storage.ref(`images/${image}`);
    const url = await imageRef.getDownloadURL();
    this.setState({ url });
  }

  render() {
    const { classes } = this.props;
    const {
      title,
      author,
      categories,
      language,
      description,
      titleStyles,
    } = this.props;
    return (
      <Container>
        <Box component="section" className={titleStyles} m={1}>
          <Text content={title} variant="h6" />
          <Text content={`Author: ${author}`} variant="body2" />
          <Text content={`Categories: ${categories}`} variant="subtitle2" />
          <Text content={`Language: ${language}`} variant="subtitle2" />
          <Text content={`Description: ${description}`} variant="body2" />
        </Box>
        {this.state.url && (
          <CardMedia
            image={this.state.url}
            title={title}
            className={classes.imageSettings}
          />
        )}
      </Container>
    );
  }
}

function Text(props) {
  const { content, variant } = props;
  return <Typography variant={variant}>{content}</Typography>;
}

export default withStyles(styles)(Book);
