import React from "react";
import userLogo from "../assets/img/22966818.jpg";

export default function About() {
  return (
    <div>
      <section className="about">
        <div className="container aos-init">
          <h1>About Me</h1>
          <img src={userLogo} alt="Logo" class="img-fluid m-5" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
            ipsum in nisl venenatis fermentum. Aenean a posuere augue. Curabitur
            quis tristique arcu, vel dictum arcu. Curabitur pretium ornare
            purus, ut ullamcorper nisi. Nullam sit amet elementum sapien. Fusce
            eu magna et justo pharetra vulputate. Nunc libero nibh, pretium in
            feugiat at, elementum vel odio. In porta diam a velit gravida
            iaculis. Phasellus vestibulum nulla vel fringilla laoreet. Quisque
            et sem leo. Vivamus malesuada libero a lacinia porttitor. Morbi
            accumsan mollis odio pharetra ultrices. Sed quis mi pellentesque,
            cursus odio ac, gravida sapien. Phasellus posuere fringilla libero
            vitae finibus. Ut aliquam gravida magna vel auctor. Pellentesque
            posuere libero eget sollicitudin ultricies.
          </p>
        </div>
      </section>
    </div>
  );
}
