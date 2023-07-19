import { I18nextProvider, useTranslation } from 'react-i18next';
import './App.css';
import Section from './components/Section';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { i18nInstance } from './i18n/i18n';

function App() {
  const {t} = useTranslation(["translation"]);

  return (
    <>
    <I18nextProvider i18n={i18nInstance}>
      <Section title={t("title.experience")} icon={<BusinessCenterIcon />} />

      <Section title={t("title.education")} icon={<SchoolIcon />} />

    </I18nextProvider>
    
    </>

  );
}

export default App;
