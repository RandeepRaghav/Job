import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBookmark } from '../redux/bookmarksSlice';
import styles from '../styles/styles';

const JobCard = ({ job, onPress }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.location}>{job.location}</Text>
      <Text style={styles.salary}>{job.salary}</Text>
      <Text style={styles.phone}>{job.phone}</Text>
      <TouchableOpacity
        style={styles.bookmarkButton}
        onPress={() => dispatch(addBookmark(job))}
      >
        <Text style={styles.bookmarkText}>Bookmark</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default JobCard;
