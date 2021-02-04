import { Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MovieMainScreen from '../screen/MovieMainScreen';
import MovieIntroScreen from '../screen/MovieIntroScreen';
import SdgsIntroScreen from '../screen/SdgsIntroScreen';
import TutorialMainScreen from '../screen/tutorials/TutorialMainScreen';
import Step1Screen from '../screen/tutorials/Step1Screen';
import Step2Screen from '../screen/tutorials/Step2Screen';
import Step3Screen from '../screen/tutorials/Step3Screen';
import Step4Screen from '../screen/tutorials/Step4Screen';
import Step5Screen from '../screen/tutorials/Step5Screen';
import Step6Screen from '../screen/tutorials/Step6Screen';

const MovieNavigator = createStackNavigator(
  {
    MovieMain: MovieMainScreen,
    MovieIntro: MovieIntroScreen,
    SdgsIntro: SdgsIntroScreen,
    TutorialMain: TutorialMainScreen,
    Step1: Step1Screen,
    Step2: Step2Screen,
    Step3: Step3Screen,
    Step4: Step4Screen,
    Step5: Step5Screen,
    Step6: Step6Screen,
  },
  {
    defaultNavigationOptions: {
      headerTitle: '옹골찬 영화 연구회',
    },
  }
);

export default createAppContainer(MovieNavigator);
