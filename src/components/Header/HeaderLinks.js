import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import imgfr from 'assets/img/language_icons/fr.png';
import imgen from 'assets/img/language_icons/en.png';
import styles from 'assets/jss/novelis-landingpage/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <a
          href="https://novelis.io/product/novelis-landingpage?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          rel="noreferrer"
          className={classes.navLink}
        >
          <span>
            ACCUEIL <span className={classes.navLinkplusActive} />
          </span>
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          href="https://novelis.io/product/novelis-landingpage?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          rel="noreferrer"
          className={classes.navLink}
        >
          <span>
            QUI SOMMES NOUS ?<span className={classes.navLinkplus} />
          </span>
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          href="https://novelis.io/product/novelis-landingpage?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          rel="noreferrer"
          className={classes.navLink}
        >
          <span>
            NOS OFFRES <span className={classes.navLinkplus} />
          </span>
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          href="https://novelis.io/product/novelis-landingpage?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          rel="noreferrer"
          className={classes.navLink}
        >
          <span>
            CARRIERES <span className={classes.navLinkplus} />
          </span>
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          href="https://novelis.io/product/novelis-landingpage?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          rel="noreferrer"
          className={classes.navLink}
        >
          <span>
            LAB NOVELIS
            <span className={classes.navLinkplus} />
          </span>
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          href="https://novelis.io/product/novelis-landingpage?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          rel="noreferrer"
          className={classes.navLink}
        >
          <span>
            BLOG
            <span className={classes.navLinkplus} />
          </span>
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <GridContainer justify="center">
          <GridItem xs={4} sm={4} md={4}>
            <a
              href="https://novelis.io/product/novelis-landingpage?ref=mkr-navbar"
              color="transparent"
              target="_blank"
              rel="noreferrer"
              className={classes.navLink}
            >
              <img src={imgfr} alt="fr" />
            </a>
          </GridItem>
          <GridItem xs={4} sm={4} md={4}>
            <a
              href="https://novelis.io/product/novelis-landingpage?ref=mkr-navbar"
              color="transparent"
              target="_blank"
              rel="noreferrer"
              className={classes.navLink}
            >
              <img src={imgen} alt="en" />
            </a>
          </GridItem>
        </GridContainer>
      </ListItem>
    </List>
  );
}
