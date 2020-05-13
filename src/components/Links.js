import React, { useState } from "react";
import { Link, Typography, Container } from "@material-ui/core";

function ShowEmailText() {
  const [showEmail, setShowEmail] = useState(false);
  return showEmail ? (
    "ken" + "garber" + "@" + "gmail" + "." + "com"
  ) : (
    <Link onClick={() => setShowEmail(true)}>{"Click to show Email"}</Link>
  );
}

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
      <Typography gutterBottom>
        Resume: <Link href="/KenGarberResume.pdf">Download PDF</Link>
      </Typography>
      <Typography>
        Contact: <ShowEmailText />
      </Typography>
    </Container>
  );
}

export default Links;
