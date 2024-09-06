import { HomeDummyText } from "../../sandbox/TestingDummies";
import { componentDitMount } from "../Utils";

export default function About() {
  componentDitMount()
  return (
    <div className="about container --margin-bottom">
      <h1 className="--title-fs">About</h1>
      <div className="about__content --gen-fs">
        <p style={{ marginBottom: '3em' }}>Welcome to PUP DIT 1-5, where your journey into the Diploma in Information Technology program begins! Here’s a snapshot of what makes our section unique and how we support our first-year students.</p>
        <div className="who-we-are">
          <h2>Who We Are:</h2>
          <p>The PUP DIT 1-5 section is a dynamic and diverse group consisting of 49 students, including 7 dedicated class officials and 42 enthusiastic peers. Our section is designed to foster a supportive and collaborative environment as you embark on your academic journey in the field of Diploma in Information Technology.

          </p>
        </div>
      </div>
    </div>
  )
}
