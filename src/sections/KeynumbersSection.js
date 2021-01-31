import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import styles from 'assets/jss/novelis-landingpage/landingPageSections/KeyNumbersStyle.js';

const useStyles = makeStyles(styles);

export default function KeyNumbersSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <div className={classes.sectionDevider}></div>
          <h2 className={classes.title}>Novelis en quelques chiffres</h2>
        </GridItem>
      </GridContainer>
      <div />
      <div className={classes.space50} />
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={2}>
            <span className={classes.counterValue}>26</span>
            <span className={classes.counterValueSuffix}>%</span>
            <div className={classes.counterTitle}>INVESTISSEMENT R&D</div>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <span className={classes.counterValue}>60</span>
            <span className={classes.counterValueSuffix}>+</span>
            <div className={classes.counterTitle}>
              <strong>COLLABORATEURS</strong>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <span className={classes.counterValue}>35</span>
            <span className={classes.counterValueSuffix}>+</span>
            <div className={classes.counterTitle}>
              <strong>CLIENTS ACTIFS</strong>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <span className={classes.counterValue}>40</span>
            <span className={classes.counterValueSuffix}>+</span>
            <div className={classes.counterTitle}>
              <strong>CONSULTANTS RPA CERTIFIÉS</strong>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <span className={classes.counterValue}>160</span>
            <span className={classes.counterValueSuffix}>+</span>
            <div className={classes.counterTitle}>
              <strong>PROCESSUS AUTOMATISÉS</strong>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
