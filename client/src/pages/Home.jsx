import React from "react";
import image1 from "../assets/1.jpg";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../index.css";
function Home() {
  return (
    <>
      <section>
        <div className="header">
          <div className="heading">
            <h1>GreenGrowHub</h1>
            <p>
              A one stop platform to check the health of your plant effectively
            </p>
          </div>
          <div className="headerImg">
            {" "}
            <img
              src="https://myplantin.com/_next/image?url=https%3A%2F%2Fstrapi.myplantin.com%2FDiseases_illustration_a772d9dc34.webp&w=1920&q=75"
              alt=""
            />
          </div>
        </div>
      </section>
      <div className=" md:flex mx-auto p-10 gap-10 ">
        <div>
          <p className=" pr-10 pt-5  text-lg ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit esse
            praesentium consequuntur officiis fugiat necessitatibus id sit saepe
            quaerat adipisci recusandae corrupti doloribus quis asperiores,
            culpa consequatur voluptatem dignissimos? Numquam! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Reprehenderit repellat
            consectetur molestiae quae quam temporibus ratione nihil quos
            molestias, quisquam consequuntur sunt, reiciendis atque similique.
            Obcaecati explicabo non itaque corrupti.
          </p>
        </div>
      </div>
      <hr />

      <div className=" text-center mx-auto  mt-5">
        <h2 className=" text-4xl font-bold">Features</h2>
      </div>
      <div className="features">
        <div className="chatBot">
          <Card
            heading="Chat bot"
            description="Have any queries? Dont worry out 24x7 Chat Bot is here to resolve all of your queries"
            imageUrl="https://nordvpn.com/wp-content/uploads/blog-featured-what-is-chatbot.svg"
          />
        </div>
        <div className="ImageUpload">
          <Card
            heading="Fertilizer Predictor"
            description="With the help of our AI predict which fertilizers are suitalble for your plants"
            imageUrl="https://eos.com/wp-content/uploads/2023/11/components-of-different-types-of-fertilizers.jpg-768x384.webp"
          />
        </div>
        <div className="LabsNearMe">
          <Card
            heading="Labs near me"
            description="Find laboratories near your house "
            imageUrl="https://www.darwinchambers.com/wp-content/uploads/plant-growth-rooms.jpg"
          />
        </div>
        <div className="fertilizerPredictor">
          <Card
            heading="Upload your plant"
            description="Check the health of your plants by just uploading a picture of it"
            imageUrl="https://us.123rf.com/450wm/amenic181/amenic1811604/amenic181160400044/57090027-arroser-une-jeune-plante-la-main-farmer.jpg?ver=6"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
