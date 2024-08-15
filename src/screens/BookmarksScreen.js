import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadBookmarks } from '../redux/bookmarksSlice';
import JobCard from '../components/JobCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

const BookmarksScreen = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmarks.bookmarks);

  useEffect(() => {
    const loadStoredBookmarks = async () => {
      const storedBookmarks = await AsyncStorage.getItem('bookmarks');
      if (storedBookmarks) {
        dispatch(loadBookmarks(JSON.parse(storedBookmarks)));
      }
    };

    loadStoredBookmarks();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {bookmarks.length === 0 ? (
        <Text>No bookmarks found.</Text>
      ) : (
        <FlatList
          data={bookmarks}
          renderItem={({ item }) => <JobCard job={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default BookmarksScreen;
