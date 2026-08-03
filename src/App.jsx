import Home from "./pages/Home";
import BackToTop from "./components/BackToTop/BackToTop";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Home />
      <BackToTop />
    </>
  );
}

export default App;
