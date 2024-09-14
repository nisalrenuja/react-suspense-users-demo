import axios from "axios";

// Function to fetch users from API
const fetchUsers = () => {
  let usersPromise = axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);

  return wrapPromise(usersPromise);
};

// Helper function to wrap a promise
const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

// Create a resource for Suspense
const resource = fetchUsers();

export default resource;
