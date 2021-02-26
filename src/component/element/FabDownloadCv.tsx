import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Fab } from "@material-ui/core";

export const FabDownloadCv = () => {

  return (
    <Fab
      href={"https://app.box.com/s/cvk5qzp2oebqamkke3lb165s7cr6sn5t"}
      variant="extended"
      className={"fab-download-cv"}
      style={{
        position: "fixed",
        backgroundColor: "#00882d",
        color: "white"
      }}>
      <GetAppIcon /> CV
    </Fab>
  );
};
