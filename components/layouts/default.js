import React from "react";
import Header from "../header";
import Footer from "../footer";
import Container from "../container";

function Layout({ path, children, pageTitle, ogImage }) {
  return (
    <>
      <Container>
        <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />

        <main>{children}</main>

        <Footer />
      </Container>
      <img className="wave" src="/static/wave.png" />

    <style jsx>{`
      .wave {
        background-color: #eee;
        transform: rotate(180deg);
        padding-top: 50px;
        width: 100%;
      }
    `}</style>
    </>
  );
}

export default Layout;
