import { useState } from 'react';

import Card from '../../ui/card/Card';
import ScrollablePackage from '../../ui/scrollablePackages/ScrollablePackage';
import Slide from '../../ui/slider/Slide';
import ScrollableImage from '../../ui/verticalSlide/ScrollableImage';

import CallBack from './call-back/CallBack';
import { businessImages } from './constants/constants';
import Consulting from './consulting/Consulting';
import Goals from './goals/Goals';
import Industries from './industries/Industries';
import Review from './review/Review';
import UrgentDevForm from './urgentDevForm/UrgentDevForm';
import WhatSet from './whatSets/WhatSet';

import styles from './PageTwo.module.scss';

const all = [
  '/assets/images/6.png',
  '/assets/images/7.png',
  '/assets/images/8.png',
  '/assets/images/1.png',
  '/assets/images/2.png',
  '/assets/images/3.png',
  '/assets/images/4.png',
  '/assets/images/5.png',
];

const beauty = [
  '/assets/images/1.png',
  '/assets/images/2.png',
  '/assets/images/3.png',
  '/assets/images/4.png',
  '/assets/images/7.png',
  '/assets/images/8.png',
  '/assets/images/5.png',
  '/assets/images/6.png',
];

const fitness = [
  '/assets/images/6.png',

  '/assets/images/1.png',
  '/assets/images/2.png',

  '/assets/images/5.png',
  '/assets/images/3.png',
  '/assets/images/4.png',
  '/assets/images/7.png',
  '/assets/images/8.png',
];
const food = [
  '/assets/images/3.png',
  '/assets/images/4.png',
  '/assets/images/1.png',
  '/assets/images/2.png',

  '/assets/images/5.png',
  '/assets/images/6.png',
  '/assets/images/7.png',
  '/assets/images/8.png',
];
const health = [
  '/assets/images/4.png',

  '/assets/images/3.png',

  '/assets/images/6.png',
  '/assets/images/7.png',
  '/assets/images/5.png',
  '/assets/images/1.png',
  '/assets/images/2.png',
  '/assets/images/8.png',
];
const noneProfit = [
  '/assets/images/6.png',
  '/assets/images/7.png',
  '/assets/images/1.png',
  '/assets/images/2.png',

  '/assets/images/8.png',
  '/assets/images/3.png',
  '/assets/images/4.png',
  '/assets/images/5.png',
];
const education = [
  '/assets/images/7.png',
  '/assets/images/4.png',
  '/assets/images/5.png',
  '/assets/images/1.png',
  '/assets/images/6.png',
  '/assets/images/2.png',
  '/assets/images/3.png',

  '/assets/images/8.png',
];
const cbd = [
  '/assets/images/4.png',
  '/assets/images/6.png',
  '/assets/images/7.png',
  '/assets/images/8.png',
  '/assets/images/2.png',
  '/assets/images/3.png',
  '/assets/images/1.png',
  '/assets/images/5.png',
];
const eCommerce = [
  '/assets/images/1.png',
  '/assets/images/2.png',
  '/assets/images/5.png',
  '/assets/images/6.png',
  '/assets/images/3.png',
  '/assets/images/4.png',
  '/assets/images/7.png',
  '/assets/images/8.png',
];
const realEstate = [
  '/assets/images/7.png',
  '/assets/images/8.png',
  '/assets/images/1.png',
  '/assets/images/2.png',
  '/assets/images/3.png',
  '/assets/images/4.png',
  '/assets/images/5.png',
  '/assets/images/6.png',
];
const auto = [
  '/assets/images/1.png',
  '/assets/images/4.png',
  '/assets/images/5.png',
  '/assets/images/6.png',
  '/assets/images/2.png',
  '/assets/images/3.png',
  '/assets/images/7.png',
  '/assets/images/8.png',
];
const images: any = {
  All: all,
  Beauty: beauty,
  Auto: auto,
  'Real Estate': realEstate,
  'E-Commerce': eCommerce,
  CBD: cbd,
  Education: education,
  Fitness: fitness,
  Food: food,
  Health: health,
  'Non Profit': noneProfit,
};

const packages: any = [
  {
    packageName: 'BASIC PACKAGE',
    oldPrice: '794.00',
    currentPrice: '239.00',
    text: 'Suitable for potential super-startups and brand revamps for companies.',
    list: [
      '3 Page Website',
      '2 Stock Images',
      '1 jQuery Slider Banner',
      'Contact/Query Form',
      '48 to 72 hours TAT',
      'Complete Deployment',
      '100% Satisfaction Guarantee',
      '100% Unique Design',

      '100% Money Back Guarantee',
    ],
  },
  {
    packageName: 'BASIC PACKAGE',
    oldPrice: '794.00',
    currentPrice: '239.00',
    text: 'Suitable for potential super-startups and brand revamps for companies.',
    list: [
      '3 Page Website',
      '2 Stock Images',
      '1 jQuery Slider Banner',
      'Contact/Query Form',
      '48 to 72 hours TAT',
      'Complete Deployment',
      '100% Satisfaction Guarantee',
      '100% Unique Design',

      '100% Money Back Guarantee',
    ],
  },
  {
    packageName: 'BASIC PACKAGE',
    oldPrice: '794.00',
    currentPrice: '239.00',
    text: 'Suitable for potential super-startups and brand revamps for companies.',
    list: [
      '3 Page Website',
      '2 Stock Images',
      '1 jQuery Slider Banner',
      'Contact/Query Form',
      '48 to 72 hours TAT',
      'Complete Deployment',
      '100% Satisfaction Guarantee',
      '100% Unique Design',

      '100% Money Back Guarantee',
    ],
  },
  {
    packageName: 'BASIC PACKAGE',
    oldPrice: '794.00',
    currentPrice: '239.00',
    text: 'Suitable for potential super-startups and brand revamps for companies.',
    list: [
      '3 Page Website',
      '2 Stock Images',
      '1 jQuery Slider Banner',
      'Contact/Query Form',
      '48 to 72 hours TAT',
      'Complete Deployment',
      '100% Satisfaction Guarantee',
      '100% Unique Design',

      '100% Money Back Guarantee',
    ],
  },
  {
    packageName: 'BASIC PACKAGE',
    oldPrice: '794.00',
    currentPrice: '239.00',
    text: 'Suitable for potential super-startups and brand revamps for companies.',
    list: [
      '3 Page Website',
      '2 Stock Images',
      '1 jQuery Slider Banner',
      'Contact/Query Form',
      '48 to 72 hours TAT',
      'Complete Deployment',
      '100% Satisfaction Guarantee',
      '100% Unique Design',

      '100% Money Back Guarantee',
    ],
  },
  {
    packageName: 'BASIC PACKAGE',
    oldPrice: '794.00',
    currentPrice: '239.00',
    text: 'Suitable for potential super-startups and brand revamps for companies.',
    list: [
      '3 Page Website',
      '2 Stock Images',
      '1 jQuery Slider Banner',
      'Contact/Query Form',
      '48 to 72 hours TAT',
      'Complete Deployment',
      '100% Satisfaction Guarantee',
      '100% Unique Design',

      '100% Money Back Guarantee',
    ],
  },
  {
    packageName: 'BASIC PACKAGE',
    oldPrice: '794.00',
    currentPrice: '239.00',
    text: 'Suitable for potential super-startups and brand revamps for companies.',
    list: [
      '3 Page Website',
      '2 Stock Images',
      '1 jQuery Slider Banner',
      'Contact/Query Form',
      '48 to 72 hours TAT',
      'Complete Deployment',
      '100% Satisfaction Guarantee',
      '100% Unique Design',
      '100% Money Back Guarantee',
    ],
  },
  {
    packageName: 'BASIC PACKAGE',
    oldPrice: '794.00',
    currentPrice: '239.00',
    text: 'Suitable for potential super-startups and brand revamps for companies.',
    list: [
      '3 Page Website',
      '2 Stock Images',
      '1 jQuery Slider Banner',
      'Contact/Query Form',
      '48 to 72 hours TAT',
      'Complete Deployment',
      '100% Satisfaction Guarantee',
      '100% Unique Design',

      '100% Money Back Guarantee',
    ],
  },
];

const websitesData = [
  {
    img: '/assets/images/seo.png',
    title: 'Seo-Friendly & responsive',
    text: 'What good is a website if no one ever views it? To be visible to your target audience, your website must be responsive and SEO-friendly.',
  },
  {
    img: '/assets/images/integrate.png',
    title: 'App Integrations',
    text: 'Our incorporated app integrations help retailers save time and money by reducing administrative tasks and boosting user experience and functionality.',
  },
  {
    img: '/assets/images/manage.png',
    title: 'Content Management System',
    text: "Your E-commerce platform's administrator has the authority to alter or add content. The administration interface is more basic and user-friendly.",
  },
  {
    img: '/assets/images/loadTime.png',
    title: 'Quick Load Time',
    text: 'You can achieve lightning-fast load speeds and provide your customers a terrific online buying experience with Custom Website Development',
  },
];
const PageTwo = () => {
  const [active, setActive] = useState<any>('All');
  console.log(images?.[active], 'jagajuga');
  return (
    <div>
      <div className={styles.pageTwoWrapper}>
        <div className={styles.wrapper}>
          <div className={styles.businessColumn}>
            <div>
              <h1>
                We Help You To Grow Your Business <span className={styles.redOnline}>Online.</span>
              </h1>
              <p>
                With Web Expert llc that attract consumers' attention, raise conversion rates, and increase profits, we
                seek to deliver great profitable success to your business.
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <button>Get Custom Quote</button>
              <button className={styles.scheduleButton}>Schedule A Call</button>
            </div>
          </div>
          <div className={styles.slideColumn}>
            <Slide slides={businessImages} withButtons={false} />
          </div>
        </div>
      </div>
      <Consulting />
      <div>
        <Goals active={active} setActive={setActive} />
      </div>
      <div className={styles.scrollableWrapper}>
        {images?.[active]?.map((image: any) => (
          <ScrollableImage src={image} />
        ))}
      </div>
      <div>
        <UrgentDevForm />
      </div>
      <div className={styles.pText}>
        <p>Flexible Website Development Packages With Money Back Guarantee.</p>
      </div>
      <div className={styles.scrollableWrapperPackages}>
        {packages.map((singlePackage: any) => (
          <ScrollablePackage data={singlePackage} />
        ))}
      </div>
      <div>
        <WhatSet />
      </div>
      <div>
        <Industries />
      </div>
      <div className={styles.pText}>
        <p>Your Business Websites Needs A Custom Website Development To Stand Out.</p>
      </div>
      <div className={styles.cardWrapper}>
        {websitesData.map((data: any) => (
          <Card data={data} />
        ))}
      </div>
      <div>
        <Review />
      </div>
      <div>
        <CallBack />
      </div>
    </div>
  );
};

export default PageTwo;
