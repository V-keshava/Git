import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RiTruckLine } from "react-icons/ri"; // Truck icon from react-icons
import { AiOutlineUser } from "react-icons/ai"; // Person icon from react-icons
import { HiOutlineDocumentText } from "react-icons/hi"; // Get Quote icon from react-icons
import { FiLogOut, FiArrowRight } from "react-icons/fi"; // Logout and ArrowRight icons from react-icons
import { RiHomeLine } from "react-icons/ri";
import { FaBoxes } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import { BsCalendar, BsExclamationCircle } from "react-icons/bs";
// import "./MoveDetails.css"; // Import custom CSS file for styling
import { BiPencil } from "react-icons/bi"; // Import Pencil icon from react-icons
import './webpage.css'
export default function MoveDetails() {
  const [movingDetails, setMovingDetails] = useState([]);
  const [showItems, setShowItems] = useState();
  const [expandedItems, setExpandedItems] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  useEffect(() => {
    axios("http://test.api.boxigo.in/sample-data/").then((response) => {
      const data = response.data.Customer_Estimate_Flow;
      console.log(data);
      // console.log(data[0].items.inventory)

      setMovingDetails(data);
      console.log(movingDetails);
    });
  }, []);

  const toggleExpand1 = (index) => {
    if (showItems === index) {
      setShowItems(null);
    } else {
      setShowItems(index);
    }
  };

  const toggleExpand = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };
  return (
    <Container>
      <Row>
        <Column sm={2}>
          <Navbar expand="sm" className="custom-navbar">
            <Container>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className="flex-column">
                  <Nav.Link href="#home">
                    <RiTruckLine className="nav-icon" /> My Moves
                  </Nav.Link>
                  <Nav.Link href="#profile">
                    <AiOutlineUser className="nav-icon" /> My Profile
                  </Nav.Link>
                  <Nav.Link href="#quote">
                    <HiOutlineDocumentText className="nav-icon" /> Get Quote
                  </Nav.Link>
                  <Nav.Link href="#logout">
                    <FiLogOut className="nav-icon" /> Logout
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Column>
        <Column>
          {movingDetails.length > 0 ? (
            <div>
              {movingDetails.map((val, ind) => (
                <div>
                  <Row>
                    <Column>
                      <p>
                        <strong>From:</strong>
                      </p>
                      <p>{val.moving_from}</p>
                    </Column>
                    <Column className="arrow-col">
                      <div className="arrow-wrapper">
                        <FiArrowRight className="arrow-icon" />
                      </div>
                    </Column>
                    <Column>
                      <p>
                        <strong>To:</strong>
                      </p>
                      <p>{val.moving_to}</p>
                    </Column>
                    <Column>
                      <p>
                        <strong>Request#.</strong>
                      </p>
                      <p style={{ color: "red" }}>{val.estimate_id}</p>
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <p>
                        <RiHomeLine className="icon" />
                        {val.property_size}
                      </p>
                    </Column>
                    <Column>
                      <p>
                        <FaBoxes className="icon" />
                        {val.total_items}
                      </p>
                    </Column>
                    <Column>
                      <p>
                        <RiRoadMapLine className="icon" />
                        {val.distance}
                      </p>
                    </Column>
                    <Column>
                      <div style={{marginRight:'10px'}}>
                        <BsCalendar className="icon"  />
                        <span style={{ margin: "5px" }}>
                          {" "}
                          {val.date_created}
                        </span>
                        <BiPencil className="icon" />
                      </div>
                    </Column>
                    {/* <Column>
                      <button>
                        {showItems === ind ? "Hide details" : "Show details"}
                      </button>
                    </Column> */}
                    <Column>
                    <input
                        type="checkbox"
                        name="Is flexible"
                        style={{ borderColor: "red" }}
                      />
                      <label style={{padding:'5px'}}>Is flexible</label>
                    </Column>
                    <Column>
                      <button
                        className={`custom-button ${
                          activeButton === "moveDetails" ? "active" : ""
                        }`}
                        onClick={() => toggleExpand1(ind)}
                      >
                        {showItems === ind
                          ? "Hide Details"
                          : "show details"}
                      </button>
                    </Column>
                    <Column>
                      <button
                        className={`custom-button ${
                          activeButton === "quotesAwaiting" ? "active" : ""
                        }`}
                        onClick={() => setActiveButton("quotesAwaiting")}
                      >
                        {" "}
                        Quotes Awaiting{" "}
                      </button>
                    </Column>
                    <Row style={{ padding: "20px" }}>
                      <p>
                        <BsExclamationCircle className="icon" />
                        <strong style={{ padding: "10px" }}>
                          Disclamier: Please Update your move date before two
                          days of Shifting.
                        </strong>
                      </p>
                    </Row>
                    <Row style={{marginBottom:'20px'}}>
                      {showItems === ind && (
                        <div>
                          <Row>
                            <Column>
                              <p>
                                <strong>Additional Details:</strong>
                              </p>
                            </Column>
                            <Column>
                              <button>Edit Additional Info</button>
                            </Column>
                          </Row>
                          <Row>
                            <p>Test Date</p>
                          </Row>
                          <Row>
                            <Column>
                              <p>
                                <strong>House Details</strong>
                              </p>
                            </Column>
                            <Column>
                              <button>edit House Details</button>
                            </Column>
                          </Row>
                          <Row>
                            <Row>
                              <p>
                                <strong> Existing House Details</strong>
                              </p>
                            </Row>
                            <Column>
                              <strong>Floor No.</strong>
                            </Column>
                            <Column>
                              <strong>Elevator Available</strong>
                            </Column>
                            <Column>
                              <strong>
                                Distance from staircase/evevator to truck
                              </strong>
                            </Column>
                          </Row>
                          <Row>
                            <Column>
                              <p>{val.old_floor_no}</p>
                            </Column>
                            <Column>
                              <p>{val.old_elevator_availability}</p>
                            </Column>
                            <Column>
                              <p>
                                {Math.floor(
                                  parseFloat(val.old_parking_distance) * 0.3048
                                ) + " meters"}
                              </p>
                            </Column>
                          </Row>
                          <Row style={{ padding: "15px" }}>
                            <Column>
                              <strong>Inventory Details</strong>
                            </Column>
                            <Column>
                              <button
                                style={{
                                  backgroundColor: "black",
                                  color: "white",
                                  marginLeft: "370px",
                                }}
                              >
                                Edit Inventory
                              </button>
                            </Column>
                          </Row>
                          <Row>
                          {val.items.inventory.map((item, index) => (
                            <div key={index}>
                              <button className="button-expander" onClick={() => toggleExpand(index)} >
                                {item.displayName}{" "}
                                <span className="arrow" >
                                  <strong>{expandedItems.includes(index) ? "▲" : "▼"}</strong>
                                </span>
                              </button>
                              {expandedItems.includes(index) && (
                                <div className="additional-info">
                                  {/* Render additional information here */}
                                  {/* <p>hello</p> */}
                                  <ul>
                                    {item.category.map((val, index1) => (
                                      <li key={index1}>{val.name}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                          </Row>
                        </div>
                      )}
                    </Row>
                  </Row>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p>please enter details</p>
            </div>
          )}
        </Column>
      </Row>
    </Container>
  );
}
