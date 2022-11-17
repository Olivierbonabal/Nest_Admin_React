import React, { useEffect } from 'react';
import Wrapper from "../components/Wrapper";
import * as c3 from 'c3';
import axios from 'axios';

const Dashboard = () => {
    useEffect(() => {
        (
            async () => {

                const chart = c3.generate({
                    bindto: '#chart',
                    data: {
                        x: 'x',
                        columns: [
                            ['x'],
                            ['Sales'],
                        ],
                        types: {
                            Sales: 'bar'
                        }
                    },
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                format: '%d-%m-%Y'
                            }
                        }
                    }
                });
                // const chart = c3.generate({
                //     bindto: '#chart',
                //     data: {
                //       columns: [
                //         ['data1', 30, 200, 100, 400, 150, 250],
                //         ['data2', 50, 20, 10, 40, 15, 25]
                //       ],
                //       axes: {
                //         data2: 'y2'
                //       },
                //       types: {
                //         data2: 'bar' // ADD
                //       }
                //     },
                //     axis: {
                //       y: {
                //         label: {
                //           text: 'Y Label',
                //           position: 'outer-middle'
                //         }
                //       },
                //       y2: {
                //         show: true,
                //         label: {
                //           text: 'Y2 Label',
                //           position: 'outer-middle'
                //         }
                //       }
                //     }
                // });

                const { data } = await axios.get('chart');

                chart.load({
                    columns: [
                        ['x', ...data.map((r: any) => r.date)],
                        ['Sales', ...data.map((r: any) => r.sum)]
                    ]
                });
            }
        )()
    }, []);

    return (
        <Wrapper>

            <div className='my-3'>
                <h2>Ventes du Jour</h2>
            </div>
            <div id="chart" />
        </Wrapper>
    )
}

export default Dashboard;