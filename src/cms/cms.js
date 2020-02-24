import CMS from 'netlify-cms-app';

import DrinkPreview from './templates/DrinkPreview';
import EventPreview from './templates/EventPreview';
import FoodPreview from './templates/FoodPreview';

CMS.registerPreviewTemplate('drink', DrinkPreview);
CMS.registerPreviewTemplate('event', EventPreview);
CMS.registerPreviewTemplate('food', FoodPreview);
