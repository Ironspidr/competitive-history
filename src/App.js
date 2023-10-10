import "./App.css";
import { useState } from "react";

const SearchForm = () => {
  const [state, setState] = useState({
    name: "",
    event: "",
    year: "",
    conference: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const yearsList = ["2023", "2022", "2021", "2020", "2019", "2018", "2017"];
  const conferences = ["ISLC", "SLC", "NLC"];
  const yearsOptions = yearsList.map((year, key) => (
    <option value={year} key={key} id="year" onchange>
      {year}
    </option>
  ));
  const conferenceOptions = conferences.map((conference, key) => (
    <option
      value={conference}
      id="conference"
      key={key}
      onChange={handleChange}
    >
      {conference}
    </option>
  ));
  return (
    <div>
      <h1>Competitive History</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            id="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Event:
          <input
            type="text"
            id="event"
            value={state.event}
            onChange={handleChange}
          />
        </label>
        <label>
          Year:
          <select name="year" value={state.year} onChange={handleChange}>
            <option value="" disabled>
              -- Select a Year --
            </option>
            {yearsOptions}
          </select>
        </label>
        <label>
          Conference:
          <select
            name="conference"
            value={state.conference}
            onchange={handleChange}
          >
            <option value="" disabled>
              -- Select a Conference --
            </option>
            {conferenceOptions}
          </select>
        </label>
      </form>
      <h1>
        {state.name} {state.event} {state.year} {state.conference}
      </h1>
    </div>
  );
};

export default SearchForm;
