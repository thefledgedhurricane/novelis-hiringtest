import {
  container,
  defaultFont,
  transition,
  boxShadow,
  drawerWidth,
} from 'assets/jss/novelis-landingpage.js';

const headerStyle = {
  header: {},
  delimiter: {
    height: '50px',
    width: '1px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginLeft: '42px',
    marginRight: '27px',
  },
  appBar: {
    display: 'flex',
    border: '0',
    padding: '0.625rem 0',
    marginBottom: '20px',
    color: '#555',
    width: '100%',
    backgroundColor: '#fff',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  fixed: {
    position: 'fixed',
    zIndex: '1500',
  },
  container: {
    ...container,
    flex: '1',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  flex: {
    flex: 1,
  },
  title: {
    ...defaultFont,
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    padding: '8px 16px',
    letterSpacing: 'unset',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'transparent',
    },
  },
  appResponsive: {
    margin: '20px 10px',
  },
  transparent: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    paddingTop: '25px',
    color: '#FFFFFF',
  },
  white: {
    border: '0',
    padding: '0.625rem 0',
    marginBottom: '20px',
    color: '#555',
    backgroundColor: '#fff !important',
    boxShadow:
      '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
  },
  drawerPaper: {
    border: 'none',
    bottom: '0',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    width: drawerWidth,
    ...boxShadow,
    position: 'fixed',
    display: 'block',
    top: '0',
    height: '100vh',
    right: '0',
    left: 'auto',
    visibility: 'visible',
    overflowY: 'visible',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: '0px',
    paddingLeft: '0',
    ...transition,
  },
};

export default headerStyle;
