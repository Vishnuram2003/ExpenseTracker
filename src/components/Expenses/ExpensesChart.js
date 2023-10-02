import Chart from '../Chart/Chart';
const ExpensesChart= (props) =>{
    const chartdatapoints=[
        {label:'Jan' ,value:0},
        {label:'Feb' ,value:0},
        {label:'Mar' ,value:0},
        {label:'Apr' ,value:0},
        {label:'May' ,value:0},
        {label:'Jun' ,value:0},
        {label:'Jul' ,value:0},
        {label:'Aug' ,value:0},
        {label:'Sep' ,value:0},
        {label:'Oct' ,value:0},
        {label:'Nov' ,value:0},
        {label:'Dec' ,value:0},
    ];

    for(const expense of props.expenses){
        const expensemonth = expense.date.getMonth();
        chartdatapoints[expensemonth].value +=expense.amount;
        console.log(chartdatapoints[expensemonth].value,chartdatapoints[expensemonth].label);
    }
    return <Chart dataPoints={chartdatapoints}/>
}
export default ExpensesChart;