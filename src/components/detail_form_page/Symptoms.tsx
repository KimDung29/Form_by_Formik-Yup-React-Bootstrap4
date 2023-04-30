const Symptoms = (props: any) => {
  return (
    <>
      <div className="d-lg-flex align-items-end">
        <div className="col-lg-4 px-0">
          <h5 className="text-weight-bold">Symptoms:</h5>
          <p>Do you have any following symptoms?:</p>
        </div>
        <div className=" px-0  col-lg-6">
          <div className=" d-flex justify-content-between align-items-center">
            <label>
              <input
                className="  mr-2"
                name="fiber"
                type="checkbox"
                checked={props.formikProps.values.fiber}
                onChange={(value: any) =>
                  props.formikProps.setFieldValue("fiber", value.value)
                }
              />
              Fiber
            </label>

            <label>
              <input
                className=" mr-2"
                name="fever"
                type="checkbox"
                checked={props.formikProps.values.fever}
                onChange={(value: any) =>
                  props.formikProps.setFieldValue("fever", value.value)
                }
              />
              Fever
            </label>

            <label>
              <input
                className="mr-2"
                name="soreThroat"
                type="checkbox"
                checked={props.formikProps.values.soreThroat}
                onChange={(value: any) =>
                  props.formikProps.setFieldValue("soreThroat", value.value)
                }
              />
              Sore throat
            </label>

            <label>
              <input
                className=" mr-2"
                name="difficultyOfBreathing"
                type="checkbox"
                checked={props.formikProps.values.difficultyOfBreathing}
                onChange={(value: any) =>
                  props.formikProps.setFieldValue(
                    "difficultyOfBreathing",
                    value.value
                  )
                }
              />
              Difficulty of breathing
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Symptoms;
