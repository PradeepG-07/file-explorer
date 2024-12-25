import React from "react";
import data from "./utils/data";
import FolderFile from "./components/FolderFile";
function App() {
  return (
    <div>
      <FolderFile data={data} />
    </div>
  );
}

export default App;
