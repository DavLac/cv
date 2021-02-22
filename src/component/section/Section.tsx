import React from 'react';
import {useTranslation} from 'react-i18next';
import '../translations/i18n';
import {CodeBlock} from './CodeBlock';

export const Section = () => {
  const {t} = useTranslation();

  return (
    <section className="section">
      <CodeBlock
        title={t('common:rawProfileTitle')}
        language="Json"
        content={t('profileData:profile', {returnObjects: true})}
      />
    </section>
  );
};
