import { ROLES_FR } from "./roles";
import { OTHER_FR } from "./other";

export const TRANSLATIONS_FR = {
  profile: {
    firstname: "David",
    surname: "LACOSTE",
    birthdayDate: "1988-06",
    mail: "david.lacoste2@gmail.com",
    nationality: "Français",
    status: "A l'écoute d'opportunités",
    currentRole: "Fullstack/Backend React/Java développeur",
    currentLocation: {
      city: "Paris",
      country: "FRANCE"
    },
    quickIntro:
      "I'm a Java/React fullstack developer with 4 years of experience",
    generalInformations:
      "I have a good understanding of a " +
      "microservice architecture with a solid infrastructure " +
      "background (system & network). I’m not afraid to manage " +
      "Windows/Linux servers. My goal is to work in " +
      "challenging projects with multifaceted team members and " +
      "help with my experience to achieve business objectives " +
      "with quality and efficiency.",
    roles: ROLES_FR,
    other: OTHER_FR,
    skills: [
      {
        groupName: "Backend",
        level: 85,
        list: [
          "Java (5 to 11)",
          "BDD & TDD",
          "SpringBoot",
          "Spring Batch/Data",
          "Python 3 scripting",
          "multithreading", "Hazelcast", "EhCache"
        ]
      },
      {
        groupName: "Frontend",
        level: 60,
        list: ["React", "Javascript", "HTML/CSS"]
      },
      {
        groupName: "Microservices architecture",
        level: 75,
        list: [
          "JHipster platform",
          "API Gateway - Zuul proxy",
          "load balancing",
          "Spring security, Oauth2",
          "Registry - Eureka server",
          "Spring Cloud Config",
          "Generating microservices",
          "REST APIs",
          "SOAP webservices"
        ]
      },
      {
        groupName: "Data management",
        level: 75,
        list: [
          "ElasticSearch",
          "Logstash + Kibana",
          "SQL Server",
          "MongoDB",
          "Kafka",
          "RabbitMQ"
        ]
      },
      {
        groupName: "DevOps",
        level: 75,
        list: [
          "Git",
          "BitBucket",
          "Jenkins",
          "Rundeck",
          "Docker",
          "Kubernetes"
        ]
      },
      {
        groupName: "Code quality",
        level: 85,
        list: [
          "unitary and int tests",
          "Cucumber",
          "Jacoco",
          "Sonar",
          "jMeter"
        ]
      },
      {
        groupName: "Other",
        list: ["Scrum team"]
      }
    ]
  }
};
