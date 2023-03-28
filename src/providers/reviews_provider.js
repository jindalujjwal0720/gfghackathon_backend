import { reviewsData } from "../data/mock_data.js";

export const getReviewsByDoctorID = async (doctorID) => {
  return reviewsData
    .filter((rev) => rev.doctorID == doctorID)
    .sort((a, b) => b.timestamp - a.timestamp);
};
