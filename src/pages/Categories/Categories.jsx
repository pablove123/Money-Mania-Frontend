import CategoryCard from "../../components/CategoryCard/CategoryCard";
import styles from './Categories.module.css'

const Categories = () => {
  return ( 
    <main>
    <h1 className={styles.title}>Categories</h1>
    <CategoryCard/>
    </main>

  );
}

export default Categories;