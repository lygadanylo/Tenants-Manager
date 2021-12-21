import { useEffect, useState, useCallback } from "react";
import { Grid, Typography, Box, Pagination } from "@mui/material";
import useStyles from "./tenantsContainerStyles";
import { TenantListItem } from "../TenantListItem";
import { getTenantsList, Tenant } from "../../utils";
import { TenantSkeleton } from "../TenantSkeleton";

const defaultPagination = {
  perPage: 20,
  carrrentPage: 1,
};

export const Tenants = () => {
  const classes = useStyles();
  const [tenantsList, setTenantsList] = useState<Tenant[] | undefined>();
  const [pagination, setPagination] = useState<any>(defaultPagination);

  const [currentTenantsList, setCurrentTenantsList] = useState<
    Tenant[] | undefined
  >();

  const currentTenants = (array: Tenant[] | undefined) => {
    const indexOfLastTenant =
      pagination.carrrentPage * defaultPagination.perPage;
    const indexOfFirstTenant = indexOfLastTenant - defaultPagination.perPage;
    const currentArray = array?.slice(indexOfFirstTenant, indexOfLastTenant);
    setCurrentTenantsList(currentArray);
  };

  const getPageNumbers = useCallback(
    (response) => {
      const pageNumbers = [];
      for (
        let i = 1;
        i <= Math.ceil(response.length / defaultPagination.perPage);
        i++
      ) {
        pageNumbers.push(i);
      }
      setPagination({ ...pagination, pageNumbers: pageNumbers.length });
    },
    [tenantsList]
  );

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setPagination({ ...pagination, carrrentPage: page });
  };

  useEffect(() => {
    getTenantsList()
      .then((response) => {
        setTenantsList(response);
        getPageNumbers(response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  useEffect(() => {
    currentTenants(tenantsList);
  }, [pagination]);

  const renderTenants = () => {
    if (currentTenantsList) {
      return currentTenantsList?.map((value) => (
        <TenantListItem key={value.id} tenant={value} />
      ));
    }
    return new Array(10)
      .fill("")
      .map((item, index) => <TenantSkeleton key={`${index}-skeleton`} />);
  };

  return (
    <Box>
      <Grid container className={classes.title}>
        <Grid item md={12}>
          <Typography variant="h3">Tenants List</Typography>
        </Grid>
        <Grid item md={12} className={classes.tenantsWrapper}>
          {renderTenants()}
        </Grid>
      </Grid>

      {currentTenantsList && (
        <Pagination
          sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
          count={pagination.pageNumbers}
          onChange={onChangePage}
        />
      )}
    </Box>
  );
};
