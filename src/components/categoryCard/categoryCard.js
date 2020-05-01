import React from "react"
import { navigate } from "gatsby"
import styles from './CategoryCard.module.css'
import { Link, graphql } from "gatsby"


const CategoryCard = ({ title }) => (
    // <Link to={`/recipes/${kebabCase(title)}/`}>
                  
    <div className={styles.categoryCardContainer}>

<div className={styles.categoryCard}>
    <span className={styles.categoryCardTitle}><h3>{title}</h3></span>
</div>
</div>
//  </Link>

);

export default CategoryCard
