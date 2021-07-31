import React from "react";
import { Router, Route } from "react-router-dom";

import history from "../history";
import Header from "./pageParts/Header";
import StreamCreate from "./stream/StreamCreate";
import StreamList from "./stream/StreamList";
import StreamEdit from "./stream/StreamEdit";
import StreamDelete from "./stream/StreamDelete";

const App = () => {
  return (
    <div>
      <Header />
      <Router history={history}>
        <Route path="/" exact component={StreamList} />
        <Route path="/stream/create" component={StreamCreate} />
        <Route path="/stream/edit/:id" component={StreamEdit} />
        <Route path="/stream/delete/:id" component={StreamDelete} />
      </Router>
    </div>
  );
};
export default App;
