import React from "react";
import { CircularProgress } from "@material-ui/core";

let style = {
  position : 'absolute',
  left: '50%',
  top: '50%'
};

const Preloader = () => (
  <CircularProgress color="secondary" style={style}/>
);

export default Preloader;