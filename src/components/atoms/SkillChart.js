import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '@/styles/SkillChart.module.css';

const skillsData = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
  ];

const SkillChart = () => {
  return (
    <>
     <div className={styles.skillsContainer}>
      <div className={styles.chartContainer}>
      <h3>Gráfico de habilidades</h3>
      <div style={{ width: '50%', height: 200 }}>
       <ResponsiveContainer width="100%" height="100%">
         <BarChart data={skillsData}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
           <Legend />
           <Bar dataKey="level" fill="#8884d8" />
         </BarChart>
        </ResponsiveContainer>
       </div>
       </div>
     </div>
    </>
   
  )
}

export default SkillChart;
