import React from 'react';
import { View } from 'react-native';
import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';
import Container from '~/components/Core/Container';
import useBalanceSumByCategory from '~/hooks/useBalanceSumbyCategory';
import styles from './styles';

const EntrySummary = (props) => {
  const { days = 7, onPressActionButton } = props;
  const [balanceSum] = useBalanceSumByCategory(days);

  return (
    <Container
      title="Categorias"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}
    >
      <View style={styles.contentBox}>
        <EntrySummaryChart balance={balanceSum} />
        <EntrySummaryList balance={balanceSum} />
      </View>
    </Container>
  );
};

export default EntrySummary;
