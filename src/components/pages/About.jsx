import { HomeDummyText } from "../../sandbox/TestingDummies";
import { componentDitMount } from "../Utils";

export default function About() {
  componentDitMount()
  return (
    <div className="about container --margin-bottom">

      <h1 className="--title-fs">About</h1>
      <HomeDummyText className="--gen-fs"/>
    </div>
  )
}
