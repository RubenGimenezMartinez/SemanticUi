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
export const LineCard = (/*{ driverCard, data }: { driverCard: JSX.Element; data: CardData[] }*/): JSX.Element => {
  return (
    <>
      <Grid.Column
        style={{
          display: "flex",
          alignItems: "flex-end"
        }}
      >
        {/*<Form.Input*/}
        {/*  label={t`Selección (${selectedStopsInL.length}${sizePanel.isSmallWidthUI ? '' : ' paradas seleccionadas'}) ${inputStopSelectionToSearch ? '⚠' : ''}`}*/}
        {/*  placeholder={sizePanel.isSmallWidthUI ? '' : t`Buscar en las paradas seleccionadas...`}*/}
        {/*  icon="search"*/}
        {/*  iconPosition="left"*/}
        {/*  size={sizePanel.isSmallWidthUI ? 'mini' : undefined}*/}
        {/*  value={inputStopSelectionToSearch}*/}
        {/*  onChange={(_e, data) => {*/}
        {/*    setInputStopSelectionToSearch(data.value);*/}
        {/*  }}*/}
        {/*  action={*/}
        {/*    <Popup*/}
        {/*      content={t`Eliminar todas las paradas seleccionadas`}*/}
        {/*      trigger={*/}
        {/*        <Button*/}
        {/*          icon="trash alternate"*/}
        {/*          color="red"*/}
        {/*          size={sizePanel.isSmallWidthUI ? 'mini' : undefined}*/}
        {/*          onClick={() => {*/}
        {/*            setSelectedStopsInL([]);*/}
        {/*          }}*/}
        {/*        />*/}
        {/*      }*/}
        {/*    />*/}
        {/*  }*/}
        {/*/>*/}
        <div style={{ width: "100%" }}>
          <Label
            as="a"
            color="red"
            content="selección"
            style={{ width: "100%" }}
          />
          <List
            divided
            relaxed
            id="StopListSelection"
            size="mini"
            style={{ width: "100%", border: "1px solid red", padding: "10px" }}
          >
            <List.Item>
              <List.Content>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>Línea 1 parada 3</Card.Header>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>Línea 1 parada 3</Card.Header>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>Línea 1 parada 3</Card.Header>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>Línea 1 parada 3</Card.Header>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>Línea 1 parada 3</Card.Header>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>Línea 1 parada 3</Card.Header>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>Línea 1 parada 3</Card.Header>
                  </Card.Content>
                </Card>
              </List.Content>
            </List.Item>
          </List>
        </div>
      </Grid.Column>
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <Button
              style={{ padding: "6px" }}
              icon="chevron right"
              disabled
              color="black"
              size="mini"
              circular
              floated="right"
            />
            Línea 1 parada 3
          </Card.Header>
        </Card.Content>
      </Card>
      <Card fluid>
        <Card.Content>
          <Card.Header>Línea 1 parada 3</Card.Header>
        </Card.Content>
      </Card>
    </>
  );
};
