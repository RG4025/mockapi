import React from "react";
import Accordion from "@mui/material/Accordion";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import { Button } from "@mui/material/Button";
import Button from '@mui/material/Button';
function MUIAccordion() {


    const top100Films = [
        {label: "Rushi"},
        {label: "hjk"},
        {label: "nm"},
        {label: "hj"},
        {label: "Rushi"},
        {label: "Rushi"},
        {label: "Rushi"},
        {label: "Rushi"},

    ]

  return (
    <>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            area-controle="panel1-content"
            id="panel1-header"
          >
            Aoordion one
          </AccordionSummary>

          <AccordionDetails>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            tenetur repellat esse asperiores? Distinctio aperiam tempora
            laudantium error architecto? Minus quis saepe voluptatem laborum
            dolorem iste deleniti a nesciunt quod.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            area-controls="panel2-content"
            id="panel2-header"
          >
            Accordion Two
          </AccordionSummary>

          <AccordionDetails>
            <strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              molestiae reiciendis nihil eaque suscipit laudantium dolorem
              nulla, quos ipsa quod illo non, dolor animi? Tempore accusantium
              ipsum similique maxime temporibus.
            </strong>
          </AccordionDetails>
        </Accordion>

    <div className="container mt-5">

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(Name) => <TextField {...Name} label="Name" />}
          />
          </div>

          {/* MUI buttons */}

          <Button variant="outlined">Outlined</Button>
      </div>
    </>
  );
}

export default MUIAccordion;
