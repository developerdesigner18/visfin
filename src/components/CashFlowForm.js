// Bootstrap
import {
  Form,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
  Accordion,
} from "react-bootstrap";
// Components
import Divider from "./Divider";

const radios = [
  { name: "Active", value: "1" },
  { name: "Radio", value: "2" },
  { name: "Radio", value: "3" },
];

const CashFlowForm = ({ cashFlowFormData }) => {
  return (
    <Accordion.Item eventKey={cashFlowFormData.id}>
      <Accordion.Header>{cashFlowFormData.title}</Accordion.Header>
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
                    <Form.Select
                      size="sm"
                      defaultValue={cashFlowFormData.cashFlowType}
                    >
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
                    <Form.Check
                      value={cashFlowFormData.derivative}
                      type="checkbox"
                      id="derivative"
                    />
                  </Col>
                </Form.Group>

                <Divider />

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
                          checked={cashFlowFormData.derivative}
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
  );
};

export default CashFlowForm;
