import React, { ReactElement } from "react";
import Image from "next/image";
import profilePic from "../../public/cat.jpg";
import styles from "./hello.module.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

export default function Hello(): ReactElement {
  return (
    <>
      <Typography gutterBottom variant="subtitle1" component="div" className={styles.title}>
        Welcome to my homepage!
      </Typography>
      <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Image
                src={profilePic}
                alt="Picture of the author"
                className={styles.picture}
                width={100}
                height={100}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
