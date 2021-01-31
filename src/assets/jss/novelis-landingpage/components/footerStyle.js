import { container, defaultFont } from 'assets/jss/novelis-landingpage.js';

import Background from 'assets/img/footer-bg.png';
const footerStyle = {
  block: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '18px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    position: 'relative',
    display: 'block',
  },
  content: {
    ...defaultFont,
    display: 'relative',
    position: 'inherit',
    width: '100%',
    paddingTop: '10rem',
    paddingLeft: '16rem',
    paddingRight: '16rem',
    textAlign: 'justify',
    fontSize: '14px',
    lineHeight: '32px',
    fontWeight: 'regular',
  },
  space15: {
    height: '15px',
    display: 'block',
  },
  svg: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    left: '0',
    top: '0',
    zIndex: '-1',
  },
  footer: {
    width: '100%',
    overflow: 'hidden',
    textAlign: 'left',
    display: 'relative',
    position: 'relative',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center center',
    backgroundImage: `url(${Background})`,
  },
  a: {
    color: '#FFFFFF',
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
  footerWhiteFont: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF',
    },
  },
  container,
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto',
  },
  icon: {
    width: '18px',
    height: '18px',
    position: 'relative',
    top: '3px',
  },
  socialIcons: {
    position: 'relative',
    fontSize: '24px !important',
    marginRight: '4px',
    color: '#ffffff',
    width: '26px',
    height: '26px',
    lineHeight: '26px',
    marginLeft: '6px',
    marginBottom: '12px',
  },
};
export default footerStyle;
