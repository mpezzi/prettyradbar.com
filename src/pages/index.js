import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import EventListContainer from '../components/EventListContainer';
import DrinkListContainer from '../components/DrinkListContainer';
import FoodListContainer from '../components/FoodListContainer';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>
          IndexPage
        </h1>
        <section>
          <h2>
            Events
          </h2>
          <EventListContainer />
        </section>
        <section>
          <h2>
            Menu
          </h2>
          <FoodListContainer />
        </section>
        <section>
          <h2>
            Drinks
          </h2>
          <DrinkListContainer />
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage;
