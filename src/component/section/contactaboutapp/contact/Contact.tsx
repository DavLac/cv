import React from "react";
import "../../../translations/i18n";
import { Button, Paper } from "@material-ui/core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { ModalInfo } from "../../../element/modal/ModalInfo";

const contactData = [
  {
    icon: <FontAwesomeIcon icon={faEnvelope} className={"contact-icon"} />,
    value: "david.lacoste2@gmail.com",
    link: false
  },
  {
    icon: <FontAwesomeIcon icon={faPhoneSquareAlt} className={"contact-icon"} />,
    value: "+33 6 12 34 56 78",
    link: false
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} className={"contact-icon"} />,
    value: "LinkedIn",
    link: true,
    url: "https://www.linkedin.com/in/david-lacoste-6a643b4b"
  }
];

const displayContact = () => {
  const contactJsx: any[] = [];

  contactData.map((contact: any, index: number) => {
      contactJsx.push(<div key={contact.value + index}>{contact.icon}</div>);
      if(contact.link) {
        contactJsx.push(<a key={index}
                           href={contact.url}
                           className={"contact-value"}>
          {contact.value}
        </a>);
      } else {
        contactJsx.push(<div key={index} className={"contact-value"}>
          {contact.value}
        </div>);
      }
    }
  );

  return <div className={"contact-list"}>{contactJsx}</div>;
}

export const Contact = () => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper elevation={3} className={"contact-container"} id={"anchor-contact"}>
      <h1>{t("common:contactTitle")}</h1>

      <div className={"about-app-content"}>
        {/* ADD STYLE BUTTON IN ONE PLACE */}
        <Button variant="contained"
                onClick={handleOpen}
                style={{ backgroundColor: "#2196d3", color: "white" }}
        >
          <FontAwesomeIcon icon={faEnvelope} className={"button-icon"} />
          {t("common:contactButton")}
        </Button>

        <ModalInfo
          title={t("common:contactButton")}
          handleClose={handleClose}
          open={open}
        >
          <React.Fragment>
            {displayContact()}
          </React.Fragment>
        </ModalInfo>
      </div>
    </Paper>
  );
};