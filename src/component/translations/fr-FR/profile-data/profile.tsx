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
      "Je suis un développeur fullstack Java/React avec 4 ans d'expérience",
    generalInformations:
      "J'ai une bonne compréhension des architectures microservices avec " +
      "une solide expérience en infrastructure (système et réseau). Je n’ai " +
      "pas peur de gérer les serveurs Windows/Linux. Mon objectif est de " +
      "travailler sur des projets stimulants avec des membres d'équipe aux " +
      "facettes multiples et d'aider avec mon expérience à atteindre les " +
      "objectifs business avec qualité et efficacité.",
    roles: ROLES_FR,
    other: OTHER_FR,
    skills: [
      {
        groupName: "Backend",
        level: 85,
        list: [
          "Java (8 to 11)",
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
        list: ["React (Hooks, Redux)",  "Javascript  ES6",
          "Typescript",  "HTML/SCSS",  "Styled Component", "Material UI",
          "Jest", "Cypress", "Material Design", "microfrontends"]
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
        groupName: "Qualité du code",
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
        groupName: "Autre",
        list: ["Scrum team"]
      }
    ]
  }
};
