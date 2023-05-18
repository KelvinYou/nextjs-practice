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
    width: 150,
    height: 150,
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
  workDescription: {
    fontSize: 8,
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
});

const TitleBar = ({title, isLeft}: {title: string, isLeft: boolean}) => {
  return (
    <>
      <Text style={[styles.title, 
        { color: isLeft ? "white": "black" }]}>
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
    title={`Kelvin - Resume`} 
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

            <TitleBar title="Programming" isLeft={true}/>

            <TitleBar title="Framework" isLeft={true}/>

            <TitleBar title="Language" isLeft={true}/>

          </View>
  
          <View style={styles.rightColumn}>
            <Text style={styles.fullname}>{personalData.fullname}</Text>
            <Text style={styles.role}>{personalData.roles[0]}</Text>
            <TitleBar title="Work Experience" isLeft={false}/>
            {personalData.workExps.map((workExp, index) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text style={styles.workRole}>{workExp.role}</Text>
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
                
                <Text style={styles.workDescription}>{workExp.description}</Text>
              </View>
            ))}
  
            <TitleBar title="Education" isLeft={false}/>
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
                
                <Text style={styles.workDescription}>{education.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PDFDocument;
