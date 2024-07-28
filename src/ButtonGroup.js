import React from "react";
import Button from "./Button";
import Container from "./layout/Container";
import Section from "./layout/Section";
import Group from "./layout/Group";
import "./style/index.css";

const ButtonGroup = () => {
  const outlineButtons = [
    { label: "Default", status: "default", styles: "outline" },
    {
      label: "Disabled",
      status: "disabled",
      styles: "outline",
      disabled: true,
    },
  ];

  const solidButtons = [
    { label: "Default", status: "default", styles: "solid" },
    { label: "Disabled", status: "disabled", styles: "solid", disabled: true },
  ];

  return (
    <div className="button-group-layout">
      <h1>Button</h1>
      <Container>
        <Section title="Outline">
          <Group>
            {outlineButtons.map((button, index) => (
              <Button
                key={index}
                label={button.label}
                status={button.status}
                styles={button.styles}
                disabled={button.disabled}
              />
            ))}
          </Group>
        </Section>
        <Section title="Solid">
          <Group>
            {solidButtons.map((button, index) => (
              <Button
                key={index}
                label={button.label}
                status={button.status}
                styles={button.styles}
                disabled={button.disabled}
              />
            ))}
          </Group>
        </Section>
      </Container>
    </div>
  );
};

export default ButtonGroup;
