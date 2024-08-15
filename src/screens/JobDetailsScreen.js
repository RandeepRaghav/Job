import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const JobDetailsScreen = ({ route }) => {
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.location}>{job.location}</Text>
      <Text style={styles.salary}>{job.salary}</Text>
      <Text style={styles.phone}>{job.phone}</Text>
      <Text style={styles.description}>{job.description}</Text>
    </View>
  );
};

export default JobDetailsScreen;
