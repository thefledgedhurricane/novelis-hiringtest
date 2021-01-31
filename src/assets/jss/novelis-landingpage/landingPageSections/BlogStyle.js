import {
  title,
  container,
  sectionDevider,
} from 'assets/jss/novelis-landingpage.js';
import imagesStyles from 'assets/jss/novelis-landingpage/imagesStyles.js';

const BlogStyle = {
  space50: {
    height: '50px',
    display: 'block',
  },
  container: {
    ...container,
    backgroundColor: '#F4F6FD',
  },
  section: {
    padding: '70px 0',
    textAlign: 'center',
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  description: {
    color: '#999',
  },
  sectionDevider,
  ...imagesStyles,
};

export default BlogStyle;
