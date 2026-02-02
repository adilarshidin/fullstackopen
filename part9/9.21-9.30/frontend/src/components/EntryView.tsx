import { Entry, Diagnosis } from "../types";
import OccupationalHealthcareEntry from "./OccupationalHealthcareEntry";
import HealthCheckEntry from "./HealthCheckEntry";
import HospitalEntry from "./HospitalEntry";

interface EntryTypes {
  entry: Entry,
  diagnoses: Diagnosis[]
}

const EntryView = (props: EntryTypes) => {
  switch (props.entry.type) {
    case "OccupationalHealthcare":
      return <OccupationalHealthcareEntry entry={props.entry} diagnoses={props.diagnoses} />;
    case "HealthCheck":
      return <HealthCheckEntry entry={props.entry} diagnoses={props.diagnoses} />;
    case "Hospital":
      return <HospitalEntry entry={props.entry} diagnoses={props.diagnoses} />;
  }
};

export default EntryView;
