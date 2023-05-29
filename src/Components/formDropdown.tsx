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

//Plantilla para crear un nuevo componente
export const FormDropdown = (/*{ driverCard, data }: { driverCard: JSX.Element; data: CardData[] }*/): JSX.Element => {
  return (
    <>
      <Button
        //icon
        circular
        icon="square outline"
        content={`newBtnComponent`}
      ></Button>
    </>
  );
};
