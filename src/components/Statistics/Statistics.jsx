import { PieChart, Pie, Cell} from 'recharts';
import { getdonation } from '../utility/localstorage';


const Statistics = () => {
    const storeddonations=getdonation()
    console.log( storeddonations.length )
    const len=storeddonations.length
    const data = [
        { name: 'Group A', value: 12 },
        { name: 'Group B', value: len },
       
      ];
     
      const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central"  >
          {`${((percent)* 100).toFixed(1)}%`}
        </text>
      );
    };
      const COLORS = ['#FF444A', '#00C49F'];
    return (
      <div >
         <div className=' flex justify-center my-7 '>
            <PieChart width={500} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                   
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                </Pie>
            </PieChart>
            
        </div>
        <div className='flex gap-14 justify-center mb-7 flex-col items-center md:flex-row'>
              <div className='flex items-center gap-3 '>
              <h3>
              Your Donation
              </h3>
              <div className='bg-[#00C49F] h-3 w-[100px]'></div>
              </div>

              <div className='flex items-center gap-3 '>
              <h3>
              Total Donation
              </h3>
              <div className='bg-[#FF444A] h-3 w-[100px]'></div>
              </div>
              
            </div>
      </div>

       
    );
};

export default Statistics;