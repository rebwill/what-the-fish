import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";
import FishResults from "./fishResults";
import "../App.scss";

const FishSelector = fishData => {
  // Sort fishData by Species Name
  const sortedFishData = fishData.fishDataArr.sort((a, b) =>
    a["Species Name"] > b["Species Name"] ? 1 : -1
  );

  // Add ID to each item
  let sortedFishDataID = [];
  sortedFishData.forEach((item, index) => {
    item.ID = index + 1;
    sortedFishDataID.push(item);
  });

  // For changing dropdown menu state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  // State for whether a fish has been selected
  const [fishIsChosen, setfishIsChosen] = useState(false);
  // const fishChosenState = () => setfishIsChosen(prevState => true);

  // For changing fishID state to ID of chosen fish
  const [selectedFish, setSelectedFish] = useState(0);

  // Map final array of data to create LIs for each one
  const seafoodLIs = sortedFishDataID.map(f => (
    <DropdownItem
      onClick={() => {
        // change fishIsChosen state to TRUE
        setfishIsChosen(prevState => true);
        // set fishID
        setSelectedFish({ selectedFish: f.ID });
        // fishID = f.ID;
      }}
      key={f.ID}
    >
      {f["Species Name"]}
    </DropdownItem>
  ));

  if (fishIsChosen === false) {
    return (
      <div className="dropdown-container">
        <UncontrolledDropdown
          className="btn dropdown-button"
          id="dropdown-button"
        >
          <DropdownToggle
            caret
            className="btn dropdown-button"
            id="dropdown-button"
          >
            Select your fish
          </DropdownToggle>
          <DropdownMenu
            modifiers={{
              setMaxHeight: {
                enabled: true,
                order: 890,
                fn: data => {
                  return {
                    ...data,
                    styles: {
                      ...data.styles,
                      overflow: "auto",
                      maxHeight: "75vh"
                    }
                  };
                }
              }
            }}
          >
            {seafoodLIs}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }

  if (fishIsChosen === true) {
    const selectedFishData = sortedFishDataID.filter(
      f => f.ID === selectedFish.selectedFish
    );

    Object.keys(selectedFishData[0]).forEach(key => {
      if (selectedFishData[0][key] === null) {
        selectedFishData[0][key] = "Not available.";
        console.log(selectedFishData[0]);
      }
    });

    return (
      <div className="dropdown-container">
        <UncontrolledDropdown
          className="btn dropdown-button"
          id="dropdown-button"
        >
          <DropdownToggle
            caret
            className="btn dropdown-button"
            id="dropdown-button"
          >
            Select your fish
          </DropdownToggle>
          <DropdownMenu
            modifiers={{
              setMaxHeight: {
                enabled: true,
                order: 890,
                fn: data => {
                  return {
                    ...data,
                    styles: {
                      ...data.styles,
                      overflow: "auto",
                      maxHeight: "75vh"
                    }
                  };
                }
              }
            }}
          >
            {seafoodLIs}
          </DropdownMenu>
        </UncontrolledDropdown>
        <FishResults fishData={selectedFishData} />
      </div>
    );
  }
};

export default FishSelector;

{
  /* <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} size="lg">
          {/*     ^initially set as false    ^when toggled, set dropDownOpen state to opposite */
}
//   <DropdownToggle caret>Choose your fish</DropdownToggle>
//   <DropdownMenu>{seafoodLIs}</DropdownMenu>
// </Dropdown> */}
