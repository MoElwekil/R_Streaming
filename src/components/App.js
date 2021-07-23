import React from "react";

import Header from "./pageParts/Header";
import StreamCreate from "./stream/StreamCreate";
import StreamList from "./stream/StreamList";

const App = () => {
  return (
    <div>
      <Header />
      <StreamCreate />
      <StreamList />
    </div>
  );
};
export default App;
