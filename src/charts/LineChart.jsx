import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomLineChart = ({ data }) => {
  return (
<div className="bg-white dark:bg-gray-800 p-3 md:p-4 rounded-xl shadow mt-4">     
   <h2 className="font-bold text-sm md:text-base mb-2">Balance Trend</h2>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="date" tick={{ fontSize: 10 }}
  interval="preserveStartEnd" />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip contentStyle={{ fontSize: "12px" }}  />
          <Line type="monotone" dataKey="amount" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;