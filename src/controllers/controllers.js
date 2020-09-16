const noteHelper = require("../helpers/helpers");
const axios = require("axios");
const apiRedash = "https://app.redash.io/lion-parcel/api";

const postQueries = async (params) => {
  return (result = await axios.post(
    apiRedash +
      `/queries/469740/refresh?p_start_date=${params.startDate}&p_end_date=${params.endDate}&p_corporate_name=${params.corporateName}`,
    {},
    {
      headers: {
        Accept: "application/json",
        Authorization: "Key ulowcl1b3247PvR2UaUFPDKFauldaCee9zt02mI5",
      },
    }
  ));
};

const getResult = async (jobId) => {
  return (data = await axios.get(apiRedash + `/jobs/${jobId}`, {
    headers: {
      Accept: "application/json",
      Authorization: "Key ulowcl1b3247PvR2UaUFPDKFauldaCee9zt02mI5",
    },
  }));
};

const getData = async (resultId) => {
  return (data = await axios.get(
    apiRedash + `/queries/469740/results/${resultId}.json`,
    {
      headers: {
        Accept: "application/json",
        Authorization: "Key ulowcl1b3247PvR2UaUFPDKFauldaCee9zt02mI5",
      },
    }
  ));
};

const csvQueries = async (params) => {
  return (result = await axios.post(
    apiRedash +
      `/queries/470872/refresh?p_start_date=${params.startDate}&p_end_date=${params.endDate}&p_corporate_name=${params.corporateName}`,
    {},
    {
      headers: {
        Accept: "application/json",
        Authorization: "Key ulowcl1b3247PvR2UaUFPDKFauldaCee9zt02mI5",
      },
    }
  ));
};

module.exports = {
  getDashboard: (req, res) => {
    postQueries(req.query)
      .then((query) => {
        setTimeout(() => {
          getResult(query.data.job.id)
            .then((result) => {
              getData(result.data.job.result)
                .then((result) => {
                  noteHelper.response(
                    res,
                    result.data.query_result.data.rows,
                    200
                  );
                })
                .then((errs) => {
                  console.log(errs);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getCsv: (req, res) => {
    csvQueries(req.query)
      .then((result) => {
        setTimeout(() => {
          getResult(result.data.job.id)
            .then((data) => {
              noteHelper.response(
                res,
                apiRedash +
                  `/queries/470872/results/${data.data.job.result}.csv?api_key=ulowcl1b3247PvR2UaUFPDKFauldaCee9zt02mI5`,
                200
              );
            })
            .catch((errs) => {
              console.log(errs);
            });
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
