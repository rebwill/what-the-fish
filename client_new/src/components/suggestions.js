import React from "react";

const Suggestions = props => {
  const options = props.seafood.map(f => (
    // <li key={f["Scientific Name"]}>{f["Species Name"]}</li>
    <li key={f.id}>{f.name}</li>
    // Maybe do a filter for the name (3+ characters located anywhere in the name)
    // then map the resulting array with little links?
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
