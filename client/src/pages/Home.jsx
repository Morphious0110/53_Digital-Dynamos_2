import React from "react";
import image1 from "../assets/1.jpg";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../index.css";
function Home() {
  return (
    <>
      <section>
        <div className="header bg-green-500 text-white">
          <div className="heading">
            <h1 className="font-bold">GreenGrowHub</h1>
            <p>
            Nurturing Nature, Empowering Growth
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
            
GreenGrowHub: Your Plant Care Partner. Easily monitor plant health with image uploads. Get personalized fertilizer recommendations and locate nearby labs. Our chatbot offers expert advice on-demand. Join our thriving community today for greener thumbs tomorrow.
          </p>
        </div>
      </div>
      <hr />

      <div className=" text-center mx-auto  mt-5">
        <h2 className=" text-4xl font-bold text-green-500">Features</h2>
      </div>
      <div className="features">
        <div className="chatBot">
          <Card
          title = "chatBot"
            heading="Chat bot"
            description="Have any queries? Dont worry out 24x7 Chat Bot is here to resolve all of your queries"
            imageUrl="https://nordvpn.com/wp-content/uploads/blog-featured-what-is-chatbot.svg"
          />
        </div>
        <div className="ImageUpload">
          <Card
          title = "ImageUpload"
            heading="Fertilizer Predictor"
            description="With the help of our AI predict which fertilizers are suitalble for your plants"
            imageUrl="https://eos.com/wp-content/uploads/2023/11/components-of-different-types-of-fertilizers.jpg-768x384.webp"
          />
        </div>
        <div className="LabsNearMe">
          <Card
          title="labsnearme"
            heading="Labs near me"
            description="Find laboratories near your house "
            imageUrl="https://www.darwinchambers.com/wp-content/uploads/plant-growth-rooms.jpg"
          />
        </div>
        <div className="fertilizerPredictor">
          <Card
          title="fertiliser"
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
