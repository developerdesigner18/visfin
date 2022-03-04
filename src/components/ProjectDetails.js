import { useState } from "react";
import { Accordion, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CashFlowForm from "./CashFlowForm";

const cashFlowFormData = [
  {
    id: "1",
    title: "BuiltForm",
    cashFlowType: "Expense",
    derivative: false,
    value: 500000,
    units: 1,
    paymentSchedule: "start",
    start: 1,
    end: 3,
  },
  {
    id: "2",
    title: "BuiltForm 1",
    cashFlowType: "Income",
    derivative: false,
    value: 5000000,
    units: 2,
    paymentSchedule: "normal",
    start: 13,
    end: 21,
  },
  {
    id: "3",
    title: "BuiltForm 2",
    cashFlowType: "Equity",
    derivative: true,
    value: 1000000,
    units: 3,
    paymentSchedule: "recurring",
    start: 3,
    end: 13,
  },
];

const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const ProjectDetails = () => {
  const [items, setItems] = useState(getItems(10));

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(newItems);
  };

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

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {cashFlowFormData.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="dragIcon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <CashFlowForm cashFlowFormData={item} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {/* ---------------------------------------Built Form1--------------------------------------- */}
          {/* <CashFlowForm /> */}
        </DragDropContext>
      </Accordion>
    </>
  );
};

export default ProjectDetails;
