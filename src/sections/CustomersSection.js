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

import image from 'assets/img/logos/logo_2.jpg';

import stylesCarousel from 'assets/jss/novelis-landingpage/views/componentsSections/carouselStyle.js';

import styles from 'assets/jss/novelis-landingpage/views/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles, stylesCarousel);

export default function ProductSection() {
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
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image} alt="Second slide" className="slick-image" />
                </div>
                <div>
                  <img src={image} alt="Third slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
