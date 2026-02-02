import { styled } from "styled-components";
import { BaseEntry, Diagnosis } from "../types";
import { FaSuitcase } from "react-icons/fa";

interface EntryTypes {
  entry: BaseEntry,
  diagnoses: Diagnosis[]
}

const EntryStyled = styled.div`
  border: 1px solid black;
  padding: 1%;
`;

const OccupationalHealthcareEntry = (props: EntryTypes) => {
  return (
    <EntryStyled>
      <FaSuitcase />
      <p>{props.entry.date} {props.entry.description} {props.entry.employerName}</p>
      <ul>
        {props.entry.diagnosisCodes?.map(code => (
            <li key={code}>
              {code} {props.diagnoses.find(diagnoses => diagnoses.code === code)?.name}
            </li>
          )
        )}
      </ul>
      <p>Diagnosed by: {props.entry.specialist}</p>
    </EntryStyled>
  );
};

export default OccupationalHealthcareEntry;
