import { title, sectionDevider } from 'assets/jss/novelis-landingpage.js';
import imagesStyles from 'assets/jss/novelis-landingpage/imagesStyles.js';

const PartnersStyle = {
  space50: {
    height: '50px',
    display: 'block',
  },
  section: {
    padding: '70px 0',
    textAlign: 'center',
    backgroundColor: '#F4F6FD',
    width: 'inherit',
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  description: {
    color: '#000000',
  },
  sectionDevider,
  ...imagesStyles,
};

export default PartnersStyle;
