import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ExternalSite } from "./ExternalSite";

export default function Reactfund({
  dummy,
}: {
  dummy: (value: boolean) => void;
}) {
  return (
    <>
      <Card sx={{ maxWidth: 345, display: "flex", alignContent: "center" }}>
        <CardActionArea
          onClick={(e) => {
            dummy(true);
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image="../../OIP.jpeg"
            alt="react fundamentals"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React Fundamentals
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* {flag ? <ExternalSite /> : <></>} */}
    </>
  );
}
