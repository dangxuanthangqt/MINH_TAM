import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Button } from "@material-ui/core";
import ERROR404 from "../../assets/images/error/404vip.gif";
import history from "../../Helpers/history";
Error404.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "500px",
  },
}));

function Error404(props) {
  const classes = useStyle();

  const handleBack = () => {
    console.log("eeeeeeeeeeee")
    history.goBack();
  };
  return (
    <div className={classes.root}>
      <Button
        onClick={handleBack}
        size="large"
        color="secondary"
        variant="contained"
      >
        GO BACK
      </Button>

      <img className={classes.image} alt="404" src={ERROR404}></img>
    </div>
  );
}

export default Error404;
