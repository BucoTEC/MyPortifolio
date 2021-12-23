import * as React from "react";
import { useMatch, useResolvedPath } from "react-router-dom";
import Navigatro from "./Navigator";
function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Navigatro
        style={{
          color: match ? " #407bff" : "black",
        }}
        to={to}
        {...props}
      >
        {children}
      </Navigatro>
    </div>
  );
}

export default CustomLink;
