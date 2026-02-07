import { useState, SyntheticEvent } from "react";
import { TextField, InputLabel, MenuItem, Select, Grid, Button, SelectChangeEvent } from '@mui/material';

import { EntryFormValues, EntryType, Diagnosis, HealthCheckRating } from "../../types";
import data from "../../../../data/diagnoses";

interface Props {
  onCancel: () => void;
  onSubmit: (patientId: string, values: EntryFormValues) => void;
}

interface EntryTypeOption{
  value: EntryType;
  label: string;
}

const allowedHealthCheckValues = Object.values(HealthCheckRating).filter(
  value => typeof(value) === "number" ? value : null
);

const entryTypeOptions: EntryTypeOption[] = Object.values(EntryType).map(v => ({
  value: v, label: v.toString()
}));

const AddEntryForm = ({ onCancel, onSubmit }: Props) => {
  const patientId = window.location.href.split("/")[4];

  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [entryType, setEntryType] = useState<EntryType>(EntryType.HealthCheck);
  const [diagnosisCodes, setDiagnosisCodes] = useState<Array<Diagnosis["code"]>>([]);
  const [healthCheckRating, setHealthCheckRating] = useState<HealthCheckRating>(HealthCheckRating.Healthy);
  const [dischargeDate, setDischargeDate] = useState('');
  const [dischargeCriteria, setDischargeCriteria] = useState('');
  const [employerName, setEmployerName] = useState('');
  const [sickLeaveStartDate, setSickLeaveStartDate] = useState('');
  const [sickLeaveEndDate, setSickLeaveEndDate] = useState('');

  const onEntryTypeChange = (event: SelectChangeEvent) => {
    setEntryType(event.target.value as EntryType);
  };

  const onDiagnosisCodeChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setDiagnosisCodes(typeof value === "string" ? value.split(",") : value);
  };

  const addEntry = (event: SyntheticEvent) => {
    event.preventDefault();
    switch (entryType) {
      case EntryType.HealthCheck: {
        onSubmit(
          patientId,  
          {
            description,
            date,
            specialist,
            type: EntryType.HealthCheck,
            diagnosisCodes: diagnosisCodes,
            healthCheckRating
          });
        break;
      }
      case EntryType.Hospital: {
        onSubmit(
          patientId,
          {
            description,
            date,
            specialist,
            type: entryType,
            diagnosisCodes: diagnosisCodes,
            discharge: {
              date: dischargeDate,
              criteria: dischargeCriteria
            }
          });
        break;
      }
      case EntryType.OccupationalHealthcare: {
        onSubmit(
          patientId,
          {
            description,
            date,
            specialist,
            type: entryType,
            diagnosisCodes: diagnosisCodes,
            employerName,
            sickLeave: {
              startDate: sickLeaveStartDate,
              endDate: sickLeaveEndDate
            }
          });
        break;
      }
    }
  };

  return (
    <div>
      <form onSubmit={addEntry}>
        <TextField
          label="Description"
          fullWidth 
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <TextField
          label="Date"
          placeholder="YYYY-MM-DD"
          fullWidth
          value={date}
          onChange={({ target }) => setDate(target.value)}
        />
        <TextField
          label="Specialist"
          fullWidth
          value={specialist}
          onChange={({ target }) => setSpecialist(target.value)}
        />

        <InputLabel style={{ marginTop: 20 }}>Entry Type</InputLabel>
        <Select
          label="Entry Type"
          fullWidth
          value={entryType}
          onChange={onEntryTypeChange}
        >
        {entryTypeOptions.map(option =>
          <MenuItem
            key={option.label}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        )}
        </Select>

        <InputLabel style={{ marginTop: 20 }}>Diagnosis Code</InputLabel>
        <Select
          label="Diagnosis Code"
          fullWidth
          multiple
          value={diagnosisCodes}
          onChange={onDiagnosisCodeChange}
        >
        {data.map(option =>
          <MenuItem
            key={option.name}
            value={option.code}
          >
            {option.code} {option.name}
          </MenuItem>
        )}
        </Select>

        {entryType === EntryType.HealthCheck && (
          <TextField
            label="Health Check Rating"
            type="number"
            fullWidth
            value={healthCheckRating}
            onChange={({ target }) => setHealthCheckRating(Number(target.value))}
            inputProps={
              {
                min: allowedHealthCheckValues[0],
                max: allowedHealthCheckValues.length,
                step: 1
              }
            }
          />
        )}

        {entryType === EntryType.Hospital && (
          <>
            <TextField
              label="Discharge Date"
              fullWidth
              value={dischargeDate}
              onChange={({ target }) => setDischargeDate(target.value)}
            />
            <TextField
              label="Discharge Criteria"
              fullWidth
              value={dischargeCriteria}
              onChange={({ target }) => setDischargeCriteria(target.value)}
            />
          </>
        )}

        {entryType === EntryType.OccupationalHealthcare && (
          <>
            <TextField
              label="Employer Name"
              fullWidth
              value={employerName}
              onChange={({ target }) => setEmployerName(target.value)}
            />
            <TextField
              label="Sick Leave Start Date"
              fullWidth
              value={sickLeaveStartDate}
              onChange={({ target }) => setSickLeaveStartDate(target.value)}
            />
            <TextField
              label="Sick Leave End Date"
              fullWidth
              value={sickLeaveEndDate}
              onChange={({ target }) => setSickLeaveEndDate(target.value)}
            />
          </>
        )}

        <Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              style={{ float: "left" }}
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                float: "right",
              }}
              type="submit"
              variant="contained"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddEntryForm;
