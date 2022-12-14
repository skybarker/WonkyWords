import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="bg-black flex flex-col min-h-screen">
        <header className="bg-black h-32 mt-0 pt-0">
          <h1 className="flex flex-col text-center animate-bounce text-6xl p-10  text-orange-400 font-serif ">
            Wonky Words
          </h1>
        </header>
        <Nav></Nav>
        <div className="flex justify-center flex-grow">
          <Outlet />
        </div>
        <footer className="pr-4 text-right bg-gradient-to-r from-green-400 to-orange-400">
          2022
        </footer>
      </div>
    </>
  );
}

export default App;
