import React from "react";
import PropTypes from "prop-types";
import { Label } from "strapi-helper-plugin";
import { InputText } from "@buffetjs/core";
import styled from "styled-components";

const PlayerWrapper = styled.div`
  padding: 10px 0;
`;

const YouTube = ({ onChange, name, value }) => {
  const handleChange = (data) => {
    const newValue = data.target.value;

    onChange({ target: { name, value: newValue } });
  };

  return (
    <div>
      <Label htmlFor={name} message={name} style={{ marginBottom: 8 }} />

      <InputText name={name} onChange={handleChange} value={value || ""} />

      <PlayerWrapper>
        <iframe
          width="100%"
          height="300"
          src={`https://www.youtube.com/embed/${value || ""}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </PlayerWrapper>
    </div>
  );
};

YouTube.defaultProps = {
  errors: [],
  inputDescription: null,
  value: "",
};

YouTube.propTypes = {
  value: PropTypes.string,
};

export default YouTube;
