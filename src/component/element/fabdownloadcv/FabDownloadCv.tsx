import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Fab } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Language } from "../../translations/Language";

const getCvLinkByLanguage = (lang: string): string => {
  switch (lang) {
    case Language.FR :
      return "https://app.box.com/s/mwk78l7oup59dabg8j1wvtsr69uobm20";
    case Language.EN :
    default :
      return "https://app.box.com/s/cvk5qzp2oebqamkke3lb165s7cr6sn5t";
  }
};

export const FabDownloadCv = () => {
  const { t } = useTranslation();

  return (
    <Fab
      href={getCvLinkByLanguage(t("common:lang"))}
      variant="extended"
      className={"fab-download-cv"}
      style={{
        position: "fixed",
        backgroundColor: "#2196d3",
        color: "white"
      }}>
      <GetAppIcon /> CV ({t("common:lang")})
    </Fab>
  );
};
