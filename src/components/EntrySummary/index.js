import React from 'react';
import { View } from 'react-native';
import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';
import Container from '~/components/Core/Container';
import styles from './styles';

const EntrySummary = (props) => {
  const { days = 7, onPressActionButton } = props;

  const categories = [
    { key: '1', description: 'Alimentação', amount: 200 },
    { key: '2', description: 'Combustível', amount: 12 },
    { key: '3', description: 'Aluguel', amount: 120 },
    { key: '4', description: 'Lazer', amount: 250 },
    { key: '5', description: 'Outros', amount: 1200 },
  ];

  return (
    <Container
      title="Categorias"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}
    >
      <View style={styles.contentBox}>
        <EntrySummaryChart />
        <EntrySummaryList categories={categories} />
      </View>
    </Container>
  );
};

export default EntrySummary;
