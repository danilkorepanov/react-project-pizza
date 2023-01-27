import CartEmpty from "./components/main/CartEmpty/CartEmpty";
import Content from "./components/main/Home/Content/Content";
import Header from "./components/main/Header/Header";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Cart from "./components/main/Cart/Cart";
import NotFound from "./components/main/NotFound/NotFound";
import React from 'react'


export const SearchContext = React.createContext('')

function App() {
  const [searchValue, setSearchValue] = React.useState('')

  


  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
