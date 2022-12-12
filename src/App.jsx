import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-slate-200 h-32 mt-0 pt-0">
          <h1 className="flex flex-col text-center animate-bounce text-6xl p-10  text-orange-400 ">
            Wonky Words
          </h1>
        </header>
        <Nav />
        <div className="flex-grow">
          <Outlet />
        </div>
        <footer className="bg-green-400">This is the footer</footer>
      </div>
    </>
  );
}

export default App;
