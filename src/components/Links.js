import React from "react";
import { Link, Typography, Container } from "@material-ui/core";
import Contact from "./Contact";

type MyLinkPropType = {
  label: String,
  href: String,
  text: String,
};
function MyLink({ label, href, text }: MyLinkPropType) {
  return (
    <Typography gutterBottom>
      {label}: <Link href={href}>{text}</Link>
    </Typography>
  );
}

function Links() {
  return (
    <Container>
      <MyLink
        label="GitHub"
        href="https://github.com/KenG98"
        text="github.com/KenG98"
      />
      <MyLink
        label="LinkedIn"
        href="https://www.linkedin.com/in/kengar/"
        text="linkedin.com/in/kengar/"
      />
      <MyLink label="Resume" href="/KenGarberResume.pdf" text="Download PDF" />
      <Typography>
        <Contact />
      </Typography>
    </Container>
  );
}

export default Links;
