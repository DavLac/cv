import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { Divider, Fab, ListSubheader } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import {
  faBriefcase,
  faCode,
  faHome,
  faLanguage,
  faQuestionCircle,
  faTheaterMasks,
  faUniversity,
  faUser,
  faWrench
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menuData = (drawerData: any) => {
  return [
    {
      group: drawerData.headerGroup.name,
      list: [
        {
          linkName: drawerData.headerGroup.name,
          icon: <FontAwesomeIcon icon={faHome} className={"drawer-icon"} />,
          anchorLink: "#anchor-header"
        }
      ]
    },
    {
      group: drawerData.aboutMeGroup.name,
      list: [
        {
          linkName: drawerData.aboutMeGroup.infos,
          icon: <FontAwesomeIcon icon={faUser} className={"drawer-icon"} />,
          anchorLink: "#anchor-infos"
        },
        {
          linkName: drawerData.aboutMeGroup.whatCanIDo,
          icon: <FontAwesomeIcon icon={faWrench} className={"drawer-icon"} />,
          anchorLink: "#anchor-whatcanido"
        },
        {
          linkName: drawerData.aboutMeGroup.Skills,
          icon: <FontAwesomeIcon icon={faCode} className={"drawer-icon"} />,
          anchorLink: "#anchor-skills"
        }
      ]
    },
    {
      group: drawerData.experienceGroup.name,
      list: [
        {
          linkName: drawerData.experienceGroup.name,
          icon: <FontAwesomeIcon icon={faBriefcase} className={"drawer-icon"} />,
          anchorLink: "#anchor-experience"
        }
      ]
    },
    {
      group: drawerData.miscGroup.name,
      list: [
        {
          linkName: drawerData.miscGroup.education,
          icon: <FontAwesomeIcon icon={faUniversity} className={"drawer-icon"} />,
          anchorLink: "#anchor-education"
        },
        {
          linkName: drawerData.miscGroup.petProjects,
          icon: <FontAwesomeIcon icon={faStar} className={"drawer-icon"} />,
          anchorLink: "#anchor-pet-project"
        },
        {
          linkName: drawerData.miscGroup.languages,
          icon: <FontAwesomeIcon icon={faLanguage} className={"drawer-icon"} />,
          anchorLink: "#anchor-languages"
        },
        {
          linkName: drawerData.miscGroup.interests,
          icon: <FontAwesomeIcon icon={faTheaterMasks} className={"drawer-icon"} />,
          anchorLink: "#anchor-interests"
        }
      ]
    },
    {
      group: drawerData.aboutTheApp.name,
      list: [
        {
          linkName: drawerData.aboutTheApp.name,
          icon: <FontAwesomeIcon icon={faQuestionCircle} className={"drawer-icon"} />,
          anchorLink: "#anchor-about-app"
        }
      ]
    }
  ];
};

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

type Anchor = "top" | "left" | "bottom" | "right";

export const DrawerApp = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const drawerData: any = t("common:drawer", { returnObjects: true });
  const menuDataTranslated: any = menuData(drawerData);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const displayListElements = (elementList: any) => {
    return elementList.map((element: any) => (
        <a key={element.linkName} href={element.anchorLink}>
          <ListItem button>
            <ListItemIcon>{element.icon}</ListItemIcon>
            <ListItemText primary={element.linkName} />
          </ListItem>
        </a>
      )
    );
  };

  const displayGroupTitle = (index: number, group: string) => {
    if (index === 0) {
      return undefined;
    }

    return <ListSubheader component="div" id="nested-list-subheader">
      <span className={"drawer-nested-group"}>{group}</span>
    </ListSubheader>;
  };

  const displayGroups = (menuData: any) => {
    const groupsJsx: any[] = [];

    menuData.map((menuDataGroup: any, index: number) => {
      groupsJsx.push(
        <List
          key={menuDataGroup.group}
          aria-labelledby="nested-list-subheader"
          subheader={displayGroupTitle(index, menuDataGroup.group)}
        >
          {displayListElements(menuDataGroup.list)}
        </List>);
      groupsJsx.push(<Divider key={menuDataGroup.group + index} />);
    });

    return groupsJsx;
  };

  const displayMenu = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {displayGroups(menuDataTranslated)}
    </div>
  );

  return (
    <div>
      <Fab
        onClick={toggleDrawer("left", true)}
        style={{
          position: "fixed",
          top: "32px",
          left: "32px",
          zIndex: 9,
          backgroundColor: "#2196d3",
          color: "white"
        }}>
        <MenuIcon />
      </Fab>

      <Drawer anchor={"left"} open={state["left"]}
              onClose={toggleDrawer("left", false)}
      >
        {displayMenu("left")}
      </Drawer>
    </div>
  );
};