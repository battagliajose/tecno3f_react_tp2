import "./styles/reset.css";
import "./styles/normalize.css";
import "./styles/main.css";
import CustomHeader from "./components/CustomHeader";
import MainContent from "./components/MainContent";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <>
      <CustomHeader />
      <MainContent />
      <CustomFooter />
    </>
  );
}

export default App;
