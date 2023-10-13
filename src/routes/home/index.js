import React from 'react'
import Header from '../../componets/home/header';
import Herobanner from '../../componets/home/herobanner';
import Expanding from '../../componets/home/expanding';
import Product from '../../componets/home/product';
import World from '../../componets/home/world';
import Stay from '../../componets/home/stay';
import Meta from '../../componets/home/meta';
import Company from '../../componets/home/compnay';
import Community from '../../componets/home/community';
import News from '../../componets/home/news';

export default function Home() {
  return (
    <div>
      <Header />
      <Herobanner />
      <Expanding />
      <Product/>
      <World/>
      <Stay/>
      <Meta/>
      <Company/>
      <Community/>
      <News/>
    </div>
  )
}
