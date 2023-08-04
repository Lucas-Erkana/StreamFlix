import React from "react";
import { useAppContext } from "../../context";

import Cards from "../../components/Cards";
import EmptyMessage from "../../components/EmptyMessage";
import Layout from "../../UI/Layout";
import Button from "../../UI/Button";

const Favorite = () => {
  const { favorites, handleClearFavorites } = useAppContext();

  return (
    <Layout title="Favorite">
      {favorites?.length ? (
        <>
          <Cards title="Favorite Movies" data={favorites} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button handleClick={handleClearFavorites}>Clear</Button>
          </div>
        </>
      ) : (
        <EmptyMessage msg="Favorite list is empty" />
      )}
    </Layout>
  );
};

export default Favorite;
