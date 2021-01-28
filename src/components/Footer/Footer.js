import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';

// material-ui core components
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

// core components
import Button from 'components/Buttons/Button.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// @material-ui/icons

import styles from 'assets/jss/novelis-landingpage/components/footerStyle.js';

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });

  return (
    <div className={classes.wrapper}>
      <footer className={footerClasses}>
        <div className={classes.container}>
          <div className={classes.left}>
            <p>
              Novelis apporte son savoir-faire et son expertise autour de la
              transformation digitale, à base d{"'"}Architectures innovantes,
              Intelligence Artificielle, Data Engineering et Smart Automation
              (RPA, OCR, NLP).
            </p>
            <div>
              Partenaire de l{"'"}école polytechnique, Novelis apporte ses
              compétences dans différents secteurs d{"'"}activité en
              investissant fortement sur l’innovation, à travers son laboratoire
              R{'&'}D. Grâce à ces efforts de Recherche, Novelis est reconnue{' '}
              {'"'}Jeune entreprise innovante{'"'} pour la deuxième année
              consécutive.
            </div>
            <GridContainer justify="left">
              <GridItem xs={1} sm={1} md={1}>
                <Tooltip
                  id="instagram-tooltip"
                  title="Follow us on instagram"
                  placement={window.innerWidth > 1600 ? 'top' : 'left'}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    rel="noopener noreferrer"
                    color="white"
                    href=""
                    className={classes.navLink}
                  >
                    <i className={classes.socialIcons + ' fab fa-instagram'} />
                  </Button>
                </Tooltip>
              </GridItem>
              <GridItem xs={1} sm={1} md={1}>
                <Tooltip
                  id="instagram-tooltip"
                  title="Follow us on instagram"
                  placement={window.innerWidth > 1600 ? 'top' : 'left'}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    rel="noopener noreferrer"
                    color="white"
                    href=""
                    className={classes.navLink}
                  >
                    <i className={classes.socialIcons + ' fab fa-instagram'} />
                  </Button>
                </Tooltip>
              </GridItem>
            </GridContainer>
            <h3>Mentions légales</h3>
            <h3>Contacts</h3>
            <div>Adresse : 207 Rue de Bercy, 75012, Paris </div>
            <div>Email : info@novelis.io </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
