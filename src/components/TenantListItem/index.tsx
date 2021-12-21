import { Box, Grid, Typography } from "@mui/material";
import useStyles from "./tenatListItemStyles";
import { Tenant, UserStatus, UserType } from "../../utils";
import { UserAvatar } from "../UserAvatar";

interface Props {
  tenant: Tenant;
}

export const TenantListItem = ({ tenant }: Props) => {
  const classes = useStyles();

  const statusStyles = {
    borderRadius: "5px",
    margin: "5px",
    padding: "5px",
  };

  const activeOrReal = "#01F4AB";
  const notActiveOrDemo = "#F35B04";

  return (
    <Box className={classes.box}>
      <Grid container alignItems="center" columns={16}>
        <Grid container md={2} alignItems="center">
          <UserAvatar name={tenant.name} />
          <Typography> {tenant.name}</Typography>
        </Grid>
        <Grid
          item
          textAlign="center"
          md={1}
          sx={{
            ...statusStyles,
            background:
              UserStatus.ACTIVE === tenant.status
                ? activeOrReal
                : notActiveOrDemo,
          }}
        >
          {UserStatus.ACTIVE === tenant.status ? "Active" : "Not Active"}
        </Grid>
        <Grid
          item
          md={1}
          textAlign="center"
          sx={{
            ...statusStyles,
            background:
              UserType.REAL === tenant.type ? activeOrReal : notActiveOrDemo,
          }}
        >
          {UserType.REAL === tenant.type ? "Real" : "Demo"}
        </Grid>
        <Grid item md={1}>
          {tenant.code}
        </Grid>
        <Grid item md={9}>
          {tenant.description}
        </Grid>
        <Grid item md={1}>
          more
        </Grid>
      </Grid>
    </Box>
  );
};
