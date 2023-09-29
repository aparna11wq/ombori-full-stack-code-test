import "./styles/styles.css";
import { useEffect, useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserData, Users } from "./types";
import Loader from "./components/Loader/Loader";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import EmptyState from "./components/EmptyState/EmptyState";

const EndMessage = () => {
  return <div className="endMessage">No more users to show</div>;
};

export default function UserList() {
  const [users, setUsers] = useState<Users>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  // Setting this type as any because the probable structure of errors is unknown

  const getUsers = useCallback(async () => {
    try {
      setIsLoading(true);

      const reqURL = `https://reqres.in/api/users?page=${currentPage}`;
      const res = await fetch(reqURL);
      const json = await res.json();

      if (json.data.length) {
        setUsers([...users, ...json.data]);
        setHasMore(true);
        setCurrentPage(currentPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, users]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    /* We are not logging error message on the screen as it is 
    unclear what type of errors can be thrown by reqres.in */
    return <ErrorModal isOpen={true} />;
  }

  if (users.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="App">
      <div className="AddressBook">
        <div className="Heading">Users</div>
        <InfiniteScroll
          dataLength={users.length}
          next={getUsers}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<EndMessage />}
        >
          <div className="UsersList">
            {users.map((user: UserData) => {
              return (
                <div className="UserDetails" key={user.id}>
                  <img
                    src={user.avatar}
                    alt="User's Avatar"
                    className="UserPicture"
                  />
                  <div className="UserName">
                    {user.first_name + ` ` + user.last_name}
                  </div>
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
