import { defaultFont } from 'assets/jss/novelis-landingpage.js';

const headerLinksStyle = () => ({
  list: {
    ...defaultFont,
    fontSize: '18px',
    margin: 0,
    justify: 'center',
    paddingLeft: '0',
    listStyle: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    color: 'inherit',
  },
  listItem: {
    float: 'left',
    color: 'inherit',
    position: 'relative',
    display: 'block',
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
    display: ['inline-block'],
    verticalAlign: 'middle',
    height: '100%',
    opacity: 1,
    color: 'inherit',
    padding: '0 20px',
    textTransform: 'capitalize',
    letterSpacing: '0',
    '&:after,&:focus': {
      content: "''",
      width: '0',
      height: '3px',
      borderRadius: '25px',
      display: 'inline-block',
      position: 'absolute',
      left: '0px',
      bottom: '-3px',
      backgroundColor: '#c32026',
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
