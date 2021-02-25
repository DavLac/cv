import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

interface Props {
  startContractDate: string;
  endContractDate: string;
}

export const ExperienceDates = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Typography variant="body2" color="textSecondary">
      {dateToString(props.endContractDate)}
      <br />
      {t("common:dateWordDelimiter")}
      <br />
      {dateToString(props.startContractDate)}
      <br />
      <strong style={{ fontSize: "medium" }}>
        {displayDuration(
          stringToDate(props.startContractDate),
          stringToDate(props.endContractDate)
        )}
      </strong>
    </Typography>
  );
};

const dateToString = (date: string): string => {
  const { t } = useTranslation();

  if (date != undefined) {
    const formatedDate: Date = new Date(date);
    return (
      formatedDate.getFullYear() +
      " " +
      formatedDate.toLocaleString("default", { month: "short" })
    );
  } else {
    return t("common:today");
  }
};

const stringToDate = (date: string): Date => {
  return date != undefined ? new Date(date) : new Date();
};

const yearsDiff = (d1: Date, d2: Date): number => {
  const differenceInTime = d2.getTime() - d1.getTime();
  return Math.trunc(differenceInTime / (1000 * 3600 * 24 * 30 * 12));
};

const monthsDiff = (d1: Date, d2: Date): number => {
  const differenceInTime = d2.getTime() - d1.getTime();
  return Math.trunc(differenceInTime / (1000 * 3600 * 24 * 30));
};

const displayDuration = (d1: Date, d2: Date): string => {
  const { t } = useTranslation();

  const yearDuration = yearsDiff(d1, d2);
  const monthDurationLastYear = monthsDiff(d1, d2) % 12;
  return (
    (yearDuration > 0 ? yearDuration + t("common:yearShort") : "") +
    (yearDuration > 0 && monthDurationLastYear > 0 ? ", " : "") +
    (monthDurationLastYear > 0
      ? monthDurationLastYear + t("common:monthShort")
      : "")
  );
};
