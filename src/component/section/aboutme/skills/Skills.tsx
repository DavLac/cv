import React from "react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionDetails, AccordionSummary, Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const displaySkills = (skills: any) => {
  const skillJsx: any[] = [];

  skills.map((skillObject: any) => {
    skillJsx.push(
      <Accordion key={skillObject.groupName}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <span className={"skills-group-name"}>{skillObject.groupName}</span>
            </Grid>
            <Grid item xs={7}>
              {displayProgressBar(skillObject.level)}
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          {displaySkillElements(skillObject.list)}
        </AccordionDetails>
      </Accordion>
    );
  });

  return <span>{skillJsx}</span>;
};

const displayProgressBar = (level: number) => {
  if (level != undefined) {
    return <progress className="progress is-primary is-small"
                     value={level}
                     max="100"
                     style={{ display: "inline-block" }}>
      {level}%
    </progress>;
  }

  return;
};

const displaySkillElements = (elements: any) => {
  const skillElementsJsx: any[] = [];

  elements.map((element: any) => {
    skillElementsJsx.push(<span key={element}
                                className="skill-element">{element}</span>);
  });

  return <span>{skillElementsJsx}</span>;
};

export const Skills = () => {
  const { t } = useTranslation();
  const profileData: any = t("profileData:profile", { returnObjects: true });

  return (
    <div className={"grid-item-custom"}>
      <h1>{t("common:skillsTitle")}</h1>
      <div>
        {displaySkills(profileData.skills)}
      </div>
    </div>
  );
};