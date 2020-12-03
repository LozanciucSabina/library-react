import React, { Component } from "react";

import { FormControl, Paper } from "@material-ui/core";

import {
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.extractGlobalKeys = this.extractGlobalKeys.bind(this);
  }

  extractGlobalKeys(arrayOfKeysToBeExcluded, source) {
    let allKeys = [];

    source.forEach((item) => (allKeys = [...allKeys, ...Object.keys(item)]));

    let uniqueKeys = new Set(allKeys);

    uniqueKeys = [...uniqueKeys];

    let arrayOfObjectsOfKeys = [];

    uniqueKeys
      .filter((key) => !arrayOfKeysToBeExcluded.includes(key))
      .forEach((key) => arrayOfObjectsOfKeys.push({ name: key, options: [] }));

    arrayOfObjectsOfKeys.forEach((object) => {
      source.forEach((item) => {
        if (!object.options.includes(item[object.name])) {
          object.options.push(item[object.name]);
        }
      });
      object.options.sort();
    });
    return arrayOfObjectsOfKeys;
  }

  render() {
    const { books } = this.props;

    const arrayOfObjKeys = this.extractGlobalKeys(
      ["title", "description", "image", "url", "pages"],
      books
    );

    return (
      <Paper>
        {arrayOfObjKeys.map(({ name, options }) => (
          <FormControl key={name}>
            <FormLabel>{name}</FormLabel>
            <FormGroup>
              {options.map((option) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={this.props.handleFilterChange}
                      name={`${name}`}
                      id={`${option}`}
                    />
                  }
                  label={option}
                  key={option}
                />
              ))}
            </FormGroup>
          </FormControl>
        ))}
      </Paper>
    );
  }
}

export default Sidebar;
