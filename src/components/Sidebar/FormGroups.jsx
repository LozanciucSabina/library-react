import React, { Component } from "react";

import {
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

class FormGroups extends Component {
  render() {
    const { formLabel, name, label, handleChange, checked } = this.props;

    return (
       {for(let key in obj){
        
          {<FormLabel>{key}</FormLabel>
          <FormGroup>

          {obj.key.map(categ =>(
            
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={handleChange} name={categ} />
            }
            label={label}
          />
        
           ) )}
           </FormGroup>
          }

        
      }}
        <FormLabel>{formLabel}</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={handleChange} name={name} />
            }
            label={label}
          />
        </FormGroup>
      
    );
  }
}

export default FormGroups;
