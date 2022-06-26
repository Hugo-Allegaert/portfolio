import './services/multilingual'
import './App.css';
import Header from './components/Header';
import { CustomThemeProvider } from "./context/theme-context";
import Hello from './components/Hello';
import Section from './components/Section';
import { useTranslation } from "react-i18next";
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Swipe from './components/Swipe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LeftMenu from './components/LeftMenu';

function App() {
  const { t } = useTranslation();

  return (
    <CustomThemeProvider >
      <Header />
      <LeftMenu />
      <Section id="hello">
        <Hello />
      </Section>
      <Section title={t("Skills")} subtitle={t("MySkills")} id="skills">
        <Skills />
      </Section>
      <Section title={t('Qualification')} subtitle={t('MyPersonalJourney')} id="qualification">
        <Qualification/>
      </Section>
      <Section title={t('Portfolio')} subtitle={t('MostRecentWork')} id="portfolio">
        <Swipe />
      </Section>
      <Section title={t('Contact')} subtitle={t('GetInTouch')} id="contact">
        <Contact />
      </Section>
      <Footer></Footer>
    </CustomThemeProvider>
  );
}

export default App;
