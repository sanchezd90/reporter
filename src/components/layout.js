import React, { useState } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Sidebar from "./sidebar";
import { Grid } from "@material-ui/core";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Reporter</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          charSet="UTF-8"
        />
      </Head>
      <NavBar />
      <Grid container style={{marginTop:'50px'}}>
        <Grid item xs={2} style={{marginLeft:'25px',height:'100%'}}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} style={{height:'100%'}}>{children}</Grid>
      </Grid>
    </div>
  );
}
