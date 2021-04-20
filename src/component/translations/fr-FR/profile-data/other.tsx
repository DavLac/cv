import { InterestType } from "../../../section/other/interests/InterestType";
import { PetProjectType } from "../../../section/other/petprojects/PetProjectType";
import { PetProjectName } from "../../../section/other/petprojects/PetProjectName";

export const OTHER_FR = {
  education: [
    {
      schoolName: "Université de Versailles",
      location: {
        city: "Versailles",
        country: "FRANCE"
      },
      diplomaLevel: "Master",
      diplomaName: "Ingénierie des Réseaux et des Systèmes",
      graduationYear: 2012
    },
    {
      schoolName: "Ecole centrale d'électronique Paris (ECE)",
      location: {
        city: "Paris",
        country: "FRANCE"
      },
      diplomaLevel: "Bachelor",
      diplomaName: "Bachelor Informatique",
      graduationYear: 2010
    },
    {
      schoolName: "Lycée St Aspais",
      location: {
        city: "Melun",
        country: "FRANCE"
      },
      diplomaLevel: "Lycée",
      diplomaName: "Bac scientifique",
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
      language: "Anglais",
      level: "Courant",
      levelPourcentage: 75
    },
    {
      language: "Français",
      level: "Langue maternelle",
      levelPourcentage: 100
    },
    {
      language: "Polonais",
      level: "Courant",
      levelPourcentage: 75
    }
  ],
  petProjects: [
    {
      id: PetProjectName.MANAGE_ITEMS,
      name: "Mon dernier projet",
      description: "Projet : Manage items",
      url: "https://github.com/DavLac/manage-items-main-container-front",
      link: "github.com/DavLac/manage-items",
      type: PetProjectType.MODAL_DETAIL_LINK
    },
    {
      id: PetProjectName.GITHUB,
      name: "GitHub",
      description: "Mes projets back et front",
      url: "https://github.com/DavLac",
      type: PetProjectType.SIMPLE_LINK
    },
    {
      id: PetProjectName.DOCKER,
      name: "Docker Hub",
      description: "Mes apps conteneurisées",
      url: "https://hub.docker.com/",
      type: PetProjectType.SIMPLE_LINK
    },
    {
      id: PetProjectName.NPM,
      name: "npm",
      description: "Mes packages npm (front)",
      url: "https://www.npmjs.com/~davlac",
      link: "www.npmjs.com/~davlac",
      type: PetProjectType.SIMPLE_LINK
    }
  ],
  interests: [
    {
      activity: "Dévelopement fullstack, projets personels",
      typeName: "Coding",
      type: InterestType.CODING,
      startDate: 2013,
      endDate: null
    },
    {
      activity: "Guitare, performances en public",
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
      typeName: "Voyage",
      type: InterestType.TRAVEL,
      startDate: 2012,
      endDate: null
    }
  ]
};
