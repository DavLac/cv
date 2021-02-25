import React from "react";
import "../translations/i18n";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
} from "@material-ui/core";
import { ExperienceDetails } from "../element/ExperienceDetails";
import { ExperienceDates } from "../element/ExperienceDates";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

export const Experiences = () => {
  const { t } = useTranslation();

  const profileData: any = t("profileData:profile", { returnObjects: true });

  return (
    <Container maxWidth={false} className="container-custom">
      <h1 className="container-title experience-title">
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
          <Typography>
            <h1 className="experience-student-title">
              {t("common:studentExperienceTitle")}
            </h1>
          </Typography>
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
    <TimelineItem>
      <TimelineOppositeContent
        style={{
          flex: "0",
          padding: "6px 16px 0 3px",
        }}
        className={"timeline-opposite-content"}
      >
        <ExperienceDates
          startContractDate={startDate}
          endContractDate={endDate}
        />
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot className="experience-timelinedot" color={"inherit"} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <ExperienceDetails roleDetails={roleDetails} />
      </TimelineContent>
    </TimelineItem>
  );
};
