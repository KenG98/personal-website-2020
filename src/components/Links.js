import React from "react";
import { Link, Typography, Container } from "@material-ui/core";

function Links() {
  return (
    <Container>
      <Typography gutterBottom>
        GitHub: <Link href="https://github.com/KenG98">github.com/KenG98</Link>
      </Typography>
      <Typography gutterBottom>
        LinkedIn:{" "}
        <Link href="https://www.linkedin.com/in/kengar/">
          linkedin.com/in/kengar/
        </Link>
      </Typography>
      <Typography>
        Resume: <Link>Download PDF</Link>
      </Typography>
    </Container>
  );
}

export default Links;
