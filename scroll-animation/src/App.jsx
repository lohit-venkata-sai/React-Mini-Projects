import { useState, useEffect } from "react";
import Header from "./components/header";
import ScrollIndicator from "./components/scroll indicator";
import Main from "./components/main";

function App() {
  const [scrollPercentage, setScrollPrecentage] = useState(0);
  const handleScroll = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPrecentage((howMuchScrolled / height) * 100);
    console.log((howMuchScrolled / height) * 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="min-h-screen w-full">
      <header>
        <Header />
      </header>
      <section className="sticky top-0">
        <ScrollIndicator percentage={scrollPercentage} />
      </section>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
