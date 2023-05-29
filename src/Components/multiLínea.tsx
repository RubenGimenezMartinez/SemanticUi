import React, { useRef } from "react";
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
  FormComponent
} from "semantic-ui-react";

const options = [
  { key: "angular", text: "Ángular", value: "angular" },
  { key: "css", text: "CSS", value: "css" },
  { key: "design", text: "Graphic Design", value: "design" },
  { key: "ember", text: "Ember", value: "ember" },
  { key: "html", text: "HTML", value: "html" },
  { key: "ia", text: "Information Architecture", value: "ia" },
  { key: "javascript", text: "Javascript", value: "javascript" },
  { key: "mech", text: "Mechanical Engineering", value: "mech" },
  { key: "meteor", text: "Meteor", value: "meteor" },
  { key: "node", text: "NodeJS", value: "node" },
  { key: "plumbing", text: "Plumbing", value: "plumbing" },
  { key: "python", text: "Python", value: "python" },
  { key: "rails", text: "Rails", value: "rails" },
  { key: "react", text: "React", value: "react" },
  { key: "repair", text: "Kitchen Repair", value: "repair" },
  { key: "ruby", text: "Ruby", value: "ruby" },
  { key: "ui", text: "UI Design", value: "ui" },
  { key: "ux", text: "User Experience", value: "ux" }
];

const Search = React.forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} type="search" />;
});
Search.displayName = "Search";

const Search2 = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <Form.Dropdown
      label="Lineas"
      placeholder={`Buscar por nombre de línea...`}
      fluid
      multiple
      selection
      search
      clearable
      options={options}
      deburr
      ref={ref}
    />
  );
});
Search.displayName = "Search";

export const MultiLinea = (): JSX.Element => {
  const aa = useRef<HTMLElement>(null);
  const dropdownRef = useRef(null);

  const handleFocusDropdown = () => {
    console.log(dropdownRef.current);
    if (dropdownRef.current) {
      dropdownRef.current.open();
    }
  };
  const handleFocusDropdown2 = () => {
    console.log(dropdownRef.current);
    if (dropdownRef.current) {
      dropdownRef.current.close();
    }
  };

  function aaa() {
    if (aa.current) aa.current.focus();
  }
  return (
    <>
      <Segment attached inverted>
        <Grid columns="equal" padded>
          <Grid.Column>
            <Grid>
              <Grid.Column width="14">
                <Form.Dropdown
                  label="Lineas"
                  placeholder={`Buscar por nombre de línea...`}
                  fluid
                  multiple
                  selection
                  search
                  clearable
                  options={options}
                  deburr
                  //ref={dropdownRef}
                  openOnFocus
                  labeled
                />
                <label>patata</label>
                <Dropdown
                  label="Lineas"
                  placeholder={`Buscar por nombre de línea...`}
                  fluid
                  multiple
                  selection
                  search
                  clearable
                  options={options}
                  deburr
                  ref={dropdownRef}
                  openOnFocus
                />

                {/* <Search2 ref={aa} /> */}
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  icon="trash alternate outline"
                  color="red"
                  fluid
                  style={{ marginTop: "22px" }}
                  onMouseOver={() => handleFocusDropdown()}
                  onMouseLeave={() => handleFocusDropdown2()}
                />
              </Grid.Column>
            </Grid>
            <List divided relaxed size="mini">
              <List.Item>
                <Card
                  fluid
                  onClick={() => {
                    //aaa();
                    handleFocusDropdown();
                  }}
                >
                  <Card.Content>
                    <Card.Header>
                      <Icon name="check circle" color="olive" inverted />
                      <Icon name="fork" color="blue" />
                      {`Línea patata`}
                    </Card.Header>
                  </Card.Content>
                </Card>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};
