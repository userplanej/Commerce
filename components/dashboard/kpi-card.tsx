'use client';

import { BadgeDelta, Card, DeltaType, Flex, Metric, ProgressBar, Text } from '@tremor/react';

type Kpi = {
  title: string;
  metric: string;
  progress: number;
  target: string;
  delta: string;
  deltaType: DeltaType;
};

export function KpiCard({ item }: { item: Kpi }) {
  return (
    <Card>
      <Flex alignItems="start">
        <div className="truncate">
          <Text>{item.title}</Text>
          <Metric className="truncate">{item.metric}</Metric>
        </div>
        <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
      </Flex>
      <Flex className="mt-4 space-x-2">
        <Text className="truncate">{`${item.progress}% (${item.metric})`}</Text>
        <Text>{item.target}</Text>
      </Flex>
      <ProgressBar value={item.progress} className="mt-2" />
    </Card>
  );
}
