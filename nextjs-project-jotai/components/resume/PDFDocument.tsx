import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image, Link } from '@react-pdf/renderer';

import { personalData } from '@/data/personalData';


Font.register({
  family: 'Quicksand',
  fonts: [
    { src: '/assets/fonts/quicksand-v20-latin-regular.ttf' },
    { src: '/assets/fonts/quicksand-v20-latin-300.ttf', fontWeight: 300 },
    { src: '/assets/fonts/quicksand-v20-latin-600.ttf', fontWeight: 600 },
  ],
})

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    height: "100%",
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  leftColumn: {
    flexGrow: 1,
    marginRight: 16,
    paddingLeft: 20,
    paddingRight: 20,
    width: '35%',
    height: '100%',
    backgroundColor: "#323b4c",
    paddingTop: 32,
  },
  rightColumn: {
    flexGrow: 1,
    width: '60%',
    height: '100%',
    paddingTop: 48,
    paddingRight: 20,
  },
  fullname: {
    textTransform: 'uppercase',
    fontSize: 24,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
  },
  role: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    color: '#323b4c',
    marginBottom: 10,
  },
  profileImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  pic: {
    width: 120,
    height: 120,
    borderRadius: "100%",
  },
  
  title: {
    fontSize: 9,
    textTransform: 'uppercase',
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    marginTop: 8,
  },
  separator: {
    height: 2,
    marginTop: 2,
    marginBottom: 8,
    backgroundColor: "grey"
  },
  workCompanyName: {
    fontSize: 10,
    marginRight: 5,
    textDecoration: "none",
    color: "#323b4c",
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
  },
  workRole: {
    fontSize: 12,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  workSecondRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  workDuration: {
    fontSize: 10,
    color: "#323b4c",
    fontFamily: 'Quicksand',
  },
  workDescription: {
    fontSize: 9,
    fontFamily: 'Quicksand',
    marginTop: 4,
    textAlign: "justify",
  },
  contactContainer: {
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
  },
  contactCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contactText: {
    color: "white",
    fontSize: 10,
    fontFamily: 'Quicksand',
  },
  icon: {
    width: 10,
    height: 10,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 3,
  },
  scoreName: {
    color: "white",
    fontSize: 10,
    fontFamily: 'Quicksand',
  },
  scoreView: {
    marginLeft: "auto",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  scoreItem: {
    marginLeft: 2,
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  strengthTitle: {
    color: "white",
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
    fontFamily: 'Quicksand',
  },
  strengthDescription: {
    color: "white",
    fontSize: 8,
    marginBottom: 5,
    fontFamily: 'Quicksand',
  },
  markdown: {
    paddingTop: 25,
  },
  markdownText: {
    fontSize: 10,
    color: 'white',
    fontFamily: 'Quicksand',
    textAlign: 'center',
    textDecoration: 'none'
  },
  scoreNameContainer: {
    width: 120,
  }
});

const MarkdownBar = ({ portfolioUrl, modifiedDate }: { portfolioUrl: string, modifiedDate: string }) => {
  const editedDate = new Date(modifiedDate);

  const day = editedDate.getDate();
  const year = editedDate.getFullYear();

  const monthAbbreviation = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(editedDate);

  const endFormatted = `${day} ${monthAbbreviation} ${year}`;

  return (
    <View style={styles.markdown}>
      <View style={styles.separator}></View>
      <Text style={styles.markdownText}>
        More details on: 
      </Text>
      <Link src={portfolioUrl} style={[styles.markdownText, { marginBottom: 3, }]}>
        {portfolioUrl}
      </Link>
      <Text style={styles.markdownText}>- Updated on {endFormatted} -</Text>
    </View>
  );
}

const StrengthBar = ({strength, description}: {strength: string, description: string}) => {
  return (
    <View>
      <Text style={styles.strengthTitle}>{strength}</Text>
      <Text style={styles.strengthDescription}>{description}</Text>
    </View>
  )
}

const DateRange = ({startAt, endAt}: {startAt: string, endAt: string}) => {
  const startAtDate = new Date(startAt);
  const endAtDate = new Date(endAt);
  
  const startFormatted = startAtDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  const endFormatted = endAtDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  
  const dateRange = `${startFormatted} - ${endFormatted}`;

  return (
    <Text style={styles.workDuration}>({dateRange})</Text>
  )
}

const ScoreBar = ({name, score}: {name: string, score: number}) => {
  return (
    <View style={styles.scoreContainer}>
      <View style={styles.scoreNameContainer}>
        <Text style={styles.scoreName}>{name}</Text>

      </View>
      <View style={styles.scoreView}>
        {Array.from({ length: 5 }).map((_, index) => (
          index <= score - 1? 
          <View key={index} style={[styles.scoreItem, {backgroundColor: "lightgrey"}]} />
          : 
          <View key={index} style={[styles.scoreItem, {backgroundColor: "grey"}]} />
        ))}
      </View>
    </View>
  )
}

const TitleBar = ({title, isLeft}: {title: string, isLeft: boolean}) => {
  return (
    <>
      <Text style={[styles.title, 
        { color: isLeft ? "grey": "grey" }]}>
        {title}
      </Text>
      <View
        style={[styles.separator]}
      />
    </>
  )
}

const ContactBar = ({iconSrc, value}: {iconSrc: string, value: string}) => {
  return (
    <View style={styles.contactContainer}>
      <View style={[styles.contactCenter, { marginRight: 5 }]}>
        <Image src={iconSrc} style={styles.icon} />
      </View>
      <View style={styles.contactCenter}>
        <Text style={[styles.contactText, { flexWrap: 'wrap' }]}>{value}</Text>
      </View>
    </View>
  )
}

const PDFDocument = () => {
  return (
    <Document 
    title={`Resume | Kelvin`} 
    author={personalData.nickname} >
      <Page size="A4" style={styles.page}>
        <View style={styles.row}>
          <View style={styles.leftColumn}>
            <View style={styles.profileImg}>
              <Image src="assets/images/demo.jpg" style={styles.pic} />
            </View>

            <TitleBar title="Contact" isLeft={true}/>
            {personalData.contacts.map((contact, index) => (
              <ContactBar 
                key={index + contact.type}
                iconSrc={contact.icon} 
                value={contact.value}/>
            ))}
            
            <TitleBar title="Frameworks" isLeft={true}/>
            {personalData.programming.frameworks.map((framework, index) => (
              <ScoreBar 
              key={index + framework.framework}
              name={framework.framework} 
              score={framework.score}
              />
            ))}

            <TitleBar title="Programming Languages" isLeft={true}/>
            {personalData.programming.languages.map((language, index) => (
              <ScoreBar 
              key={index + language.language}
              name={language.language} 
              score={language.score}
              />
            ))}

            <TitleBar title="Languages" isLeft={true}/>
            {personalData.languages.map((language, index) => (
              <ScoreBar 
              key={index + language.language}
              name={language.language} 
              score={language.score}
              />
            ))}

            <TitleBar title="Strengths" isLeft={true}/>
            
            {personalData.strengths.map((strength, index) => (
              <StrengthBar 
                key={index + strength.strength}
                strength={strength.strength} 
                description={strength.description} 
              />
            ))}

            <MarkdownBar 
              portfolioUrl={personalData.portfolio.url}
              modifiedDate={personalData.ModifiedDate}
            />
            
          </View>
  
          <View style={styles.rightColumn}>
            <Text style={styles.fullname}>{personalData.fullname}</Text>
            <Text style={styles.role}>{personalData.roles[0]}</Text>
            <TitleBar title="Work Experiences" isLeft={false}/>
            {personalData.workExps.map((workExp, index) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text style={styles.workRole}>{workExp.role}</Text>

                <View style={styles.workSecondRow}>
                  {workExp.companyUrl ?
                    <Link style={styles.workCompanyName} src={workExp.companyUrl}>
                      <Text style={styles.workCompanyName}>
                        {workExp.companyName}
                      </Text>
                    </Link>
                    :
                    <Text style={styles.workCompanyName}>
                      {workExp.companyName}
                    </Text>
                  }
                  <DateRange startAt={workExp.startAt} endAt={workExp.endAt} />
                </View>
                
                
                <Text style={styles.workDescription}>{workExp.description}</Text>
              </View>
            ))}
  
            <TitleBar title="Educations" isLeft={false}/>
            {personalData.educations.map((education, index) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text style={styles.workRole}>{education.title}</Text>
                  {education.schoolUrl ?
                    <Link style={styles.workCompanyName} src={education.schoolUrl}>
                      <Text style={styles.workCompanyName}>
                        {education.school}
                      </Text>
                    </Link>
                    :
                    <Text style={styles.workCompanyName}>
                      {education.school}
                    </Text>
                  }

                  
                  
                  <DateRange startAt={education.startAt} endAt={education.endAt} />

                  {education.grade && 
                    <Text style={styles.workCompanyName}>
                      CGPA: {education.grade}
                    </Text>
                  }
                <Text style={styles.workDescription}>{education.description}</Text>
              </View>
            ))}

            <TitleBar title="Co-curicular Activities" isLeft={false}/>
            {personalData.cocuriculars.map((cocuricular, index) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text style={styles.workRole}>{cocuricular.title}</Text>
                  {cocuricular.schoolUrl ?
                  <Link style={styles.workCompanyName} src={cocuricular.schoolUrl}>
                    <Text style={styles.workCompanyName}>
                      {cocuricular.school}
                    </Text>
                  </Link>
                  :
                  <Text style={styles.workCompanyName}>
                    {cocuricular.school}
                  </Text>
                }

                <DateRange startAt={cocuricular.startAt} endAt={cocuricular.endAt} />
                
                <Text style={styles.workDescription}>{cocuricular.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PDFDocument;
