import { transactionsData } from "../data/mock_data.js";

export const getTransactions = async (doctorID) => {
  return transactionsData
    .filter((trans) => trans.doctorID == doctorID)
    .sort((a, b) => a.timestamp > b.timestamp);
};
