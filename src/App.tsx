import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";
import { Home } from "@/pages/Home";
import { Swap } from "./pages/Swap";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swap" element={<Swap />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
