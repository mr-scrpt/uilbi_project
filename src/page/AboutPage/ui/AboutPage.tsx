import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation('page_about');
  return (
    <div>
      {t('about-page-title')}
    </div>
  );
}

export default AboutPage;
