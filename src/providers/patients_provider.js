import { medicationData, patientsData } from "../data/mock_data.js";

export const getPatientsByDoctorID = async (doctorID) => {
  // Mock Data
  let data = [];
  let doctorMeds = medicationData.filter((med) => med.doctorID == doctorID);
  let patientIDs = doctorMeds.map((med) => med.patientID);
  data = patientsData.filter((pat) => patientIDs.includes(pat.id));
  return data;
};

export const getPatientsByIDs = async (patientIDs) => {
  // Mock Data
  let data = [];
  data = patientsData.filter((pat) => patientIDs.includes(`${pat.id}`));
  return data;
};
