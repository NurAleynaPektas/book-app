import Layout from "../components/Layout";
import Categories from "../components/Categories";
import BookList from "../components/BookList";
import css from "./Home.module.css";

export default function Home({ selectedCategory, setSelectedCategory }) {
  return (
    <Layout sidebar={<Categories onSelect={setSelectedCategory} />}>
      <div className={css.wrapper}>
        <h1 className={css.title}>
          {selectedCategory === "all" ? "Best Sellers Books" : selectedCategory}
        </h1>

        <BookList selectedCategory={selectedCategory} />
      </div>
    </Layout>
  );
}
