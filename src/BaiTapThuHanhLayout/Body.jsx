import { Banner } from "./Banner";
import { Item } from "./Item";

export const Body = () => {
  return (
    <div>
      <div class="py-5">
        <div class="container px-lg-5">
          <Banner />
        </div>
      </div>
      <section className="pt-4">
        <div className="container px-lg-5">
          <Item />
        </div>
      </section>
    </div>
  );
};
