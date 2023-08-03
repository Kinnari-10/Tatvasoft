import { ThemeProvider, createTheme } from "@material-ui/core";
import "./App.css";
import { User } from "./User";
import { Home } from "./User";
import { Profile } from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const uname = "menka";
  const theme = createTheme({
    palette: {
      primary: {
        main: "#d32f2f",
      },
    },
    shadows: ["none", "1px 1px gray"],
  });
  useEffect(() => {
    getData();

    async function getData() {
      fetch("https://www.anapioficeandfire.com/api/books")
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }
  }, []);

  return (
    <div className="App">
      {books && (
        <div className="books">
          {books.map((book, index) => (
            <div key={index}>
              <h2>{book.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
