import React, { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesClient from "./ServicesClient"; // Import client component

export default function ServicesPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading service...</div>}>
        <ServicesClient />
      </Suspense>
      <Footer />
    </>
  );
}
