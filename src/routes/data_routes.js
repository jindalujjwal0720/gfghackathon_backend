import {
  getPatientsByDoctorID,
  getPatientsByIDs,
} from "../providers/patients_provider.js";
import { getAppointments } from "../providers/appointments_provider.js";
import { getReviewsByDoctorID } from "../providers/reviews_provider.js";
import { getTransactions } from "../providers/transactions_provider.js";
import { getDoctors } from "../providers/doctors_provider.js";

export const routes = (app) => {
  app.get("/api/patients", async (req, res, next) => {
    let data = {};
    try {
      data = await getPatientsByIDs(req.query.ids.split(","));
      res.send(data);
    } catch (e) {
      res.send("Something Went Wrong");
    }
  }),
    app.get("/api/doctors", async (req, res, next) => {
      let data = {};
      try {
        data = await getDoctors();
        res.send(data);
      } catch (e) {
        res.send("Something Went Wrong");
      }
    }),
    app.get("/api/patients/:doctorID", async (req, res, next) => {
      let data = {};
      try {
        data = await getPatientsByDoctorID(req.params.doctorID);
        res.send(data);
      } catch (e) {
        res.send("Something Went Wrong");
      }
    }),
    app.get("/api/doctors/:doctorID/reviews", async (req, res, next) => {
      let data = {};
      try {
        data = await getReviewsByDoctorID(req.params.doctorID);
        res.send(data);
      } catch (e) {
        res.send("Something Went Wrong");
      }
    }),
    app.get("/api/appointments/:doctorID", async (req, res, next) => {
      let data = {};
      try {
        data = await getAppointments(req.params.doctorID);
        res.send(data);
      } catch (e) {
        res.send("Something Went Wrong");
      }
    }),
    app.get("/api/doctors/transactions/:doctorID", async (req, res, next) => {
      let data = {};
      try {
        data = await getTransactions(req.params.doctorID);
        res.send(data);
      } catch (e) {
        res.send("Something Went Wrong");
      }
    });
};
