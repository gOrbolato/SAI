import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeUserContent from "../components/HomeUserContent";

function HomeUserPage() {
  return (
    <div>
      <Header />
      <main>
        <HomeUserContent />
      </main>
      <Footer />
    </div>
  );
}

export default HomeUserPage;