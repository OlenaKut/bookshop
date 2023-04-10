import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Subheader.css";

const Subheader = () => {
  return (
    <Carousel variant="dark" className="box">
      <Carousel.Item>
        <div class="d-flex">
          <div class="col-md-6">
            <img
              src="images/caruesel1.jpg"
              class="d-block w-100"
              alt="..."
              height={400}
            />
          </div>
          <div class="col-md-6 d-none d-md-block pt-2 ps-2 pe-5">
            <h5>
              I Cook in Color: Bright Flavors from My Kitchen and Around the
              World
            </h5>
            <p>
              Expand your recipe collection with dishes that focus on
              cross-cultural flavors, rainbows of vegetables, gem-toned
              desserts, and spice-forward twists from the author of the
              critically acclaimed cookbook My Two Souths.
            </p>
            <button>Read more</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="d-flex">
          <div class="col-md-6">
            <img
              src="images/caruesel1.jpg"
              class="d-block w-100"
              alt="..."
              height={400}
            />
          </div>
          <div class="col-md-6 d-none d-md-block pt-2 ps-2 pe-5">
            <h5>
              I Cook in Color: Bright Flavors from My Kitchen and Around the
              World
            </h5>
            <p>
              Expand your recipe collection with dishes that focus on
              cross-cultural flavors, rainbows of vegetables, gem-toned
              desserts, and spice-forward twists from the author of the
              critically acclaimed cookbook My Two Souths.
            </p>
            <button>Read more</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="d-flex">
          <div class="col-md-6">
            <img
              src="images/caruesel1.jpg"
              class="d-block w-100"
              alt="..."
              height={400}
            />
          </div>
          <div class="col-md-6 d-none d-md-block pt-2 ps-2 pe-5">
            <h5>
              I Cook in Color: Bright Flavors from My Kitchen and Around the
              World
            </h5>
            <p>
              Expand your recipe collection with dishes that focus on
              cross-cultural flavors, rainbows of vegetables, gem-toned
              desserts, and spice-forward twists from the author of the
              critically acclaimed cookbook My Two Souths.
            </p>
            <button>Read more</button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Subheader;
