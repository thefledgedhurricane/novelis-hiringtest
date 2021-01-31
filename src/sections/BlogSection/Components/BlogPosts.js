/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'sections/BlogSection/store/actions/postAction';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const BlogPosts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postsListData = useSelector((state) => state.postsList);
  const { loading, error, posts } = postsListData;
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <GridContainer>
      {loading
        ? 'Loading...'
        : error
        ? error.message
        : posts.slice(0, 3).map((p) => (
            <GridItem
              id={p.index}
              xs={12}
              sm={12}
              md={4}
              className={classes.marginAuto}
            >
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={p.urlToImage}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {p.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {p.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </GridItem>
          ))}
    </GridContainer>
  );
};

export default BlogPosts;
