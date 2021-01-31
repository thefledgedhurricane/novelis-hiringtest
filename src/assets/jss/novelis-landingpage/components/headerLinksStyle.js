import { defaultFont } from 'assets/jss/novelis-landingpage.js';

const headerLinksStyle = () => ({
  list: {
    ...defaultFont,
    fontSize: '18px',
    margin: 0,
    paddingLeft: '0',
    paddingTop: '0',
    paddingBottom: '0',
    color: 'inherit',
  },
  listItem: {
    float: 'left',
    color: 'inherit',
    position: 'relative',
    display: 'inline-block',
    width: 'auto',
    margin: '0',
    padding: '0',
  },
  listItemText: {
    padding: '0 !important',
  },
  navLink: {
    position: 'relative',
    zIndex: 1,
    display: 'inline-block',
    height: '100%',
    opacity: 1,
    color: 'inherit',
    padding: '0 20px',
    textTransform: 'capitalize',
    letterSpacing: '0',
  },
  navLinkplus: {
    '&:hover': {
      content: "''",
      position: 'absolute',
      zIndex: 1,
      width: '25px',
      height: '3px',
      WebkitBorderRadius: '2px',
      MozBorderRadius: '2px',
      borderRadius: '2px',
      left: '0',
      top: '0',
      background: '#c32026',
    },
  },
  navLinkplusActive: {
    '&:after': {
      content: "''",
      position: 'absolute',
      zIndex: 1,
      width: '25px',
      height: '3px',
      WebkitBorderRadius: '2px',
      MozBorderRadius: '2px',
      borderRadius: '2px',
      left: '20px',
      top: '25px',
      background: '#c32026',
    },
  },
  navLinkActive: {
    color: 'inherit',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  icons: {
    width: '20px',
    height: '20px',
    marginRight: '3px',
  },
  socialIcons: {
    position: 'relative',
    fontSize: '20px !important',
    marginRight: '4px',
  },
  marginRight5: {
    marginRight: '5px',
  },
});

export default headerLinksStyle;
