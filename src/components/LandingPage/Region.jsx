import React from "react";

const Region = () => {
  return (
    <section className="container py-5 region">
      <form action="#">
        <div className="col-sm-6 py-5">
         <p>Country / region</p>
            <select id="select" className="py-3 mb-3 form-select region-select">
              <option>ZAR R | South Africa</option>
              <option>NGR | West Africa</option>
            </select>
            <p>2024, Bantu Kraal Powered by Kukhona Digital</p>
        </div>
      </form>
    </section>
  );
};

export default Region;
