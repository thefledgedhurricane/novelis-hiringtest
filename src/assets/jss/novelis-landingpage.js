const drawerWidth = 260;

const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};

const containerFluid = {
  width: 'inherit',
};

const container = {
  ...containerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '100%',
  },
  '@media (min-width: 768px)': {
    maxWidth: '100%',
  },
  '@media (min-width: 992px)': {
    maxWidth: '100%',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '100%',
  },
};

const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
};

const card = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '3px',
  color: 'rgba(0, 0, 0, 0.87)',
  background: '#fff',
};

const defaultFont = {
  fontFamily: 'Nunito Sans,sans-serif',
  fontWeight: 'bold',
  lineHeight: '1.5em',
};

const primaryColor = '#c32026';
const warningColor = '#ff9800';
const dangerColor = '#f44336';
const successColor = '#4caf50';
const infoColor = '#00acc1';
const roseColor = '#e91e63';
const grayColor = '#999999';
const BlackColor = '#000000 ';

const primaryBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(152, 39, 38, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(152, 39, 37, 0.2)',
};
const infoBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
};
const successBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
};
const warningBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
};
const dangerBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
};
const roseBoxShadow = {
  boxShadow:
    '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)',
};

const warningCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
  ...warningBoxShadow,
};
const successCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #66bb6a, #43a047)',
  ...successBoxShadow,
};
const dangerCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ef5350, #e53935)',
  ...dangerBoxShadow,
};
const infoCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #26c6da, #00acc1)',
  ...infoBoxShadow,
};
const primaryCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #c32026, #c32018)',
  ...primaryBoxShadow,
};
const roseCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ec407a, #d81b60)',
  ...roseBoxShadow,
};
const cardActions = {
  margin: '0 20px 10px',
  paddingTop: '10px',
  borderTop: '1px solid #eeeeee',
  height: 'auto',
  ...defaultFont,
};

const cardHeader = {
  margin: '-30px 15px 0',
  borderRadius: '3px',
  padding: '15px',
};

const defaultBoxShadow = {
  border: '0',
  borderRadius: '3px',
  boxShadow:
    '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s',
};

const title = {
  color: '#000000',
  margin: '1.75rem 0 0.875rem',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontFamily: 'Nunito Sans,sans-serif',
  textAlign: 'center',
};

const cardTitle = {
  ...title,
  marginTop: '.625rem',
};

const cardLink = {
  '& + $cardLink': {
    marginLeft: '1.25rem',
  },
};

const cardSubtitle = {
  marginBottom: '0',
  marginTop: '-.375rem',
};

const sectionDevider = {
  background: '#c32026',
  position: 'absolute',
  zIndex: 0,
  top: '0',
  width: '40px',
  height: '3px',
  WebkitBorderRadius: '2px',
  MozBorderRadius: '2px',
  borderRadius: '2px',
  left: '50%',
  marginLeft: '-20px',
  '&:after': {
    content: "''",
    position: 'absolute',
    zIndex: 1,
    width: '10px',
    height: '3px',
    WebkitBorderRadius: '2px',
    MozBorderRadius: '2px',
    borderRadius: '2px',
    right: '-20px',
    background: '#c32026',
  },
  '&:before': {
    content: "''",
    position: 'absolute',
    zIndex: 1,
    width: '10px',
    height: '3px',
    WebkitBorderRadius: '2px',
    MozBorderRadius: '2px',
    borderRadius: '2px',
    left: '-20px',
    background: '#c32026',
  },
};

export {
  //variables
  drawerWidth,
  transition,
  container,
  containerFluid,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  BlackColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardLink,
  cardSubtitle,
  sectionDevider,
};
