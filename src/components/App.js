import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./pageParts/Header";
import StreamCreate from "./stream/StreamCreate";
import StreamList from "./stream/StreamList";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={StreamList} />
        <Route path="/stream/create" component={StreamCreate} />
      </BrowserRouter>
    </div>
  );
};
export default App;
