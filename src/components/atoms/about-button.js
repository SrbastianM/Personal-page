import React from "react";

const aboutButton = () => {
  return (
    <React.StrictMode>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </React.StrictMode>
  );
};

export default aboutButton;
