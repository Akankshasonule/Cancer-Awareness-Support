import cancerData from "../api/cancerData.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
       Quick guide to symptoms, prevention, and treatments
        <br />
       Cancer Facts You Must Know
      </h2>

      <div className="gradient-cards">

        {cancerData.cancerTypes.map((cancer) => {
          const { id, name, commonIn, symptoms, prevention, treatments, interestingFact, image } = cancer;

          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">

                <img 
                  src={image} 
                  alt={name} 
                  className="card-image"
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "10px"
                  }}
                />

                <p className="card-title">{name}</p>

                <p><span className="card-description">Common In: </span>{commonIn}</p>
                <p><span className="card-description">Symptoms: </span>{symptoms.join(", ")}</p>
                <p><span className="card-description">Prevention: </span>{prevention.join(", ")}</p>
                <p><span className="card-description">Treatments: </span>{treatments.join(", ")}</p>
                <p><span className="card-description">Fact: </span>{interestingFact}</p>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};
