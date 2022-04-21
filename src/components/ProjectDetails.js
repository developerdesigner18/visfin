import { useState } from "react";
// Bootstrap
import {
  Accordion,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  Card,
} from "react-bootstrap";
// React Beautiful dnd
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// Components
import CashFlowForm from "./CashFlowForm";
import Divider from "./Divider";
// Dummy Data
import { cashFlowFormData as data } from "../data/cashFlowFormData";

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

const ProjectDetails = () => {
  const [items, setItems] = useState(getItems(10));
  const [cashFlowFormData, setCashFlowFormData] = useState(data);

  // ! React Beautiful dnd---------------------------------------
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

  // ! Add New Group---------------------------------------
  const handleAddNewGroup = () => {
    setCashFlowFormData([
      ...cashFlowFormData,
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
    ]);
  };

  return (
    <>
      {/* <Accordion defaultActiveKey={"projectDetails"}> */}
      {/* ---------------------------------------Project Details--------------------------------------- */}
      {/* <Accordion.Item eventKey="projectDetails">
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
                Export Transactions <i className="fa-solid fa-table-list"></i>
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item> */}
      {/* </Accordion> */}

      <Accordion defaultActiveKey={"projectFinance"} alwaysOpen>
        {/* ---------------------------------------Project Finance--------------------------------------- */}
        {/* <Accordion.Item eventKey="projectFinance">
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

              <Divider />

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
        </Accordion.Item> */}

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
                        style={{
                          minHeight: 40,
                          ...provided.draggableProps.style,
                        }}
                      >
                        <CashFlowForm cashFlowFormData={item} />
                        {/* <Card>Hello</Card> */}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Accordion>
      <div className="d-flex justify-content-between mt-1">
        <Button onClick={handleAddNewGroup}>
          <i className="fa-solid fa-plus"></i> Add New Group
        </Button>
        <Button>
          <i className="fa-solid fa-square-arrow-up-right"></i> Open
        </Button>
        <Button>
          <i className="fa-solid fa-floppy-disk"></i> Save
        </Button>
      </div>
    </>
  );
};

export default ProjectDetails;
