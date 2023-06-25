'use client';

import {
  AreaChart,
  Card,
  Color,
  Flex,
  Grid,
  Icon,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title
} from '@tremor/react';

import { InformationCircleIcon } from '@heroicons/react/solid';

import type { DeltaType } from '@tremor/react';

import Container from './common/container';

import { useState } from 'react';
import { KpiCard } from './dashboard/kpi-card';

const kpiData = [
  {
    title: 'Sales',
    metric: '$ 12,699',
    progress: 15.9,
    target: '$ 80,000',
    delta: '13.2%',
    deltaType: 'moderateIncrease' as DeltaType
  },
  {
    title: 'Profit',
    metric: '$ 45,564',
    progress: 36.5,
    target: '$125,000',
    delta: '23.9%',
    deltaType: 'increase' as DeltaType
  },
  {
    title: 'Customers',
    metric: '999,072',
    progress: 53.6,
    target: '1,200,000',
    delta: '10.1%',
    deltaType: 'moderateDecrease' as DeltaType
  }
];

const Kpis = {
  Sales: 'Sales',
  Profit: 'Profit',
  Customers: 'Customers'
};

const kpiList = [Kpis.Sales, Kpis.Profit, Kpis.Customers];

const usNumberformatter = (number: number, decimals = 0) =>
  Intl.NumberFormat('us', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })
    .format(Number(number))
    .toString();

const formatters: { [key: string]: any } = {
  Sales: (number: number) => `$ ${usNumberformatter(number)}`,
  Profit: (number: number) => `$ ${usNumberformatter(number)}`,
  Customers: (number: number) => `${usNumberformatter(number)}`,
  Delta: (number: number) => `${usNumberformatter(number, 2)}%`
};

export function TremorSection({}: {}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedKpi = kpiList[selectedIndex]!;

  const areaChartArgs = {
    className: 'mt-5 h-72',
    data: performance as unknown as number[],
    index: 'date',
    categories: [selectedKpi],
    colors: ['blue'] as Color[],
    showLegend: false,
    valueFormatter: formatters[selectedKpi],
    yAxisWidth: 56
  };

  return (
    <Container className="grid  h-full w-full grid-cols-6 grid-rows-6 gap-10 ">
      <div className="col-span-2 row-span-6 mx-6 mt-3  max-w-lg  ">
        <h1> Tremor demo</h1>
      </div>

      <div className="col-span-4  row-span-6  mt-3 px-12 py-12 sm:mx-2">
        <Title>Dashboard</Title>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

        <TabGroup className="mt-6">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Detail</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
                {kpiData.map((item) => (
                  <KpiCard key={item.title} item={item} />
                ))}
              </Grid>
              <div className="mt-6 block">
                <Card>
                  <div className="h-80">
                    <div className="justify-between md:flex">
                      <div>
                        <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
                          <Title> Performance History </Title>
                          <Icon
                            icon={InformationCircleIcon}
                            variant="simple"
                            tooltip="Shows daily increase or decrease of particular domain"
                          />
                        </Flex>
                        <Text> Daily change per domain </Text>
                      </div>
                      <div>
                        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
                          <TabList color="gray" variant="solid">
                            <Tab>Sales</Tab>
                            <Tab>Profit</Tab>
                            <Tab>Customers</Tab>
                          </TabList>
                        </TabGroup>
                      </div>
                    </div>
                    {/*  그래프 패널 진행중 */}
                    <div className="mt-8 hidden sm:block">
                      <AreaChart {...areaChartArgs} />
                    </div>
                    {/*  그래프 패널 마지막 */}
                  </div>
                </Card>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="mt-6">
                <Card>
                  <div className="h-96" />
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </Container>
  );
}
