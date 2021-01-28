import { container, primaryColor } from 'assets/jss/novelis-landingpage.js';
import Background from 'assets/img/footer-bg.svg';
const footerStyle = {
  wrapper: {
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  block: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    position: 'relative',
    display: 'block',
  },
  left: {
    float: 'left!important',
    display: 'block',
    position: 'inherit',
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right!important',
  },
  footer: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
    textAlign: 'left',
    display: 'flex',
    zIndex: '-1',
    position: 'absolute',
    margin: '0',
    padding: '0',
    border: '0',
    alignItems: 'center',
    backgroundSize: '100% 100%',
    backgroundImage: `url(${Background})`,
  },
  a: {
    color: primaryColor,
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
  footerWhiteFont: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF',
    },
  },
  container,
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0',
  },
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
};
export default footerStyle;
