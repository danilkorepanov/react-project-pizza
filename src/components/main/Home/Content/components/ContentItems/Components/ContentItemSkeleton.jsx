import React from 'react';
import ContentLoader from 'react-content-loader';

export const ContentItemSkeleton = () => (
  <div className='pizza-block-wrapper'>
    <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="326" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="436" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="427" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
  </div>
  
  
);

export default ContentItemSkeleton

// display: grid;
// grid-template-columns: repeat(4, 1fr);
// grid-template-rows: repeat(2, 1fr);
// grid-column-gap: 11px;
// grid-row-gap: 20px;

// @media (max-width: 1350px) {
//   grid-template-columns: repeat(3, 1fr);
//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(2, 1fr);
//     @media (max-width: 730px) {
//       grid-template-columns: repeat(1, 1fr);
//     }
//   }
// }