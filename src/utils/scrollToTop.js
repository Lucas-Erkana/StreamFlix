import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useAppContext } from "../context";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { handleHideSearch } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    handleHideSearch();
  }, [pathname]);

  return null;
}
