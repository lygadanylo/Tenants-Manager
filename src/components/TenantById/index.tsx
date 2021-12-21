import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { TenantListItem } from "../TenantListItem";
import { getTenantsList, Tenant, BASE_URL } from "../../utils";
import { useParams } from "react-router-dom";
import { TenantSkeleton } from "../TenantSkeleton";
import { useNavigate } from "react-router-dom";

interface Props {
  isDescription: boolean;
}

export const TenantProfile = ({ isDescription }: Props) => {
  const { id } = useParams<{ id: string }>();
  const [tenant, setTenant] = useState<Tenant | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    getTenantsList()
      .then((response) => setTenant(response.find((item) => item.id === id)))
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  const redirectToMain = () => navigate(BASE_URL);

  return (
    <>
      <Button onClick={redirectToMain}> Go Back</Button>
      <Box
        sx={{ width: "100%", height: "100vh", display: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        {tenant ? (
          <TenantListItem
            tenant={tenant}
            isDescription={isDescription}
          ></TenantListItem>
        ) : (
          <TenantSkeleton isDescription={isDescription} />
        )}
      </Box>
    </>
  );
};
