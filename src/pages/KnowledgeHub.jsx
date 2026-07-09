import { useMemo, useState } from "react";
import "./KnowledgeHub.css";
import { Helmet } from "react-helmet-async";

import Hero from "../components/knowledge/Hero";
import SearchBar from "../components/knowledge/SearchBar";
import CategoryTabs from "../components/knowledge/CategoryTabs";
import TopicGrid from "../components/knowledge/TopicGrid";

import { knowledgeItems } from "../data/knowledgeHubData";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

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
    <>
    <Helmet>
  {/* Primary SEO */}
  <title>
    Knowledge Hub | General Knowledge, Current Affairs & Study Notes | EXAMITICS
  </title>

  <meta
    name="description"
    content="Explore the EXAMITICS Knowledge Hub featuring General Knowledge, Pakistan Studies, World Geography, Current Affairs, Capitals, Currencies, Motorways, Rivers, Mountains, Dams, National Parks and other study resources for ISSB, PMA Long Course, Pakistan Navy, PAF and competitive exams."
  />

  <meta
    name="keywords"
    content="Knowledge Hub, General Knowledge Pakistan, Pakistan Studies, Current Affairs Pakistan, World Geography, Countries and Capitals, World Currencies, Motorways of Pakistan, Rivers of Pakistan, Mountains of Pakistan, Dams of Pakistan, Lakes of Pakistan, National Parks of Pakistan, PMA Preparation, ISSB Preparation, Competitive Exam Preparation, EXAMITICS"
  />

  <meta name="author" content="EXAMITICS" />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://www.examitics.com/knowledgehub"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Knowledge Hub | General Knowledge & Study Resources | EXAMITICS"
  />

  <meta
    property="og:description"
    content="Learn General Knowledge, Pakistan Studies, World Geography, Current Affairs and other educational topics with free study resources for ISSB, PMA Long Course and competitive exams."
  />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="EXAMITICS" />
  <meta property="og:locale" content="en_PK" />

  <meta
    property="og:url"
    content="https://www.examitics.com/knowledgehub"
  />

  <meta
    property="og:image"
    content="https://www.examitics.com/images/examitics-banner.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Knowledge Hub | General Knowledge & Study Resources | EXAMITICS"
  />

  <meta
    name="twitter:description"
    content="Free educational resources covering General Knowledge, Pakistan Studies, Current Affairs, Geography and more for ISSB, PMA Long Course and competitive exam preparation."
  />

  <meta
    name="twitter:image"
    content="https://www.examitics.com/images/examitics-banner.png"
  />
</Helmet>
<BreadcrumbSchema
  items={[
    {
      name: "Home",
      url: "https://www.examitics.com/",
    },
    {
      name: "Knowledge Hub",
      url: "https://www.examitics.com/knowledgehub",
    },
  ]}
/>
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
    </>
  );
};

export default KnowledgeHub;