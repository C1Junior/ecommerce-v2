import React, { useState } from 'react';
import '../Styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [showToast, setShowToast] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div className="center">
      <div className="switch">
        <input
          id="language-toggle"
          className="check-toggle check-toggle-round-flat"
          type="checkbox"
          checked={selectedLanguage === 'GE'}
          onChange={() =>
            handleLanguageChange(selectedLanguage === 'EN' ? 'GE' : 'EN')
          }
        />
        <label htmlFor="language-toggle"></label>
        <span className="on">EN</span>
        <span className="off">GE</span>
      </div>
      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification-1">
          Language set to {selectedLanguage}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
