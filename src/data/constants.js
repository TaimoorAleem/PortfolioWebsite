export const Bio = {
    name: "Taimoor Aleem",
    roles: [
      "Full Stack Developer.",
      "Software Engineer.",
      "Data Scientist.",
      "Machine Learning Developer.",
    ],
    github: "https://github.com/taimooraleem",
    resume: "https://drive.google.com/file/d/1pgxFR1rY32CEkoX35_GT64rMzWPJ-PAK/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/taimooraleem/",
  };
  
  export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          image: require('../images/html.png'),
        },
        {
          name: "CSS",
          image: require('../images/css.png'),
        },
        {
          name: "JavaScript",
          image: require('../images/javascript.png'),
        },
        {
          name: "React.js",
          image: require('../images/react.png'),
        },
        {
          name: "Angular",
          image: require('../images/angular.png'),
        },
        {
          name: "Next.js",
          image: require('../images/nextjs.png'),
        },
        {
          name: "Bootstrap",
          image: require('../images/bootstrap.png'),
        },
        {
          name: "Tailwind",
          image: require('../images/tailwind.png'),
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          image: require('../images/node.png'),
        },
        {
          name: "Express.js",
          image: require('../images/express.png'),
        },
        {
          name: "MongoDB",
          image: require('../images/mongodb.png'),
        },
        {
          name: "C#",
          image: require('../images/csharp.png'),
        },  
        {
          name: ".NET",
          image: require('../images/net.png'),
        },
        {
          name: "ASP.NET Core",
          image: require('../images/asp.netcore.png'),
        },
        {
          name: "Java",
          image: require('../images/java.png'),
        },
        {
          name: "Spring Boot",
          image: require('../images/springboot.png'),
        },
        {
          name: "SQL Server",
          image: require('../images/sqlserver.png'),
        },
        {
          name: "Flask",
          image: require('../images/flask.png'),
        },
        {
          name: "Django",
          image: require('../images/django.png'),
        },
      ],
    },
    {
      title: "Data Science",
      skills: [
        {
          name: "Python",
          image: require('../images/python.png'),
        },
        {
          name: "R",
          image: require('../images/r.png'),
        },
        {
          name: "SQL",
          image: require('../images/sql.jpg'),
        },
        {
          name: "Hadoop",
          image: require('../images/hadoop.png'),
        },
        {
          name: "Spark",
          image: require('../images/spark.png'),
        },
        {
          name: "Hive",
          image: require('../images/hive.png'),
        },
        {
          name: "Tableau",
          image: require('../images/tableau.png'),
        },
        {
          name: "Power BI",
          image: require('../images/powerbi.png'),
        },
      ],
    },
    {
      title: "Tools / Technologies",
      skills: [
        {
          name: "Git",
          image: require('../images/git.png'),
        },
        {
          name: "GitHub",
          image: require('../images/github.png'),
        },
        {
          name: "Jira",
          image: require('../images/jira.jpg'),
        },
        {
          name: "Figma",
          image: require('../images/figma.png'),
        },
        {
          name: "Slack",
          image: require('../images/slack.png'),
        },
        {
          name: "Jupyter",
          image: require('../images/jupyter.png'),
        },
        {
          name: "Postman",
          image: require('../images/postman.png'),
        },
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: require('../images/sheridan.jpg'),
      school: "Sheridan College - Oakville, Canada",
      date: "Sep 2021 - Apr 2025",
      degree: "Honours Bachelor Of Computer Science (Specialization in Data Analytics)",
    },
    {
      id: 1,
      img: require('../images/pisjes.png'),      
      school: "Pakistan International School Jeddah English Section",
      date: "Sep 2018 - Apr 2020",
      degree: "A-levels (Equivalent to High School Diploma)",
    },
  ];

  export const experience = [
    {
      id: 0,
      img: require('../images/skillsquirrel.jpg'),
      position: "Software Developer Intern",
      date: "May 2024 - Aug 2024",
      company: "Skill Squirrel",
    },
    {
      id: 1,
      img: require('../images/hackademics.jpeg'),
      position: "VP of Technology",
      date: "Mar 2024 - Present",
      company: "Sheridan Hackville",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Buddy Finder",
      date: "19th Jan - 21st Jan 2024",
      description:
        "Hackathon winning project - won the Best UI award for this project. A Full-Stack Web Application that allows newcomers to find friends in their local area.",
      image:
        require('../images/logo.jpg'),
      tags: [
        "Next.js",
        "TailwindCSS",
        "Java",
        "Spring Boot",
      ],
      category: "web",
      link: "https://devpost.com/software/buddyfinder-c0rak1"
    },
    {
      id: 1,
      title: "FinShare",
      date: "July 2024 - Aug 2024",
      description:
        "A comprehensive back-end Stock Market / Social Media application built using ASP.NET Core Web API that allows users to store and manage stocks, comment on stocks and add stocks in a portfolio.",
      image:
        require('../images/FinShare_APIs.JPG'),
      tags: [
        "ASP.NET Core",
        "Web API",
        "C#",
        "SQL Server"
      ],
      category: "web",
      link: "https://github.com/TaimoorAleem/FinShare"
    },
    {
      id: 2,
      title: "Rihla Travels",
      date: "Sept 2023 - Dec 2023",
      description:
        "A full-stack Travel Booking web application which allows users to create and manage flight, hotel, and car bookings.",
      image:
        require('../images/rihla.png'),
      tags: [
        "ASP.NET Core",
        "Web API",
        "C#",
        "Bootstrap",
        "SQL Server"
      ],
      category: "web",
      link: "https://devpost.com/software/rihlatravels"
    },
    {
      id: 3,
      title: "DollarSense",
      date: "Jan 2024 - Apr 2024",
      description:
        "A full-stack website offering budget tracking and spending predictions using machine learning to help users manage money effectively and achieve their financial goals.",
      image:
        require('../images/dollarsense.JPG'),
      tags: [
        "Python",
        "Flask",
        "React.js",
      ],
      category: "web",
      link: "https://devpost.com/software/dollar-sense"
    },
    {
      id: 4,
      title: "Sheridan Works Out",
      date: "May 2022 - Aug 2022",
      description:
        "A mobile application which allows users to browse multiple workouts, track their daily calories, and view their progress over time using line charts.",
      image:
        require('../images/sheridanworksout.JPG'),
      tags: [
        ".NET",
        "Xamarin.Forms",
        "C#",
      ],
      category: "mobile",
      link: "https://devpost.com/software/sheridan-works-out"
    },
    {
      id: 5,
      title: "Portfolio Website",
      date: "Dec 2023 - Jan 2024",
      description:
        "A personal portfolio website created using React JS and Material UI to showcase my skills and projects.",
      image:
        require('../images/portfolio.JPG'),
      tags: [
        "ReactJS",
        "NodeJS",
        "Material UI",
        "CSS Styled Components",
      ],
      category: "web",
      link: "https://taimooraleem.com"
    },
  ];