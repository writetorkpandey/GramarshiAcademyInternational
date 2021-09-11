import React, { useState, useEffect } from "react";

const Header = () => {
  const [count, setCount] = useState(1);

  if (count > 15) {
    setCount(1);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [count]);
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-5">Gramarshi Academy International</h1>
              <p className="main-hero-para">
                The school was established in 2008. <br />
                Gramarshi Academy International is a Co-ed school affiliated to
                Central Board of Secondary Education (CBSE). It is managed by
                Gramarshi Academy.
              </p>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src={`https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/PIC/${count}.jpeg`}
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src={`https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/PIC/${
                  count + 1
                }.jpeg`}
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
