// import { useMemo, useState } from "react";

// import "./KnowledgeHub.css";

// import Hero from "../components/knowledge/Hero";
// import SearchBar from "../components/knowledge/SearchBar";
// import CategoryTabs from "../components/knowledge/CategoryTabs";
// import TopicGrid from "../components/knowledge/TopicGrid";

// import { knowledgeTopics } from "../data/knowledgeHubData";

// const KnowledgeHub = () => {

//     const [activeCategory, setActiveCategory] =
//         useState("general-knowledge");

//     const [search, setSearch] = useState("");

//     const filteredTopics = useMemo(() => {

//         const topics =
//             knowledgeTopics[activeCategory] || [];

//         if (!search.trim())
//             return topics;

//         return topics.filter(topic =>
//             topic.title
//                 .toLowerCase()
//                 .includes(search.toLowerCase())
//         );

//     }, [activeCategory, search]);

//     return (

//         <main className="knowledge-hub">

//             <Hero />

//             <SearchBar
//                 search={search}
//                 setSearch={setSearch}
//             />

//             <CategoryTabs
//                 activeCategory={activeCategory}
//                 setActiveCategory={setActiveCategory}
//             />

//             <TopicGrid
//                 topics={filteredTopics}
//             />

//         </main>

//     );

// };

// export default KnowledgeHub;


import { useMemo, useState } from "react";
import "./KnowledgeHub.css";

import Hero from "../components/knowledge/Hero";
import SearchBar from "../components/knowledge/SearchBar";
import CategoryTabs from "../components/knowledge/CategoryTabs";
import TopicGrid from "../components/knowledge/TopicGrid";

import { knowledgeItems } from "../data/knowledgeHubData";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

const KnowledgeHub = () => {
  const [activeCategory, setActiveCategory] = useState("general-knowledge");
  const [search, setSearch] = useState("");

  const filteredTopics = useMemo(() => {
    // Global Search
    if (search.trim()) {
      return knowledgeItems.filter((item) => {
        const keyword = search.toLowerCase();

        return (
          item.title.toLowerCase().includes(keyword) ||
          item.description.toLowerCase().includes(keyword)
        );
      });
    }

    // Category Filter
    return knowledgeItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory, search]);

  return (
    <main className="knowledge-hub">
<Navbar />
      <Hero />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryTabs
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <TopicGrid
        topics={filteredTopics}
        search={search}
      />
<Footer />
    </main>
  );
};

export default KnowledgeHub;