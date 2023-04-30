const Vaccines = (props: any) => {
  return (
    <>
      <div className="d-lg-flex align-items-lg-end ">
        <div className="col-lg-4 px-0">
          <h5 className="font-weight-bold">Vaccines:</h5>
          <p>Which one would you like to vaccinate ?:</p>
        </div>

        <div className=" px-0  col-lg-6">
          <div className="d-flex justify-content-between align-items-center">
            <label>
              <input
                className="mr-2 "
                type="radio"
                name="picked"
                defaultChecked
                value="None"
                onChange={(value: any) => {
                  props.formikProps.setFieldValue("picked", value.value);
                }}
              />
              None
            </label>
            <label className="">
              <input
                className="mr-2 me-1"
                type="radio"
                name="picked"
                value="Astra Zenecca"
                onChange={(value: any) => {
                  props.formikProps.setFieldValue("picked", value.value);
                }}
              />
              Astra Zenecca
            </label>
            <label className="">
              <input
                className="mr-2"
                type="radio"
                name="picked"
                value="Pfizer"
                onChange={(value: any) => {
                  props.formikProps.setFieldValue("picked", value.value);
                }}
              />
              Pfizer
            </label>
            <label className="">
              <input
                className="mr-2"
                type="radio"
                name="picked"
                value="Moderna"
                onChange={(value: any) => {
                  props.formikProps.setFieldValue("picked", value.value);
                }}
              />
              Moderna
            </label>
            <label className="">
              <input
                className="mr-2"
                name="picked"
                type="radio"
                value="Sinopharm"
                onChange={(value: any) => {
                  props.formikProps.setFieldValue("picked", value.value);
                }}
              />
              Sinopharm
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Vaccines;
