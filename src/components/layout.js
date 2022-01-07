import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import SideBar from "./SideBar";
import { Grid } from "@material-ui/core";
import Cookies from "universal-cookie";
import jwt from "jsonwebtoken";

export default function Layout({ children }) {
  const cookies = new Cookies();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(jwt.decode(cookies.get('user')));    
  }, []);

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
      <NavBar user={user?.user} setUser={setUser}/>
      <Grid container style={{marginTop:'50px'}}>
        <Grid item xs={2} style={{marginLeft:'25px',height:'100%'}}>
          <SideBar user={user?.user} setUser={setUser}/>
        </Grid>
        <Grid item xs={9} style={{height:'100%'}}>{children}</Grid>
      </Grid>      
    </div>
  );
}
