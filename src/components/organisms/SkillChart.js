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

const SkillChart = ({ skillsData = [], skillsIcons = {} }) => {
  // Comprobación defensiva para evitar errores
  if (!Array.isArray(skillsData)) {
    console.error("skillsData no es un array válido:", skillsData);
    return <p>Error: Los datos de habilidades no son válidos.</p>;
  }

  // Aplanar y mapear habilidades
  const flattenedSkills = skillsData.flatMap((category) =>
    (category.skills || []).map((skill) => ({
      name: skill.name,
      level: skill.value,
      icon: skillsIcons[skill.name] || null,
    }))
  );

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, level } = payload[0].payload;
      return (
        <div className={styles.tooltip}>
          <strong>{name}</strong>
          <p>Nivel: {level}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.skillsContainer}>
      <h3>Gráfico de habilidades</h3>
      {flattenedSkills.length === 0 ? (
        <p>No hay datos de habilidades para mostrar.</p>
      ) : (
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={flattenedSkills}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="level" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};




export default SkillChart;

