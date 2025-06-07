import { useState, useEffect } from 'react';
import { dummyDeliveries } from '@/models/DeliveryModels';

interface Location {
  lat: number;
  lng: number;
}

export const useLocation = (deliveryId: string) => {
  const [location, setLocation] = useState<Location>({ lat: 0, lng: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const delivery = dummyDeliveries.find((d) => d.id === deliveryId);
      if (delivery) {
        setLocation({
          lat: delivery.coordinates.lat + (Math.random() - 0.5) * 0.01,
          lng: delivery.coordinates.lng + (Math.random() - 0.5) * 0.01
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [deliveryId]);
};
