import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserContext from './contexts/UserContext';
import UserProfile from './components/UserProfile';

function App() {
  const userData = { name: "Alice", email: "jane.doe@example.com" };
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
