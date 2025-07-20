import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserContext from './components/UserContext';
import UserProfile from './components/UserProfile';

function App() {
  const userData = { name: "Alice", age: "20", bio: "Frontend student passionate about UI and design" };
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>
    </>
  );
}

export default App;
