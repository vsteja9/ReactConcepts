import { Button } from "@mui/material";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function QueryExample() {
  const queryClient = useQueryClient();
  const { error, isLoading, data } = useQuery<any[]>({
    queryKey: ["tododata"],
    queryFn: FetchData,
    // staleTime:4000  4msec for every 4msec the data will load based on any event.
    // refetchInterval:4000 for every 4msec it will refetch the data
    retry:5 // it will going to hit for 5 times before it accepts failure..

  });
  function FetchData() {
    return fetch("https://dummyjson.com/todos")
      .then((response) => response.json())
      .then((data) => data.todos)
      .catch((err) => {
        console.log(err);
      });
  }
  console.log("data", data);
  const { mutate, isPending, isSuccess, isError, mutateAsync } = useMutation({
    mutationFn: (newtodo: any) =>
      fetch("https://dummyjson.com/todos/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newtodo),
      }).then((res) => res.json()),
    onSuccess: (newtodo) => {
        //here we are making the cache update when any data addings on specified keys
      queryClient.invalidateQueries({ queryKey: ["tododata"] });
        // here we are temporarily updating the cache, but when we reloads it will go...  above is the best method.
      queryClient.setQueryData(['tododata'],(oldtodos: any)=>[...oldtodos,newtodo])
    },
  });

  // FetchData();
  if (error || isError) return <>Occured error while fetching</>;
  if (isLoading || isPending) return <>Loading Data....</>;

  return (
    <>
      React query example 2024
      <Button
        onClick={() => {
          mutate({
            todo: "Use Dummy in the project by vst",
            completed: false,
            userId: 5,
          });
        }}
      >
        Mutate example
      </Button>
      {isSuccess && <h1>Successfully added</h1>}
      <h2>
        {data?.map((todo: any) => (
          <>
            <h2>{todo.todo}</h2>
          </>
        ))}
      </h2>
    </>
  );
}
