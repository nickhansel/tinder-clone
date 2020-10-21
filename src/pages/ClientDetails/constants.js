import React from "react";

const STRATEGY_MESSAGES = {
  attention: (company) => (
    <>
      Would {company} benifit from <b>Extra Attention?</b>
    </>
  ),
  bug: (company) => (
    <>
      Has {company} encoutnered a <b>bug</b> or issue that needs to resolved?
    </>
  ),
  contact: (company) => (
    <>
      Hit a wall with your current contact at {company} and need to find a{" "}
      <b>New Contact</b> to talk to?
    </>
  ),
  escalation: (company) => (
    <>
      <b>Escalate</b> or resolve an issue by bringing in your superiors or
      additional resources
    </>
  ),
  feature: (company) => (
    <>
      Does {company} have a resonable <b>New Feature</b> request?
    </>
  ),
  custom: (company) => (
    <>
      Implement a <b>Custom</b> strategy to improve your relationship with{" "}
      {company}{" "}
    </>
  ),
};

export { STRATEGY_MESSAGES };
