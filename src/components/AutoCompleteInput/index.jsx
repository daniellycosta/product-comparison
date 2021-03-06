import { useState } from "react";
import { Container, Select, InputContainer, SelectContainer } from "./styles";

import expandMoreImg from "src/assets/expandMore.svg";
import expandLessImg from "src/assets/expandLess.svg";

export const AutoCompleteInput = ({ options, onClickOption }) => {
  const [value, setValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [filteredSugestions, setFilteredSugestions] = useState([]);

  const getFilteredSugestions = (filterText) => {
    if (!options) return;

    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(filterText.toLowerCase())
    );

    setFilteredSugestions(filteredOptions);
    setShowOptions(true);
  };

  const handleOnChange = (event) => {
    setValue(event.target.value);

    if (event.target.value === "") {
      resetEntries();
      return;
    }

    getFilteredSugestions(event.target.value);
  };

  const resetEntries = () => {
    setFilteredSugestions([]);
    setShowOptions(false);
  };

  const handleClickOption = (optionValue) => {
    setShowOptions(false);
    setValue(optionValue);
    if (onClickOption) onClickOption(optionValue);
    setValue("");
  };

  const handleClickShowAllOptions = (event) => {
    event.preventDefault();

    if (!showOptions) setFilteredSugestions(options);
    setShowOptions(!showOptions);
  };

  return (
    <Container>
      <InputContainer optionsOpen={showOptions}>
        <input
          value={value}
          onChange={handleOnChange}
          data-test="autocomplete-input"
        />
        <button
          onClick={handleClickShowAllOptions}
          data-test="autocomplete-input-button"
        >
          {showOptions ? (
            <img src={expandLessImg} />
          ) : (
            <img src={expandMoreImg} />
          )}
        </button>
      </InputContainer>
      <SelectContainer>
        {showOptions && (
          <Select>
            {filteredSugestions.length ? (
              filteredSugestions.map((option, i) => (
                <li
                  key={option}
                  value={option}
                  onClick={() => handleClickOption(option)}
                  data-test={`option-list-item-${i}`}
                >
                  {option}
                </li>
              ))
            ) : (
              <li
                key={"notFound"}
                className="disabled"
                data-test="option-list-item-not-found"
              >
                Not Found
              </li>
            )}
          </Select>
        )}
      </SelectContainer>
    </Container>
  );
};
