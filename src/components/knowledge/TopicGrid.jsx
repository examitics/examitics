import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaFileLines,
  FaClipboardQuestion,
  FaCircleCheck,
} from "react-icons/fa6";

const TopicGrid = ({ topics, search }) => {
  if (!topics.length) {
    return (
      <section className="knowledge-topics section-padding">
        <div className="container-custom">
          <div className="knowledge-empty exa-card">
            <FaBookOpen />

            <h3>No Topics Found</h3>

            <p>
              We couldn't find any topic matching your search.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="knowledge-topics section-padding">

      <div className="container-custom">

        <div className="knowledge-section-header">

          <div>
            <h2>
              {search
                ? `Results for "${search}"`
                : "Explore Knowledge"}
            </h2>

            <p>
              {topics.length} Topic{topics.length !== 1 && "s"} Available
            </p>
          </div>

        </div>

        <div className="knowledge-topic-grid">

          {topics.map((topic) => {

            const Icon = topic.icon;

            return (

              // <Link
              //   key={topic.id}
              //   to={topic.slug}
              //   className="knowledge-topic-card exa-card"
              // >
              <Link
  key={topic.id}
  // to={`/knowledge/${topic.category}/${topic.slug}`}
      to={topic.slug}

  className="knowledge-topic-card exa-card"
>

                <div className="knowledge-card-top">

                  <div className="knowledge-topic-icon">
                    <Icon />
                  </div>

                  <span
                    className={`difficulty difficulty-${topic.difficulty.toLowerCase()}`}
                  >
                    {topic.difficulty}
                  </span>

                </div>

                <h3>{topic.title}</h3>

                <p>{topic.description}</p>

                <div className="knowledge-topic-meta">

                  <span>

                    <FaFileLines />

                    {topic.articles} Articles

                  </span>

                  <span>

                    <FaClipboardQuestion />

                    {topic.mcqs} MCQs

                  </span>

                </div>

                <div className="knowledge-topic-bottom">

                  <span>

                    <FaCircleCheck />

                    Updated {topic.updated}

                  </span>

                  <FaArrowRight />

                </div>

              </Link>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default TopicGrid;