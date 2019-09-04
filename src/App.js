import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAnimals } from "./animalaction";
import { Container, Input } from "reactstrap";
import "./App.css";

const App = ({ animals, getAnimals }) => {
  const [filterdata, setFilterdata] = useState([]);
  useEffect(() => {
    getAnimals();
  }, []);

  const filterData = e => {
    var newdata = animals.filter(el => {
      const lc = el.toLowerCase();
      const filter = e.target.value.toLowerCase();
      return lc.includes(filter);
    });
    if (newdata.length <= 0) newdata = "Sorry! not available";
    setFilterdata(newdata);
  };

  const renderlist = d => {
    if (typeof d === "string") {
      return <div>{d}</div>;
    }
    return d.map(el => {
      return <div>{el}</div>;
    });
  };
  return (
    <Container>
      {" "}
      <Input
        type="text"
        onChange={e => filterData(e)}
        className="input"
        placeholder="Search..."
      />{" "}
      {filterdata.length > 0
        ? renderlist(filterdata)
        : animals
        ? renderlist(animals)
        : ""}
    </Container>
  );
};
const mapStateToProps = state => {
  return {
    animals: state.animals
  };
};

export default connect(
  mapStateToProps,
  { getAnimals }
)(App);
