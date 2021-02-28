import React from "react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionDetails, AccordionSummary, Chip } from "@material-ui/core";

// @ts-ignore
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import parse from "html-react-parser";

interface Props {
  roleDetails: any;
}

export const ExperienceDetails = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className={"timeline-content"}>
          <h1>{props.roleDetails.position}</h1>
          <h3>
            @ <a href={props.roleDetails.company.website}>
              {props.roleDetails.company.name}
            </a>{" "}
            - {props.roleDetails.company.sector}
          </h3>
          <h3>
            <b>{props.roleDetails.contract.type}</b> -{" "}
            {props.roleDetails.location.city} /{" "}
            {props.roleDetails.location.country}
          </h3>
        </div>
      </AccordionSummary>

      <AccordionDetails>
        <div className={"timeline-content"}>
          {parse(props.roleDetails.jobDescription)}

          {props.roleDetails.training != undefined &&
          props.roleDetails.training.length > 0 ? (
            <span>
              <h2>{t("common:trainingTitle")}</h2>
              {displayTrainings(props.roleDetails.training)}
            </span>
          ) : null}

          {props.roleDetails.technicalStack != undefined &&
          props.roleDetails.technicalStack.length > 0 ? (
            <span>
              <h2>{t("common:technicalStackTitle")}</h2>
              {displayTechStack(props.roleDetails.technicalStack)}
            </span>
          ) : null}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const displayTechStack = (technicalStack: any) => {
  const techStackJsx: any[] = [];

  technicalStack.map((group: any) => {
    techStackJsx.push(<div key={group.groupName}>{displayTechStackElements(group)}</div>);
  });

  return <div>{techStackJsx}</div>;
};

const displayTechStackElements = (elements: any) => {
  const elementsJsx: any[] = [];

  elements.list.map((element: string) => {
    elementsJsx.push(
      <Chip
        key={element}
        label={element}
        size={"small"}
        className={"experience-chip"}
        variant="outlined"
        style={{ backgroundColor: "#f2f2f2", marginLeft: "5px" }}
        clickable
      />
    );
  });

  return (
    <div className={"experience-group-name"}>
      <span>{elements.groupName} :</span>
      {elementsJsx}
    </div>
  );
};
const displayTrainings = (trainings: string[]) => {
  const trainingJsx: any[] = [];

  trainings.map((training: string) => {
    trainingJsx.push(<li key={training}>{training}</li>);
  });

  return <ul className={"experience-training--ul"}>{trainingJsx}</ul>;
};
