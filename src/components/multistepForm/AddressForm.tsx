import FormWrapper from "./FormWrapper";

const AddressForm = () => {
  return (
    <>
      <FormWrapper title="Address Form">
        <label>Street</label>
        <input autoFocus required type="text" />
        <label>City</label>
        <input required type="text" />
        <label>State</label>
        <input required type="text" />
        <label>Zip</label>
        <input required type="text" />
      </FormWrapper>
    </>
  );
};

export default AddressForm;
