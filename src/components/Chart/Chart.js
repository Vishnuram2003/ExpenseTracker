import ChartBar from './ChartBar';
import './Chart.css';
const Chart = props =>{
    const datapointvalues = props.dataPoints.map(datapointobj=>datapointobj.value);
    const totalmax = Math.max(...datapointvalues);
    return <div className='chart'>
        {
            props.dataPoints.map(datapoint => <ChartBar 
                key={datapoint.label}
                value={datapoint.value} 
                maxvalue={totalmax} 
                label={datapoint.label}
            />)
        }
    </div>

}
export default Chart;