const noteHelper = require("../helpers/helpers");
const axios = require("axios");
const getData = async () => {
  return (data = await axios.get(
    "https://app.redash.io/lion-parcel/api/queries/469740/results/732409810.json",
    {
      headers: {
        Accept: "application/json",
        Authorization: "Key ulowcl1b3247PvR2UaUFPDKFauldaCee9zt02mI5",
      },
    }
  ));
};
module.exports = {
  getNote: (req, res) => {
    getData()
      .then((result) => {
        console.log("res", res);
        noteHelper.response(res, result.data.query_result.data.rows, 200);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
