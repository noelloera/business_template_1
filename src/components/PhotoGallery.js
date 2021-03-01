import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import pic01 from "../assets/pic01.jpg";
import pic02 from "../assets/pic02.jpg";
import pic03 from "../assets/pic03.jpg";


//Setup classes to make the components based on the makeStyles
const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: "pointer",
    objectFit: "cover",
    width: "100%",
    maxHeight: "100%",
  };
  return (
    <div
      style={{
        width:"100%"
      }}
    >
      <Gallery id="simple-gallery">
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(75px, max-content));",
            gridTemplateRows: "repeat(auto-fill, minmax(30px, max-content));",
            gridGap: 8,
          }}
        >
          <Item
            original={pic01}
            thumbnail={pic01}
            //For the full size image
            width="1000"
            height="1600"
            id="so-first"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src={pic01}
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item original={pic02} thumbnail={pic02} width="1600" height="1068">
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
            thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
            width="1600"
            height="1066"
            title="Author: Ales Krivec"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
            thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
            width="1600"
            height="1066"
            title="Author: Michael Hull"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridColumnStart: 2 }}
                src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
            thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
            width="1600"
            height="1066"
            title="Author: Thomas Lefebvre"
          >
            {({ ref, open }) => (
              <img
                style={smallItemStyles}
                src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
          <Item
            original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
            thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
            width="1600"
            height="1066"
            title="Author: Thomas Lefebvre"
          >
            {({ ref, open }) => (
              <img
                style={{
                  ...smallItemStyles,
                  gridRowStart: 1,
                  gridColumnStart: 4,
                }}
                src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
                ref={ref}
                onClick={open}
              />
            )}
          </Item>
        </div>
      </Gallery>
    </div>
  );
};
export default PhotoGallery;
