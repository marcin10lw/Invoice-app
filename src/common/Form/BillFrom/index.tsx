const BillFrom = () => {
  return (
    <div>
      <fieldset>
        <legend>Bill From</legend>

        <div>
          <div>
            <label htmlFor="street">Street Address</label>
            <input id="street" name="street" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input id="city" name="city" />
          </div>
          <div>
            <label htmlFor="postCode">Post Code</label>
            <input id="postCode" name="postCode" />
          </div>
          <div>
            <label htmlFor="coutry">Country</label>
            <input id="country" name="country" />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default BillFrom;
