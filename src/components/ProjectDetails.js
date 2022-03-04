import {
  Accordion,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const radios = [
  { name: "Active", value: "1" },
  { name: "Radio", value: "2" },
  { name: "Radio", value: "3" },
];

const ProjectDetails = () => {
  return (
    <>
      <Accordion defaultActiveKey={"projectDetails"}>
        {/* ---------------------------------------Project Details--------------------------------------- */}
        <Accordion.Item eventKey="projectDetails">
          <Accordion.Header>Project Details</Accordion.Header>
          <Accordion.Body style={{ width: "100%" }}>
            <Form>
              <Form.Group
                className="align-items-center"
                as={Row}
                controlId="projectDuration"
              >
                <Form.Label column sm="5">
                  Project Duration
                </Form.Label>
                <Col sm="7">
                  <InputGroup size="sm">
                    <Form.Control type="number" />
                    <InputGroup.Text id="months">months</InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group
                className="align-items-center"
                as={Row}
                controlId="discountRate"
              >
                <Form.Label column sm="5">
                  Discount Rate
                </Form.Label>
                <Col sm="7">
                  <InputGroup size="sm">
                    <Form.Control type="number" />
                    <InputGroup.Text id="discount">%</InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>
            </Form>
            <div className="d-grid mt-3">
              <Button className="btn-block" size="sm">
                Export Transactions
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion defaultActiveKey={"projectFinance"} alwaysOpen>
        {/* ---------------------------------------Project Finance--------------------------------------- */}
        <Accordion.Item eventKey="projectFinance">
          <Accordion.Header>Project Finance</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group
                className="align-items-center"
                as={Row}
                controlId="startingEquity"
              >
                <Form.Label column sm="5">
                  Starting Equity
                </Form.Label>
                <Col sm="7">
                  <InputGroup size="sm">
                    <InputGroup.Text id="months">$</InputGroup.Text>
                    <Form.Control type="number" />
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group
                className="align-items-center"
                as={Row}
                controlId="loanPaybackType"
              >
                <Form.Label column sm="5">
                  Loan Payback Type
                </Form.Label>
                <Col sm="7">
                  <Form.Select size="sm">
                    <option value="amortized">Amortized</option>
                    <option value="bullet">Bullet</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group
                className="align-items-center"
                as={Row}
                controlId="interestRate"
              >
                <Form.Label column sm="5">
                  Interest Rate
                </Form.Label>
                <Col sm="7">
                  <InputGroup size="sm">
                    <Form.Control type="number" />
                    <InputGroup.Text id="discount">%pa</InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group
                className="align-items-center"
                as={Row}
                controlId="commitmentFee"
              >
                <Form.Label column sm="5">
                  Commitment Fee
                </Form.Label>
                <Col sm="7">
                  <InputGroup size="sm">
                    <InputGroup.Text id="months">$</InputGroup.Text>
                    <Form.Control type="number" />
                  </InputGroup>
                </Col>
              </Form.Group>

              <hr />

              <Form.Group
                className="align-items-center"
                as={Row}
                controlId="savingInterestRate"
              >
                <Form.Label column sm="5">
                  Saving Interest Rate
                </Form.Label>
                <Col sm="7">
                  <InputGroup size="sm">
                    <Form.Control type="number" />
                    <InputGroup.Text id="months">%pa</InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        {/* ---------------------------------------Built Form--------------------------------------- */}

        <Accordion.Item eventKey="builtForm">
          <Accordion.Header>Built Form</Accordion.Header>
          <Accordion.Body>
            <Accordion>
              <Accordion.Item>
                <Accordion.Header>Land Acquisition Cost</Accordion.Header>
                <Accordion.Body style={{ width: "100%" }}>
                  <Form>
                    <Form.Group
                      className="align-items-center"
                      as={Row}
                      controlId="cashFlowType"
                    >
                      <Form.Label column sm="5">
                        Cash Flow Type
                      </Form.Label>
                      <Col sm="7">
                        <Form.Select size="sm">
                          <option value="expense">Expense</option>
                          <option value="income">Income</option>
                          <option value="equity">Equity</option>
                          <option value="loan">Loan</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>

                    <Form.Group
                      className="align-items-center"
                      as={Row}
                      controlId="derivative"
                    >
                      <Form.Label column sm="5">
                        Derivative
                      </Form.Label>
                      <Col sm="7">
                        <Form.Check type="checkbox" id="derivative" />
                      </Col>
                    </Form.Group>

                    {/* <Form.Group
                      className="align-items-center"
                      as={Row}
                      controlId="value"
                    >
                      <Form.Label column sm="5">
                        Cash Flow Type
                      </Form.Label>
                      <Col sm="7">
                        <Row>
                          <InputGroup size="sm">
                            <InputGroup.Text id="value">$</InputGroup.Text>
                            <Form.Control type="number" />
                          </InputGroup>
                          <span>X</span>
                          <Form.Group controlId="value1">
                            <Form.Control type="number" />
                          </Form.Group>
                          <span> = $5.00M</span>
                        </Row>
                      </Col>
                    </Form.Group> */}

                    <hr />

                    <Form.Group
                      className="align-items-center"
                      as={Row}
                      controlId="paymentSchedule"
                    >
                      <Form.Label column sm="5">
                        Payment Schedule
                      </Form.Label>
                      <Col sm="7">
                        <ButtonGroup>
                          {radios.map((radio, idx) => (
                            <ToggleButton
                              key={idx}
                              id={`radio-${idx}`}
                              type="radio"
                              variant="secondary"
                              name="radio"
                              //   value={radio.value}
                              //   checked={radioValue === radio.value}
                              //   onChange={(e) =>
                              //     setRadioValue(e.currentTarget.value)
                              //   }
                            >
                              {radio.name}
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </Col>
                    </Form.Group>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="builtForm">
          <Accordion.Header>Built Form</Accordion.Header>
          <Accordion.Body>
            <Accordion>
              <Accordion.Item>
                <Accordion.Header>Land Acquisition Cost</Accordion.Header>
                <Accordion.Body style={{ width: "100%" }}>
                  <Form>
                    <Form.Group
                      className="align-items-center"
                      as={Row}
                      controlId="cashFlowType"
                    >
                      <Form.Label column sm="5">
                        Cash Flow Type
                      </Form.Label>
                      <Col sm="7">
                        <Form.Select size="sm">
                          <option value="expense">Expense</option>
                          <option value="income">Income</option>
                          <option value="equity">Equity</option>
                          <option value="loan">Loan</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>

                    <Form.Group
                      className="align-items-center"
                      as={Row}
                      controlId="derivative"
                    >
                      <Form.Label column sm="5">
                        Derivative
                      </Form.Label>
                      <Col sm="7">
                        <Form.Check type="checkbox" id="derivative" />
                      </Col>
                    </Form.Group>

                    {/* <Form.Group
                      className="align-items-center"
                      as={Row}
                      controlId="value"
                    >
                      <Form.Label column sm="5">
                        Cash Flow Type
                      </Form.Label>
                      <Col sm="7">
                        <Row>
                          <InputGroup size="sm">
                            <InputGroup.Text id="value">$</InputGroup.Text>
                            <Form.Control type="number" />
                          </InputGroup>
                          <span>X</span>
                          <Form.Group controlId="value1">
                            <Form.Control type="number" />
                          </Form.Group>
                          <span> = $5.00M</span>
                        </Row>
                      </Col>
                    </Form.Group> */}

                    <hr />

                    <Form.Group
                      className="align-items-center"
                      as={Row}
                      controlId="paymentSchedule"
                    >
                      <Form.Label column sm="5">
                        Payment Schedule
                      </Form.Label>
                      <Col sm="7">
                        <ButtonGroup>
                          {radios.map((radio, idx) => (
                            <ToggleButton
                              key={idx}
                              id={`radio-${idx}`}
                              type="radio"
                              variant="secondary"
                              name="radio"
                              //   value={radio.value}
                              //   checked={radioValue === radio.value}
                              //   onChange={(e) =>
                              //     setRadioValue(e.currentTarget.value)
                              //   }
                            >
                              {radio.name}
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </Col>
                    </Form.Group>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default ProjectDetails;
