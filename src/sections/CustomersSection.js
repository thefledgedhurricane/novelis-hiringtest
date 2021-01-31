import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
// @material-ui/icons

import Card from 'components/Card/Card.js';

import logo1 from 'assets/img/logos/logo_1.jpg';
import logo2 from 'assets/img/logos/logo_2.jpg';
import logo3 from 'assets/img/logos/logo_3.jpg';
import logo4 from 'assets/img/logos/logo_4.jpg';
import logo5 from 'assets/img/logos/logo_5.jpg';

import styles from 'assets/jss/novelis-landingpage/landingPageSections/CustomersStyle.js';

const useStyles = makeStyles(styles);

export default function CustomersSection() {
  const classes = useStyles();
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <div className={classes.sectionDevider}></div>
          <h2 className={classes.title}>Nous les aidons à se transformer</h2>
          <h5 className={classes.description}>
            Depuis sa création, Novelis accompagne ses clients dans leurs
            projets de transformation digitale. Cet appui couvre une palette
            riche : Développement de solutions métier, Audits d’architectures,
            Mise en œuvre de solutions d’automatisation, Projets intégrant des
            algorithmes complexes et des composants IA … Nous contribuons ainsi
            à votre création de valeur pour vos collaborateurs et vos clients !
          </h5>
        </GridItem>
      </GridContainer>
      <div />
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={logo1} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={logo2} alt="Second slide" className="slick-image" />
                </div>
                <div>
                  <img src={logo3} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={logo4} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={logo5} alt="Third slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
