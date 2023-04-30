import { FieldArray, FieldArrayRenderProps, ErrorMessage } from "formik";
import SelectInput from "../detail_form_page/SelectInput";

const AddMoreTravelPlace = (props: any) => {
  return (
    <>
      <FieldArray name="travels">
        {(arrayHelper: FieldArrayRenderProps) => (
          <div className="form-group ">
            <div className={` ${props.isDisplay ? "d-none" : "d-block"}`}>
              <p>Do you travel in the last 14 days ?</p>
              <button
                className="btn btn-warning"
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  e.preventDefault();
                  arrayHelper.push("");
                  props.setIsDisplay(true);
                }}
              >
                Add more
              </button>
            </div>
            {props.array.map((ar: string, index: number) => (
              <div key={index} className="col-md-12 mb-4 p-0 ">
                <div>
                  <h6 className="text-primary font-weight-bold">
                    Travel {index + 1}{" "}
                  </h6>
                  <div className="row">
                    {/* DEPARTURE DATE */}

                    <div className="my-3 col-lg-6">
                      <label htmlFor="departureDate">Departure Date</label>
                      <input
                        type="date"
                        name="departureDate"
                        id="departureDate"
                        className="form-control"
                        value={props.formikProps.values.departureDate}
                        // cập nhật giá trị của trường dateOfBirth />
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          props.formikProps.setFieldValue(
                            "departureDate",
                            e.target.value
                          )
                        }
                      />
                    </div>

                    {/* IMMIGRATION DATE */}

                    <div className="my-3 col-lg-6">
                      <label htmlFor="immigrationDate">Immigration Date</label>
                      <input
                        type="date"
                        name="immigrationDate"
                        id="immigrationDate"
                        className="form-control"
                        value={props.formikProps.values.immigrationDate}
                        // cập nhật giá trị của trường dateOfBirth />
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          props.formikProps.setFieldValue(
                            "immigrationDate",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="row">
                    {/* DEPARTURE */}
                    <div className=" my-3 col-lg-6 ">
                      <label htmlFor="departure" className="te">
                        Departure<span className="text-danger">*</span>
                      </label>
                      <SelectInput
                        label="Departure"
                        className="form-control"
                        name="departure"
                        options={props.nationalities}
                        value={props.formikProps.values.departure}
                        onChange={(value: any) =>
                          props.formikProps.setFieldValue(
                            "departure",
                            value.value
                          )
                        }
                      />
                    </div>
                    {/* DESTINATION */}
                    <div className=" my-3 col-lg-6 ">
                      <label htmlFor="destination*" className="te">
                        Destination*<span className="text-danger">*</span>
                      </label>
                      <SelectInput
                        label="destination"
                        className="form-control"
                        name="destination"
                        options={props.nationalities}
                        value={props.formikProps.values.destination}
                        onChange={(value: any) =>
                          props.formikProps.setFieldValue(
                            "destination",
                            value.value
                          )
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      className="btn btn-warning"
                      onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                      ) => {
                        e.preventDefault();
                        arrayHelper.push("");
                      }}
                    >
                      Add more
                    </button>
                    <button
                      className="btn btn-danger ml-3"
                      onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                      ) => {
                        e.preventDefault();
                        arrayHelper.remove(index);
                        if (arrayHelper.form.values.travels.length === 0) {
                          // Nếu đã xóa hết, đặt giá trị của biến state về false
                          props.setIsDisplay(false);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <ErrorMessage
              name="addresses"
              component="div"
              className="text-danger"
            />
          </div>
        )}
      </FieldArray>
    </>
  );
};
export default AddMoreTravelPlace;
