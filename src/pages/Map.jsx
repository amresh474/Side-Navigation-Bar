import React from "react";
import GoogleMapComponent from "../components/map/GoogleMapComponent";
import { Layout } from "../components/Layout/Layout";

export const Map = () => {
  return (
    <Layout>
  <div className="info">
      <GoogleMapComponent />
    </div>

    </Layout>
  
  );
};
