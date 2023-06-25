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

export type DailyPerformance = {
  date: string;
  Sales: number;
  Profit: number;
  Customers: number;
};

export const performance: DailyPerformance[] = [
  {
    date: '2023-05-01',
    Sales: 900.73,
    Profit: 173,
    Customers: 73
  },
  {
    date: '2023-05-02',
    Sales: 1000.74,
    Profit: 174.6,
    Customers: 74
  },
  {
    date: '2023-05-03',
    Sales: 1100.93,
    Profit: 293.1,
    Customers: 293
  },
  {
    date: '2023-05-04',
    Sales: 1200.9,
    Profit: 290.2,
    Customers: 29
  }
];
export function TremorSection({}: {}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedKpi = kpiList[selectedIndex]!;

  const areaChartArgs = {
    className: 'mt-5 h-72',
    data: performance,
    index: 'date',
    categories: [selectedKpi],
    colors: ['blue'] as Color[],
    showLegend: false,
    valueFormatter: formatters[selectedKpi],
    yAxisWidth: 56
  };

  return (
    <Container className="flex h-full w-full flex-col">
      <div className=" mt-3 inline-block  h-[60px] w-full overflow-visible bg-white ">&nbsp;</div>
      <div className="ml-9 mt-12 flex flex-row">
        <div className=" dashboard-scrollbar  mt-3 h-[523px] w-[169px] overflow-auto">
          <h3 className="text-xl font-medium tracking-widest  ">overview</h3>
          <h3 className="text-xl font-medium tracking-widest">insights</h3>
          <h3 className="text-xl font-medium tracking-widest">campaigns</h3>
          <h3 className="text-xl font-medium tracking-widest">audiences</h3>
          <h3 className="text-xl font-medium tracking-widest">assetreport</h3>
          <h3 className="text-xl font-medium tracking-widest">overview</h3>
          <h3 className="text-xl font-medium tracking-widest">insights</h3>
          <h3 className="text-xl font-medium tracking-widest">campaigns</h3>
          <h3 className="text-xl font-medium tracking-widest">audiences</h3>
          <h3 className="text-xl font-medium tracking-widest">assetreport</h3>
          <h3 className="text-xl font-medium tracking-widest">overview</h3>
          <h3 className="text-xl font-medium tracking-widest">insights</h3>
          <h3 className="text-xl font-medium tracking-widest">campaigns</h3>
          <h3 className="text-xl font-medium tracking-widest">audiences</h3>
          <h3 className="text-xl font-medium tracking-widest">assetreport</h3>
          <h3 className="text-xl font-medium tracking-widest">overview</h3>
          <h3 className="text-xl font-medium tracking-widest">insights</h3>
          <h3 className="text-xl font-medium tracking-widest">campaigns</h3>
          <h3 className="text-xl font-medium tracking-widest">audiences</h3>
          <h3 className="text-xl font-medium tracking-widest">assetreport</h3>
          <h3 className="text-xl font-medium tracking-widest">overview</h3>
          <h3 className="text-xl font-medium tracking-widest">insights</h3>
          <h3 className="text-xl font-medium tracking-widest">campaigns</h3>
          <h3 className="text-xl font-medium tracking-widest">audiences</h3>
          <h3 className="text-xl font-medium tracking-widest">assetreport</h3>
        </div>

        <div className="grid-rows-12 grid flex-1 grid-cols-12 ">
          <div className="row-span-12  col-span-12 mt-3 items-center justify-center overflow-scroll  px-6 py-0 sm:mx-2">
            <Title>Dashboard</Title>
            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

            <TabGroup className="mt-0">
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
                            <Flex
                              className="space-x-0.5"
                              justifyContent="start"
                              alignItems="center"
                            >
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
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </Container>
  );
}
