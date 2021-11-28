import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useState, useEffect } from "react";

//importing all components
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  //State for holding Page Number & api data
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  // State for Search Component
  let [search, setSearch] = useState("");
  // States for Filtering Data
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  //For API Call
  useEffect(() => {
    (async function () {
      let apiData = await fetch(api).then((res) => res.json());
      setFetchedData(apiData);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center my-4">
        Rick & Morty <span className="text-primary">WIKI</span>
      </h1>

      {/* Search Component */}
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />

      <div className="container">
        <div className="row">
          <Filter
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setGender={setGender}
            setSpecies={setSpecies}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Component */}
      <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default App;
