import makeStyles from "@material-ui/styles/makeStyles";
import theme from "../assets/theme.js";
import "typeface-ibm-plex-sans";
import "typeface-anton";
const useStyles = makeStyles(() => ({
  //App
  app: {
    backgroundColor: "#EFEFEF",
  },
  allContent: {
    maxWidth: "1300px",
    margin: "auto",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 1px 0 rgba(0, 0, 0, 0.19);",
  },
  //Sms
  sms: {
    position: "fixed",
    zIndex: 10,
    top: "90%",
    left: "88%",
    [theme.breakpoints.down("md")]: {
      left: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      left: "75%",
    },
    [theme.breakpoints.down("xs")]: {
      left: "60%",
    },
  },
  smsIcon: {
    width: "2rem",
    paddingLeft: "12px",
  },
  //Drawer
  drawer: {
    width: "250px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
  },
  drawerLogoDiv: {
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid gray",
  },
  drawerLogo: {
    height: "3rem",
    width: "11rem",
    margin: "0.5rem",
  },
  drawerLinks: {
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid lightgray",
    cursor: "pointer",
  },
  listItem: {
    color: "black",
    fontSize: "1.1rem",
  },
  phoneLink: {
    marginTop: "2rem",
    fontWeight: "bold",
    textAlign: "center",
  },
  //Navigation
  navStyle: {
    backgroundColor: "white",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0",
    [theme.breakpoints.up("md")]: {
      padding: "0.6rem 2rem 0.6rem 3.5rem",
    },
  },
  subBar: {
    height: "2rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontFamily: "IBM plex sans",
    color: "white",
    backgroundColor: "black",
    marginBottom: "1.5rem",
    [theme.breakpoints.up("md")]: {
      height: "3rem",
    },
    "&:hover": {
      color: "#5298fa",
    },
  },
  logo: {
    width: "200px",
    [theme.breakpoints.only("xxs")]: {
      width: "150px",
    },
  },
  rightSide: {
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  links: {
    display: "flex",
  },
  link: {
    marginRight: "2rem",
    cursor: "pointer",
    "&:hover": {
      color: "#5298fa",
    },
  },
  //Header
  content: {
    backgroundColor: "white",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "10rem",
      paddingLeft: "2rem",
    },
  },
  carouselComp: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    paddingRight: "0",
    [theme.breakpoints.up("lg")]: {
      paddingRight: "3rem",
    },
  },
  divStyling: {
    marginTop: "0.5rem",
    display: "flex",
    paddingBottom: "4rem",
  },
  buttonStyling: {
    justifyContent: "flex-start",
  },
  //Carousel
  carousel: {
    paddingTop: "1rem",
    width: "100%",
  },
  items: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "700px",
    },
  },
  image: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      position: "relative",
      margin: "0 auto",
      maxWidth: "850px",
      width: "100%",
      height: "100%",
    },
  },
  //Services
  section: {
    backgroundColor: "#EFEFEF",
    padding: "0",
    borderBottom: "1px solid lightgray",
    [theme.breakpoints.up("md")]: {
      padding: "5rem 2rem",
    },
  },
  section2: {
    backgroundColor: "#FFFFFF",
    padding: "0",
    borderBottom: "1px solid lightgray",
    [theme.breakpoints.up("md")]: {
      padding: "5rem 2rem",
    },
  },
  images: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      position: "relative",
      width: "100%",
      height: "85%",
    },
  },
  services: {
    display: "flex",
    height: "3rem",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "black",
  },
  //Contact
  divider: {
    display: "flex",
    height: "3rem",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "black",
  },
  //PhotoGallery
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
  //Footer
  footer: {
    margin: "auto",
    height: "29rem",
    width: "100%",
    backgroundColor: "#2E2E2E",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
  },
  footerContent: {
    paddingTop: "5rem",
    width: "60%",
    margin: "auto",
    textAlign: "center",
    color: "white",
  },
  footerIcons: {
    padding: "2rem 0",
  },
  typography: {
    paddingBottom: "1rem",
  },
}));

export default useStyles;
