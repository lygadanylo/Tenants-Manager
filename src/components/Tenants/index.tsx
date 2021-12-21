import { useEffect, useState, useCallback } from "react";
import { Grid, Typography, Box } from "@mui/material";
import useStyles from "./tenantsContainerStyles";
import { TenantListItem } from "../TenantListItem";
import { getTenantsList, Tenant, ListView } from "../../utils";
import { ChangeViewButton } from "../ChangeViewButton";

const columnTitles = [
  { columnName: "name", md: 2 },
  { columnName: "status", md: 1 },
  { columnName: "type", md: 1 },
  { columnName: "code", md: 1 },
  { columnName: "description", md: 10 },
  { columnName: "action", md: 1 },
];

export const Tenants = () => {
  const classes = useStyles();
  const [tenantsList, setTenantsList] = useState<Tenant[] | null>(null);
  const [listView, setListView] = useState<string>("list");

  useEffect(() => {
    getTenantsList()
      .then((response) => setTenantsList(response))
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  const onChangeListView = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => setListView(nextView);

  const renderTenants = useCallback(() => {
    return tenantsList?.map((value) => (
      <TenantListItem key={value.id} tenant={value} />
    ));
  }, [tenantsList]);

  return (
    <Box>
      <Grid container className={classes.title}>
        <Grid item md={10}>
          <Typography variant="h3">Tenants List</Typography>
        </Grid>
        <Grid item md={2}>
          <ChangeViewButton onChange={onChangeListView} view={listView} />
        </Grid>
      </Grid>
      {listView === ListView.LIST && (
        <Grid container className={classes.container} spacing={2} columns={16}>
          {columnTitles.map((item) => (
            <Grid item md={item.md} textAlign="center">
              {item.columnName}
            </Grid>
          ))}
          {renderTenants()}
        </Grid>
      )}
      {listView === ListView.CARD && <p>caerd</p>}
    </Box>
  );
};
