import React, { memo, useState } from "react";
import clsx from "clsx";

import s from "./styles.module.scss";

import Cast from "../Cast";
import Videos from "../Videos";
import Photos from "../Photos";
import Reviews from "../Reviews";

const title = ["Cast", "Videos", "Photos", "Reviews"];

const TabNavItem = ({ title, tab, tabName, setTabName }) => {
  return (
    <button
      className={clsx(s.tab, { [s.active]: tabName === tab })}
      onClick={() => setTabName(tab)}
    >
      {title}
    </button>
  );
};

const TabContent = ({ tab, tabName, children }) => {
  return tabName === tab ? <>{children}</> : null;
};

const Tabs = memo(({ id }) => {
  const [tabName, setTabName] = useState("Cast");

  return (
    <>
      <div className={s.tab_nav}>
        {title.map((el, i) => {
          return (
            <TabNavItem
              key={i}
              title={el}
              tab={el}
              tabName={tabName}
              setTabName={setTabName}
            />
          );
        })}
      </div>

      <TabContent tab="Cast" tabName={tabName}>
        <Cast id={id} />
      </TabContent>
      <TabContent tab="Videos" tabName={tabName}>
        <Videos id={id} />
      </TabContent>
      <TabContent tab="Photos" tabName={tabName}>
        <Photos id={id} />
      </TabContent>
      <TabContent tab="Reviews" tabName={tabName}>
        <Reviews id={id} />
      </TabContent>
    </>
  );
});

export default Tabs;
