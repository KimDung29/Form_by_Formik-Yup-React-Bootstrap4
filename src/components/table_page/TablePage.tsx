import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserType from "../form_page/Interface";
import Pagination from "./Pagination";
import TableUser from "./TableUser";

const TablePage = () => {
  const navigate = useNavigate();
  // GET USERS FROM localStorage
  const localDatas = localStorage.getItem("users");
  const arrayUsers = localDatas !== null ? JSON.parse(localDatas) : [];

  // USER
  const [users, setUsers] = useState(arrayUsers as UserType[]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  localStorage.setItem("users", JSON.stringify(users));

  // PAGE
  const [pageSize, setPageSize] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPage =
    Math.floor(users.length / pageSize) +
    (users.length % pageSize === 0 ? 0 : 1);

  //DELETE USER
  const handleDeleteUser = (userId: any) => {
    // The index of the user needs to remove
    const index = users.findIndex((user: UserType) => user.id === userId);
    // If found it
    if (index !== -1) {
      // Move out of array users
      users.splice(index, 1);
      setUsers(users);
      // If the user is removed be in the end of the page and no more items on this page
      if (currentPage === totalPage - 1 && users.length === 0) {
        // Go back to previous page
        setCurrentPage(currentPage - 1);
      }
    }
  };

  // SEARCH ...
  const [query, setQuery] = useState("");

  const keys = [
    "id",
    "fullName",
    "object",
    "dateOfBirth",
    "genders",
    "nationalities",
    "nationIDorPassportID",
    "provinces",
    "district",
    "address",
    "email",
    "mobile",
    "fiber",
    "fever",
    "soreThroat",
    "difficultyOfBreathing",
    "picked",
    "travels",
    "departure",
    "departureDate",
    "immigrationDate",
    "destination",
  ];

  const search = () => {
    const start = pageSize * currentUserIndex;
    const end = pageSize + start;

    const newArray = !users.length
      ? []
      : arrayUsers
          .filter((item: any) =>
            keys.some(
              (key: any) =>
                typeof item[key] === "string" &&
                item[key].toLowerCase().includes(query.toLowerCase())
            )
          )
          .slice(start, end);
    setUsers(newArray);
  };

  useEffect(() => {
    search();
  }, [pageSize, currentPage, query, currentUserIndex, query]);

  return (
    <>
      <h2 className="my-5 text-center">
        Vietnam Health Declaration for foreign entry
      </h2>
      <div className="my-3   ">
        <div className="row  px-3 justify-content-between align-items-center ">
          <form className="form-group col-5 pl-0">
            <input
              className="form-control"
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>

          <button
            className="btn btn-success "
            onClick={(e) => {
              e.preventDefault();
              navigate("/declaration");
            }}
          >
            New form
          </button>
        </div>

        <TableUser
          data={users}
          handleDeleteUser={handleDeleteUser}
          currentUserIndex={currentUserIndex}
          currentPage={currentPage}
        />
      </div>

      <Pagination
        currentUserIndex={currentUserIndex}
        onCurrentPageClick={(i: any) => setCurrentUserIndex(i)}
        pageSize={pageSize}
        onPageSizeSelect={(newPageSize: any) => {
          setPageSize(newPageSize);
          setCurrentUserIndex(0);
        }}
        totalPage={totalPage}
      />
    </>
  );
};
export default TablePage;
