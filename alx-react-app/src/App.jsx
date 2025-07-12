import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Sasha" age="20" bio="Loves reading novels and watching anime." />
      <Footer />
    </>
  );
}

export default App;
