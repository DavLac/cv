import React from "react";
import { useTranslation } from "react-i18next";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import Timeline from "@material-ui/lab/Timeline";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export const Education = () => {
  const { t } = useTranslation();

  const profileData: any = t("profileData:profile", { returnObjects: true });

  return (
    <div
      id={"anchor-education"}
      className={"grid-item-custom"}>
      <h1>{t("common:educationTitle")}</h1>

      <Timeline style={{ padding: "0" }}>
        {displayEducation(profileData.other.education)}
      </Timeline>

    </div>
  );
};

const displayDates = (educationElement: any) => {
  return <Typography variant="body2" color="textSecondary">
              <span className={"timeline-item-dates"}>
                {educationElement.graduationYear}
              </span>
  </Typography>;
};

const displayContent = (educationElement: any) => {
  const { t } = useTranslation();

  return <Paper elevation={3} className={"timeline-content timeline-content-education--paper"}>
    <h1>{educationElement.diplomaName}</h1>
    <h3>
      {educationElement.diplomaLevel} {t("common:diplomaDegree")}
    </h3>
    <h3>
      @ <a href={educationElement.schoolWebsite}>
      {educationElement.schoolName}
    </a>{" "}
      - <span className={"timeline-content-education--paper-location"}>
          {educationElement.location.city}, {educationElement.location.country}
        </span>
    </h3>
  </Paper>;
};

const displayEducation = (education: any) => {
  const timelineItems: any[] = [];

  education.map((educationElement: any) =>
    timelineItems.push(
      <TimelineItem key={educationElement.schoolName}>
        <TimelineOppositeContent
          style={{ flex: "0", padding: "0" }}
          className={"timeline-opposite-content timeline-opposite-content-education"}
        >

          {displayDates(educationElement)}

        </TimelineOppositeContent>
        <TimelineSeparator className={"timeline-item-separator"}>
          <TimelineDot className="timeline-item-dot" color={"inherit"} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={"timeline-content-education"}>

          {displayContent(educationElement)}

        </TimelineContent>
      </TimelineItem>
    )
  );

  return <div>{timelineItems}</div>;
};