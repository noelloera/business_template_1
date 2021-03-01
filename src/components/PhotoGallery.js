import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import pic01 from "../assets/photogallery/pic01.jpg";
import pic02 from "../assets/photogallery/pic02.jpg";
import pic03 from "../assets/photogallery/pic03.jpg";
import pic04 from "../assets/photogallery/pic04.jpg";
import pic05 from "../assets/photogallery/pic05.jpg";
import pic06 from "../assets/photogallery/pic06.jpg";
import pic07 from "../assets/photogallery/pic07.jpg";
import pic08 from "../assets/photogallery/pic08.jpg";
import pic09 from "../assets/photogallery/pic09.jpg";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import theme from "../assets/theme";

const useStyles = makeStyles({
  gallery: { width: "100%" },
  galleryComp: {
    backgroundColor: "white",

    padding: "5rem 2rem",
    margin: "2rem auto",
    width: "80%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "3rem 1rem",
    },
  },
  divider: {
    display: "flex",
    height: "3rem",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "black",
  },
});

//Setup classes to make the components based on the makeStyles
const PhotoGallery = () => {
  const classes = useStyles();
  const smallItemStyles: React.CSSProperties = {
    cursor: "pointer",
    objectFit: "cover",
    width: "100%",
    maxHeight: "100%",
  };
  return (
    <div className={classes.gallery}>
      <Typography className={classes.divider} variant="body2" id="GALLERY">
        GALLERY
      </Typography>
      <div className={classes.galleryComp}>
        <Gallery id="simple-gallery">
          <div
            style={{
              width: "100%",
              height: "600px",
              display: "grid",
              gridTemplateColumns: "33% 33% 33%",
              gridTemplateRows: "33% 33% 33%",
              gridGap: 8,
            }}
          >
            <Item
              original={pic01}
              thumbnail={pic01}
              width="1020"
              height="1600"
              id="so-first"
            >
              {({ ref, open }) => (
                <img
                  alt="mounted tv"
                  style={smallItemStyles}
                  src={pic01}
                  ref={ref}
                  onClick={open}
                  title="Juan stress testing TV mount"
                />
              )}
            </Item>
            <Item original={pic02} thumbnail={pic02} width="1020" height="1600">
              {({ ref, open }) => (
                <img
                  alt="mounted tv"
                  style={smallItemStyles}
                  src={pic02}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
            <Item original={pic03} thumbnail={pic03} width="1020" height="1600">
              {({ ref, open }) => (
                <img
                  alt="mounted tv"
                  style={{ ...smallItemStyles, gridColumnStart: 3 }}
                  src={pic03}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
            <Item original={pic04} thumbnail={pic04} width="1020" height="1600">
              {({ ref, open }) => (
                <img
                  alt="mounted tv"
                  style={smallItemStyles}
                  src={pic04}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
            <Item original={pic05} thumbnail={pic05} width="1020" height="1600">
              {({ ref, open }) => (
                <img
                  alt="mounted tv"
                  style={smallItemStyles}
                  src={pic05}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
            <Item original={pic06} thumbnail={pic06} width="1020" height="1600">
              {({ ref, open }) => (
                <img
                  alt="mounted tv"
                  style={smallItemStyles}
                  src={pic06}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
            <Item original={pic07} thumbnail={pic07} width="1020" height="1600">
              {({ ref, open }) => (
                <img
                  alt="mounted tv"
                  style={smallItemStyles}
                  src={pic07}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
            <Item original={pic08} thumbnail={pic08} width="1020" height="1600">
              {({ ref, open }) => (
                <img
                  alt="mounted tv"
                  style={smallItemStyles}
                  src={pic08}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
            <Item original={pic09} thumbnail={pic09} width="1020" height="1600">
              {({ ref, open }) => (
                <img
                  alt="mounted tv"
                  style={smallItemStyles}
                  src={pic09}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
          </div>
        </Gallery>
      </div>
    </div>
  );
};
export default PhotoGallery;
