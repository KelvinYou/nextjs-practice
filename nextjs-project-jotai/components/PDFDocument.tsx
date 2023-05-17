// PDFDocument.js

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import { personalData } from '@/data/personalData';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10
  },
  content: {
    fontSize: 12
  }
});

const PDFDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{personalData.greeting}</Text>
        <Text style={styles.content}>
          This is the content of my PDF document.
        </Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
