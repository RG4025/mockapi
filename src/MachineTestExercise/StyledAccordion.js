import React from "react";

function StyledAccordion() {
  const firstgStyle = {
    border: "2px solid blue",
    backgroundColor: "aqua",
    borderRadius: "5px",
    color: "black",
    outline:"none",
    
  };



  const accrBody = {
    backgroundColor: "transperent",
    border: "1px solid white",
    color: "black",
  };


    let main = document.getElementById('main');
    main.addEventListener('onFocus',()=>{
        main.style.outline="none";
    })



  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="accordion" id="firstAccordion">
            <div className="accordion-item" style={accrBody}>
              <h2 className="accordoin-header">
                <button
                id="main"
                  style={firstgStyle}
                  type="button"
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#firstChild"
                >
                  First One
                </button>
              </h2>

              <div
                className="accordion-collapse collapse show"
                id="firstChild"
                data-bs-parent="#firstAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam, dicta.Lorem
                    Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab natus et aut beatae, modi illo? Unde exercitationem mollitia sed modi iure. Facere possimus atque eaque dicta officiis, sint impedit enim.
                    loren
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla debitis blanditiis et eveniet, sed molestiae inventore ex earum incidunt eum voluptatibus ad officiis tenetur similique veniam aperiam est deleniti!
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item" style={accrBody}>
              <h2 className="accordoin-header">
                <button
                  style={firstgStyle}
                  type="button"
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#secondChild"
                >
                  First One
                </button>
              </h2>

              <div
                className="accordion-collapse collapse"
                id="secondChild"
                data-bs-parent="#firstAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam, dicta.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio molestias culpa assumenda facilis veniam ad nobis quasi ducimus commodi vero, aliquam et hic animi delectus itaque doloremque laudantium voluptatum tempora?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus saepe id aliquid eius animi odit temporibus numquam impedit deleniti, blanditiis placeat distinctio quis aspernatur, deserunt repellendus nisi sint soluta adipisci?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StyledAccordion;
