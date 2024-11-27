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
import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaSlack,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiJquery,
  SiAxios,
  SiTailwindcss,
  SiPostman,
  SiNpm,
  SiHeroku,
  SiVercel,
} from 'react-icons/si';
import {
  FaClipboardList,
  FaTasks,
  FaUsers,
  FaComments,
  FaLightbulb,
} from 'react-icons/fa';
import SkillChart from '@/components/organisms/SkillChart';
import styles from '@/styles/SkillChart.module.css';

const skillsIcons = {
  JavaScript: <SiJavascript />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  'Next.js': <SiNextdotjs />,
  'Express.js': <SiExpress />,
  jQuery: <SiJquery />,
  Axios: <SiAxios />,
  Bootstrap: <FaBootstrap />,
  'Tailwind CSS': <SiTailwindcss />,
  'Node.js': <FaNodeJs />,
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,
  'REST APIs': <FaClipboardList />,
  GraphQL: <SiGraphql />,
  Git: <FaGit />,
  GitHub: <FaGithub />,
  NPM: <SiNpm />,
  Postman: <SiPostman />,
  Slack: <FaSlack />,
  Vercel: <SiVercel />,
  Heroku: <SiHeroku />,
  Scrum: <FaClipboardList />,
  Kanban: <FaTasks />,
  'Trabajo en equipo': <FaUsers />,
  Comunicación: <FaComments />,
  'Resolución de problemas': <FaLightbulb />,
};

const skillsData = [
  {
    category: 'Lenguajes de Programación',
    skills: [
      { name: 'JavaScript', value: 80 },
      { name: 'HTML', value: 90 },
      { name: 'CSS', value: 85 },
      { name: 'TypeScript', value: 70 },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React', value: 90 },
      { name: 'Next.js', value: 75 },
      { name: 'Express.js', value: 80 },
    ],
  },
  {
    category: 'Librerías',
    skills: [
      { name: 'jQuery', value: 60 },
      { name: 'Axios', value: 80 },
      { name: 'Bootstrap', value: 85 },
      { name: 'Tailwind CSS', value: 90 },
    ],
  },
  {
    category: 'Tecnologías',
    skills: [
      { name: 'Node.js', value: 80 },
      { name: 'MongoDB', value: 70 },
      { name: 'MySQL', value: 75 },
      { name: 'REST APIs', value: 85 },
      { name: 'GraphQL', value: 70 },
    ],
  },
  {
    category: 'Herramientas',
    skills: [
      { name: 'Git', value: 90 },
      { name: 'GitHub', value: 85 },
      { name: 'NPM', value: 80 },
      { name: 'Postman', value: 70 },
      { name: 'Slack', value: 75 },
      { name: 'Vercel', value: 80 },
      { name: 'Heroku', value: 70 },
    ],
  },
  {
    category: 'Metodologías',
    skills: [
      { name: 'Scrum', value: 80 },
      { name: 'Kanban', value: 75 },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Trabajo en equipo', value: 90 },
      { name: 'Comunicación', value: 85 },
      { name: 'Resolución de problemas', value: 80 },
    ],
  },
];



const SkillChart = ({ skillsData, skillsIcons }) => {
  const flattenedSkills = skillsData.flatMap((category) =>
    category.skills.map((skill) => ({
      name: skill.name,
      level: skill.value,
      icon: skillsIcons[skill.name] || null, 
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
