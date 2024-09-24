import Button from "./components/button/Button";
import Heading from "./components/heading/Heading";
import Image from "./components/image/Image";
import List from "./components/list/List";

function App() {
  return (
    <div className="containter">
      <main>
        <div className="content">
          <Heading styleHeading="heading01">
            Listen to yourself Follow your heart
          </Heading>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget.
          </p>
          <Button styleBtn="btn" text="Download the App" />
          <div className="list">
            <List />
          </div>
        </div>
        <div className="image">
          <Image src="/image/Image-area.png" alt="image" />
        </div>
      </main>
    </div>
  );
}

export default App;
