import { ErrorMessage } from "formik";
import SelectInput from "./SelectInput";

const PersonalInformation = (props: any) => {
  return (
    <>
      {/* === FULL NAME === */}
      <div className=" my-3 ">
        <label className="">
          Full name
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Enter your full name"
          onChange={(e: any) => {
            props.formikProps.setFieldValue("fullName", e.target.value);
          }}
          value={props.formikProps.values.fullName}
        />

        <ErrorMessage name="fullName" component="div" className="text-danger" />
      </div>
      {/* <div className="col-lg-12"> */}
      <div className="row ">
        {/* === OBJECT === */}
        <div className=" my-3 col-lg-6 ">
          <label htmlFor="genders">
            Object<span className="text-danger">*</span>
          </label>
          <SelectInput
            label="Object"
            className="form-control"
            name="object"
            options={props.objects}
            value={props.formikProps.values.object}
            onChange={(value: any) =>
              props.formikProps.setFieldValue("object", value.value)
            }
          />
        </div>
        <div className=" d-lg-flex col-lg-6 d-sm-block px-0">
          {/* === DATE OF BIRTH === */}
          <div className="my-3 col-lg-6 col-sm-12">
            <label htmlFor="dateOfBirth">Date of birth</label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              className="form-control"
              value={props.formikProps.values.dateOfBirth}
              // cập nhật giá trị của trường dateOfBirth />
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                props.formikProps.setFieldValue("dateOfBirth", e.target.value)
              }
            />
            <ErrorMessage
              name="dateOfBirth"
              component="div"
              className="text-danger"
            />
          </div>

          {/* === GENDER === */}
          <div className=" my-3 col-lg-6 col-sm-12">
            <label htmlFor="genders">
              Gender<span className="text-danger">*</span>
            </label>
            <SelectInput
              className="form-control"
              name="genders"
              options={props.genders}
              value={props.formikProps.values.genders}
              onChange={(value: any) =>
                props.formikProps.setFieldValue("genders", value.value)
              }
            />
          </div>
        </div>
      </div>
      <div className=" row ">
        {/* === NATIONALITY === */}
        <div className=" my-3 col-lg-6 col-sm-12">
          <label htmlFor="nationality">
            Nationality<span className="text-danger">*</span>
          </label>
          <SelectInput
            className="form-control"
            name="nationalities"
            options={props.nationalities}
            value={props.formikProps.values.nationalities}
            onChange={(value: any) =>
              props.formikProps.setFieldValue("nationalities", value.value)
            }
          />
        </div>
        {/* === Nation ID or Passport ID === */}
        <div className=" my-3 col-lg-6 col-sm-12 ">
          <label>
            Nation ID or Passport ID
            <span className="text-danger">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            name="nationIDorPassportID"
            id="nationIDorPassportID"
            placeholder="Nation ID or Passport ID..."
            onChange={(e: any) => {
              props.formikProps.setFieldValue(
                "nationIDorPassportID",
                e.target.value
              );
            }}
            value={props.formikProps.values.nationIDorPassportID}
          />
          <ErrorMessage
            name="nationIDorPassportID"
            component="div"
            className="text-danger"
          />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default PersonalInformation;
