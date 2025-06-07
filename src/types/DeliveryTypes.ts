export interface Delivery {
  id: string;
  customerName: string;
  address: string;
  status: 'pending' | 'in-progress' | 'delivered' | 'cancelled';
  coordinates: { lat: number; lng: number };
  orderTime: string;
  estimatedDeliveryTime: string;
}
export interface DeliveryUpdate {
  id: string;
  status: 'pending' | 'in-progress' | 'delivered' | 'cancelled';
  estimatedDeliveryTime?: string;
}
export interface DeliveryLocation {
  id: string;
  coordinates: { lat: number; lng: number };
  timestamp: string;
}
export interface DeliveryHistory {
  id: string;
  deliveryId: string;
}
