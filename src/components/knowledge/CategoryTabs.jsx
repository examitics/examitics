import { knowledgeCategories } from "../../data/knowledgeHubData";

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
  return (
    <section className="knowledge-category-section">
      <div className="container-custom">
        <div className="knowledge-category-wrapper">

          {knowledgeCategories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                className={`knowledge-category-btn ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                

                <span><Icon />{" "}{category.title}<br/><span style={{color: "var(--color-text-muted)"}}>{category.status}</span></span>
                

                
              </button>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;