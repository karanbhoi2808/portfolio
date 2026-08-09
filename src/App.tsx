import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header/Header";
import { Summary } from "./components/Summary/Summary";
import { Projects } from "./components/Projects/Projects";
import { TechStack } from "./components/TechStack/TechStack";
import { Education } from "./components/Education/Education";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="portfolio-app">
        <Header />
        <main>
          <Summary />
          <Projects />
          <TechStack />
          <Education />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
