import { I18nextProvider, useTranslation } from 'react-i18next';
import './App.css';
import Section from './components/Section';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { i18nInstance } from './i18n/i18n';
import ProfileImage from './components/ProfileImage';

function App() {
  const { t } = useTranslation(["translation"]);
  return (
    <>
      <I18nextProvider i18n={i18nInstance}>
        <ProfileImage/>
        <Section title={t("Daniel Arcadio Ramos Pérez")} description={["HOLA JAJA","siu"]} />


        <Section title={t("title.experience")} icon={<BusinessCenterIcon />} subtitle={"Encora september 2021 - current"}  description={[t("experience.encora")]}/>
       
        <Section  subtitle={"Students of excellence January 2020 - May 2020"}  description={[t("experience.sofe")]}/>

        <Section title={t("title.education")} icon={<SchoolIcon />} />

      </I18nextProvider>

    </>

  );
}

export default App;
