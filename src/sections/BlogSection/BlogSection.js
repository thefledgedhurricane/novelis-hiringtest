import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// react component for creating beautiful carousel
// @material-ui/core components
import BlogPosts from 'sections/BlogSection/Components/BlogPosts';

// @material-ui/icons
import styles from 'assets/jss/novelis-landingpage/landingPageSections/BlogStyle.js';

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.sectionDevider}></div>
          <h2 className={classes.title}>Blog</h2>
          <h5 className={classes.description}>
            L’espace où Novelis partage ses news, ses projets, des contenus de
            collaborateurs, des informations sur l’actualité, des interviews de
            clients, de partenaires et d’acteurs de la transformation digitale.
          </h5>
        </GridItem>
        <BlogPosts />
      </GridContainer>
    </div>
  );
}
