import { appointmentsData } from "../data/mock_data.js";

// return all the appointments of doctorID starting from date today
export const getAppointments = async (doctorID) => {
  // Mock Data
  let data = [];
  const now = new Date();
  const timestamp = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0
  ).getTime();
  data = appointmentsData.filter((app) => app.doctorID == doctorID && app.startTime > timestamp);
  return data;
};
