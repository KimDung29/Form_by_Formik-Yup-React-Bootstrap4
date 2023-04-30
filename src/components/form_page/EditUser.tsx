import { FormikProps, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import PersonalInformation from "../detail_form_page/PersonalInformation";
import Contact from "../detail_form_page/Contact";
import Symptoms from "../detail_form_page/Symptoms";
import Vaccines from "../detail_form_page/Vaccine";
import UserType from "./Interface";
import React, { useState } from "react";
import countries from "../../data/countries.json";
import vietnam_provinces from "../../data/vietnam-province-district.json";
import { useNavigate, useParams } from "react-router-dom";
import AddMoreTravelPlace from "../table_page/AddMoreTravelPlace";

const gendersArray = ["Male", "Female", "Other"];
const objectsArray = ["Expert", "Vietnamese", "International Student", "Other"];

const SubmitSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Your full name more than 3 length")
    .required("Name is required!"),
  object: Yup.string().required("Object is required"),
  dateOfBirth: Yup.string().required("Date of birth is required"),
  genders: Yup.string().required("Gender is required"),
  nationalities: Yup.string().required("Nationality  is required"),
  nationIDorPassportID: Yup.string()
    .min(3, "Nation ID is required")
    .required("Nation ID is required!"),
  provinces: Yup.string().required("Contact province is required"),
  district: Yup.string().required("Contact province is required"),
  address: Yup.string().required("Contact address is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.number().required("Mobile is required"),
  departureDate: Yup.date()
    // allow null value
    .nullable()
    // send message of error
    .typeError("Departure Date is required"),
  immigrationDate: Yup.date()
    .nullable()
    .typeError("Immigration Date is required"),
  destination: Yup.string()
    .nullable()
    .typeError("Immigration Date is required"),
  departure: Yup.string().nullable().typeError("Immigration Date is required"),
});

const EditUser = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [isDisplay, setIsDisplay] = useState(false);

  const localDatas = localStorage.getItem("users");
  const users = localDatas !== null ? JSON.parse(localDatas) : [];

  const currentUser = users.find((item: UserType) => item.id === param.id);

  const indexCurrentUser = users.findIndex(
    (item: UserType) => item.id === currentUser.id
  );

  const onSubmit = (
    updatedUser: UserType,
    formikHelpers: FormikHelpers<UserType>
  ) => {
    // Remove one element at indexCurrentUser and add currentUser into
    users.splice(indexCurrentUser, 1, updatedUser);
    // save data to localStorage
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/");
  };

  //// handle Reset button
  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const confirm = window.confirm(`Do you want to reset?`);
    if (confirm) {
      window.location.reload();
    }
  };

  //// handle Cancel button => go to home page or still stay at 'add form' page
  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const confirm = window.confirm("Do you want to cancel?");
    if (confirm) {
      //// if Confirm === true => return home page
      window.location.href = "/";
    }
  };

  return (
    <>
      <h2 className="my-4 p-0 text-upperCase text-success text-center">
        MEDICAL DECLARATION FORM FOR FOREIGN ENTRY
      </h2>
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-12 p-0">
            <h5 className="font-weight-bold ">Personal information:</h5>
          </div>
          <Formik
            initialValues={{
              id: currentUser.id,
              fullName: currentUser.fullName,
              object: currentUser.object,
              dateOfBirth: currentUser.dateOfBirth,
              genders: currentUser.genders,
              nationalities: currentUser.nationalities,
              nationIDorPassportID: currentUser.nationIDorPassportID,
              provinces: currentUser.provinces,
              district: currentUser.district,
              address: currentUser.address,
              email: currentUser.email,
              mobile: currentUser.mobile,
              fiber: currentUser.fiber,
              fever: currentUser.fever,
              soreThroat: currentUser.soreThroat,
              difficultyOfBreathing: currentUser.difficultyOfBreathing,
              picked: currentUser.picked,
              travels: currentUser.travels,
              departure: currentUser.departure,
              departureDate: currentUser.departureDate,
              immigrationDate: currentUser.immigrationDate,
              destination: currentUser.destination,
            }}
            onSubmit={onSubmit}
            validationSchema={SubmitSchema}
          >
            {(formikProps: FormikProps<UserType>) => (
              <Form className="form-group col mx-0 p-0">
                {/* PERSONAL INFORMATION */}
                <div className="my-4 mx-0 p-0">
                  <PersonalInformation
                    formikProps={formikProps}
                    objects={objectsArray.map((g: any) => ({
                      label: g,
                      value: g,
                    }))}
                    genders={gendersArray.map((g: any) => ({
                      label: g,
                      value: g,
                    }))}
                    nationalities={countries.map((c: any) => ({
                      label: c.name,
                      value: c.name,
                    }))}
                    provinces={Object.entries(vietnam_provinces).map(
                      (p: any) => ({
                        label: p[1].name,
                        value: p[1].name,
                      })
                    )}
                    vietnam_provinces={vietnam_provinces}
                  />
                </div>

                {/* TRAVEL  */}
                <div className="mb-4 col-md-12 p-0 ">
                  <div className="mr-5">
                    <h5 className="font-weight-bold">Travel:</h5>
                  </div>

                  <AddMoreTravelPlace
                    name="travels"
                    array={formikProps.values.travels}
                    isDisplay={isDisplay}
                    setIsDisplay={setIsDisplay}
                    formikProps={formikProps}
                    nationalities={countries.map((c: any) => ({
                      label: c.name,
                      value: c.name,
                    }))}
                  />
                </div>

                {/* CONTACT */}
                <div className="my-4">
                  <Contact
                    formikProps={formikProps}
                    provinces={Object.entries(vietnam_provinces).map(
                      (p: any) => ({
                        label: p[1].name,
                        value: p[1].name,
                      })
                    )}
                  />
                </div>

                {/* SYMPTOMS */}
                <div className="my-4">
                  <Symptoms formikProps={formikProps} />
                </div>

                {/* VACCINES */}
                <div className="my-4">
                  <Vaccines formikProps={formikProps} />
                </div>

                {/* === SUBMIT , CANCEL , RESET  === */}
                <div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button
                    type="submit"
                    className="mx-3 btn btn-danger"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className=" btn btn-secondary"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default EditUser;
