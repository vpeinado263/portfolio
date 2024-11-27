import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styles from '@/styles/SkillChart.module.css';

const SkillChart = ({ skillsData, skillsIcons }) => {
  // Combina las categorías y habilidades en un solo arreglo para el gráfico
  const flattenedSkills = skillsData.flatMap((category) =>
    category.skills.map((skill) => ({
      name: skill.name,
      level: skill.value,
      icon: skillsIcons[skill.name] || null, // Icono correspondiente
    }))
  );

  return (
    <div className={styles.skillsContainer}>
      <div className={styles.chartContainer}>
        <h3>Gráfico de habilidades</h3>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={flattenedSkills}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tickFormatter={(name) => (
                  <span>
                    {skillsIcons[name]} {name}
                  </span>
                )}
              />
              <YAxis />
              <Tooltip
                content={({ payload }) =>
                  payload && payload.length ? (
                    <div
                      style={{
                        backgroundColor: '#fff',
                        border: '1px solid #ddd',
                        padding: '10px',
                      }}
                    >
                      <strong>{payload[0].payload.name}</strong>
                      <p>Nivel: {payload[0].value}%</p>
                    </div>
                  ) : null
                }
              />
              <Legend />
              <Bar dataKey="level" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SkillChart;
