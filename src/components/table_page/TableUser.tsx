import { useNavigate } from "react-router-dom";
import UserType from "../form_page/Interface";

const TableUser = ({ data, handleDeleteUser }: any) => {
  const navigate = useNavigate();

  return (
    <>
      <table className="my-5 text-center  table table-hover table-bordered">
        <thead className="table-info ">
          <tr>
            <th scope="col"> #</th>
            <th scope="col">Form ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Object</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Gender</th>
            <th scope="col">Contact Province</th>
          </tr>
        </thead>
        <tbody className="align-middle text-middle">
          {data?.map((user: UserType, i: number) =>
            data && data.length > 0 ? (
              <tr key={user.id}>
                <td scope="row" className=" align-middle">
                  {i + 1}
                </td>
                <td className="d-flex justify-content-around align-items-center">
                  <button
                    className=" btn  text-primary"
                    onClick={() => {
                      navigate(`/edit/${user.id}`);
                    }}
                  >
                    <i className="fa fa-edit "></i>
                  </button>
                  <button
                    className="btn bg-white text-danger mx-2 p-0 align-middle"
                    onClick={() => {
                      handleDeleteUser(user.id);
                    }}
                  >
                    <i className="fa fa-trash-alt"></i>
                  </button>
                  {user.id}
                </td>

                <td className="align-middle">{user.fullName}</td>
                <td className="align-middle">{user.object}</td>
                <td className="align-middle">{user.dateOfBirth}</td>
                <td className="align-middle">{user.genders}</td>
                <td className="align-middle">{user.provinces}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan={7} className="font-weight-bold ">
                  No user{" "}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};
export default TableUser;
