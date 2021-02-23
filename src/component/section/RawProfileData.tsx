import React from "react";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import { CodeBlock } from "../element/CodeBlock";
import { Container } from "@material-ui/core";

export const RawProfileData = () => {
  const { t } = useTranslation();

  const profile: any = t("profileData:profile", { returnObjects: true });
  profile.roles = [];

  return (
    <Container
      maxWidth={false}
      className="container-custom container-darken">
      <CodeBlock
        title={t("common:rawProfileTitle")}
        language="Json"
        content={profile}
      />
    </Container>
  );
};
