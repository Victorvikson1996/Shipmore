import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-native-shared-element';
import { Delivery } from '@/types/DeliveryTypes';
import { theme } from '../utils/theme';

interface DeliveryCardProps {
  delivery: Delivery;
  onPress: () => void;
}

export default function DeliveryCard({ delivery, onPress }: DeliveryCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <SharedElement id={`delivery.${delivery.id}.card`} onNode={() => {}}>
        <View style={styles.card}>
          <Text style={styles.title}>{delivery.customerName}</Text>
          <Text style={styles.subtitle}>{delivery.address}</Text>
          <Text style={styles.status}>Status: {delivery.status}</Text>
        </View>
      </SharedElement>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.medium,
    marginVertical: theme.spacing.small,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: theme.colors.text
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.secondaryText,
    marginBottom: 4
  },
  status: {
    fontSize: 14,
    color: theme.colors.primary
  }
});
