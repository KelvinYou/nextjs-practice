export type Personal = typeof personalData;

export const personalData = {
  nickname: "Kelvin You",
  fullname: "Kelvin You Kok Eng",
  roles: ["Software Engineer", "Web & Mobile App Developer"],
  portfolio: {
    url: 'https://kelvinyou.vercel.app/',
  },
  contacts: [
    {
      type: 'location',
      icon: 'assets/images/resume/location.png',
      value: 'Kuala Lumpur, Malaysia',
    },
    {
      type: 'email',
      icon: 'assets/images/resume/mail.png',
      value: 'ykekelvin0220@gmail.com',
    },
    {
      type: 'phone',
      icon: 'assets/images/resume/phone.png',
      value: '+(60) 18 373-2752',
    },
    {
      type: 'person',
      icon: 'assets/images/resume/person.png',
      value: 'https://kelvinyou.vercel.app/',
    },
  ],
  languages: [
    {
      language: "Mandarin",
      score: 5,
    },
    {
      language: "Malay",
      score: 4,
    },
    {
      language: "English",
      score: 3,
    }
  ],
  programming: {
    languages: [
      {
        language: "JavaScript",
        score: 5,
      },
      {
        language: "TypeScript",
        score: 5,
      },
      {
        language: "Java",
        score: 4,
      },
    ],
    frameworks: [
      {
        framework: "ReactJS",
        version: "18",
        score: 5,
      },
      {
        framework: "NextJS",
        version: "13",
        score: 5,
      },
      {
        framework: "Flutter",
        score: 4,
      },
      {
        framework: "ExpressJS",
        score: 3,
      },
      {
        framework: "SSM (Spring, Spring Boot, MyBatis)",
        score: 3,
      },
    ],
  },
  workExps: [
    {
      role: "Java Software Engineering Intern",
      companyName: "Finexus International Sdn Bhd",
      companyUrl: "https://www.finexusgroup.com/",
      startAt: "2023-2-1",
      endAt: "2023-7-31",
      description: "",
      points: [
        "Focused on Java-based project maintenance, utilizing JSP and Tomcat. Conducted R&D for innovative features such as reusable custom dialogs and remote log file retrieval. ", 
        "Conducted comprehensive testing and documentation for quality assurance.",
      ],
      skills: ["ExpressJS", "ReactJS", "NextJS"]
    },
    {
      role: "Software Engineer (Intern)",
      companyName: "Techtics Blockchain PLT",
      companyUrl: "https://www.techtics.io/",
      startAt: "2020-10-1",
      endAt: "2021-1-31",
      description: "",
      points: [
        "Revitalized project's frontend using ReactJS for enhanced maintenance, modernization, and dynamic website capabilities.",
        "Developed a cutting-edge blockchain application utilizing ReactJS and Solidity to seamlessly integrate smart contracts with MetaMask for secure and streamlined transactions."
      ],
      skills: ["ExpressJS", "ReactJS", "Laravel"]
    }
  ],
  educations: [
    {
      title: "Bachelor of Software Engineering (Hons)",
      startAt: "2021-6-20",
      endAt: "2023-7-31",
      school: "Tunku Abdul Rahman University of Management and Technology",
      schoolUrl: "https://tarc.edu.my/",
      grade: 3.7200,
      description: "Taken core courses for software development such as Data Structure and Algorithm, Human-Computer Interaction, Agile Methodology Development. Exposed to technologies such as Mobile Application Development, Graphics Programming, Data Science through elective courses.",
    },
    {
      title: "Diploma in Computer Science",
      startAt: "2019-5-28",
      endAt: "2021-5-31",
      school: "Tunku Abdul Rahman University of Management and Technology",
      schoolUrl: "https://tarc.edu.my/",
      grade: 3.7439,
      description: "Basic Programming Concepts through various languages such as Object-Oriented Programming in Java, C, and Assembly Language. Mathematics courses included Algebra, Calculus, Statistics, Discrete Math."
    },
    {
      title: "Pure Science",
      startAt: "2014-1-1",
      endAt: "2018-12-6",
      school: "SMK Taman Desa",
      schoolUrl: "https://ms.wikipedia.org/wiki/Sekolah_Menengah_Kebangsaan_Taman_Desa,_Bandar_Country_Homes",
      description: "Pure science class, studied Chinese, Malay, English, Maths, Moral, Sejarah, Biology, Chemistry, Physic and Add Maths"
    },
  ],
  strengths: [
    {
      strength: "Self-taught Person",
      description: "Powered by Internet: Youtube, Github, Leetcode, etc",
    },
    {
      strength: "Love to Code",
      description: "Love exploring more best practice, problem solving, clean code, code structure",
    },
    {
      strength: "New Tech Lover",
      description: "Love to spend my free time to catch up with new technology",
    }
  ],
  cocuriculars: [
    {
      title: "Chinese Language Society",
      startAt: "2019-5-28",
      endAt: "2023-7-31",
      school: "Tunku Abdul Rahman University of Management and Technology",
      schoolUrl: "https://tarc.edu.my/",
      description: "Made friends and established connections with them, Learnt communication skills",
    },
    {
      title: "Chess Club",
      startAt: "2019-5-28",
      endAt: "2023-7-31",
      school: "Tunku Abdul Rahman University of Management and Technology",
      schoolUrl: "https://tarc.edu.my/",
      description: "Learnt how to solve chess tactics, Learnt time management.",
    },
  ],
  ModifiedDate: "2023-5-19",
};

