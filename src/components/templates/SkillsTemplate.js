
const SkillsTemplate = ({ skillsData, skillsIcons }) => (
  <main>
   <div className="skills-container">
      {skillsData.map((category) => (
        <div key={category.category} className="skills-category">
          <h3>{category.category}</h3>
          <ul className="skills-list">
            {category.skills.map((skill) => (
              <li key={skill.name} className="skill-item">
                <div className="skill-icon">
                  {skillsIcons[skill.name] || <span>No Icon</span>}
                </div>
                <div className="skill-details">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                  <span className="skill-value">{skill.value}%</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </main>
);

export default SkillsTemplate;
