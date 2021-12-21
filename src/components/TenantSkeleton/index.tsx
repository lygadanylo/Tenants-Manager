import { Box, Grid, Skeleton } from "@mui/material";

interface Props {
  isDescription?: boolean;
}
export const TenantSkeleton = ({ isDescription = false }: Props) => {
  return (
    <Box
      sx={{
        background: "#E9ECED",
        maxWidth: "350px",
        padding: "20px",
        borderRadius: "20px",
        marginBottom: "20px",
      }}
    >
      <Grid container alignItems="center">
        <Grid md={6} alignItems="center">
          <Skeleton variant="circular" width={60} height={60} />
          <Skeleton variant="text" width={80} sx={{ marginLeft: "10px" }} />
        </Grid>
        <Grid container md={6}>
          <Grid item md={5} justifyContent="center" alignItems="center">
            <Skeleton variant="text" width={60} />
            <Skeleton variant="text" width={60} />
          </Grid>
          <Grid item md={7}>
            <Skeleton variant="text" width={80} />
            <Skeleton variant="text" width={80} />
          </Grid>
        </Grid>
        {isDescription && (
          <Grid item md={12}>
            <Skeleton variant="text" width="100%" height={180} />
          </Grid>
        )}
        <Grid container sx={{ marginTop: "10px" }}>
          <Grid item md={9}>
            <Skeleton variant="text" width={80} />
          </Grid>
          {!isDescription && (
            <Grid item md={2}>
              <Skeleton variant="text" width={70} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
