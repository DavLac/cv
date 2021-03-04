import { InterestType } from "../../../section/other/interests/InterestType";
import { PetProjectType } from "../../../section/other/petprojects/PetProjectType";
import { PetProjectName } from "../../../section/other/petprojects/PetProjectName";

export const OTHER_EN = {
  education: [
    {
      schoolName: "Versailles university",
      schoolWebsite: "https://www.uvsq.fr",
      location: {
        city: "Versailles",
        country: "FRANCE"
      },
      diplomaLevel: "Master",
      diplomaName: "System and Network engineering",
      graduationYear: 2012
    },
    {
      schoolName: "Electronical Central School of Paris (ECE)",
      schoolWebsite: "https://www.ece.fr/bachelor/index.php",
      location: {
        city: "Paris",
        country: "FRANCE"
      },
      diplomaLevel: "Bachelor",
      diplomaName: "Computer science bachelor",
      graduationYear: 2010
    },
    {
      schoolName: "St Aspais high school",
      schoolWebsite: "http://www.lycee-st-aspais.org/",
      location: {
        city: "Melun",
        country: "FRANCE"
      },
      diplomaLevel: "High school",
      diplomaName: "Scientific high school diploma",
      graduationYear: 2007
    }
  ],
  certifications: [
    {
      name: "Hyper-V",
      sector: "Virtualization",
      graduationYear: 2014
    },
    {
      name: "Nutanix NPP",
      sector: "Virtualization/Storage",
      graduationYear: 2014
    },
    {
      name: "VMware",
      sector: "Virtualization",
      graduationYear: 2014
    },
    {
      name: "Citrix 7.6",
      sector: "Virtualization",
      graduationYear: 2013
    },
    {
      name: "Netapp ONTAP",
      sector: "Storage",
      graduationYear: 2013
    }
  ],
  languages: [
    {
      language: "English",
      level: "Fluent",
      levelPourcentage: 75
    },
    {
      language: "French",
      level: "Native",
      levelPourcentage: 100
    },
    {
      language: "Polish",
      level: "Fluent",
      levelPourcentage: 75
    }
  ],
  petProjects: [
    {
      id: PetProjectName.MANAGE_ITEMS,
      name: "My last project",
      description: "Project : Manage items",
      url: "https://github.com/DavLac/manage-items-main-container-front",
      link: "github.com/DavLac/manage-items",
      type: PetProjectType.MODAL_DETAIL_LINK
    },
    {
      id: PetProjectName.GITHUB,
      name: "GitHub",
      description: "My back and front projects",
      url: "https://github.com/DavLac",
      link: "github.com/DavLac",
      type: PetProjectType.SIMPLE_LINK
    },
    {
      id: PetProjectName.DOCKER,
      name: "Docker Hub",
      description: "My containerized apps",
      url: "https://hub.docker.com/u/davlac",
      link: "hub.docker.com/u/davlac",
      type: PetProjectType.SIMPLE_LINK
    },
    {
      id: PetProjectName.NPM,
      name: "npm",
      description: "My npm packages (front)",
      url: "https://www.npmjs.com/~davlac",
      link: "www.npmjs.com/~davlac",
      type: PetProjectType.SIMPLE_LINK
    }
  ],
  interests: [
    {
      activity: "Fullstack development, personal projects",
      typeName: "Coding",
      type: InterestType.CODING,
      startDate: 2013,
      endDate: null
    },
    {
      activity: "Guitar, public performances",
      typeName: "Music",
      type: InterestType.MUSIC,
      startDate: 2018,
      endDate: null
    },
    {
      activity: "Ultra trail (100miles/170km), triathlon (Ironman), marathons",
      typeName: "Sport",
      type: InterestType.SPORT,
      startDate: 2016,
      endDate: null
    },
    {
      activity: "Europe, Asia, America",
      typeName: "Traveling",
      type: InterestType.TRAVEL,
      startDate: 2012,
      endDate: null
    }
  ]
};