import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  DeliveryDetails: { deliveryId: string };
  DeliveryModal: { deliveryId: string };
};

export type CarPlayStackParamList = {
  CarPlayHome: undefined;
  CarPlayDetails: { deliveryId: string };
};
