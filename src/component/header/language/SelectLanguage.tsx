import React from "react";
import "../../translations/i18n";
import { i18nFunction } from "../../translations/i18n";

import TranslateIcon from "@material-ui/icons/Translate";

import { Language } from "../../translations/Language";

const handleSelectOnChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  event.preventDefault();
  i18nFunction(event.target.value as string);
};

export const SelectLanguage = () => {
  return (
    <div className="langSelection">
      <div className="control has-icons-left">
        <div className="select">
          <select
            name="language"
            id={Language.EN}
            onChange={handleSelectOnChange}
          >
            <option value={Language.EN}>English</option>
            <option value={Language.FR}>Francais</option>
          </select>
        </div>
        <span className="icon is-left">
          <TranslateIcon className={"translateIcon"} />
        </span>
      </div>
    </div>
  );
};
