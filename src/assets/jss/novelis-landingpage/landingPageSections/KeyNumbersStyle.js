import { title, sectionDevider } from 'assets/jss/novelis-landingpage.js';

const KeyNumbersStyle = {
  space50: {
    height: '50px',
    display: 'block',
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
  sectionDevider,
  counterValue: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#000000',
  },
  counterValueSuffix: {
    fontSize: '36px',
    verticalAlign: 'text-top',
    position: 'relative',
    left: '-2px',
    top: '-28px',
    fontWeight: 'bold',
    color: '#c32026',
  },
  counterTitle: {
    fontSize: '15px',
    fontWeight: 700,
    lineHeight: 1.2,
    textTransform: 'uppercase',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingTop: '5px',
    color: '#6e6e6e',
  },
};

export default KeyNumbersStyle;
