export type Personal = typeof personalData;

export const personalData = {
  nickname: "Kelvin You",
  fullname: "Kelvin You Kok Eng",
  roles: ["Software Engineer", "Web & Mobile App Developer"],
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
      description: "In the banking industry, we supply our regulatory solutions and assist many banks in meeting their regulatory reporting compliances to the Central Bank. The Central Bank will data-mine the tons of financial data collected from the industry and in-turn churn out meaningful information to formulate sound financial policies for the nation.",
      skills: ["ExpressJS", "ReactJS", "NextJS"]
    },
    {
      role: "Software Engineer (Intern)",
      companyName: "Techtics Blockchain PLT",
      companyUrl: "https://www.techtics.io/",
      startAt: "2020-10-1",
      endAt: "2021-1-31",
      description: "Techtics is an IT software house specialising in blockchain technology to provide new perspective & technologies to transform industries and business. Start from understanding & ideas to capital-raising, system building, creative designing and implementation.",
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
      grade: 3.72,
      description: "Taken core courses for software development such as Data Structure and Algorithm, Human-Computer Interaction, Agile Methodology Development. Exposed to technologies such as Mobile Application Development, Graphics Programming, Data Science through elective courses."
    },
    {
      title: "Diploma in Computer Science",
      startAt: "2019-5-28",
      endAt: "2021-5-31",
      school: "Tunku Abdul Rahman University of Management and Technology",
      schoolUrl: "https://tarc.edu.my/",
      grade: 3.60,
      description: "Basic Programming Concepts through various languages such as Object-Oriented Programming in Java, C, and Assembly Language. Mathematics courses included Algebra, Calculus, Statistics, Discrete Math."
    },
    {
      title: "Pure Science",
      startAt: "2014-1-1",
      endAt: "2018-12-6",
      school: "SMK Taman Desa",
      schoolUrl: "https://ms.wikipedia.org/wiki/Sekolah_Menengah_Kebangsaan_Taman_Desa,_Bandar_Country_Homes",
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
      description: "Love exploring more best practices for my current code",
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
  ]
};

