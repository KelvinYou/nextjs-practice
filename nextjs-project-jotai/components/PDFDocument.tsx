// PDFDocument.js

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import { personalData } from '@/data/personalData';

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
  },
  leftColumn: {
    flexGrow: 1,
    marginRight: 16,
    width: '55%',
    height: '100%',
    backgroundColor: 'yellow'
  },
  rightColumn: {
    flexGrow: 1,
    width: '40%',
    height: '100%',
  },
  // section: {
  //   margin: 10,
  //   padding: 10,
  //   flexGrow: 1
  // },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  // content: {
  //   fontSize: 12
  // }
});

const PDFDocument = () => (
  <Document title={`Kelvin - Resume`}>
    <Page size="A4" style={styles.page}>
    <View style={styles.row}>
      <View style={styles.leftColumn}>
        <Text style={styles.title}>{personalData.fullname}</Text>
      </View>

      <View style={styles.rightColumn}>
        <Text style={styles.title}>{personalData.fullname}</Text>
      </View>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
