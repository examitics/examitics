// import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import {
  FiBookOpen,
  FiGlobe,
  FiSearch,
  FiX,
  FiArrowRight,
  FiCpu,
  FiMap,
  FiShield,
  FiAward,
  FiFlag,
  FiTrendingUp,
  FiLayers,
  FiGrid,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";
const SearchBar = ({ search, setSearch }) => {
  return (
    <section className="knowledge-search-section">
      <div className="container-custom">
        <div className="knowledge-search-wrapper exa-card">
          <FiSearch className="knowledge-search-icon" />

          <input
            type="text"
            className="knowledge-search-input"
            placeholder="Search topics like Motorways, Rivers, Constitution..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="knowledge-search-clear"
              onClick={() => setSearch("")}
              aria-label="Clear Search"
            >
              <FiCheckCircle />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchBar;