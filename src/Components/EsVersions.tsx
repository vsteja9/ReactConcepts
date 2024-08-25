import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { ExternalSite } from "./ExternalSite";

export default function EsVersion({
  dummymethod,
}: {
  dummymethod: (value: boolean) => void;
}) {
  return (
    <>
      <Card sx={{ maxWidth: 345, display: "flex", alignContent: "center" }}>
        <CardActionArea
          onClick={() => {
            dummymethod(true);
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image="../../jsversions.png"
            alt="ESversions"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ESversions with info
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
