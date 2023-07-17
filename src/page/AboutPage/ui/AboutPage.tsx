import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation('page_about')
    return (
        <div>
            {t('about-page-title')}
        </div>
    );
};

export default AboutPage;

