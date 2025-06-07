import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Delivery } from '@/types/DeliveryTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dummyDeliveries } from '@/models/DeliveryModels';

export const deliveryApi = createApi({
  reducerPath: 'deliveryApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Deliveries'],
  endpoints: (builder) => ({
    getDeliveries: builder.query<Delivery[], void>({
      async queryFn() {
        const stored = await AsyncStorage.getItem('deliveries');
        return { data: stored ? JSON.parse(stored) : dummyDeliveries };
      },
      providesTags: ['Deliveries']
    }),
    updateDeliveryStatus: builder.mutation<
      Delivery,
      { id: string; status: Delivery['status'] }
    >({
      queryFn: async ({ id, status }) => {
        const deliveries = await AsyncStorage.getItem('deliveries');
        const data = deliveries ? JSON.parse(deliveries) : dummyDeliveries;
        console.log('Updating delivery status:', id, status, data);
        const delivery = data.find((d: Delivery) => d.id === id);
        if (!delivery)
          return { error: { status: 404, data: 'Delivery not found' } };
        delivery.status = status;
        await AsyncStorage.setItem('deliveries', JSON.stringify(data));
        return { data: delivery };
      },
      invalidatesTags: ['Deliveries']
    })
  })
});

export const { useGetDeliveriesQuery, useUpdateDeliveryStatusMutation } =
  deliveryApi;
