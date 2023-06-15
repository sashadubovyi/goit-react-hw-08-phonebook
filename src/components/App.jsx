import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { LoginPage } from 'pages/Login';
import { RegisterPage } from 'pages/Register';
import PhoneBook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Welcome from './Welcome/WelcomePage';

function App() {
  return (
    <Section>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route
          path="/phonebook"
          element={
            <>
              <PhoneBook />
              <Contacts />
            </>
          }
        />
      </Routes>
    </Section>
  );
}

export default App;
