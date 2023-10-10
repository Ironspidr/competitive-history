import "./App.css";

const SearchForm = () => {
  return (
    <div>
      <h1>Competitive History</h1>
      <form>
        <div>
          <label>Name</label>
          <br></br>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Event</label>
          <br></br>
          <input type="text" />
        </div>
        <div>
          <label>Year</label>
          <br></br>
          <select>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchForm;
