import React from "react";
import Container from "./layout/Container";
import Section from "./layout/Section";
import Group from "./layout/Group";
import { Input, InputLabel } from "./Input.js";
import "./style/index.css";

const InputGroup = () => {
  const InputSize = [
    { status: "default", placeholder: "Small Input", size: "small" },
    { status: "default", placeholder: "Large Input", size: "large" },
  ];

  const InputStatus = [
    { status: "default", placeholder: "Default Input" },
    { status: "success", placeholder: "성공적으로 완료하였습니다!" },
    { status: "error", placeholder: "에러가 발생하였습니다!" },
    { status: "warning", placeholder: "주의가 필요합니다!" },
  ];

  const InputSearch = [
    {
      type: "search",
      labelClass: "search",
      placeholder: "검색어를 입력하세요.",
    },
  ];

  return (
    <div className="input-group-layout">
      <h1>Input</h1>
      <Container>
        <Section title="Size">
          <Group>
            {InputSize.map((input, index) => (
              <Input
                key={index}
                label={input.label}
                status={input.status}
                placeholder={input.placeholder}
                disabled={input.disabled}
                size={input.size}
              />
            ))}
          </Group>
        </Section>
        <Section title="Status">
          <Group>
            {InputStatus.map((input, index) => (
              <Input
                key={index}
                label={input.label}
                status={input.status}
                placeholder={input.placeholder}
                disabled={input.disabled}
              />
            ))}
          </Group>
        </Section>
        <Section title="Search">
          <Group>
            {InputSearch.map((input, index) => (
              <InputLabel
                key={index}
                type={input.type}
                placeholder={input.placeholder}
                labelClass={input.labelClass}
                disabled={input.disabled}
              />
            ))}
          </Group>
        </Section>
      </Container>
    </div>
  );
};

export default InputGroup;
