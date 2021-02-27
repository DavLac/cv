import React from "react";
import "../../translations/i18n";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionDetails, AccordionSummary, Container } from "@material-ui/core";
import { ExperienceDetails } from "./details/ExperienceDetails";
import { ExperienceDates } from "./dates/ExperienceDates";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const Experiences = () => {
  const { t } = useTranslation();

  const profileData: any = t("profileData:profile", { returnObjects: true });

  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      className="container-custom container-darken">
      <h1 className="container-title">
        {t("common:workExperienceTitle")}
      </h1>
      <Timeline className="timeline-experience">
        {displayRoles(profileData.roles.worker)}
      </Timeline>

      <Accordion className="experience-student-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>
            <h1 className="experience-student-title">
              {t("common:studentExperienceTitle")}
            </h1>
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <Timeline className="timeline-experience">
            {displayRoles(profileData.roles.student)}
          </Timeline>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

const displayRoles = (roles: any) => {
  const timelineItems: any[] = [];

  roles.map((role: any) =>
    timelineItems.push(
      timelineItem(role.contract.startDate, role.contract.endDate, role)
    )
  );

  return <div>{timelineItems}</div>;
};

const timelineItem = (startDate: string, endDate: string, roleDetails: any) => {
  return (
    <TimelineItem key={roleDetails.position}>
      <TimelineOppositeContent
        style={{
          flex: "0",
          padding: "12px 0 0 0",
        }}
        className={"timeline-opposite-content"}
      >
        <ExperienceDates
          startContractDate={startDate}
          endContractDate={endDate}
        />
      </TimelineOppositeContent>
      <TimelineSeparator className={"experience-separator"}>
        <TimelineDot className="experience-timelinedot" color={"inherit"} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent style={{padding: "12px 0 0 0"}}>
        <ExperienceDetails roleDetails={roleDetails} />
      </TimelineContent>
    </TimelineItem>
  );
};
