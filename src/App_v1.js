import Footer from "./components/Footer";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Logo />
      <Header />
      <Footer title='act' code={1111} website='suttipongact.info' isOpen={false} />
      <hr />
      <Sidebar />
      <Menu />
    </div>
  );
}

export default App;
