import Link from "next/link";
import styles from "@/styles/Hobbies.module.css";

const HobbiesData = [
    {
        category: "1",
        description: "2",
        projects: [
          {
            title: "3",
            link: "4",
          },
        ],
    },
];

const Hobbies = () => {
  <section id="Hobbies" className={styles.hobbiesContainer}>
      {HobbiesData.map((category, index) => (
        <div key={index} className={styles.hobbiesCategory}>
          <h3 className={styles.categoryTitle}>{category.category}</h3>
          <p className={styles.categoryDescription}>{category.description}</p>
          <ul className={styles.hobbiesList}>
            {category.projects.map((project, idx) => (
              <li key={idx}>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
  </section>
};

export default Hobbies;
