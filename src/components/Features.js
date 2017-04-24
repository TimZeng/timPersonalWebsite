import React from 'react';

import SectionTitle from './sectionTitle';

const Features = () => (
  <section className="section-features js--section--feature" id="features">

    <SectionTitle
      title='About'
      subtitle='A detail-oriented front-end web developer mainly focusing on front-end architecture and modular design systems. I enjoy bridging the gap between design and development, shaping wireframes into scalable, reusable components/layouts, and building performant, reusable, interactive websites.'
    />

    <div className="row js--wp-1">
      <div className="col span-1-of-4 box">
        <i className="ion-ios-infinite-outline icon-big"></i>
        <h3>Up to 365 days/year</h3>
        <p>
          Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that&#39;s your style.
        </p>
      </div>

      <div className="col span-1-of-4 box">
        <i className="ion-ios-stopwatch-outline icon-big"></i>
        <h3>Ready in 20 minutes</h3>
        <p>
          You&#39;re only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you&#39;re 100% happy.
        </p>
      </div>

      <div className="col span-1-of-4 box">
        <i className="ion-ios-nutrition-outline icon-big"></i>
        <h3>100% organic</h3>
        <p>
          All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
        </p>
      </div>

      <div className="col span-1-of-4 box">
        <i className="ion-ios-cart-outline icon-big"></i>
        <h3>Order anything</h3>
        <p>
          We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
        </p>
      </div>
    </div>

  </section>
);

export default Features;