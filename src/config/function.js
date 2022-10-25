import {LayoutAnimation} from 'react-native';

export const LayoutAnimate = (time = 500) => {
  LayoutAnimation.configureNext({
    duration: time,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {type: LayoutAnimation.Types.easeInEaseOut},
  });
};

export const Validations = {
  Phone: val => {
    //Pakistan Mobile Number Validator
    // let regex = /^((\\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;

    return val !== '03001234567';
  },
};
