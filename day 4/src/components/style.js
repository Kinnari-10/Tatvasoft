import {makeStyles} from "@material-ui/core/styles";
 
export const styles = makeStyles((theme)=> ({
    wrapper:{
        "& .click-btn":{
            backgroundColor:"black",
            "& .button":{
                padding: theme.spacing(7),
                boxShadow: theme.shadows[4]
            },
        },
    },
}));
