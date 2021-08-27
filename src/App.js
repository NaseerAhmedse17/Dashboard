import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Dropdown from './Components/Dropdown';
import EmptyCard from './Components/EmptyCard';
import Paginations from './Components/Paginations';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import SchoolIcon from '@material-ui/icons/School';
import HomeIcon from '@material-ui/icons/Home';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Dropdown />
      <div style={{ backgroundColor: "#EEEEEE" }}>
        <div className="container">
          <h6 style={{ paddingTop: "8px" }}>We found 304 results </h6>
          <div className="row">
            <div className="col-10">
              <div className="row">
                <Cards
                  icon={
                    <HomeIcon />}
                  name={"Taylor's University World Class Scholarship"}
                />
              </div>
              <div className="pt-2 row">
                <Cards
                  icon=
                  {<CardTravelIcon />}
                  name={"Summer Research Scholarship"}
                />
              </div>
              <div className="pt-2 row">
                <Cards
                  icon={<BusinessCenterIcon />}
                  name={"Postgraduate Research Scholarship"}
                />
              </div>
              <div className="pt-2 row">
                <Cards
                  icon={<AccountBoxIcon />}
                  name={"Taylor's University Mechanical Engineering Scholarship"}
                />
              </div>
              <div className="pt-2 row">
                <Cards
                  icon={<SchoolIcon />}
                  name={"The Gates Schalarship"}
                />
              </div>
              <div className="pt-1 row">
                <Paginations />
              </div>

            </div>
            <div className="col-2">
              <EmptyCard />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
