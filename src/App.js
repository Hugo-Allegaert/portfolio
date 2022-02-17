import './services/multilingual'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { CustomThemeProvider } from "./context/theme-context";
import Hello from './components/Hello';
import Section from './components/Section';
import { useTranslation } from "react-i18next";
import Skills from './components/Skills';

function App() {
  const { t } = useTranslation();

  return (
    <CustomThemeProvider >
      <Header />
      <Section>
        <Hello />
      </Section>
      <Section title={t("Skills")} subtitle={t("MySkills")} id="skills">
        <Skills />
      </Section>
      <Section title={t('Qualification')} subtitle={t('MyPersonalJourney')} id="qualification">test</Section>
    </CustomThemeProvider>
  );
}

export default App;
