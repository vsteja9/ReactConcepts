import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

type props = {
  object: any;
  setMethod: (val: any) => void;
};
export default function DialogTodo({ object, setMethod }: props) {
  // console.log("value", object);
  return (
    <>
      <Dialog open>
        <DialogContent>{object?.todo}</DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setMethod(null);
            }}
          >
            close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
