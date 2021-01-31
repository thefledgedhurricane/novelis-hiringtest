import ParallaxBackground from 'assets/img/landing-bg.jpg';
import { title, container } from 'assets/jss/novelis-landingpage.js';

const parallaxStyle = {
  parallax: {
    height: '90vh',
    position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    border: '0',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${ParallaxBackground})`,
  },
  container: {
    ...container,
    backgroundColor: '#F4F6FD',
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
  section: {
    padding: '70px 0',
    textAlign: 'center',
  },
  filter: {
    '&:before': {
      background: 'rgba(0, 0, 0, 0.5)',
    },
    '&:after,&:before': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: "''",
    },
  },
  small: {
    height: '380px',
  },
};

export default parallaxStyle;
