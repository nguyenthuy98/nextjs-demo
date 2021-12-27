import { CircularProgress, Grid } from "@material-ui/core";

export default function Loader(props: any) {
    return (
        <Grid container alignItems="center" justifyContent="center">
            <CircularProgress color={props.color} size={props.size} thickness={props.thickness} />
        </Grid>
    )
}