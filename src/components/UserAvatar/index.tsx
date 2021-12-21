import Avatar from "@mui/material/Avatar";

interface Props {
  name: string;
  size?: number;
}

function stringAvatar(name: string) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export const UserAvatar = ({ name, size = 38 }: Props) => {
  return (
    <Avatar
      {...stringAvatar(name)}
      sx={{ marginRight: "10px", width: size, height: size }}
    />
  );
};
