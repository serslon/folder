import React, { useEffect, useState } from "react";
import "./App.css";
import Structure from "./components/Structure";

const getData = () => fetch("/api").then(response => response.json());

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(data => setData(data));
  }, []);

  console.log(data);
  return (
    <div>
      {data.length && <Structure child={data} />}
    </div>
  );
};

export default App;
