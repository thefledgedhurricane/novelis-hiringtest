import ParallaxBackground from 'assets/img/landing-bg.jpg';

const parallaxStyle = {
  parallax: {
    height: '90vh',
    maxHeight: '100%',
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
