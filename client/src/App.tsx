import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero";
import Chat from "./sections/Chat";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Hero /> />
          <Route path="/chat" element=<Chat /> />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
