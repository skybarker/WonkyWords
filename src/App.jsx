import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-slate-200 h-32 mt-0 pt-0">
          <h1 className="flex flex-col text-center animate-bounce text-6xl p-10  text-orange-400 ">
            Wonky Words
          </h1>
        </header>
        <nav className="bg-green-400 py-2 mb-8">Links go here</nav>
        <div className="flex-grow">
          <LoginForm />
        </div>
        <footer className="bg-green-400">This is the footer</footer>
      </div>
    </>
  );
}

export default App;
