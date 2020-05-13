import React, { useState } from "react";
import { Link } from "@material-ui/core";
import copy from "clipboard-copy";

function ContactText() {
  // type contactStage = "Hidden" | "Shown" | "Copied";
  // const [stage, setStage] = useState<contactStage>("Hidden");
  const [stage, setStage] = useState("Hidden");
  const emailString = "ken" + "garber" + "@" + "gmail" + "." + "com";
  const clickedToShow = () => setStage("Shown");
  const clickedToCopy = () => {
    copy(emailString);
    setStage("Copied");
    setTimeout(() => setStage("Shown"), 1500);
  };
  const [label, value, func] = {
    Hidden: ["Contact", "Click to show Email", clickedToShow],
    Shown: ["Click to copy", emailString, clickedToCopy],
    Copied: ["Copied", emailString, clickedToCopy],
  }[stage];
  return (
    <span onClick={func}>
      {label}
      {": "}
      <Link>{value}</Link>
    </span>
  );
}

export default ContactText;
