export type Personal = typeof personalData;

export const personalData = {
  nickname: "Kelvin You",
  fullname: "Kelvin You Kok Eng",
  roles: ["Software Engineer", "Web & Mobile App Developer"],
  contact: {
    address: "PV 16, Platinum Lake Condominium, Jalan Danau Saujana, 53300 Setapak, Kuala Lumpur",
    email: "ykekelvin0220@gmail.com",
    phone: "+(60) 18 3732752",
    linkedin: "https://www.linkedin.com/in/kelvin-you-a29644198/",
  },
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
        score: 5,
      },
      {
        language: "Scss",
        score: 4,
      },
    ],
    frameworks: [
      {
        framework: "ReactJS",
        score: 5,
      },
      {
        framework: "NextJS",
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
    ],
  },
  workExps: [
    {
      role: "Software Engineer (Intern)",
      companyName: "Finexus International Sdn Bhd",
      companyUrl: "https://www.finexusgroup.com/",
      startAt: "2023-2-1",
      endAt: "2023-7-31",
      description: "",
      skills: ["ExpressJS", "ReactJS", "NextJS"]
    },
    {
      role: "Software Engineer (Intern)",
      companyName: "Techtics Blockchain PLT",
      companyUrl: "https://www.techtics.io/",
      startAt: "2020-10-1",
      endAt: "2021-1-31",
      description: "",
      skills: ["ExpressJS", "ReactJS", "Laravel"]
    }
  ],
  educations: [
    {
      title: "Bachelor of Software Engineer (Hons)",
      startAt: "2021-6-20",
      endAt: "2023-7-31",
      school: "Tunku Abdul Rahman University of Management and Technology",
      grade: 3.72,
      description: "Taken core courses for software development such as Data Structure and Algorithm, Human-Computer Interaction, Agile Methodology Development. Exposed to technologies such as Mobile Application Development, Graphics Programming, Data Science through elective courses."
    },
    {
      title: "Bachelor of Software Engineer (Hons)",
      startAt: "2019-5-28",
      endAt: "2021-5-31",
      school: "Tunku Abdul Rahman University of Management and Technology",
      grade: 3.60,
      description: "Basic Programming Concepts through various languages such as Object-Oriented Programming in Java, C, and Assembly Language. Mathematics courses included Algebra, Calculus, Statistics, Discrete Math."
    },
    {
      title: "Pure Science",
      startAt: "2014-1-1",
      endAt: "2018-12-6",
      school: "SMK Taman Desa",
      description: "Pure science class, studied Chinese, Malay, English, maths, moral, sejarah, biology, chemistry, physic and add maths"
    },
  ],
  strengths: [
    {
      strength: "Self-taught Person",
      description: "Powered by Internet: Youtube, Github, Leetcode, etc",
    },
    {
      strength: "Love to Code",
      description: "",
    }
  ]
};

