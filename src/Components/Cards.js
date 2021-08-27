import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import UpdateIcon from '@material-ui/icons/Update';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';


function Cards(props) {
    return (
        <React.Fragment>
            <Card style={{ width: '100%', borderRadius: '15px' }}>
                <Card.Body>
                    <div className="row">

                        <div className="col-1">
                            {props.icon}
                        </div>

                        <div className="col-10">

                            <div className="row">
                                <h6>
                                    <b>
                                        {props.name}
                                    </b>
                                </h6>
                                <p>Provided by Taylor's University <br />
                                    <i style={{ color: "#5F9EA0", paddingTop: "-10" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </i></p>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-2">
                                            <UpdateIcon />
                                        </div>
                                        <div className="col-10">
                                            <b>18 March 2020</b><br />deadline
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-2">
                                            <PublicOutlinedIcon />
                                        </div>
                                        <div className="col-10">
                                            <b>Domestic & International</b><br />Validity
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-2">
                                            <MonetizationOnIcon />
                                        </div>
                                        <div className="col-10">
                                            <b>USD 2915 per year</b><br />Amount
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-2">
                                            <LocalLibraryIcon />
                                        </div>
                                        <div className="col-10">
                                            <b>Degree | Postgraduate</b><br />Study Level
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-2">
                                            <CalendarTodayIcon />
                                        </div>
                                        <div className="col-10">
                                            <b>May 2020</b><br />Intake(s)
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-1">
                            <BookmarkBorderIcon />
                            <MoreVertIcon />
                        </div>
                    </div>
                </Card.Body>
            </Card>

        </React.Fragment>
    )
}

export default Cards;
