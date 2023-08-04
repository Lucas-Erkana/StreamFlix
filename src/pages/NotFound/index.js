import React from "react";

import s from "./styles.module.scss";
import Layout from "../../UI/Layout";

const NotFound = () => {
  return (
    <Layout title="Page not found">
      <div className={s.title}>Page not found</div>
    </Layout>
  );
};

export default NotFound;
