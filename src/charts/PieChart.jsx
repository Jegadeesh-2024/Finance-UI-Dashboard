import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];

const CustomPieChart = ({ data }) => {
  return (
    <div className=" w-full overflow-x-auto bg-white dark:bg-gray-800 p-3 md:p-4 rounded shadow">
      <h2 className="font-bold text-sm md:text-base mb-2">Spending Breakdown</h2>

      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={60}
            innerRadius={30}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{fontSize:"12px"}} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;