import Select from 'react-select';
import languageOptions from '../util/languages';

import React from 'react';

export default function LanguageSelect({
  selectedLanguages,
  setSelectedLanguages,
}) {
  const handleChange = (selectedOptions) => {
    setSelectedLanguages(selectedOptions.map((option) => option.value));
  };

  return (
    <div className="mt-6">
      <Select
        id="language-select"
        isMulti
        placeholder="Add your programming languages"
        style={{ width: 'full' }}
        onChange={handleChange}
        options={languageOptions}
        value={languageOptions.filter((option) =>
          selectedLanguages.includes(option.value)
        )}
      />
    </div>
  );
}
