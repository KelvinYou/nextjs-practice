// PDFDocument.js

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
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
  },
  profileImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: "100%",
  },
});

const PDFDocument = () => (
  <Document 
  title={`Kelvin - Resume`} 
  author={personalData.nickname} >
    <Page size="A4" style={styles.page}>
      <View style={styles.row}>
        <View style={styles.leftColumn}>
          <View style={styles.profileImg}>
            <Image src="assets/images/demo.jpg" style={styles.logo} />
          </View>
        </View>

        <View style={styles.rightColumn}>
          <Text style={styles.title}>Work Experience</Text>

          {personalData.workExps.map((workExp, index) => (
            <View>
              <Text>{workExp.role}</Text>
              <Text>{workExp.companyName}</Text>
              <Text>{workExp.description}</Text>
            </View>
          ))}

          <Text style={styles.title}>Education</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
