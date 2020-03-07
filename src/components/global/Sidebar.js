import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../sass/sidebar.scss";

const Sidebar = ({ page, orientation }) => {
  const [redirect, setRedirect] = useState(false);

  const handleRedirect = () => {
    setRedirect(true);
  };

  return redirect ? (
    <Redirect to={`/${page}`} />
  ) : (
    <div>
      <div
        className={`sidebar ${orientation}-sidebar`}
        onClick={() => handleRedirect(page)}
      >
        <h2>{page}</h2>
      </div>
    </div>
  );
};

export default Sidebar;
