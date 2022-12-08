/**
 * @author AboveParadise 2022/11/12
 */
import {
    Box,
    HStack,
    Text,
    Divider,
    Select,
    Link,
    UnorderedList,
    ListItem,
    StatGroup,
    Stat,
    StatLabel, StatNumber, StatHelpText, StatArrow
} from "@chakra-ui/react";
import React, {Component} from 'react';
import ReactECharts from 'echarts-for-react';

// import * as React from "react";
function Data() {
    const property = {
        para: [100,9888,1231,33333],
        kw: ['马克思','中国化','方法论'],

        fields:["Lorem ipsum dolor sit amet","Consectetur adipiscing elit","Integer molestie lorem at massa","Facilisis in pretium nisl aliquet"]
    }
    const select = (e) => {
        console.log(e.target.value)
    }
    const option = [{
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line'
        }],
        lineStyle: {
            color: '#6f60f7',
            lineWidth: 4,
        },
    }];
    const s = {
        color:'#000000'
    }
    return(
        <Box
            width={'35%'} borderWidth={'5'} borderRadius={'12'} borderStyle={'solid'} marginLeft={'60%'}
            mr={20} position={'absolute'} boxShadow={'0 2px 10px rgb(0 0 0 / 10%)'}>

            {/*<HStack  mt={3} >*/}

                {/*<Box width={125}>*/}
                {/*    <Text textDecoration={'none'}*/}
                {/*          color={'#c42525'}*/}
                {/*          fontSize={'25'}*/}

                {/*          whiteSpace={'normal'}*/}
                {/*          align={'center'}*/}
                {/*    >*/}
                {/*        引用量*/}
                {/*    </Text>*/}
                {/*    <Text color={'#161616'}*/}
                {/*          fontSize={'20'}*/}
                {/*          m={8}*/}
                {/*          mt={10}*/}
                {/*          whiteSpace={'normal'}*/}
                {/*          align={'center'}>{property.para[0]}</Text>*/}
                {/*</Box>*/}
                {/*<Box width={125} m={8}>*/}
                {/*    <Text textDecoration={'none'}*/}
                {/*          color={'#34ea04'}*/}
                {/*          fontSize={'25'}*/}

                {/*          whiteSpace={'normal'}*/}
                {/*          align={'center'}*/}
                {/*    >*/}
                {/*        被引用量*/}
                {/*    </Text>*/}
                {/*    <Text color={'#161616'}*/}
                {/*          fontSize={'20'}*/}
                {/*          m={8}*/}
                {/*          mt={10}*/}
                {/*          whiteSpace={'normal'}*/}
                {/*          align={'center'}>{property.para[1]}</Text>*/}
                {/*</Box>*/}
                {/*<Box width={125} m={8}>*/}
                {/*    <Text textDecoration={'none'}*/}
                {/*          color={'#175bb4'}*/}
                {/*          fontSize={'25'}*/}

                {/*          whiteSpace={'normal'}*/}
                {/*          align={'center'}*/}
                {/*    >*/}
                {/*        收藏量*/}
                {/*    </Text>*/}
                {/*    <Text color={'#161616'}*/}
                {/*          fontSize={'20'}*/}
                {/*          m={8}*/}
                {/*          mt={10}*/}
                {/*          whiteSpace={'normal'}*/}
                {/*          align={'center'}>{property.para[2]}</Text>*/}
                {/*</Box>*/}
                {/*<Box width={125} m={8}>*/}
                {/*    <Text textDecoration={'none'}*/}
                {/*          color={'#faf14b'}*/}
                {/*          fontSize={'25'}*/}

                {/*          whiteSpace={'normal'}*/}
                {/*          align={'center'}*/}
                {/*    >*/}
                {/*        评论量*/}
                {/*    </Text>*/}
                {/*    <Text color={'#161616'}*/}
                {/*          fontSize={'20'}*/}
                {/*          m={8}*/}
                {/*          mt={10}*/}
                {/*          whiteSpace={'normal'}*/}
                {/*          align={'center'}>{property.para[3]}</Text>*/}

                {/*</Box>*/}
            {/*</HStack>*/}
            <StatGroup mt={10} mb={7} textAlign={'center'}>
                <Stat>
                    <StatLabel fontFamily={'宋体'}>引用量</StatLabel>
                    <StatNumber color={'#5808fb'}>345,670</StatNumber>
                    <StatHelpText>
                        <StatArrow type='increase' />
                        23.36%
                    </StatHelpText>
                </Stat>

                <Stat>
                    <StatLabel fontFamily={'宋体'}>被引用量</StatLabel>
                    <StatNumber  color={'#650ff8'}>45</StatNumber>
                    <StatHelpText>
                        <StatArrow type='decrease' />
                        9.05%
                    </StatHelpText>
                </Stat>
                <Stat>
                    <StatLabel fontFamily={'宋体'}>收藏量</StatLabel>
                    <StatNumber color={"#8720ef"}>345,670</StatNumber>
                    <StatHelpText>
                        <StatArrow type='increase' />
                        23.36%
                    </StatHelpText>
                </Stat>

                <Stat>
                    <StatLabel fontFamily={'宋体'}>评论量</StatLabel>
                    <StatNumber color={"#9929ea"}>45</StatNumber>
                    <StatHelpText>
                        <StatArrow type='decrease' />
                        9.05%
                    </StatHelpText>
                </Stat>
            </StatGroup>
            <Divider/>
            <Box ml={8} mt={5} mb={5}>
                <Text as={'b'} color={'black'} fontSize={20} fontFamily={'宋体'}>
                    领域
                </Text>
                <UnorderedList mt={2} color={'#7551FF'}>
                    {property.fields.map((value, key) => {
                        return(<ListItem key={key}><Link href={'/'}> {value}
                        </Link></ListItem>)
                    })}
                </UnorderedList>
            </Box>

            <Divider/>
            <Box sx={{ minWidth: 120, width:'100%'}}>
                <HStack mt={30}>
                <Text  textDecoration={'none'}
                      color={'#000000'}
                      fontSize={'20'} fontFamily={'宋体'}
                      ml={8}
                       mr={20}
                      whiteSpace={'normal'}
                      align={'center'} as={'b'}>
                    关键词分析
                </Text>
                    <Select placeholder='Keywords' width={60} color={'#000000'} cursor={'pointer'}>{
                        property.kw.map((value, key) => {
                            return (
                                <option key={key} value={value} cursor={'pointer'}
                                        onClick={(e) => select(e)}>{value}</option>
                            );
                        })
                    }
                    </Select>



                </HStack>
            </Box>
            <div>
            <ReactECharts option={option[0]} style={s}/>
            </div>



        </Box>
    )
}


export default Data;