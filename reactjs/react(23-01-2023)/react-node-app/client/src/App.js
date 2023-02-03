import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Assignment2 from './components/Assignment-2'
import Ass1 from './components/file1'
import Assignment_3 from './components/Assignment-3'
import CreateFolder from "./components/FS_Module";
import AssJson from "./components/JsonAss4";
import ApiJson from "./components/apiAss4";
import AssJson2 from "./components/AssJson2";
import JsonApiMerge from "./components/jsonApiMerge";

const App = () => {
  return (
    <div>

      {/* <Assignment_3/> */}
      {/* <Ass1/> */}
      {/* <Assignment1/> */}
      {/* <Assignment2/> */}
      {/* <CreateFolder/> */}
      {/* <AssJson/> */}
      {/* <AssJson2/> */}
      {/* <ApiJson/> */}
      <JsonApiMerge/>
    </div>

  )
}

export default App
