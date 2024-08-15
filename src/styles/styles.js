import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    marginBottom: 4,
    color: '#6c757d',
  },
  salary: {
    fontSize: 16,
    marginBottom: 4,
    color: '#28a745',
  },
  phone: {
    fontSize: 14,
    marginBottom: 8,
    color: '#17a2b8',
  },
  bookmarkButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  bookmarkText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
