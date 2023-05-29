import React from "react";
import { List, Header, Icon, Label, Segment } from "semantic-ui-react";

const Leyenda = () => (
  <>
    <Segment compact>
      <Header
        as="h4"
        content="Leyenda"
        style={{ display: "inline", marginRight: "10px" }}
      />

      <Label basic>
        <Icon name="circle" color="green" />
        Parada de inicio
      </Label>

      <Label basic>
        <Icon name="circle" color="blue" />
        Parada final
      </Label>

      <Label basic>
        <Icon name="circle" color="orange" />
        Parada en línea
      </Label>

      <Label basic>
        <Icon name="circle" color="pink" />
        Otras paradas
      </Label>
    </Segment>

    <Segment compact>
      <Header
        as="h4"
        content="Leyenda"
        textAlign="center"
        style={{ display: "block", marginRight: "10px" }}
      />
      <List>
        <List.Item>
          <Label basic style={{ width: "150px" }}>
            <Icon name="circle" color="green" />
            Parada de inicio
          </Label>
        </List.Item>
        <Label basic style={{ width: "150px" }}>
          <Icon name="circle" color="blue" />
          Parada final
        </Label>
        <List.Item>
          <Label basic style={{ width: "150px" }}>
            <Icon name="circle" color="orange" />
            Parada en línea
          </Label>
        </List.Item>
        <List.Item>
          <Label basic style={{ width: "150px" }}>
            <Icon name="circle" color="pink" />
            Otras paradas
          </Label>
        </List.Item>
      </List>
    </Segment>
  </>
);

export default Leyenda;
