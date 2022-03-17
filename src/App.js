import React, { useState } from "react";
import DataList from "./components/DataList";
import Headers from "./components/Headers";
import { Container } from "./styles/Container.styled";
import { hash } from "./utils/Hash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modals from "./components/Modals";
import useFetch from "./hooks/useFetch";
const App = () => {
  const [inputval, setInputval] = useState([]);
  const {
    data: result,
    setdata: setresult,
    isPending: isLoading,
    setPending: setLoading,
  } = useFetch(
    `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_PUBLIC_API}&hash=${hash}`
  );
  async function searchHere(e) {
    e.preventDefault();
    const api = await fetch(
      `https://gateway.marvel.com/v1/public/characters?name=${inputval}&ts=1&apikey=${process.env.REACT_APP_PUBLIC_API}&hash=${hash}`
    );
    const data = await api.json();
    setresult(data.data.results);
    setLoading(false);
  }

  return (
    <Router>
      <Container>
        <Headers
          inputval={inputval}
          setInputval={setInputval}
          searchHere={searchHere}
        />
        <Routes>
          <Route
            path="/"
            element={<DataList isLoading={isLoading} result={result} />}
          />
          <Route path="/:id" element={<Modals result={result} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
