import {
  CarPlay,
  GridTemplate,
  InformationTemplate
} from 'react-native-carplay';
import { dummyDeliveries } from '@/models/DeliveryModels';

export const setupCarPlay = () => {
  CarPlay.registerOnConnect(() => {
    console.log('CarPlay connected');
    const template = new GridTemplate({
      title: 'Deliveries',
      items: dummyDeliveries.map((delivery) => ({
        text: delivery.customerName,
        detailText: `${delivery.address} - ${delivery.status}`,
        imgUrl: 'https://example.com/delivery-icon.png',
        onSelected: () => {
          const detailsTemplate = new InformationTemplate({
            title: `Delivery to ${delivery.customerName}`,
            items: [
              { title: 'Address', detail: delivery.address },
              { title: 'Status', detail: delivery.status },
              {
                title: 'Order Time',
                detail: new Date(delivery.orderTime).toLocaleString()
              }
            ]
          });
          CarPlay.pushTemplate(detailsTemplate, true);
        }
      }))
    });
    CarPlay.setRootTemplate(template);
  });

  CarPlay.registerOnDisconnect(() => {
    console.log('CarPlay disconnected');
  });
};
