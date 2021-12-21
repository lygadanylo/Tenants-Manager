import { Box, Grid, Typography, Button } from "@mui/material";
import useStyles from "./tenatListItemStyles";
import { Tenant, UserStatus, UserType, TENANT_BASE_URL } from "../../utils";
import { UserAvatar } from "../UserAvatar";
import { useNavigate } from "react-router-dom";

interface Props {
  tenant: Tenant;
  isDescription?: boolean;
}

export const TenantListItem = ({ tenant, isDescription = false }: Props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const activeOrReal = "#01F4AB";
  const notActiveOrDemo = "#F35B04";

  const redirectToProfile = () => {
    navigate(TENANT_BASE_URL + "/" + tenant.id);
  };

  return (
    <Box className={classes.box}>
      <Grid container alignItems="center">
        <Grid container md={12} alignItems="center">
          <Grid md={5} sm={6} xs={6} className={classes.userInfo}>
            <UserAvatar name={tenant.name} />
            <Typography data-testid="user_name"> {tenant.name}</Typography>
          </Grid>
          <Grid
            item
            md={2}
            sm={3}
            xs={3}
            justifyContent="center"
            alignItems="center"
          >
            <Typography sx={{ marginBottom: "10px" }}>Status:</Typography>
            <Typography>Type:</Typography>
          </Grid>
          <Grid item md={5} sm={3} xs={3}>
            <Typography
              data-testid="user_status"
              className={classes.status}
              sx={{
                marginBottom: "10px",
                background:
                  UserStatus.ACTIVE === tenant.status
                    ? activeOrReal
                    : notActiveOrDemo,
              }}
            >
              {UserStatus.ACTIVE === tenant.status ? "Active" : "Not Active"}
            </Typography>
            <Typography
              data-testid="user_type"
              className={classes.status}
              sx={{
                background:
                  UserType.REAL === tenant.type
                    ? activeOrReal
                    : notActiveOrDemo,
              }}
            >
              {UserType.REAL === tenant.type ? "Real" : "Demo"}
            </Typography>
          </Grid>
        </Grid>
        {isDescription && (
          <Grid item md={12}>
            <Typography data-testid="user_description">
              {tenant.description}
            </Typography>
          </Grid>
        )}
        <Grid container md={12} sx={{ marginTop: "10px" }}>
          <Grid item md={10} sm={10} xs={10}>
            <Typography data-testid="user_code">Code: {tenant.code}</Typography>
          </Grid>
          {!isDescription && (
            <Grid item md={2} sm={2} xs={2}>
              <Button
                variant="text"
                onClick={redirectToProfile}
                data-testid="more_button"
              >
                More
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
