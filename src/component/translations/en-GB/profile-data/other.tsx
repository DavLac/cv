import { InterestType } from "../../../section/other/interests/InterestType";

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
