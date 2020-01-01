import React from "react";

import PartItem from '../PartItem/PartItem';

import slugify from 'slugify';

export default function PartList(props) {

    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return <PartItem itemHash={itemHash} feature={feature} item={item} {...props} />;
        });
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });

  return features;
}
