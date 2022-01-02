import { MainLayout } from "../../Components"
import "./About.css"


export const About = () => {
  return (
    <MainLayout>
      <div className="about-container">
        <h1 className="about-heading">About</h1>
        <p className="about-text">Its Tinder for Cats.</p>
      </div>
    </MainLayout>
  );
}
