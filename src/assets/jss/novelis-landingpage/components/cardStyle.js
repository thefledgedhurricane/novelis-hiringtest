const cardStyle = {
  card: {
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#fff',
    width: '100%',
    perspective: '300px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    wordWrap: 'break-word',
    fontSize: '.875rem',
    transition: 'all 300ms linear',
  },
  cardPlain: {
    background: 'transparent',
    boxShadow: 'none',
  },
  cardCarousel: {
    overflow: 'hidden',
  },
};

export default cardStyle;
