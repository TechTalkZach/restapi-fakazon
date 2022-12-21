import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { InputNumber } from "./InputNumber";
import { InputText } from "./InputText";
import { InputRadio } from "./InputRadio";
import { sexeOptions } from "../pages/CreerCompte/sexeOptions";
import { sexeFiltre } from "../pages/AcceuilMembre/sexeFiltre";

function ToggleButtons() {
  const [value, setValue] = useState([]);

  const [isShown, setIsShown] = useState(false);

  const [show, setShow] = useState(false);

  // Modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (event) => {
    // 👇️ toggle visibility
    setIsShown((current) => !current);
  };

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = (value) => setValue(value);

  return (
    <>
      <div className="button-container">
        <button variant="primary" size="sm" onClick={handleShow}>
          Filtrer mes recherches
        </button>
      </div>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton >
          <Modal.Title>Recherche</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>    
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Rechercher par sexe</Form.Label>
                <div>
                <InputRadio label="" columnSize="col-6" options={sexeOptions}  />
                </div>            
              </Form.Group>                 
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                 <Form.Label>Rechercher par âge</Form.Label>
                 <div>
                   <InputNumber label={'Âge Minimum'} />
                   <InputNumber label={'Âge Maximum'} />
                 </div>
              </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <input
            type="submit"
            className="btn colorBtn rounded-10 text-white px-5"
            value={"Rechercher"} 
            style={{textAlign : 'center'}}
          />
        </Modal.Footer>
      </Modal>
      {/*         
         <div className={isShown ? 'display-block' : 'display-none'}>
          <div className='carte-filtre'>
          <form className='form'>
             <div class="input-group">
               <span class="input-group-text">@</span>
               <input type="text" class="form-control" placeholder="Username" />
             </div>
           
             <div class="input-group">
               <input type="text" class="form-control" placeholder="Your Email" />
               <span class="input-group-text">@example.com</span>
             </div>
             <div class="input-group mb-3">
               <span class="input-group-text">Default</span>
               <input type="text" class="form-control" />
             </div>
          </form>
          </div>
          </div> */}

      {/* <Form>
             <Form.Check 
               type="switch"
               id="custom-switch"
               label="Check this switch"
             />
             <Form.Check 
               disabled
               type="switch"
               label="disabled switch"
               id="disabled-custom-switch"
               />
               <fieldset>
               
               <Form.Group as={Row} className="mb-3">
                 <Form.Label as="legend" column sm={2}>
                   Radios
                 </Form.Label>
                 <Col sm={10}>
                   <Form.Check
                     type="radio"
                     label="first radio"
                     name="formHorizontalRadios"
                     id="formHorizontalRadios1"
                   /> 
                   <div>
                   <Form.Check
                     type="radio"
                     label="second radio"
                     name="formHorizontalRadios"
                     id="formHorizontalRadios2"
                   />
                   <Form.Check
                     type="radio"
                     label="third radio"
                     name="formHorizontalRadios"
                     id="formHorizontalRadios3"
                   />

                   </div>
                  
                 </Col>
               </Form.Group>
             </fieldset>

            
          </Form> */}
      {/* <div className='sexe'>
            <p>SEXE</p>
            <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
              <ToggleButton id="tbg-btn-1" value={1}>
                M
              </ToggleButton>
              <ToggleButton id="tbg-btn-2" value={2}>
                F
              </ToggleButton>
            
            </ToggleButtonGroup>
          </div>
          <div className='age'>
            <p>AGE</p>
            <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
              <ToggleButton id="tbg-btn-3" value={3}>
                18-26
              </ToggleButton>
              <ToggleButton id="tbg-btn-4" value={4}>
                27-35
              </ToggleButton>
              <ToggleButton id="tbg-btn-5" value={5}>
                36-45
              </ToggleButton>
              <ToggleButton id="tbg-btn-6" value={6}>
                46-64
              </ToggleButton>
              <ToggleButton id="tbg-btn-7" value={7}>
                65+
              </ToggleButton>
            
            </ToggleButtonGroup>
          </div>
          {console.log(value)}
        
           
         </div> */}
    </>
  );
}

export default ToggleButtons;
