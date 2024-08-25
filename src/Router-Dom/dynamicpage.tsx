import { useLocation, useParams } from "react-router-dom";

export default function DynamicPage() {
  // get the params from the route
  const param = useParams();
  // get the location which page is renders
  const location = useLocation();

  return <>dynamic page is renders with id{param.id}</>;
}
