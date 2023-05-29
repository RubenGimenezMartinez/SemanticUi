import React from "react";
import "../Styles/newComponent.scss";
import {
  Button,
  Segment,
  Grid,
  Form,
  List,
  Card,
  Icon,
  Dropdown,
  Label,
  Container,
  Divider,
  Header,
  Loader
} from "semantic-ui-react";

const labels = () => {
  return (
    <Label.Group>
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label
        icon="fork"
        content="Línea 11524545"
        style={{ minWidth: "95px" }}
      />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
      <Label icon="fork" content="Línea 1" style={{ minWidth: "95px" }} />
    </Label.Group>
  );
};
//Plantilla para crear un nuevo componente
export const GridLabels = (/*{ driverCard, data }: { driverCard: JSX.Element; data: CardData[] }*/): JSX.Element => {
  return (
    <>
      <Grid columns="1" padded>
        <Grid.Column>{labels()}</Grid.Column>
      </Grid>
    </>
  );
};
