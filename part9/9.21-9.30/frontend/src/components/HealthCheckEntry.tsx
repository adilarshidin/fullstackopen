import { styled } from "styled-components";
import { BaseEntry, Diagnosis } from "../types";
import { FaHeartPulse } from "react-icons/fa6";

interface EntryTypes {
  entry: BaseEntry,
  diagnoses: Diagnosis[]
}

const EntryStyled = styled.div`
  border: 1px solid black;
  padding: 1%;
`;

const HealthCheckEntry = (props: EntryTypes) => {
  return (
    <EntryStyled>
      <FaHeartPulse />
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

export default HealthCheckEntry;
