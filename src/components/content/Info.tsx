import Content from "./Content";

function Info() {
  return (
    <>
      <section className=" text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="pb-8 mx-auto max-w-lg text-center flex flex-col justify-center items-center">
            <p className="pb-2 text-lg">Our Services</p>

            <h2 className="text-3xl font-bold sm:text-3xl w-700px">
              Embark on a journey to{" "}
              <span className="text-yellow">success</span> with our services{" "}
              <span className="text-yellow">– data strategies</span>, website
              finesse, and custom{" "}
              <span className="text-yellow">app mastery.</span>{" "}
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Content
              heading={"Digital Marketing"}
              para={
                "We transform data into dynamic action, forging insights into engagement, and driving business success through heightened profitability."
              }
            />
            <Content
              heading={"Website Development"}
              para={
                "We heighten brand impact through optimized websites, driving conversions, elevating revenues, and nurturing growth with our dynamic online presence."
              }
            />{" "}
            <Content
              heading={"Mobile App Development"}
              para={
                "We propel your business to the tech forefront with custom mobile apps, connecting you cost-effectively to your ideal audience while leveraging our expertise."
              }
            />{" "}
          </div>
        </div>
      </section>
    </>
  );
}

export default Info;
