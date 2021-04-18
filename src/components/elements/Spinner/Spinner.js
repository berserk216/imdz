import React from 'react';
// import './Spinner.css';

import { ClipLoader } from "react-spinners";

const Spinner = () => (
  // <div className="loader"></div>
  <div className="justify-content-center">
  <ClipLoader color="black" size={200} loading={true}  />
  </div>
)

export default Spinner;