// Bootstrap
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from 'react-bootstrap';
// Components
import Divider from '../components/Divider';
import ShowInfo from '../components/ShowInfo/ShowInfo';
import FinancialDashboard from '../components/Dashboards/FinancialDashboard';
import SustainabilityDashboard from '../components/Dashboards/SustainabilityDashboard';
// Constants
import { PREFILL_ALL_INFO } from '../utils/constants';

const ProjectFinance = () => {
  return (
    <Container>
      <div className='projectFinance py-4'>
        {/* ---------------------------------------Title & Button Section--------------------------------------- */}
        <Row>
          <Col xs={12} md={4}>
            <h6>1. Project & Finance Structure</h6>
            <Divider />
          </Col>
          <Col xs={0} md={6}></Col>
          <Col xs={12} md={2}>
            <ShowInfo info={PREFILL_ALL_INFO}>
              <Button className='w-100 mb-3'>Prefill All</Button>
            </ShowInfo>
          </Col>
          <Col xs={12} md={8}></Col>
        </Row>

        {/* ---------------------------------------Text Box Section--------------------------------------- */}
        <Row className='mb-3'>
          <Col xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>TEXT BOX</Card.Title>
                <Card.Text>
                  Please enter in development and finance information for your
                  project. If you’re unsure what to put you can prefill or can
                  hover for more information. You can leave any field blank but
                  it will likely impact the validity of feasibility.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ---------------------------------------Details Section--------------------------------------- */}
        <Row>
          {/* ---------------------------------------Basic Finance Information Section--------------------------------------- */}
          <Col className='mb-3' sm={12} md={4}>
            <Form>
              <Card>
                <Card.Body>
                  <Card.Title>1. Basic Finance Information</Card.Title>
                  <Button className='w-100 d-block mb-3' size='sm'>
                    Prefill
                  </Button>
                  <ListGroup className='w-full' horizontal>
                    <ListGroup.Item className='w-50'>
                      Starting Equity
                    </ListGroup.Item>
                    <ListGroup.Item className='w-50'>
                      <Form.Control type='number' placeholder='$' />
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal>
                    <ListGroup.Item className='w-50'>Loan type</ListGroup.Item>
                    <ListGroup.Item className='w-50'>
                      <Form.Control type='text' placeholder='' />
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal>
                    <ListGroup.Item className='w-50'>
                      Interest Rate
                    </ListGroup.Item>
                    <ListGroup.Item className='w-50'>
                      <Form.Control type='number' placeholder='%' />
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal>
                    <ListGroup.Item className='w-50'>
                      Commitment Fee
                    </ListGroup.Item>
                    <ListGroup.Item className='w-50'>
                      <Form.Control type='number' placeholder='%' />
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal>
                    <ListGroup.Item className='w-50'>
                      Saving Interest Rate
                    </ListGroup.Item>
                    <ListGroup.Item className='w-50'>
                      <Form.Control type='number' placeholder='%' />
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal>
                    <ListGroup.Item className='w-50'>
                      Interest margin
                    </ListGroup.Item>
                    <ListGroup.Item className='w-50'>
                      <Form.Control type='number' placeholder='%' />
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal>
                    <ListGroup.Item className='w-50'>Line fee</ListGroup.Item>
                    <ListGroup.Item className='w-50'>
                      <Form.Control type='number' placeholder='$' />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Form>
          </Col>

          {/* ---------------------------------------Loan Details Section--------------------------------------- */}
          <Col className='mb-3' sm={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>2. Loan Details</Card.Title>
                <Button className='w-100 d-block mb-3' size='sm'>
                  Prefill
                </Button>
                <ListGroup className='w-full' horizontal>
                  <ListGroup.Item className='w-50'>
                    Total Loan Amount
                  </ListGroup.Item>
                  <ListGroup.Item className='w-50'>ListGroup</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className='w-50'>
                    Loan To Value (LTV)
                  </ListGroup.Item>
                  <ListGroup.Item className='w-50'>ListGroup</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className='w-50'>
                    Loan To Cist (LCT)
                  </ListGroup.Item>
                  <ListGroup.Item className='w-50'>ListGroup</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className='w-50'>
                    Total Repayment Amount
                  </ListGroup.Item>
                  <ListGroup.Item className='w-50'>ListGroup</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className='w-50'>Loan Term</ListGroup.Item>
                  <ListGroup.Item className='w-50'>ListGroup</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className='w-50'>
                    Establishment Fee
                  </ListGroup.Item>
                  <ListGroup.Item className='w-50'>ListGroup</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* ---------------------------------------Other Details Section--------------------------------------- */}
          <Col className='mb-3' sm={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>3. Other Details</Card.Title>
                <Button className='w-100 d-block mb-3' size='sm'>
                  Prefill
                </Button>
                <ListGroup className='w-full' horizontal>
                  <ListGroup.Item className='w-50'>
                    Discount Rate
                  </ListGroup.Item>
                  <ListGroup.Item className='w-50'>ListGroup</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className='w-50'>
                    Hurdle / Profit Margin
                  </ListGroup.Item>
                  <ListGroup.Item className='w-50'>ListGroup</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className='w-50'>
                    Cost Escalation Rate
                  </ListGroup.Item>
                  <ListGroup.Item className='w-50'>ListGroup</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item className='w-50'>
                    Sales Escalation Rate
                  </ListGroup.Item>
                  <ListGroup.Item className='w-50'>ListGroup</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* ---------------------------------------Dashboards--------------------------------------- */}
          <FinancialDashboard />
          <SustainabilityDashboard />
        </Row>
      </div>
    </Container>
  );
};

export default ProjectFinance;
