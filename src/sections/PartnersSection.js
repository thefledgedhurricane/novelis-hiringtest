import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// react component for creating beautiful carousel
// @material-ui/core components
// @material-ui/icons

import abby from 'assets/img/Partners/abbyy_web.jpg';
import microsoft from 'assets/img/Partners/microsoft-2.jpg';
import automation_anywhere from 'assets/img/Partners/automation-anywhere-1.jpg';
import nice from 'assets/img/Partners/nice_web.jpg';
import uipath from 'assets/img/Partners/ui_path_web.jpg';
import blueprism from 'assets/img/Partners/blue_prism_web.jpg';

import styles from 'assets/jss/novelis-landingpage/landingPageSections/PartnersStyle.js';

const useStyles = makeStyles(styles);

export default function PartnersSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <div className={classes.sectionDevider} />
          <h2 className={classes.title}>Nos partenaires</h2>
          <h5 className={classes.description}>
            Pour les sujets portant sur le traitement de documents numérisés
            (OCR – Optical Character Recognition{')'}, l’automatisation des
            processus front et back office {'('}Attended ou Unattended{')'}ou
            encore le encore le déploiement de solutions no / low code, Novelis
            travaille acteurs les plus avancés sur le marché. Avec plus de 40
            collaborateurs certifiés sur ces différentes solutions, Novelis a la
            capacité de vous accompagner dans vos projets de Smart Automation,
            que votre réflexion soit à ses débuts ou que votre projet ait une
            vocation de déploiement massif, incluant une dimension
            organisationnelle et de gouvernance.
          </h5>
        </GridItem>
      </GridContainer>
      <div />
      <div className={classes.space50} />
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={4} className={classes.marginLeft}>
            <div className={classes.space50} />
            <img
              src={abby}
              alt="..."
              className={
                classes.imgRaised +
                ' ' +
                classes.imgRounded +
                ' ' +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={12} sm={4} className={classes.marginLeft}>
            <div className={classes.space50} />
            <img
              src={microsoft}
              alt="..."
              className={
                classes.imgRaised +
                ' ' +
                classes.imgRounded +
                ' ' +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={12} sm={4} className={classes.marginLeft}>
            <div className={classes.space50} />
            <img
              src={automation_anywhere}
              alt="..."
              className={
                classes.imgRaised +
                ' ' +
                classes.imgRounded +
                ' ' +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={12} sm={4} className={classes.marginLeft}>
            <div className={classes.space50} />
            <img
              src={nice}
              alt="..."
              className={
                classes.imgRaised +
                ' ' +
                classes.imgRounded +
                ' ' +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={12} sm={4} className={classes.marginLeft}>
            <div className={classes.space50} />
            <img
              src={uipath}
              alt="..."
              className={
                classes.imgRaised +
                ' ' +
                classes.imgRounded +
                ' ' +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={12} sm={4} className={classes.marginLeft}>
            <div className={classes.space50} />
            <img
              src={blueprism}
              alt="..."
              className={
                classes.imgRaised +
                ' ' +
                classes.imgRounded +
                ' ' +
                classes.imgFluid
              }
            />
          </GridItem>
        </GridContainer>
        <GridContainer />
      </div>
    </div>
  );
}
