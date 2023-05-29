import React from "react";
import "../Styles/buttonFloated.scss";
import {
  List,
  Header,
  Icon,
  Label,
  Segment,
  Button,
  Divider,
  Grid,
  Popup,
  Menu,
  Placeholder
} from "semantic-ui-react";

const FloatedButton = () => (
  <>
    <Segment
      raised
      fluid
      inverted
      style={{
        //width: "100%",
        height: "300px",
        overflow: "clip",
        borderRadius: "15px",
        border: "4px solid grey"
      }}
    >
      <div
        style={{
          width: "calc(100% - 30px)",
          height: "30px",
          //border: "3px solid red",
          position: "absolute",
          background: "grey",
          borderRadius: "3px"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        hola
      </div>
      <Icon
        name="close"
        color=""
        style={{
          height: "25px",
          width: "25px",
          position: "absolute",
          top: "32px",
          right: "10px",
          //border: "5px solid red",
          //background: 'red',
          transform: "translate(-50%, -50%)",
          opacity: "0.5"
        }}
      />
      <div
        style={{
          height: "50px",
          width: "50px",
          position: "absolute",
          top: "40%",
          left: "10%",
          border: "5px solid red",
          borderRadius: "50%",
          background: "red",
          transform: "translate(-50%, -50%)",
          opacity: "0.5"
        }}
      />
      <div
        style={{
          height: "50px",
          width: "50px",
          position: "absolute",
          top: "65%",
          left: "10%",
          border: "5px solid red",
          borderRadius: "50%",
          background: "red",
          transform: "translate(-50%, -50%)",
          opacity: "0.5"
        }}
      />
      <div className="flex-container">
        <div className="flex-items"></div>
        <div className="flex-items"></div>
        <div className="flex-items"></div>
      </div>
      <div className="vehicleBench">
        <div className="vehicle" />
        <div className="vehicle" />
        <div className="vehicle" />
        <div className="vehicle" />
      </div>
      <Placeholder fluid inverted style={{ height: "265px" }}></Placeholder>
    </Segment>

    <Divider hidden />

    <Popup
      wide
      position="bottom left"
      className="optionsIcon"
      trigger={
        <div>
          <Button className="optionsIcon" circular icon="table" />
        </div>
      }
      hoverable
    >
      <Header as="h4" textAlign="center" content="Dividir vista en columnas" />
      <Divider />
      <Grid divided columns="equal">
        <Grid.Column>
          <Button color="blue" content="1" fluid />
          <Label
            content="✔"
            color="green"
            circular
            style={{
              position: "absolute",
              top: "50%",
              left: "25%",
              transform: "translate(-50%, -50%)"
            }}
          />
        </Grid.Column>
        <Grid.Column>
          <Button color="blue" content="2" fluid />
        </Grid.Column>
        <Grid.Column>
          <Button color="blue" content="3" fluid />
        </Grid.Column>
      </Grid>
    </Popup>
  </>
);

export default FloatedButton;
