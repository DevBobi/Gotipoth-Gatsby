import React from 'react';
import { CallToAction } from '../components/CallToAction';
import { Heading } from '../components/Heading';
import Layout from '../components/layout/Layout';
import { ProductLayout } from '../components/layout/ProductLayout';

const Index = () => (
  <Layout>
    <Heading />
    <ProductLayout />
    <CallToAction />
  </Layout>
);

export default Index;
