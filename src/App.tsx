import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";
import { Home } from "@/pages/Home";
import { Deposit } from "./pages/Deposit";
import { Tokenize } from "./pages/Tokenize";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/tokenize" element={<Tokenize />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
