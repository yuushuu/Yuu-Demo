var tb = new Vue({
    el: "#tb",
    data: {
        list: [
            { jh: '#111', qk: '区块111', jgrq: '2018-08-07', jglx: '碳酸盐垢', yjlx: '防垢剂/4123' },
            { jh: '#222', qk: '区块222', jgrq: '2018-08-08', jglx: '钙垢', yjlx: '防垢剂/8823' },
            { jh: '#333', qk: '区块333', jgrq: '2018-08-09', jglx: '钡垢', yjlx: '防垢剂/087' },
            { jh: '#444', qk: '区块444', jgrq: '2018-08-10', jglx: '硅垢', yjlx: '防垢剂/80-7' },
            { jh: '#555', qk: '区块555', jgrq: '2018-08-11', jglx: '镁垢', yjlx: '防垢剂/234' }
        ]
    },
    methods: {}
})



//left_top_pic
var left_top_pic = echarts.init(document.getElementById('left_top_pic'));
var option1 = {
    title: {
        text: 'CA图-人群兴趣',
        subtext: '2010-01-01'
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        // trigger: 'axis',
        showDelay: 0,
        formatter: function(params) {
            if (params.value.length > 1) {
                return '人群兴趣' + ' :<br/>' +
                    params.value[0] + ' , ' +
                    params.value[1];
            } else {
                return params.seriesName + ' :<br/>' +
                    params.value;
            }
        },
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            }
        }
    },
    toolbox: {
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            }
        }
    },
    brush: {},
    legend: {
        data: ['分析对象', '兴趣点'],
        left: 'center'
    },
    xAxis: {
        type: 'value',
        scale: true,
        name: 'Dim(0.59)',
        nameLocation: 'center',

        min: -0.09,
        max: 0.09,
        //splitLine:{show:false},
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        nameTextStyle: {
            lineHeight: 30,
        }
    },
    yAxis: {
        type: 'value',
        scale: true,
        name: 'Dim(0.24)',
        nameLocation: 'center',
        min: -0.06,
        max: 0.06,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        nameTextStyle: {
            lineHeight: 30,
        }
    },
    series: [

        {
            name: '分析对象',
            type: 'scatter',
            label: {
                normal: {
                    formatter: '{@[2]}',
                    show: true,
                    position: 'right',
                    fontSize: '16px'
                }
            },
            data: [
                [-0.046, -0.019, '本田思域'],
                [-0.018, 0.029, '丰田凯美瑞'],
                [0.026, -0.039, '马自达6'],
                [0.044, -0.011, '本田雅阁']
            ],
        }, {
            name: '兴趣点',
            type: 'scatter',
            label: {
                normal: {
                    formatter: '{@[2]}',
                    show: true,
                    position: 'right'
                }
            },

            data: [
                [-0.056, -0.023, '金融财经'],
                [-0.026, 0.043, '旅游'],
                [-0.016, 0.019, '影视'],
                [-0.022, 0.017, '休闲爱好'],
                [-0.032, -0.017, '求职'],
                [-0.04, 0.024, '3C电子'],
                [-0.033, 0.028, '体育健身'],
                [-0.015, 0.03, '娱乐'],
                [0.006, 0.025, '追剧'],
                [-0.046, -0.029, '服饰'],
                [-0.065, -0.009, '教育'],
                [0.003, -0.043, '孕婴育儿'],
                [0.023, 0.004, '网游'],
                [0.019, -0.007, '奢侈品'],
                [0.066, -0.004, '美容美体']
            ],

        }

    ],

};
left_top_pic.setOption(option1);

//right_top_pic
var right_top_pic = echarts.init(document.getElementById('right_top_pic'));
var option2 = {
    title: {
        text: 'CA图-KOL/明星',
        subtext: '2010-01-01'
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        // trigger: 'axis',
        showDelay: 0,
        formatter: function(params) {
            if (params.value.length > 1) {
                return params.value[0] + ' , ' +
                    params.value[1];
            } else {
                return params.seriesName + ' :<br/>' +
                    params.value;
            }
        },
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            }
        }
    },
    toolbox: {
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            }
        }
    },
    brush: {},
    legend: {
        data: ['分析对象', 'KOL/明星'],
        left: 'center'
    },
    xAxis: {
        type: 'value',
        scale: true,
        name: 'Dim(0.59)',
        nameLocation: 'center',

        min: -0.09,
        max: 0.09,
        //splitLine:{show:false},
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        nameTextStyle: {
            lineHeight: 30,
        }
    },
    yAxis: {
        type: 'value',
        scale: true,
        name: 'Dim(0.24)',
        nameLocation: 'center',
        min: -0.06,
        max: 0.06,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        nameTextStyle: {
            lineHeight: 30,
        }
    },
    series: [

        {
            name: '分析对象',
            type: 'scatter',
            label: {
                normal: {
                    formatter: '{@[2]}',
                    show: true,
                    position: 'right',
                    fontSize: '16px'
                }
            },
            data: [
                [-0.046, -0.019, '本田思域'],
                [0.01, 0.041, '丰田凯美瑞'],
                [0.001, -0.012, '马自达6'],
                [0.029, 0.022, '本田雅阁']
            ],
        }, {
            name: 'KOL/明星',
            type: 'scatter',
            label: {
                normal: {
                    formatter: '{@[2]}',
                    show: true,
                    position: 'right'
                }
            },

            data: [
                [-0.056, -0.023, '周杰伦'],
                [-0.026, 0.043, '王力宏'],
                [-0.016, 0.019, '杨幂'],
                [-0.022, 0.017, 'Papi'],
                [-0.032, -0.017, '贾乃亮'],
                [-0.04, 0.024, 'Yuu'],
                [-0.033, 0.028, '李佳奇'],
                [-0.015, 0.03, '李子柒'],
                [0.006, 0.025, '肖战'],
                [-0.046, -0.029, '杨紫'],
                [-0.065, -0.009, '李现'],
                [0.003, -0.043, '林志颖'],
                [0.023, 0.004, '王一博'],
                [0.019, -0.007, '刘涛'],
                [0.066, -0.004, '徐峥']
            ],

        }

    ],

};
right_top_pic.setOption(option2);

//left_down_pic
var left_down_pic = echarts.init(document.getElementById('left_down_pic'));
var option3 = {
    title: {
        text: 'CA图-地域',
        subtext: '2010-01-01'
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        // trigger: 'axis',
        showDelay: 0,
        formatter: function(params) {
            if (params.value.length > 1) {
                return '地域' + ' :<br/>' +
                    params.value[0] + ' , ' +
                    params.value[1];
            } else {
                return params.seriesName + ' :<br/>' +
                    params.value;
            }
        },
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            }
        }
    },
    toolbox: {
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            }
        }
    },
    brush: {},
    legend: {
        data: ['分析对象', '地域'],
        left: 'center'
    },
    xAxis: {
        type: 'value',
        scale: true,
        name: 'Dim(0.59)',
        nameLocation: 'center',

        min: -0.09,
        max: 0.09,
        //splitLine:{show:false},
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        nameTextStyle: {
            lineHeight: 30,
        }
    },
    yAxis: {
        type: 'value',
        scale: true,
        name: 'Dim(0.24)',
        nameLocation: 'center',
        min: -0.06,
        max: 0.06,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        nameTextStyle: {
            lineHeight: 30,
        }
    },
    series: [

        {
            name: '分析对象',
            type: 'scatter',
            label: {
                normal: {
                    formatter: '{@[2]}',
                    show: true,
                    position: 'right',
                    fontSize: '16px'
                }
            },
            data: [
                [-0.033, 0.015, '本田思域'],
                [-0.018, 0.029, '丰田凯美瑞'],
                [0.026, -0.039, '马自达6'],
                [0.044, -0.011, '本田雅阁']
            ],
        }, {
            name: '地域',
            type: 'scatter',
            label: {
                normal: {
                    formatter: '{@[2]}',
                    show: true,
                    position: 'right'
                }
            },

            data: [
                [-0.056, 0.023, '华南地区'],
                [-0.026, 0.043, '深圳'],
                [-0.016, 0.019, '广州'],
                [-0.022, 0.017, '江苏'],
                [-0.032, 0.01, '成都'],
                [-0.04, 0.024, '杭州'],
                [-0.033, 0.028, '厦门'],
                [-0.015, 0.03, '福建'],
                [0.006, 0.025, '西南地区'],
                [-0.046, 0.029, '华中地区'],
                [-0.065, 0.009, '西北地区'],
                [0.014, -0.038, '华东地区'],
                [0.006, -0.049, '上海'],
                [0.055, -0.005, '东北地域']
            ],

        }

    ],

};
left_down_pic.setOption(option3);

//right_down_pic
var right_down_pic = echarts.init(document.getElementById('right_down_pic'));
var option4 = {
    title: {
        text: 'CA图-人口属性',
        subtext: '2010-01-01'
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        // trigger: 'axis',
        showDelay: 0,
        formatter: function(params) {
            if (params.value.length > 1) {
                return params.value[0] + ' , ' +
                    params.value[1];
            } else {
                return params.seriesName + ' :<br/>' +
                    params.value;
            }
        },
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            }
        }
    },
    toolbox: {
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            }
        }
    },
    brush: {},
    legend: {
        data: ['分析对象', '人口属性'],
        left: 'center'
    },
    xAxis: {
        type: 'value',
        scale: true,
        name: 'Dim(0.59)',
        nameLocation: 'center',

        min: -0.09,
        max: 0.09,
        //splitLine:{show:false},
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        nameTextStyle: {
            lineHeight: 30,
        }
    },
    yAxis: {
        type: 'value',
        scale: true,
        name: 'Dim(0.24)',
        nameLocation: 'center',
        min: -0.06,
        max: 0.06,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        nameTextStyle: {
            lineHeight: 30,
        }
    },
    series: [

        {
            name: '分析对象',
            type: 'scatter',
            label: {
                normal: {
                    formatter: '{@[2]}',
                    show: true,
                    position: 'right',
                    fontSize: '16px'
                }
            },
            data: [
                [-0.046, -0.019, '本田思域'],
                [0.01, 0.041, '丰田凯美瑞'],
                [-0.021, 0.024, '马自达6'],
                [0.029, 0.022, '本田雅阁']
            ],
        }, {
            name: '人口属性',
            type: 'scatter',
            label: {
                normal: {
                    formatter: '{@[2]}',
                    show: true,
                    position: 'right'
                }
            },

            data: [
                [-0.056, -0.023, '男'],
                [-0.026, 0.043, '20-30岁'],
                [-0.016, 0.019, '博士'],
                [-0.022, 0.017, '硕士'],
                [-0.032, -0.017, '30-40岁'],
                [-0.04, 0.024, '40-50岁'],
                [-0.033, 0.028, '本科以下'],
                [-0.015, 0.03, '女'],
                [0.006, 0.025, '40-50岁'],
                [-0.046, -0.029, '本科'],
                [-0.065, -0.009, '10-19岁'],
            ],

        }

    ],

};
right_down_pic.setOption(option4);

//自适应
window.addEventListener("resize", function() {

    left_top_pic.resize();
    right_top_pic.resize();
    left_down_pic.resize();
    right_down_pic.resize();

});