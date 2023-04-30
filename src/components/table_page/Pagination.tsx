const Pagination = (props: any) => {
  const pageNumbers = [];
  for (let i = 0; i < props.totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {
        <div className="row ">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center align-items-center gap">
              <nav aria-label="Page navigation">
                {props.totalPage > 0 ? (
                  <ul className="pagination justify-content m-0">
                    <li
                      className={`page-item  ${
                        props.currentUserIndex === 0
                          ? "disabled"
                          : "text-primary"
                      }`}
                      onClick={() => {
                        if (props.currentUserIndex > 0) {
                          props.onCurrentPageClick(props.currentUserIndex - 1);
                        }
                      }}
                    >
                      <div className="page-link" aria-disabled="true">
                        Previous
                      </div>
                    </li>

                    {pageNumbers.map((number: any) => (
                      <li
                        key={number}
                        className={`page-item ${
                          props.currentUserIndex === number ? "active" : ""
                        }`}
                        onClick={() => {
                          props.onCurrentPageClick(number);
                        }}
                      >
                        <div className="page-link"> {number + 1}</div>
                      </li>
                    ))}

                    <li
                      className={`page-item  ${
                        props.currentUserIndex === props.totalPage - 1
                          ? "disabled"
                          : "text-primary"
                      }`}
                      onClick={() => {
                        if (props.currentUserIndex < props.totalPage - 1) {
                          props.onCurrentPageClick(props.currentUserIndex + 1);
                        }
                      }}
                    >
                      <div className="page-link">Next</div>
                    </li>
                  </ul>
                ) : (
                  <ul className="pagination justify-content m-0">
                    <li className="page-item disabled ">
                      <div className="page-link">Previous</div>
                    </li>
                    <li className="page-item disabled">
                      <div className="page-link">Next</div>
                    </li>
                  </ul>
                )}
              </nav>
              <form className=" mx-2 d-flex align-items-center justify-content-end">
                <select
                  className="page-link form-select mr-2 rounded text-secondary"
                  onChange={(e) =>
                    props.onPageSizeSelect(parseInt(e.target.value))
                  }
                  // value={props.currentPage}
                >
                  <option value={2}>2</option>
                  <option value={4}>4</option>
                  <option value={6}>6</option>
                </select>
                <label className="m-0">Items/Page</label>
              </form>
            </div>
          </div>
        </div>
      }
    </>
  );
};
export default Pagination;
