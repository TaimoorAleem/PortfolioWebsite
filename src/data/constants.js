export const Bio = {
    name: "Taimoor Aleem",
    roles: [
      "Full Stack Developer.",
      "Software Engineer.",
      "Data Scientist.",
      "Machine Learning Enthusiast.",
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
        {
          name: "VS Code",
          image: require('../images/vscode.png'),
        },
        {
          name: "Visual Studio",
          image: require('../images/visualstudio.png'),
        },
        {
          name: "IntelliJ IDEA",
          image: require('../images/intellij.png'),
        },
        {
          name: "CLion",
          image: require('../images/clion.png'),
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
      img: require('../images/hackademics.jpeg'),
      position: "VP of Tech & Web Developer",
      date: "Mar 2024 - Present",
      company: "Sheridan Hackademics Club",
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
      title: "Rihla Travels",
      date: "Sept 2023 - Dec 2023",
      description:
        "A Full-Stack Travel Booking Web Application which allows users to create and manage flight, hotel, and car bookings.",
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
      id: 2,
      title: "Sheridan Works Out",
      date: "May 2022 - Aug 2022",
      description:
        "A Mobile Application which allows users to browse multiple workouts, track their daily calories, and view their progress over time using line charts.",
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
      id: 3,
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
    {
      id: 4,
      title: "Data Analysis Research Paper",
      date: "Jan 2023 - Apr 2023",
      description:
        "A data analysis journal paper about an experiment conducted to statistically analyze whether the difference between the performance of two machine learning algorithms is significant or not.",
      image:
        require('../images/statisticalanalysis.JPG'),
      tags: [
        "Data Analysis",
        "Statistics",
      ],
      category: "data science",
      link: "https://drive.google.com/file/d/1B_uxVeJ4oB1GEpyb966Zm8ljcAnjPM4J/view?usp=sharing"
    },
    {
      id: 5,
      title: "DollarSense",
      date: "Jan 2024 - Present",
      description:
        "A finance tracking full-stack website offering budget tracking, spending predictions, and personalized advice to help users manage money effectively and achieve their financial goals.",
      image:
        require('../images/inprogress.jpg'),
      tags: [
        "Python",
        "Flask",
        "Next.js",
      ],
      category: "web",
    },
  ];