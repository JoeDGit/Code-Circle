import Select from 'react-select';
import languageOptions from '../util/languages';

import React from 'react';

export default function LanguageSelect({
  selectedLanguages,
  setSelectedLanguages,
  customStyle,
  isMultiEnabled,
}) {
  const handleChange = (selectedOptions) => {
    if (!isMultiEnabled) {
      setSelectedLanguages(selectedOptions.label);
      return;
    }
    setSelectedLanguages(selectedOptions.map((option) => option.value));
  };

  const value = isMultiEnabled
    ? languageOptions.filter((option) =>
        selectedLanguages.includes(option.value)
      )
    : languageOptions.find((option) => option.value === selectedLanguages);

  return (
    <div className={`mt-4 mb-4 ${customStyle}`}>
      <Select
        id="language-select"
        isMulti={isMultiEnabled}
        placeholder="Add your programming languages"
        onChange={handleChange}
        options={languageOptions}
        value={value}
      />
    </div>
  );
}
