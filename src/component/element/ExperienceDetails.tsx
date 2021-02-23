import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionDetails, AccordionSummary, Chip } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

          <Typography className={"experience-detail"}>
            <h1>{props.roleDetails.position}</h1>
            <h3>@
              <a href={props.roleDetails.company.website}>
                {props.roleDetails.company.name}
              </a> - {props.roleDetails.company.sector}</h3>
            <h3>
              <b>
                {props.roleDetails.contract.type}
              </b> - {props.roleDetails.location.city} / {props.roleDetails.location.country}
            </h3>
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography className={"experience-detail"}>
            <p>{props.roleDetails.jobDescription}</p>

            {
              (props.roleDetails.training != undefined &&
                props.roleDetails.training.length > 0)
                ? <span>
                <h2 style={{ marginTop: "15px" }}>{t("common:trainingTitle")}</h2>
                  {displayTrainings(props.roleDetails.training)}
              </span>
                : null
            }

            {
              (props.roleDetails.technicalStack != undefined &&
                props.roleDetails.technicalStack.length > 0)
                ? <span>
                <h2 style={{ marginTop: "15px" }}>{t("common:technicalStackTitle")}</h2>
                  {displayTechStack(props.roleDetails.technicalStack)}
              </span>
                : null
            }


          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  }
;

const displayTechStack = (technicalStack: any) => {
  const techStackJsx: any[] = [];

  technicalStack.map((group: any) => {
    techStackJsx.push(
      <div>
        {displayTechStackElements(group)}
      </div>
    );
  });

  return (
    <div>
      {techStackJsx}
    </div>
  );
};

const displayTechStackElements = (elements: any) => {
    const elementsJsx: any[] = [];

    elements.list.map((element: string) => {
      elementsJsx.push(
        <Chip label={element} style={{ marginRight: "5px", backgroundColor: "#f2f2f2" }} variant="outlined" />
      );
    });

    return (
      <div>
        <span style={{ marginRight: "5px" }}>{elements.groupName} :</span>
        {elementsJsx}
      </div>
    );
  }
;

const displayTrainings = (trainings: string[]) => {
  const trainingJsx: any[] = [];

  trainings.map((training: string) => {
    trainingJsx.push(
      <li>
        {training}
      </li>
    );
  });

  return (
    <ul style={{ listStyleType: "circle", marginLeft: "15px" }}>
      {trainingJsx}
    </ul>
  );
};