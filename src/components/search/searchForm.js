import React from "react"
import { navigate } from "gatsby"
import styles from './searchForm.module.css'


const SearchForm = ({ query }) => (
  <form role="search" method="GET">
    {/* <label htmlFor="search-input">
      <h1>Search posts</h1>
    </label> */}
    <input
    className={styles.searchInput}
    placeholder="Search"
      type="search"
      id="search-input"
      name="keywords"
      aria-controls="search-results-count"
      onChange={e =>
        navigate(`/recipes?keywords=${encodeURIComponent(e.target.value)}`)
      }
      value={query}
    />

  </form>
)

export default SearchForm
