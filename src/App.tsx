import { I18nextProvider, useTranslation } from 'react-i18next';
import './App.css';
import Section from './components/Section';
import { i18nInstance } from './i18n/i18n';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ProfileImage from './components/ProfileImage';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';
import DetailsSection from './components/DetailsSection';



function App() {
  const { t } = useTranslation(["translation"]);
  const theme = useTheme();
  const desktopSize = useMediaQuery(theme.breakpoints.up("md"))
  const paddingPx = desktopSize ? '35px 55px 35px 55px' : '10px 15px 10px 15px';

  return (
    <Container sx={{ backgroundColor: '#282c34', paddingRight: '0px', marginTop: '15px' }}>
      <Grid container justifyContent={'center'} sx={{ p: 3 }} spacing={3}>
        <I18nextProvider i18n={i18nInstance}>
          <Grid container direction={'row'} sx={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: paddingPx }}>
              <ProfileImage />
            <Grid item xs={12} sm={12} md={9}>

              <Section title={t("title.profile")} icon={<AccountBoxIcon />} description={[t("experience.profile")]} />

              <Section title={t("title.experience")} icon={<BusinessCenterIcon />} subtitle={t("subtitle.encora")} description={[t("experience.encora1"), t("experience.encora2"), t("experience.encora3"), t("experience.encora4"), t("experience.encora5")]} dateOfWork='January 2022 — Present' />

              <Section subtitle={t("subtitle.apprentice")} description={[t("experience.apprentice1"), t("experience.apprentice2"), t("experience.apprentice3"), t("experience.apprentice4")]} dateOfWork='September 2021 — January 2022' />
              <Grid container direction='column' marginLeft={{ xs: 2, sm: 5 }}>
                <Link href="https://github.com/Greenstand/treetracker-web-map-client/pull/378">Greenstand/treetracker-web-map-client</Link>
                <Link href="https://github.com/Greenstand/treetracker-web-map-client/pull/373">Greenstand/treetracker-web-map-client</Link>
                <Link href="https://github.com/Greenstand/treetracker-admin-client/pull/255">Greenstand/treetracker-admin-client</Link>
              </Grid>
              <Section title={t("title.education")} subtitle={t("subtitle.education")} icon={<SchoolIcon />} dateOfWork='August 2017 — May 2021' />
              <Section title={t("title.internships")} subtitle={t("subtitle.internships")} description={[t("experience.internship1"),t("experience.internship2"),t("experience.internship3"),t("experience.internship4")]} icon={<GroupIcon />} dateOfWork='January 2020 — June 2020' />


            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <DetailsSection title={'Details'}/>
            </Grid>
          </Grid>
        </I18nextProvider>

      </Grid>
    </Container>

  );
}

export default App;
