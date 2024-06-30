import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function UninrollDefinition() {
  const { t } = useTranslation();

  return (
    <div className="container-definition">
      <div className="row">
        <p className="uninroll-definition">
            <span style={{ color: 'white' }}>
              {/* Placeholder 2: This spans the red "U" */}
              <span style={{ color: 'red' }}>U</span>
              ni❜n❜roll
            </span> {t('uninroll_definition')}
        </p>
      </div>
    </div>
  );
}
