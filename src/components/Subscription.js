// Section to capture email address of the user for subscription purpose.

import Form from 'react-bootstrap/Form';

const Subscription = () => {
    return <div className='sub'>
        <p></p>
        <hr />
        <div className='sub-input'>
            <p>SUBSCRIBE TO OUR EMAIL LIST</p>
            <Form className="d-flex">
                <Form.Control
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="me-2 sub-search-box"
                    aria-label="Email Address"
                />
                <button className='sub-btn' variant="outline-success">SUBMIT</button>
            </Form>
        </div>
    </div>;
};

export default Subscription;
