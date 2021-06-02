import Footer from "./components/Footer";
import Header from "./components/Header";
import Logo from "./components/Logo";

function App() {
  return (
    <div>
      <Logo />
      <Header />
      <Footer title='act' code={1111} website='suttipongact.info' isOpen={false} />
    </div>
  );
}

export default App;
