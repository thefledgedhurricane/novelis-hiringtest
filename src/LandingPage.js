import React from 'react';
// nodejs library that concatenates classes
// @material-ui/core components
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/Buttons/Button.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import styles from 'assets/jss/novelis-landingpage/landingPage.js';
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="white"
        routes={dashboardRoutes}
        brand="Novelis"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12}>
              <h1 className={classes.title}>
                Humaniser votre transformation !
              </h1>
              <h4>
                Novelis vous accompagne dans la digitalisation de vos documents,
                l{"'"}automatisation et valorisation de vos processus et l{"'"}
                urbanisation de votre Système d{"'"}Information. Notre objectif
                est de vous aider à améliorer votre performance et augmenter la
                satisfaction de vos collaborateurs et vos clients, tout en
                maîtrisant vos coûts.
              </h4>
              <br />
            </GridItem>
            <GridItem xs={3}>
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                Applications <br />
                Métiers
              </Button>
            </GridItem>
            <GridItem item xs={3}>
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digitalisation <br />
                des documents
              </Button>
            </GridItem>
            <GridItem item xs={3}>
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                Automatisation <br />
                des processus
              </Button>
            </GridItem>
            <GridItem item xs={3}>
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                Urbanisation <br />
                Du SI
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
