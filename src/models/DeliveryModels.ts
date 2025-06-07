import { Delivery } from '@/types/DeliveryTypes';

export const dummyDeliveries: Delivery[] = [
  {
    id: '1',
    customerName: 'John Doe',
    address: '123 Main St, San Francisco, CA',
    status: 'pending',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    orderTime: '2025-06-07T10:00:00Z',
    estimatedDeliveryTime: '2025-06-07T11:00:00Z'
  },
  {
    id: '2',
    customerName: 'Jane Smith',
    address: '456 Oak Ave, San Francisco, CA',
    status: 'in-progress',
    coordinates: { lat: 37.7849, lng: -122.4294 },
    orderTime: '2025-06-07T11:00:00Z',
    estimatedDeliveryTime: '2025-06-07T12:00:00Z'
  },

  {
    id: '3',
    customerName: 'Juan Pedri',
    address: '456 Oak Ave, San Francisco, CA',
    status: 'delivered',
    coordinates: { lat: 37.7849, lng: -122.4294 },
    orderTime: '2025-06-07T11:00:00Z',
    estimatedDeliveryTime: '2025-06-07T12:00:00Z'
  },
  {
    id: '4',
    customerName: 'Alice Johnson',
    address: '789 Pine St, San Francisco, CA',
    status: 'cancelled',
    coordinates: { lat: 37.7949, lng: -122.4394 },
    orderTime: '2025-06-07T12:00:00Z',
    estimatedDeliveryTime: '2025-06-07T13:00:00Z'
  },
  {
    id: '5',
    customerName: 'Bob Brown',
    address: '321 Maple Dr, San Francisco, CA',
    status: 'pending',
    coordinates: { lat: 37.8049, lng: -122.4494 },
    orderTime: '2025-06-07T13:00:00Z',
    estimatedDeliveryTime: '2025-06-07T14:00:00Z'
  }
];
