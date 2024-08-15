import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../redux/jobsSlice';
import JobCard from '../components/JobCard';
import styles from '../styles/styles';

const JobsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs.jobs);
  const status = useSelector(state => state.jobs.status);
  const error = useSelector(state => state.jobs.error);

  useEffect(() => {
    dispatch(fetchJobs(1));
  }, [dispatch]);

  const loadMoreJobs = () => {
    dispatch(fetchJobs(jobs.length / 10 + 1));
  };

  const renderJobCard = ({ item }) => (
    <JobCard 
      job={item} 
      onPress={() => navigation.navigate('JobDetails', { job: item })} 
    />
  );

  return (
    <View style={styles.container}>
      {status === 'loading' && <ActivityIndicator size="large" />}
      {status === 'failed' && <Text>{error}</Text>}
      <FlatList
        data={jobs}
        renderItem={renderJobCard}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMoreJobs}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default JobsScreen;
