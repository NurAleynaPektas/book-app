import Layout from "../components/Layout";
import Categories from "../components/Categories";
import BookList from "../components/BookList";

export default function Home({ selectedCategory, setSelectedCategory }) {
  return (
    <Layout sidebar={<Categories onSelect={setSelectedCategory} />}>
      <h1>
        {selectedCategory === "all" ? "Best Sellers Books" : selectedCategory}
      </h1>

      <BookList selectedCategory={selectedCategory} />
    </Layout>
  );
}
