import { useState } from "react";
import SelectInput from "./SelectInput";
import vietnam_provinces from "../../data/vietnam-province-district.json";
import { ErrorMessage } from "formik";

const Contact = (props: any) => {
  const [index, setIndex] = useState(0);
  const arrayOfProvince = Object.entries(vietnam_provinces)[index];
  const districtAll = Object.values(arrayOfProvince[1].cities).map(
    (d: any) => ({
      label: d,
      value: d,
    })
  );

  return (
    <>
      <h5 className="font-weight-bold">Contact:</h5>

      <div className=" row">
        {/* PROVINCE */}
        <div className=" my-3 col-lg-6 col-sm-12">
          <label htmlFor="provinces">
            Provinces<span className="text-danger">*</span>
          </label>
          <SelectInput
            className="form-control mr-2"
            name="provinces"
            options={props.provinces}
            value={props.formikProps.values.provinces}
            onChange={(value: any, e: any) => {
              props.formikProps.setFieldValue("provinces", value.value);

              // Tìm index của value trong mảng provinces
              let index = props.provinces.findIndex(
                (province: any) => province.value === value.value
              );
              setIndex(index);
            }}
          />
        </div>

        {/* DISTRICT */}
        <div className=" my-3 col-lg-6 col-sm-12">
          <label htmlFor="district">
            District<span className="text-danger">*</span>
          </label>
          <SelectInput
            className="form-control"
            name="district"
            options={districtAll}
            value={props.formikProps.values.district}
            onChange={(value: any) =>
              props.formikProps.setFieldValue("district", value.value)
            }
          />
        </div>
      </div>

      <div className="row">
        {/* ADDRESS */}
        <div className=" my-3 col-lg-6 col-sm-12">
          <label style={{ width: "100%" }}>
            Address
            <span className="text-danger">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            name="address"
            id="address"
            placeholder="Address..."
            onChange={(e: any) => {
              props.formikProps.setFieldValue("address", e.target.value);
            }}
            value={props.formikProps.values.address}
          />
          <ErrorMessage
            name="address"
            component="div"
            className="text-danger"
          />
        </div>

        <div className="d-flex col-lg-6  px-0">
          {/* EMAIL */}

          <div className=" my-3 col-lg-6 ">
            <label style={{ width: "100%" }}>
              Email
              <span className="text-danger">*</span>
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Email..."
              onChange={(e: any) => {
                props.formikProps.setFieldValue("email", e.target.value);
              }}
              value={props.formikProps.values.email}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>
          {/* MOBILE */}
          <div className=" my-3 col-lg-6 ">
            <label style={{ width: "100%" }}>
              Mobile
              <span className="text-danger">*</span>
            </label>
            <input
              className="form-control"
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Mobile..."
              onChange={(e: any) => {
                props.formikProps.setFieldValue("mobile", e.target.value);
              }}
              value={props.formikProps.values.mobile}
            />
            <ErrorMessage
              name="mobile"
              component="div"
              className="text-danger"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
