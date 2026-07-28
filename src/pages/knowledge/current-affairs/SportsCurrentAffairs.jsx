import { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FiBook,
  FiCheckCircle,
  FiBriefcase,
  FiCalendar,
  FiFlag,
  FiTarget,
  FiGlobe,
  FiAward,
  FiUsers,
  FiStar,
  FiTrendingUp,
  FiActivity,
  FiClock,
  FiHelpCircle,
  FiCheckSquare,
} from "react-icons/fi";

// import MCQCard from "../../../components/common/MCQCard";
import MCQCard from "../../../components/knowledge/MCQCard";

import Navbar from "../../../components/layout/navbar";
import Footer from "../../../components/layout/footer";
import "../general-knowledge/MotorwaysOfPakistan.css";

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: FiBook,
  },
  {
    id: "importance",
    title: "Importance",
    icon: FiCheckCircle,
  },
  {
    id: "organizations",
    title: "Organizations",
    icon: FiBriefcase,
  },
  {
    id: "events",
    title: "Major Events",
    icon: FiCalendar,
  },
  {
    id: "pakistan",
    title: "Pakistan Sports",
    icon: FiFlag,
  },
  {
    id: "cricket",
    title: "Cricket",
    icon: FiTarget,
  },
  {
    id: "football",
    title: "Football",
    icon: FiGlobe,
  },
  {
    id: "olympics",
    title: "Olympics",
    icon: FiAward,
  },
  {
    id: "personalities",
    title: "Sports Legends",
    icon: FiUsers,
  },
  {
    id: "awards",
    title: "Awards",
    icon: FiStar,
  },
  {
    id: "records",
    title: "Records",
    icon: FiTrendingUp,
  },
  {
    id: "updates",
    title: "Latest Updates",
    icon: FiActivity,
  },
  {
    id: "timeline",
    title: "Timeline",
    icon: FiClock,
  },
  {
    id: "practicemcq",
    title: "Practice MCQs",
    icon: FiCheckSquare,
  },
  {
    id: "faq",
    title: "FAQs",
    icon: FiHelpCircle,
  },
  
];

export default function SportsCurrentAffairs() {
    const [active, setActive] = useState("overview");
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActive(entry.target.id);
              }
            });
          },
          {
            threshold: 0.15,
            rootMargin: "-140px 0px -60% 0px",
          },
        );
    
        sections.forEach((section) => {
          const element = document.getElementById(section.id);
    
          if (element) observer.observe(element);
        });
    
        return () => observer.disconnect();
      }, []);
    
      const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };
    
  return (
    <>
      <Helmet>
        <title>
          Sports Current Affairs & General Knowledge | PMA, ISSB, CSS, FPSC |
          EXAMITICS
        </title>

        <meta
          name="description"
          content="Comprehensive Sports Current Affairs and General Knowledge guide covering cricket, football, Olympics, Pakistan sports, international organizations, sports legends, awards, world records, latest updates, FAQs and 90 practice MCQs for PMA, ISSB, CSS, FPSC, PPSC, FIA, ASF, MOD and other competitive exams."
        />

        <meta
          name="keywords"
          content="Sports Current Affairs, Sports GK, Sports MCQs, Cricket MCQs, Football GK, Olympic Games, Pakistan Sports, PMA Sports Questions, ISSB Sports GK, CSS Sports Current Affairs, FPSC Sports MCQs"
        />

        <link
          rel="canonical"
          href="https://www.examitics.com/knowledge/current-affairs/sports-current-affairs"
        />
      </Helmet>
<Navbar />
      <main className="motorways-page">

        {/* HERO */}

        <section className="motorways-hero">

          <div className="container-custom">

            <span className="hero-badge">
              Knowledge Hub • Sports Current Affairs
            </span>

            <h1>
              Sports Current Affairs & General Knowledge
            </h1>

            <p className="hero-subtitle">

              Prepare for PMA, ISSB, CSS, FPSC, PPSC, FIA, ASF, MOD and other
              competitive examinations with one of the most comprehensive
              Sports Current Affairs resources. Explore international sports
              organizations, Olympic Games, FIFA, ICC tournaments, Pakistan
              sports history, world-famous athletes, records, awards, latest
              sports developments, FAQs and 90 carefully designed practice
              MCQs.

            </p>

            <div className="hero-stats">

              <div className="hero-stat">
                <strong>15+</strong>
                <span>Learning Sections</span>
              </div>

              <div className="hero-stat">
                <strong>90</strong>
                <span>Practice MCQs</span>
              </div>

              <div className="hero-stat">
                <strong>100%</strong>
                <span>Exam Focused</span>
              </div>

            </div>

          </div>

        </section>

        {/* SECTION NAVIGATION */}

        
        <div className="motorways-sticky">
            <div className="container-custom">
              <div className="motorways-nav">
                {sections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={active === section.id ? "active" : ""}
                    >
                      <Icon />
                      {section.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
                {/* ===========================
            OVERVIEW
        ============================ */}
          <div className="container-custom">

        <section
          id="overview"
          className="motorways-section exa-card"
        >

          <h2>Overview of Sports Current Affairs</h2>

          <p>

            Sports Current Affairs is an important branch of General Knowledge
            that covers major international and national sporting events,
            championships, governing organizations, famous athletes, records,
            awards and significant developments from around the world.
            Questions related to sports are frequently asked in PMA Long
            Course, ISSB, CSS, FPSC, PPSC, FIA, ASF, MOD, NTS and various
            university admission tests.

          </p>

          <p>

            A strong understanding of sports current affairs helps candidates
            answer questions about international tournaments, Pakistan's
            sporting achievements, Olympic history, FIFA competitions, ICC
            events, world-famous players and governing bodies. Interview panels
            also assess awareness of recent sporting developments because they
            reflect a candidate's interest in global affairs and current events.

          </p>

          <div className="exa-alert exa-alert-info">

            <strong>Exam Tip:</strong> Sports questions are generally factual
            and scoring. Memorizing governing organizations, headquarters,
            tournament winners, important records and Pakistan's achievements
            can significantly improve your overall General Knowledge score.

          </div>

        </section>



        {/* ===========================
            IMPORTANCE
        ============================ */}

        <section
          id="importance"
          className="motorways-section exa-card"
        >

          <h2>Why Sports Current Affairs Matter</h2>

          <p>

            Sports unite nations beyond political and geographical boundaries.
            International competitions promote peace, cultural exchange,
            teamwork and healthy competition. Governments also use sporting
            success to enhance their country's international reputation and
            inspire future generations.

          </p>

          <p>

            Competitive examinations increasingly include questions related to
            major sporting events, Olympic history, Pakistan cricket, football,
            hockey, international organizations and world records. Candidates
            who regularly follow sports news usually perform better in General
            Knowledge sections.

          </p>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>🏏 Competitive Exams</h3>

              <p>

                Sports questions regularly appear in PMA, ISSB, CSS, FPSC,
                PPSC, FIA, ASF, MOD and many recruitment examinations.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🌍 Global Awareness</h3>

              <p>

                Understanding international sporting events develops awareness
                of countries, cultures, diplomacy and international
                cooperation.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🥇 Interview Preparation</h3>

              <p>

                Officers conducting interviews frequently ask about recent
                tournaments, Pakistan's achievements and famous athletes to
                assess confidence and awareness.

              </p>

            </div>

            <div className="motorway-card">

              <h3>📖 General Knowledge</h3>

              <p>

                Sports knowledge strengthens current affairs preparation and
                improves performance in quizzes, interviews and written tests.

              </p>

            </div>

          </div>

        </section>



        {/* ===========================
            SPORTS BY NUMBERS
        ============================ */}

        <section className="motorways-section exa-card">

          <h2>Sports at a Glance</h2>

          <p>

            These figures provide a quick overview of some of the world's most
            important sporting events and organizations.

          </p>

          <div className="motorway-cards">

            <div className="motorway-card">
              <h3>206+</h3>
              <p>National Olympic Committees recognized by the IOC.</p>
            </div>

            <div className="motorway-card">
              <h3>211</h3>
              <p>Member associations of FIFA.</p>
            </div>

            <div className="motorway-card">
              <h3>108</h3>
              <p>Member nations of the International Cricket Council (ICC).</p>
            </div>

            <div className="motorway-card">
              <h3>4 Years</h3>
              <p>Olympic Games and FIFA World Cup cycle.</p>
            </div>

            <div className="motorway-card">
              <h3>5</h3>
              <p>Major ICC global tournaments conducted regularly.</p>
            </div>

            <div className="motorway-card">
              <h3>100+</h3>
              <p>International sports recognized by the IOC.</p>
            </div>

          </div>

        </section>

                {/* ===========================
            INTERNATIONAL SPORTS ORGANIZATIONS
        ============================ */}

        <section
          id="organizations"
          className="motorways-section exa-card"
        >

          <h2>Major International Sports Organizations</h2>

          <p>

            International sports organizations regulate competitions, establish
            rules, promote fair play and organize world championships. Their
            headquarters, leadership and responsibilities are frequently tested
            in PMA, ISSB, CSS, FPSC, PPSC and other competitive examinations.

          </p>

          <div className="exa-alert exa-alert-info">

            <strong>Exam Focus:</strong> Remember the headquarters,
            establishment year, governing responsibilities and major
            competitions organized by these organizations.

          </div>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>🏅 International Olympic Committee (IOC)</h3>

              <ul>
                <li><strong>Founded:</strong> 1894</li>
                <li><strong>Headquarters:</strong> Lausanne, Switzerland</li>
                <li><strong>Current President:</strong> Kirsty Coventry</li>
                <li><strong>Main Responsibility:</strong> Organizes the Summer and Winter Olympic Games.</li>
                <li><strong>Motto:</strong> Faster, Higher, Stronger – Together.</li>
              </ul>

            </div>

            <div className="motorway-card">

              <h3>⚽ Fédération Internationale de Football Association (FIFA)</h3>

              <ul>
                <li><strong>Founded:</strong> 1904</li>
                <li><strong>Headquarters:</strong> Zurich, Switzerland</li>
                <li><strong>President:</strong> Gianni Infantino</li>
                <li><strong>Organizes:</strong> FIFA World Cup, Women's World Cup, Club World Cup.</li>
                <li><strong>Member Associations:</strong> 211</li>
              </ul>

            </div>

            <div className="motorway-card">

              <h3>🏏 International Cricket Council (ICC)</h3>

              <ul>
                <li><strong>Founded:</strong> 1909</li>
                <li><strong>Headquarters:</strong> Dubai, United Arab Emirates</li>
                <li><strong>Chairman:</strong> Jay Shah</li>
                <li><strong>Role:</strong> Governs international cricket.</li>
                <li><strong>Major Events:</strong> Cricket World Cup, Champions Trophy, T20 World Cup, World Test Championship.</li>
              </ul>

            </div>

            <div className="motorway-card">

              <h3>🏑 International Hockey Federation (FIH)</h3>

              <ul>
                <li><strong>Founded:</strong> 1924</li>
                <li><strong>Headquarters:</strong> Lausanne, Switzerland</li>
                <li><strong>President:</strong> Tayyab Ikram (Pakistan)</li>
                <li><strong>Role:</strong> Governs international field hockey.</li>
                <li><strong>Major Event:</strong> Hockey World Cup.</li>
              </ul>

            </div>

            <div className="motorway-card">

              <h3>🎾 International Tennis Federation (ITF)</h3>

              <ul>
                <li><strong>Founded:</strong> 1913</li>
                <li><strong>Headquarters:</strong> London, United Kingdom</li>
                <li><strong>Role:</strong> Governs world tennis.</li>
                <li><strong>Major Events:</strong> Davis Cup, Billie Jean King Cup.</li>
                <li><strong>Works With:</strong> ATP and WTA Tours.</li>
              </ul>

            </div>

            <div className="motorway-card">

              <h3>🏃 World Athletics</h3>

              <ul>
                <li><strong>Former Name:</strong> IAAF</li>
                <li><strong>Headquarters:</strong> Monaco</li>
                <li><strong>President:</strong> Sebastian Coe</li>
                <li><strong>Role:</strong> Governs athletics and track & field events.</li>
                <li><strong>Major Event:</strong> World Athletics Championships.</li>
              </ul>

            </div>

          </div>

          <h3>Other Important International Sports Bodies</h3>

          <div className="motorway-table-wrapper">

            <table className="motorway-table">

              <thead>

                <tr>
                  <th>Organization</th>
                  <th>Sport</th>
                  <th>Headquarters</th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>FIBA</td>
                  <td>Basketball</td>
                  <td>Mies, Switzerland</td>
                </tr>

                <tr>
                  <td>BWF</td>
                  <td>Badminton</td>
                  <td>Kuala Lumpur, Malaysia</td>
                </tr>

                <tr>
                  <td>World Rugby</td>
                  <td>Rugby</td>
                  <td>Dublin, Ireland</td>
                </tr>

                <tr>
                  <td>World Aquatics</td>
                  <td>Swimming</td>
                  <td>Lausanne, Switzerland</td>
                </tr>

                <tr>
                  <td>UCI</td>
                  <td>Cycling</td>
                  <td>Aigle, Switzerland</td>
                </tr>

                <tr>
                  <td>FEI</td>
                  <td>Equestrian</td>
                  <td>Lausanne, Switzerland</td>
                </tr>

                <tr>
                  <td>FIVB</td>
                  <td>Volleyball</td>
                  <td>Lausanne, Switzerland</td>
                </tr>

                <tr>
                  <td>World Baseball Softball Confederation</td>
                  <td>Baseball & Softball</td>
                  <td>Pully, Switzerland</td>
                </tr>

              </tbody>

            </table>

          </div>

          <div className="exa-alert exa-alert-success">

            <strong>Remember:</strong> Switzerland hosts the headquarters of
            many international sports organizations because of its political
            neutrality, stable governance and long-standing role in
            international cooperation.

          </div>

        </section>



        {/* ===========================
            MAJOR INTERNATIONAL
            SPORTING EVENTS
        ============================ */}

        <section
          id="events"
          className="motorways-section exa-card"
        >

          <h2>Major International Sporting Events</h2>

          <p>

            International sporting events attract billions of viewers and bring
            together athletes from around the world. Questions about these
            tournaments, their organizers and history are among the most common
            sports-related questions in competitive examinations.

          </p>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>🏅 Olympic Games</h3>

              <p>

                The Summer and Winter Olympic Games are the world's largest
                multi-sport competitions organized every four years by the
                International Olympic Committee (IOC).

              </p>

              <ul>
                <li>Organizer: IOC</li>
                <li>Frequency: Every 4 years</li>
                <li>First Modern Olympics: 1896</li>
              </ul>

            </div>

            <div className="motorway-card">

              <h3>⚽ FIFA World Cup</h3>

              <p>

                The FIFA World Cup is the biggest football tournament in the
                world and features the strongest national teams competing for
                the world championship.

              </p>

              <ul>
                <li>Organizer: FIFA</li>
                <li>Frequency: Every 4 years</li>
                <li>First Tournament: 1930</li>
              </ul>

            </div>

            <div className="motorway-card">

              <h3>🏏 ICC Cricket World Cup</h3>

              <p>

                The ICC Cricket World Cup is the premier international One Day
                International championship featuring the world's leading cricket
                nations.

              </p>

              <ul>
                <li>Organizer: ICC</li>
                <li>Format: ODI</li>
                <li>Frequency: Every 4 years</li>
              </ul>

            </div>

            <div className="motorway-card">

              <h3>🏆 ICC T20 World Cup</h3>

              <p>

                The ICC Men's T20 World Cup is the highest-level Twenty20
                international cricket tournament played by leading cricket
                nations.

              </p>

              <ul>
                <li>Organizer: ICC</li>
                <li>Format: Twenty20 International</li>
                <li>Growing Global Popularity</li>
              </ul>

            </div>

            <div className="motorway-card">

              <h3>🏑 Hockey World Cup</h3>

              <p>

                Organized by the International Hockey Federation (FIH), the
                Hockey World Cup is the most prestigious international field
                hockey competition.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🎾 Grand Slam Tennis</h3>

              <p>

                Tennis has four prestigious Grand Slam tournaments held every
                year: Australian Open, French Open, Wimbledon and US Open.

              </p>

            </div>

          </div>

        </section>

                {/* ===========================
            PAKISTAN SPORTS
        ============================ */}

        <section
          id="pakistan"
          className="motorways-section exa-card"
        >

          <h2>Sports in Pakistan</h2>

          <p>

            Pakistan has a rich sporting heritage and has produced world-class
            athletes in cricket, hockey, squash, athletics, snooker and
            mountaineering. While cricket remains the country's most popular
            sport, Pakistan has also enjoyed remarkable success in hockey and
            squash at the international level. In recent years, athletes have
            earned global recognition in athletics, particularly through
            Olympic and World Championship performances.

          </p>

          <p>

            Sports play an important role in promoting national unity, youth
            development and international recognition. Government institutions,
            armed forces, educational organizations and sports federations
            actively organize competitions to identify and develop talented
            athletes.

          </p>

          <div className="exa-alert exa-alert-success">

            <strong>Exam Tip:</strong> Questions about Pakistan's national
            sport, Olympic medalists, Cricket World Cup victories, Hockey World
            Cups, famous athletes and sports organizations are frequently asked
            in competitive examinations.

          </div>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>🏏 Cricket</h3>

              <p>

                Cricket is Pakistan's most followed sport. Pakistan won the ICC
                Cricket World Cup in 1992 under the captaincy of Imran Khan and
                the ICC Champions Trophy in 2017.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏑 Hockey</h3>

              <p>

                Pakistan's national sport is field hockey. The country has won
                multiple Hockey World Cups and Olympic medals and remains one
                of the most successful hockey nations in history.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏸 Squash</h3>

              <p>

                Pakistan dominated world squash for decades through legendary
                players Jahangir Khan and Jansher Khan, who won numerous World
                Open titles.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🥇 Athletics</h3>

              <p>

                Athletics has gained tremendous popularity after Arshad Nadeem
                achieved historic international success in javelin throw and
                inspired a new generation of athletes.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🎱 Snooker</h3>

              <p>

                Pakistan has produced several successful cue sports players,
                including world champions in amateur snooker competitions.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🥊 Other Sports</h3>

              <p>

                Football, wrestling, boxing, kabaddi, mountaineering, martial
                arts and volleyball continue to grow across Pakistan through
                domestic and international competitions.

              </p>

            </div>

          </div>

          <h3>Major Sports Governing Bodies in Pakistan</h3>

          <div className="motorway-table-wrapper">

            <table className="motorway-table">

              <thead>

                <tr>

                  <th>Organization</th>
                  <th>Sport</th>
                  <th>Primary Responsibility</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>Pakistan Sports Board (PSB)</td>
                  <td>National Sports</td>
                  <td>Development and promotion of sports.</td>

                </tr>

                <tr>

                  <td>Pakistan Olympic Association (POA)</td>
                  <td>Olympics</td>
                  <td>Represents Pakistan in Olympic Games.</td>

                </tr>

                <tr>

                  <td>Pakistan Cricket Board (PCB)</td>
                  <td>Cricket</td>
                  <td>Governs cricket in Pakistan.</td>

                </tr>

                <tr>

                  <td>Pakistan Hockey Federation (PHF)</td>
                  <td>Hockey</td>
                  <td>Governs field hockey.</td>

                </tr>

                <tr>

                  <td>Pakistan Football Federation (PFF)</td>
                  <td>Football</td>
                  <td>National football administration.</td>

                </tr>

                <tr>

                  <td>Pakistan Squash Federation</td>
                  <td>Squash</td>
                  <td>Promotes squash nationally.</td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>



        {/* ===========================
            CRICKET
        ============================ */}

        <section
          id="cricket"
          className="motorways-section exa-card"
        >

          <h2>Cricket</h2>

          <p>

            Cricket is one of the world's most popular sports and the most
            followed sport in Pakistan. Governed internationally by the
            International Cricket Council (ICC), the game is played in Test,
            One Day International (ODI) and Twenty20 (T20I) formats.

          </p>

          <p>

            Pakistan has consistently been one of the strongest cricketing
            nations, producing legendary fast bowlers, batsmen and all-rounders
            who have left a lasting impact on world cricket.

          </p>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>🏆 Pakistan's Major ICC Achievements</h3>

              <ul>

                <li>1992 ICC Cricket World Cup Champion</li>
                <li>2009 ICC T20 World Cup Champion</li>
                <li>2017 ICC Champions Trophy Champion</li>
                <li>2025 ICC World Test Championship Runner-up*</li>

              </ul>

            </div>

            <div className="motorway-card">

              <h3>⭐ Legendary Pakistani Cricketers</h3>

              <ul>

                <li>Imran Khan</li>
                <li>Wasim Akram</li>
                <li>Waqar Younis</li>
                <li>Javed Miandad</li>
                <li>Inzamam-ul-Haq</li>
                <li>Younis Khan</li>
                <li>Misbah-ul-Haq</li>

              </ul>

            </div>

            <div className="motorway-card">

              <h3>🌟 Modern Stars</h3>

              <ul>

                <li>Babar Azam</li>
                <li>Mohammad Rizwan</li>
                <li>Shaheen Shah Afridi</li>
                <li>Naseem Shah</li>
                <li>Haris Rauf</li>
                <li>Salman Ali Agha</li>

              </ul>

            </div>

            <div className="motorway-card">

              <h3>🌍 Major ICC Events</h3>

              <ul>

                <li>Cricket World Cup</li>
                <li>T20 World Cup</li>
                <li>Champions Trophy</li>
                <li>World Test Championship</li>
                <li>Women's Cricket World Cup</li>

              </ul>

            </div>

          </div>

          <div className="exa-alert exa-alert-warning">

            <strong>Remember:</strong> Pakistan became the 1992 Cricket World
            Cup champion under the leadership of Imran Khan, one of the most
            frequently asked sports GK questions.

          </div>

        </section>

                {/* ===========================
            FOOTBALL
        ============================ */}

        <section
          id="football"
          className="motorways-section exa-card"
        >

          <h2>Football (Soccer)</h2>

          <p>

            Football is the world's most popular sport, played and watched by
            billions of people across every continent. Governed by the
            Fédération Internationale de Football Association (FIFA), football
            promotes international unity through competitions such as the FIFA
            World Cup, UEFA Champions League and continental championships.
            Questions about football tournaments, legendary players, governing
            bodies and records are common in competitive examinations.

          </p>

          <p>

            The FIFA World Cup is regarded as the most prestigious football
            tournament, while domestic leagues such as the English Premier
            League, La Liga, Serie A, Bundesliga and Ligue 1 produce many of
            the world's greatest footballers.

          </p>

          <div className="exa-alert exa-alert-info">

            <strong>Exam Tip:</strong> Remember FIFA headquarters, World Cup
            history, famous football legends, Ballon d'Or winners and major
            continental tournaments.

          </div>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>⚽ FIFA</h3>

              <ul>

                <li><strong>Founded:</strong> 1904</li>
                <li><strong>Headquarters:</strong> Zurich, Switzerland</li>
                <li><strong>President:</strong> Gianni Infantino</li>
                <li><strong>Member Associations:</strong> 211</li>

              </ul>

            </div>

            <div className="motorway-card">

              <h3>🏆 FIFA World Cup</h3>

              <ul>

                <li>First Tournament: 1930</li>
                <li>Held Every: 4 Years</li>
                <li>Organizer: FIFA</li>
                <li>Most Successful Team: Brazil (5 Titles)</li>

              </ul>

            </div>

            <div className="motorway-card">

              <h3>🌍 Major Continental Cups</h3>

              <ul>

                <li>UEFA European Championship (Euro)</li>
                <li>Copa América</li>
                <li>AFC Asian Cup</li>
                <li>Africa Cup of Nations (AFCON)</li>
                <li>CONCACAF Gold Cup</li>

              </ul>

            </div>

            <div className="motorway-card">

              <h3>🏟 Major Club Competitions</h3>

              <ul>

                <li>UEFA Champions League</li>
                <li>UEFA Europa League</li>
                <li>FIFA Club World Cup</li>
                <li>UEFA Super Cup</li>

              </ul>

            </div>

          </div>

          <h3>Football Legends</h3>

          <div className="motorway-table-wrapper">

            <table className="motorway-table">

              <thead>

                <tr>

                  <th>Player</th>
                  <th>Country</th>
                  <th>Known For</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>Pelé</td>
                  <td>Brazil</td>
                  <td>Three FIFA World Cup titles and one of football's greatest icons.</td>

                </tr>

                <tr>

                  <td>Diego Maradona</td>
                  <td>Argentina</td>
                  <td>Led Argentina to the 1986 FIFA World Cup title.</td>

                </tr>

                <tr>

                  <td>Lionel Messi</td>
                  <td>Argentina</td>
                  <td>2022 FIFA World Cup winner and multiple Ballon d'Or recipient.</td>

                </tr>

                <tr>

                  <td>Cristiano Ronaldo</td>
                  <td>Portugal</td>
                  <td>One of the highest goal scorers in football history.</td>

                </tr>

                <tr>

                  <td>Zinedine Zidane</td>
                  <td>France</td>
                  <td>1998 FIFA World Cup winner and football legend.</td>

                </tr>

                <tr>

                  <td>Johan Cruyff</td>
                  <td>Netherlands</td>
                  <td>Pioneer of Total Football.</td>

                </tr>

                <tr>

                  <td>Kylian Mbappé</td>
                  <td>France</td>
                  <td>One of the leading footballers of the modern era.</td>

                </tr>

              </tbody>

            </table>

          </div>

          <h3>Important Football Facts</h3>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>🏅 Ballon d'Or</h3>

              <p>

                The Ballon d'Or is football's most prestigious individual award,
                presented annually to the world's best player based on
                outstanding performances.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🌎 Most Successful Nation</h3>

              <p>

                Brazil has won the FIFA Men's World Cup five times, making it
                the most successful nation in the tournament's history.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏟 Largest Football Stadium</h3>

              <p>

                Rungrado 1st of May Stadium in Pyongyang, North Korea, is
                recognized as the world's largest football stadium by seating
                capacity.

              </p>

            </div>

            <div className="motorway-card">

              <h3>👑 Most Popular Sport</h3>

              <p>

                Football is the most popular sport globally, with billions of
                fans and professional leagues operating across nearly every
                country.

              </p>

            </div>

          </div>

        </section>



        {/* ===========================
            OLYMPIC GAMES
        ============================ */}

        <section
          id="olympics"
          className="motorways-section exa-card"
        >

          <h2>Olympic Games</h2>

          <p>

            The Olympic Games are the world's largest multi-sport event,
            bringing together athletes from more than 200 countries. Organized
            by the International Olympic Committee (IOC), the Games symbolize
            excellence, friendship and respect while promoting peace through
            sport.

          </p>

          <p>

            The modern Olympic Games began in Athens, Greece, in 1896 and are
            held every four years. Alongside the Summer Olympics, the Winter
            Olympic Games showcase sports played on snow and ice.

          </p>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>🏅 International Olympic Committee</h3>

              <ul>

                <li>Founded: 1894</li>
                <li>Headquarters: Lausanne, Switzerland</li>
                <li>Current President: Kirsty Coventry</li>
                <li>Organizer of Summer & Winter Olympic Games</li>

              </ul>

            </div>

            <div className="motorway-card">

              <h3>🥇 Olympic Motto</h3>

              <p>

                <strong>"Faster, Higher, Stronger – Together"</strong> reflects
                the Olympic values of continuous improvement, unity and global
                cooperation.

              </p>

            </div>

            <div className="motorway-card">

              <h3>⭕ Olympic Rings</h3>

              <p>

                The five interlocking rings represent the unity of the five
                inhabited continents and the coming together of athletes from
                around the world.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🔥 Olympic Flame</h3>

              <p>

                The Olympic flame is lit in Olympia, Greece, before every
                Olympic Games and carried to the host nation through the
                Olympic Torch Relay.

              </p>

            </div>

          </div>

          <div className="exa-alert exa-alert-success">

            <strong>Did You Know?</strong> Pakistan's greatest Olympic
            achievement in recent history came through javelin thrower
            <strong> Arshad Nadeem</strong>, who became one of the country's
            most celebrated athletes after winning Olympic gold and setting an
            Olympic record.

          </div>

        </section>

                {/* ===========================
            SPORTS LEGENDS
        ============================ */}

        <section
          id="personalities"
          className="motorways-section exa-card"
        >

          <h2>Legendary Sports Personalities</h2>

          <p>

            Throughout history, exceptional athletes have transformed sports
            through extraordinary achievements, leadership and consistency.
            Their performances have inspired millions of fans and continue to
            influence future generations. Questions about these sporting
            legends frequently appear in competitive examinations and
            interviews.

          </p>

          <div className="exa-alert exa-alert-info">

            <strong>Exam Tip:</strong> Remember the country, sport and major
            achievements of internationally renowned athletes.

          </div>

          <h3>International Sports Legends</h3>

          <div className="motorway-table-wrapper">

            <table className="motorway-table">

              <thead>

                <tr>

                  <th>Personality</th>
                  <th>Country</th>
                  <th>Sport</th>
                  <th>Major Achievement</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>Lionel Messi</td>
                  <td>Argentina</td>
                  <td>Football</td>
                  <td>2022 FIFA World Cup winner and multiple Ballon d'Or recipient.</td>

                </tr>

                <tr>

                  <td>Cristiano Ronaldo</td>
                  <td>Portugal</td>
                  <td>Football</td>
                  <td>One of football's all-time leading goal scorers.</td>

                </tr>

                <tr>

                  <td>Pelé</td>
                  <td>Brazil</td>
                  <td>Football</td>
                  <td>Only player to win three FIFA World Cups.</td>

                </tr>

                <tr>

                  <td>Novak Djokovic</td>
                  <td>Serbia</td>
                  <td>Tennis</td>
                  <td>Record Grand Slam champion in men's singles.</td>

                </tr>

                <tr>

                  <td>Carlos Alcaraz</td>
                  <td>Spain</td>
                  <td>Tennis</td>
                  <td>One of the leading players of the modern era.</td>

                </tr>

                <tr>

                  <td>Iga Świątek</td>
                  <td>Poland</td>
                  <td>Tennis</td>
                  <td>Multiple Grand Slam champion.</td>

                </tr>

                <tr>

                  <td>Usain Bolt</td>
                  <td>Jamaica</td>
                  <td>Athletics</td>
                  <td>World record holder in 100m and 200m sprint.</td>

                </tr>

                <tr>

                  <td>Michael Phelps</td>
                  <td>United States</td>
                  <td>Swimming</td>
                  <td>Most decorated Olympian in history.</td>

                </tr>

                <tr>

                  <td>Simone Biles</td>
                  <td>United States</td>
                  <td>Gymnastics</td>
                  <td>Most decorated gymnast in World Championship history.</td>

                </tr>

                <tr>

                  <td>Max Verstappen</td>
                  <td>Netherlands</td>
                  <td>Formula One</td>
                  <td>Multiple Formula One World Champion.</td>

                </tr>

                <tr>

                  <td>Lewis Hamilton</td>
                  <td>United Kingdom</td>
                  <td>Formula One</td>
                  <td>Seven-time Formula One World Champion.</td>

                </tr>

                <tr>

                  <td>Rafael Nadal</td>
                  <td>Spain</td>
                  <td>Tennis</td>
                  <td>Known as the "King of Clay".</td>

                </tr>

              </tbody>

            </table>

          </div>

          <h3>Pakistan's Sporting Legends</h3>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>🏏 Imran Khan</h3>

              <p>

                Captained Pakistan to its historic 1992 ICC Cricket World Cup
                victory and remains one of the greatest all-rounders in cricket
                history.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏏 Wasim Akram</h3>

              <p>

                Widely regarded as one of the greatest fast bowlers ever,
                famous for reverse swing and over 900 international wickets.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏑 Hassan Sardar</h3>

              <p>

                One of Pakistan's finest hockey players and a key figure during
                Pakistan's golden era in international hockey.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏸 Jahangir Khan</h3>

              <p>

                Considered the greatest squash player of all time. He remained
                unbeaten in competitive squash for more than five years.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏸 Jansher Khan</h3>

              <p>

                Eight-time World Open champion who continued Pakistan's
                dominance in world squash.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🥇 Arshad Nadeem</h3>

              <p>

                Pakistan's Olympic gold medalist and Olympic record holder in
                men's javelin throw, inspiring a new generation of athletes.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏏 Babar Azam</h3>

              <p>

                One of the world's leading batsmen and among Pakistan's most
                successful modern cricketers across all formats.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏏 Younis Khan</h3>

              <p>

                Pakistan's highest run scorer in Test cricket and captain of
                the 2009 ICC T20 World Cup-winning team.

              </p>

            </div>

          </div>

        </section>



        {/* ===========================
            INTERNATIONAL SPORTS AWARDS
        ============================ */}

        <section
          id="awards"
          className="motorways-section exa-card"
        >

          <h2>Major International Sports Awards</h2>

          <p>

            International sports awards recognize exceptional performances,
            outstanding achievements and contributions made by athletes, teams
            and coaches. These awards are frequently asked in General Knowledge
            examinations.

          </p>

          <div className="motorway-table-wrapper">

            <table className="motorway-table">

              <thead>

                <tr>

                  <th>Award</th>
                  <th>Sport</th>
                  <th>Presented By</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>Ballon d'Or</td>
                  <td>Football</td>
                  <td>France Football</td>

                </tr>

                <tr>

                  <td>The Best FIFA Awards</td>
                  <td>Football</td>
                  <td>FIFA</td>

                </tr>

                <tr>

                  <td>Laureus World Sports Awards</td>
                  <td>Multi-Sport</td>
                  <td>Laureus Academy</td>

                </tr>

                <tr>

                  <td>ICC Awards</td>
                  <td>Cricket</td>
                  <td>International Cricket Council</td>

                </tr>

                <tr>

                  <td>Golden Boot</td>
                  <td>Football</td>
                  <td>Top Goal Scorer Award</td>

                </tr>

                <tr>

                  <td>Golden Ball</td>
                  <td>Football</td>
                  <td>Best Player of Tournament</td>

                </tr>

                <tr>

                  <td>Orange Cap</td>
                  <td>Cricket</td>
                  <td>Indian Premier League</td>

                </tr>

                <tr>

                  <td>Purple Cap</td>
                  <td>Cricket</td>
                  <td>Indian Premier League</td>

                </tr>

              </tbody>

            </table>

          </div>

          <div className="exa-alert exa-alert-warning">

            <strong>Quick Revision:</strong> Ballon d'Or is football's most
            prestigious individual award, while the Laureus World Sports Awards
            honor outstanding athletes across multiple sports.

          </div>

        </section>

                {/* ===========================
            WORLD RECORDS & IMPORTANT
            SPORTS FACTS
        ============================ */}

        <section
          id="records"
          className="motorways-section exa-card"
        >

          <h2>World Records & Important Sports Facts</h2>

          <p>

            Sports history is filled with extraordinary records that have
            inspired millions around the world. These achievements represent
            years of dedication, discipline and excellence. Questions related
            to world records, longest winning streaks, Olympic achievements and
            famous milestones frequently appear in competitive examinations.

          </p>

          <div className="exa-alert exa-alert-info">

            <strong>Exam Tip:</strong> Memorize famous records together with
            the athlete's name and country instead of learning numbers alone.

          </div>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>🏊 Michael Phelps</h3>

              <p>

                The most decorated Olympian in history with <strong>28 Olympic
                medals</strong>, including <strong>23 gold medals</strong>.

              </p>

            </div>

            <div className="motorway-card">

              <h3>⚡ Usain Bolt</h3>

              <p>

                Holds the world records in the 100 metres (9.58 seconds) and
                200 metres (19.19 seconds), making him the fastest man in
                history.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏸 Jahangir Khan</h3>

              <p>

                Won <strong>555 consecutive professional squash matches</strong>,
                one of the longest unbeaten streaks in any sport.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏏 Sachin Tendulkar</h3>

              <p>

                First cricketer to score <strong>100 international
                centuries</strong>.

              </p>

            </div>

            <div className="motorway-card">

              <h3>⚽ Cristiano Ronaldo</h3>

              <p>

                One of the highest goal scorers in international football
                history with numerous club and country records.

              </p>

            </div>

            <div className="motorway-card">

              <h3>⚽ Lionel Messi</h3>

              <p>

                Winner of multiple Ballon d'Or awards and widely regarded as
                one of football's greatest players.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏆 Brazil</h3>

              <p>

                Most successful nation in FIFA Men's World Cup history with
                <strong>5 titles</strong>.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏑 Pakistan</h3>

              <p>

                Among the most successful nations in Hockey World Cup history,
                winning <strong>4 World Cup titles</strong>.

              </p>

            </div>

          </div>

          <h3>Quick Sports Facts</h3>

          <div className="motorway-table-wrapper">

            <table className="motorway-table">

              <thead>

                <tr>

                  <th>Fact</th>
                  <th>Answer</th>

                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>Largest sporting event</td>
                  <td>Olympic Games</td>
                </tr>

                <tr>
                  <td>Most watched single sporting event</td>
                  <td>FIFA World Cup Final</td>
                </tr>

                <tr>
                  <td>Most popular sport worldwide</td>
                  <td>Football</td>
                </tr>

                <tr>
                  <td>National sport of Pakistan</td>
                  <td>Field Hockey</td>
                </tr>

                <tr>
                  <td>Most popular sport in Pakistan</td>
                  <td>Cricket</td>
                </tr>

                <tr>
                  <td>Highest governing body of world football</td>
                  <td>FIFA</td>
                </tr>

                <tr>
                  <td>Highest governing body of world cricket</td>
                  <td>ICC</td>
                </tr>

                <tr>
                  <td>Olympic headquarters</td>
                  <td>Lausanne, Switzerland</td>
                </tr>

                <tr>
                  <td>FIFA headquarters</td>
                  <td>Zurich, Switzerland</td>
                </tr>

                <tr>
                  <td>ICC headquarters</td>
                  <td>Dubai, UAE</td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>



        {/* ===========================
            LATEST SPORTS UPDATES
        ============================ */}

        <section
          id="latest"
          className="motorways-section exa-card"
        >

          <h2>Recent International Sports Highlights (2025–2026)</h2>

          <p>

            Competitive examinations increasingly include questions from recent
            international sporting events. Candidates should regularly follow
            major tournaments, championship winners, Olympic developments and
            record-breaking performances.

          </p>

          <div className="exa-alert exa-alert-warning">

            <strong>Important:</strong> Since sports results change regularly,
            always revise the latest champions before appearing in any
            competitive examination.

          </div>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>🏏 ICC Champions Trophy</h3>

              <p>

                Pakistan hosted matches of the ICC Champions Trophy, marking
                the return of another major ICC tournament to the country.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🥇 Arshad Nadeem</h3>

              <p>

                Continued to inspire Pakistan through world-class performances
                in international javelin competitions after his historic
                Olympic success.

              </p>

            </div>

            <div className="motorway-card">

              <h3>⚽ FIFA Club World Cup</h3>

              <p>

                Expanded FIFA Club World Cup competitions have increased global
                participation and international attention.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🎾 Grand Slam Tennis</h3>

              <p>

                The world's leading tennis players continue competing for the
                Australian Open, French Open, Wimbledon and US Open titles.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏎 Formula One</h3>

              <p>

                Formula One remains one of the fastest-growing global sports,
                attracting millions of viewers worldwide.

              </p>

            </div>

            <div className="motorway-card">

              <h3>🏊 World Championships</h3>

              <p>

                Swimming, athletics and gymnastics world championships continue
                producing remarkable performances and new records.

              </p>

            </div>

          </div>

        </section>



        {/* ===========================
            SPORTS TIMELINE
        ============================ */}

        <section
          id="timeline"
          className="motorways-section exa-card"
        >

          <h2>Important Sports Timeline</h2>

          <p>

            Understanding major historical milestones helps candidates answer
            chronological questions in competitive examinations.

          </p>

          <div className="timeline">

            <div className="timeline-item">
              <h3>1894</h3>
              <p>International Olympic Committee (IOC) established.</p>
            </div>

            <div className="timeline-item">
              <h3>1896</h3>
              <p>First Modern Olympic Games held in Athens, Greece.</p>
            </div>

            <div className="timeline-item">
              <h3>1904</h3>
              <p>FIFA founded in Paris, France.</p>
            </div>

            <div className="timeline-item">
              <h3>1909</h3>
              <p>International Cricket Council established.</p>
            </div>

            <div className="timeline-item">
              <h3>1930</h3>
              <p>First FIFA World Cup held in Uruguay.</p>
            </div>

            <div className="timeline-item">
              <h3>1975</h3>
              <p>First ICC Cricket World Cup held in England.</p>
            </div>

            <div className="timeline-item">
              <h3>1992</h3>
              <p>Pakistan won the ICC Cricket World Cup under Imran Khan.</p>
            </div>

            <div className="timeline-item">
              <h3>2009</h3>
              <p>Pakistan won the ICC Men's T20 World Cup.</p>
            </div>

            <div className="timeline-item">
              <h3>2017</h3>
              <p>Pakistan won the ICC Champions Trophy.</p>
            </div>

            <div className="timeline-item">
              <h3>2024</h3>
              <p>Arshad Nadeem won Olympic Gold Medal in javelin throw.</p>
            </div>

          </div>

        </section>

                {/* ===========================
            QUICK REVISION
        ============================ */}

        <section
          id="revision"
          className="motorways-section exa-card"
        >

          <h2>Sports Current Affairs Quick Revision</h2>

          <p>

            Revise these important one-line facts before attempting MCQs or
            appearing in PMA, ISSB, CSS, FPSC, PPSC, FIA, ASF, MOD, NTS and
            other competitive examinations.

          </p>

          <div className="motorway-cards">

            <div className="motorway-card">
              <h3>🏅 Olympic Games</h3>
              <p>Organized by the International Olympic Committee (IOC).</p>
            </div>

            <div className="motorway-card">
              <h3>🏢 IOC Headquarters</h3>
              <p>Lausanne, Switzerland.</p>
            </div>

            <div className="motorway-card">
              <h3>⚽ FIFA Headquarters</h3>
              <p>Zurich, Switzerland.</p>
            </div>

            <div className="motorway-card">
              <h3>🏏 ICC Headquarters</h3>
              <p>Dubai, United Arab Emirates.</p>
            </div>

            <div className="motorway-card">
              <h3>🏑 National Sport of Pakistan</h3>
              <p>Field Hockey.</p>
            </div>

            <div className="motorway-card">
              <h3>🏏 Most Popular Sport in Pakistan</h3>
              <p>Cricket.</p>
            </div>

            <div className="motorway-card">
              <h3>🌍 World's Most Popular Sport</h3>
              <p>Football (Soccer).</p>
            </div>

            <div className="motorway-card">
              <h3>🏆 FIFA World Cup</h3>
              <p>Held every four years.</p>
            </div>

            <div className="motorway-card">
              <h3>🥇 Olympic Motto</h3>
              <p>Faster, Higher, Stronger – Together.</p>
            </div>

            <div className="motorway-card">
              <h3>🏸 Greatest Squash Legend</h3>
              <p>Jahangir Khan (Pakistan).</p>
            </div>

            <div className="motorway-card">
              <h3>⚡ Fastest Man</h3>
              <p>Usain Bolt (Jamaica).</p>
            </div>

            <div className="motorway-card">
              <h3>🏊 Most Olympic Medals</h3>
              <p>Michael Phelps.</p>
            </div>

            <div className="motorway-card">
              <h3>⚽ Most FIFA World Cups</h3>
              <p>Brazil (5 titles).</p>
            </div>

            <div className="motorway-card">
              <h3>🏏 1992 Cricket World Cup</h3>
              <p>Won by Pakistan under Imran Khan.</p>
            </div>

            <div className="motorway-card">
              <h3>🏆 ICC Champions Trophy 2017</h3>
              <p>Won by Pakistan.</p>
            </div>

            <div className="motorway-card">
              <h3>🥇 Olympic Gold Medalist</h3>
              <p>Arshad Nadeem (Javelin Throw).</p>
            </div>

          </div>

        </section>



        {/* ===========================
            REFERENCES
        ============================ */}

        <section
          id="references"
          className="motorways-section exa-card"
        >

          <h2>Recommended Sources for Sports Current Affairs</h2>

          <p>

            Sports information changes regularly as tournaments conclude,
            rankings are updated and new records are established. Candidates
            should verify the latest information from authentic official
            sources before appearing in competitive examinations.

          </p>

          <ul className="styled-list">

            <li>International Olympic Committee (IOC)</li>

            <li>FIFA Official Website</li>

            <li>International Cricket Council (ICC)</li>

            <li>World Athletics</li>

            <li>International Hockey Federation (FIH)</li>

            <li>International Tennis Federation (ITF)</li>

            <li>Pakistan Cricket Board (PCB)</li>

            <li>Pakistan Sports Board (PSB)</li>

            <li>Pakistan Olympic Association (POA)</li>

            <li>Reliable international sports news agencies and official tournament websites.</li>

          </ul>

          <div className="exa-alert exa-alert-info">

            <strong>Preparation Advice:</strong> Review current champions,
            rankings, records and award winners regularly because sports
            current affairs are updated throughout the year.

          </div>

        </section>



        {/* ===========================
            CONCLUSION
        ============================ */}

        <section className="motorways-section exa-card">

          <h2>Conclusion</h2>

          <p>

            Sports Current Affairs is one of the highest-scoring areas of
            General Knowledge for competitive examinations. A solid
            understanding of international organizations, world tournaments,
            Pakistan's achievements, legendary athletes, records and recent
            sporting events enables candidates to answer objective questions
            confidently.

          </p>

          <p>

            Make it a habit to follow international tournaments, Olympic
            developments, Cricket, Football, Hockey, Tennis and Athletics
            regularly. Consistent revision combined with practice MCQs is the
            most effective strategy for mastering sports current affairs.

          </p>

          <div className="exa-alert exa-alert-success">

            <strong>Next Step:</strong> Complete all 90 Sports Current Affairs
            MCQs below and review the explanations carefully. Reattempt the
            questions periodically to strengthen long-term retention and exam
            performance.

          </div>

        </section>

        {/* ===========================
    SPORTS CURRENT AFFAIRS MCQs
=========================== */}

<section
  id="practicemcq"
  className="motorways-section exa-card"
>

  <h2>Sports Current Affairs Practice MCQs</h2>

  <p>
    Practice these carefully selected Sports Current Affairs MCQs for PMA,
    ISSB, CSS, FPSC, PPSC, FIA, ASF, MOD, NTS and other competitive
    examinations.
  </p>

  <div className="exa-alert exa-alert-info">
    <strong>Exam Tip:</strong> Attempt every question before checking the
    explanation.
  </div>

  <MCQCard
    question="1. Which organization governs international football?"
    options={[
      "UEFA",
      "FIFA",
      "IOC",
      "CAF",
    ]}
    correct={1}
    explanation="FIFA (Fédération Internationale de Football Association) is the governing body of international football."
  />

  <MCQCard
    question="2. Where is FIFA headquarters located?"
    options={[
      "Paris",
      "Zurich",
      "Geneva",
      "London",
    ]}
    correct={1}
    explanation="FIFA headquarters are located in Zurich, Switzerland."
  />

  <MCQCard
    question="3. Which country has won the most FIFA Men's World Cup titles?"
    options={[
      "Germany",
      "Argentina",
      "Brazil",
      "Italy",
    ]}
    correct={2}
    explanation="Brazil has won five FIFA Men's World Cup titles."
  />

  <MCQCard
    question="4. The Olympic Games are organized by:"
    options={[
      "FIFA",
      "IOC",
      "ICC",
      "FIH",
    ]}
    correct={1}
    explanation="The International Olympic Committee (IOC) organizes the Olympic Games."
  />

  <MCQCard
    question="5. IOC headquarters are located in:"
    options={[
      "Geneva",
      "Lausanne",
      "Paris",
      "Vienna",
    ]}
    correct={1}
    explanation="The IOC headquarters are in Lausanne, Switzerland."
  />

  <MCQCard
    question="6. Which country hosted the first modern Olympic Games?"
    options={[
      "Italy",
      "France",
      "Greece",
      "United Kingdom",
    ]}
    correct={2}
    explanation="The first modern Olympic Games were held in Athens, Greece, in 1896."
  />

  <MCQCard
    question="7. Which organization governs international cricket?"
    options={[
      "PCB",
      "ICC",
      "ECB",
      "BCCI",
    ]}
    correct={1}
    explanation="The International Cricket Council (ICC) governs international cricket."
  />

  <MCQCard
    question="8. ICC headquarters are located in:"
    options={[
      "London",
      "Dubai",
      "Melbourne",
      "Mumbai",
    ]}
    correct={1}
    explanation="The ICC headquarters are located in Dubai, United Arab Emirates."
  />

  <MCQCard
    question="9. Pakistan won the ICC Cricket World Cup in:"
    options={[
      "1987",
      "1992",
      "1996",
      "1999",
    ]}
    correct={1}
    explanation="Pakistan won the 1992 ICC Cricket World Cup under Imran Khan."
  />

  <MCQCard
    question="10. Who captained Pakistan to the 1992 Cricket World Cup victory?"
    options={[
      "Wasim Akram",
      "Imran Khan",
      "Javed Miandad",
      "Inzamam-ul-Haq",
    ]}
    correct={1}
    explanation="Imran Khan captained Pakistan to its first Cricket World Cup title."
  />

  <MCQCard
    question="11. What is the national sport of Pakistan?"
    options={[
      "Cricket",
      "Football",
      "Field Hockey",
      "Squash",
    ]}
    correct={2}
    explanation="Field Hockey is the national sport of Pakistan."
  />

  <MCQCard
    question="12. Which sport is most popular in Pakistan?"
    options={[
      "Hockey",
      "Cricket",
      "Football",
      "Kabaddi",
    ]}
    correct={1}
    explanation="Cricket is the most popular sport in Pakistan."
  />

  <MCQCard
    question="13. Which Pakistani athlete won Olympic Gold in Javelin Throw?"
    options={[
      "Talha Talib",
      "Arshad Nadeem",
      "Nooh Dastgir Butt",
      "Shah Hussain",
    ]}
    correct={1}
    explanation="Arshad Nadeem won Pakistan's historic Olympic gold medal in men's javelin throw."
  />

  <MCQCard
    question="14. Which country has won the most Hockey World Cup titles?"
    options={[
      "Australia",
      "Germany",
      "Pakistan",
      "Netherlands",
    ]}
    correct={2}
    explanation="Pakistan has won the Hockey World Cup four times."
  />

  <MCQCard
    question="15. Who is known as the greatest squash player of all time?"
    options={[
      "Jansher Khan",
      "Jahangir Khan",
      "Geoff Hunt",
      "Nick Matthew",
    ]}
    correct={1}
    explanation="Pakistan's Jahangir Khan is widely regarded as the greatest squash player in history."
  />

  <MCQCard
    question="16. Jahangir Khan belongs to which country?"
    options={[
      "India",
      "England",
      "Pakistan",
      "Australia",
    ]}
    correct={2}
    explanation="Jahangir Khan represented Pakistan."
  />

  <MCQCard
    question="17. Which football award is presented to the world's best player?"
    options={[
      "Golden Boot",
      "Ballon d'Or",
      "Golden Ball",
      "UEFA Award",
    ]}
    correct={1}
    explanation="The Ballon d'Or is football's most prestigious individual award."
  />

  <MCQCard
    question="18. Who won the FIFA World Cup 2022?"
    options={[
      "France",
      "Brazil",
      "Argentina",
      "Croatia",
    ]}
    correct={2}
    explanation="Argentina won the 2022 FIFA World Cup in Qatar."
  />

  <MCQCard
    question="19. Lionel Messi represents which country?"
    options={[
      "Spain",
      "Portugal",
      "Argentina",
      "Brazil",
    ]}
    correct={2}
    explanation="Lionel Messi is the captain of Argentina."
  />

  <MCQCard
    question="20. Cristiano Ronaldo represents:"
    options={[
      "Spain",
      "Portugal",
      "Brazil",
      "Italy",
    ]}
    correct={1}
    explanation="Cristiano Ronaldo is Portugal's legendary football captain."
  />

</section>

  <MCQCard
    question="21. Which country won the FIFA Women's World Cup 2023?"
    options={[
      "England",
      "Spain",
      "Sweden",
      "United States",
    ]}
    correct={1}
    explanation="Spain won its first FIFA Women's World Cup title in 2023 by defeating England."
  />

  <MCQCard
    question="22. Which country has won the most Olympic gold medals overall?"
    options={[
      "China",
      "United States",
      "Russia",
      "Germany",
    ]}
    correct={1}
    explanation="The United States has won the highest number of Olympic gold medals in history."
  />

  <MCQCard
    question="23. Which city hosted the 2024 Summer Olympic Games?"
    options={[
      "Tokyo",
      "Los Angeles",
      "Paris",
      "Rome",
    ]}
    correct={2}
    explanation="Paris, France hosted the 2024 Summer Olympic Games."
  />

  <MCQCard
    question="24. Which country hosted the FIFA World Cup 2022?"
    options={[
      "United Arab Emirates",
      "Saudi Arabia",
      "Qatar",
      "Egypt",
    ]}
    correct={2}
    explanation="Qatar became the first Middle Eastern country to host the FIFA World Cup."
  />

  <MCQCard
    question="25. The headquarters of World Athletics is located in:"
    options={[
      "London",
      "Monaco",
      "Paris",
      "Geneva",
    ]}
    correct={1}
    explanation="World Athletics is headquartered in Monaco."
  />

  <MCQCard
    question="26. Which athlete is known as the 'Fastest Man Alive'?"
    options={[
      "Noah Lyles",
      "Yohan Blake",
      "Usain Bolt",
      "Justin Gatlin",
    ]}
    correct={2}
    explanation="Usain Bolt of Jamaica holds the world records in the 100m and 200m."
  />

  <MCQCard
    question="27. Which country does Usain Bolt belong to?"
    options={[
      "United States",
      "Jamaica",
      "Canada",
      "Bahamas",
    ]}
    correct={1}
    explanation="Usain Bolt represented Jamaica throughout his career."
  />

  <MCQCard
    question="28. Who has won the most Olympic medals in history?"
    options={[
      "Carl Lewis",
      "Michael Phelps",
      "Mark Spitz",
      "Usain Bolt",
    ]}
    correct={1}
    explanation="Michael Phelps has won 28 Olympic medals, the most by any athlete."
  />

  <MCQCard
    question="29. Which sport is Michael Phelps famous for?"
    options={[
      "Athletics",
      "Swimming",
      "Cycling",
      "Rowing",
    ]}
    correct={1}
    explanation="Michael Phelps is regarded as the greatest swimmer in Olympic history."
  />

  <MCQCard
    question="30. The Wimbledon Championship is played on which surface?"
    options={[
      "Clay",
      "Hard Court",
      "Grass",
      "Carpet",
    ]}
    correct={2}
    explanation="Wimbledon is the only Grand Slam tournament played on grass courts."
  />

  <MCQCard
    question="31. Which Grand Slam is played on clay courts?"
    options={[
      "US Open",
      "Australian Open",
      "French Open",
      "Wimbledon",
    ]}
    correct={2}
    explanation="The French Open (Roland Garros) is played on clay courts."
  />

  <MCQCard
    question="32. Which country hosts Wimbledon?"
    options={[
      "France",
      "United States",
      "Australia",
      "United Kingdom",
    ]}
    correct={3}
    explanation="Wimbledon is held annually in London, United Kingdom."
  />

  <MCQCard
    question="33. Which Serbian tennis player holds the record for the most men's Grand Slam singles titles?"
    options={[
      "Novak Djokovic",
      "Janko Tipsarević",
      "Nenad Zimonjić",
      "Viktor Troicki",
    ]}
    correct={0}
    explanation="Novak Djokovic holds the record for the most men's Grand Slam singles titles."
  />

  <MCQCard
    question="34. Rafael Nadal is famously known as:"
    options={[
      "King of Grass",
      "King of Clay",
      "King of Hard Court",
      "King of Tennis",
    ]}
    correct={1}
    explanation="Rafael Nadal earned the title 'King of Clay' because of his dominance at the French Open."
  />

  <MCQCard
    question="35. Which organization governs international tennis?"
    options={[
      "ATP",
      "WTA",
      "ITF",
      "USTA",
    ]}
    correct={2}
    explanation="The International Tennis Federation (ITF) governs world tennis."
  />

  <MCQCard
    question="36. Which country has won the most ICC Cricket World Cups?"
    options={[
      "India",
      "Australia",
      "England",
      "Pakistan",
    ]}
    correct={1}
    explanation="Australia has won the ICC Cricket World Cup more times than any other nation."
  />

  <MCQCard
    question="37. Who is known as the 'Sultan of Swing'?"
    options={[
      "Waqar Younis",
      "Glenn McGrath",
      "Wasim Akram",
      "Brett Lee",
    ]}
    correct={2}
    explanation="Wasim Akram earned the nickname 'Sultan of Swing' for his mastery of reverse swing bowling."
  />

  <MCQCard
    question="38. Which Pakistani batsman has scored the most Test runs?"
    options={[
      "Inzamam-ul-Haq",
      "Mohammad Yousuf",
      "Younis Khan",
      "Javed Miandad",
    ]}
    correct={2}
    explanation="Younis Khan is Pakistan's highest run scorer in Test cricket."
  />

  <MCQCard
    question="39. Pakistan won the ICC Champions Trophy in:"
    options={[
      "2013",
      "2015",
      "2017",
      "2019",
    ]}
    correct={2}
    explanation="Pakistan defeated India to win the ICC Champions Trophy in 2017."
  />

  <MCQCard
    question="40. Which Pakistani player was named Player of the Match in the 2017 ICC Champions Trophy Final?"
    options={[
      "Babar Azam",
      "Mohammad Amir",
      "Fakhar Zaman",
      "Shadab Khan",
    ]}
    correct={2}
    explanation="Fakhar Zaman scored a brilliant century against India and was named Player of the Match."
  />
    <MCQCard
    question="41. Which country has won the most Hockey World Cup titles?"
    options={[
      "Australia",
      "Netherlands",
      "Germany",
      "Pakistan",
    ]}
    correct={3}
    explanation="Pakistan has won the Hockey World Cup four times, the highest by any nation."
  />

  <MCQCard
    question="42. Which organization governs international field hockey?"
    options={[
      "FIH",
      "FIFA",
      "IOC",
      "IIHF",
    ]}
    correct={0}
    explanation="The International Hockey Federation (FIH) governs international field hockey."
  />

  <MCQCard
    question="43. Where is the headquarters of the International Hockey Federation (FIH)?"
    options={[
      "Amsterdam",
      "Brussels",
      "Lausanne",
      "Berlin",
    ]}
    correct={2}
    explanation="The International Hockey Federation (FIH) is headquartered in Lausanne, Switzerland."
  />

  <MCQCard
    question="44. Who is the current President of the International Hockey Federation (FIH)?"
    options={[
      "Gianni Infantino",
      "Sebastian Coe",
      "Tayyab Ikram",
      "Thomas Bach",
    ]}
    correct={2}
    explanation="Tayyab Ikram of Pakistan is the President of the International Hockey Federation."
  />

  <MCQCard
    question="45. Which Pakistani athlete remained unbeaten in professional squash for over five years?"
    options={[
      "Jansher Khan",
      "Jahangir Khan",
      "Qamar Zaman",
      "Azam Khan",
    ]}
    correct={1}
    explanation="Jahangir Khan remained unbeaten in 555 consecutive professional matches."
  />

  <MCQCard
    question="46. Which country hosts the Formula One Grand Prix at Silverstone Circuit?"
    options={[
      "Italy",
      "France",
      "United Kingdom",
      "Germany",
    ]}
    correct={2}
    explanation="The British Grand Prix is held at Silverstone Circuit in England."
  />

  <MCQCard
    question="47. Formula One is governed internationally by:"
    options={[
      "FIA",
      "FIFA",
      "IOC",
      "FIM",
    ]}
    correct={0}
    explanation="Formula One is governed by the Fédération Internationale de l'Automobile (FIA)."
  />

  <MCQCard
    question="48. Which Dutch driver has won multiple Formula One World Championships in recent years?"
    options={[
      "Fernando Alonso",
      "Lewis Hamilton",
      "Max Verstappen",
      "Charles Leclerc",
    ]}
    correct={2}
    explanation="Max Verstappen has won multiple Formula One World Championships."
  />

  <MCQCard
    question="49. Lewis Hamilton belongs to:"
    options={[
      "Germany",
      "Australia",
      "United Kingdom",
      "Canada",
    ]}
    correct={2}
    explanation="Lewis Hamilton is a British Formula One racing driver."
  />

  <MCQCard
    question="50. Which country is famous for hosting the Monaco Grand Prix?"
    options={[
      "France",
      "Monaco",
      "Italy",
      "Spain",
    ]}
    correct={1}
    explanation="The Monaco Grand Prix is one of Formula One's most prestigious races."
  />

  <MCQCard
    question="51. Which organization governs international basketball?"
    options={[
      "NBA",
      "FIBA",
      "IBA",
      "IOC",
    ]}
    correct={1}
    explanation="The International Basketball Federation (FIBA) governs world basketball."
  />

  <MCQCard
    question="52. Basketball was invented in:"
    options={[
      "United States",
      "Canada",
      "England",
      "Australia",
    ]}
    correct={1}
    explanation="Basketball was invented by Canadian educator Dr. James Naismith."
  />

  <MCQCard
    question="53. Which country has won the most Olympic men's basketball gold medals?"
    options={[
      "Spain",
      "United States",
      "France",
      "Serbia",
    ]}
    correct={1}
    explanation="The United States has dominated Olympic men's basketball."
  />

  <MCQCard
    question="54. Which organization governs international badminton?"
    options={[
      "IBF",
      "BWF",
      "BAI",
      "ITF",
    ]}
    correct={1}
    explanation="The Badminton World Federation (BWF) governs international badminton."
  />

  <MCQCard
    question="55. BWF headquarters are located in:"
    options={[
      "Singapore",
      "Bangkok",
      "Kuala Lumpur",
      "Jakarta",
    ]}
    correct={2}
    explanation="The Badminton World Federation is headquartered in Kuala Lumpur, Malaysia."
  />

  <MCQCard
    question="56. Which country has traditionally dominated badminton?"
    options={[
      "Brazil",
      "Indonesia",
      "Mexico",
      "Turkey",
    ]}
    correct={1}
    explanation="Indonesia has produced numerous world champions in badminton."
  />

  <MCQCard
    question="57. Which organization governs international volleyball?"
    options={[
      "FIVB",
      "FIBA",
      "FIFA",
      "FIH",
    ]}
    correct={0}
    explanation="The Fédération Internationale de Volleyball (FIVB) governs international volleyball."
  />

  <MCQCard
    question="58. Volleyball was invented in:"
    options={[
      "Germany",
      "United States",
      "Japan",
      "Brazil",
    ]}
    correct={1}
    explanation="Volleyball was invented in the United States by William G. Morgan in 1895."
  />

  <MCQCard
    question="59. Which sport is played in the Tour de France?"
    options={[
      "Motor Racing",
      "Athletics",
      "Cycling",
      "Triathlon",
    ]}
    correct={2}
    explanation="The Tour de France is the world's most famous professional cycling race."
  />

  <MCQCard
    question="60. The Ryder Cup is associated with which sport?"
    options={[
      "Tennis",
      "Golf",
      "Cricket",
      "Hockey",
    ]}
    correct={1}
    explanation="The Ryder Cup is a prestigious golf competition between teams from Europe and the United States."
  />

    <MCQCard
    question="61. Which organization governs international rugby?"
    options={[
      "World Rugby",
      "FIFA",
      "FIVB",
      "FIBA",
    ]}
    correct={0}
    explanation="World Rugby is the international governing body for the sport of rugby union."
  />

  <MCQCard
    question="62. The Rugby World Cup is held every:"
    options={[
      "2 years",
      "3 years",
      "4 years",
      "5 years",
    ]}
    correct={2}
    explanation="The Rugby World Cup is organized every four years."
  />

  <MCQCard
    question="63. Which country has won the most Rugby World Cup titles?"
    options={[
      "England",
      "New Zealand",
      "South Africa",
      "Australia",
    ]}
    correct={2}
    explanation="South Africa has won the Rugby World Cup more times than any other nation."
  />

  <MCQCard
    question="64. Which organization governs international swimming?"
    options={[
      "FINA / World Aquatics",
      "IOC",
      "FISA",
      "FIVB",
    ]}
    correct={0}
    explanation="World Aquatics (formerly FINA) is the governing body for international aquatic sports."
  />

  <MCQCard
    question="65. Which athlete has won the most Olympic gold medals?"
    options={[
      "Usain Bolt",
      "Carl Lewis",
      "Michael Phelps",
      "Mark Spitz",
    ]}
    correct={2}
    explanation="Michael Phelps has won 23 Olympic gold medals."
  />

  <MCQCard
    question="66. Simone Biles is famous for which sport?"
    options={[
      "Athletics",
      "Gymnastics",
      "Swimming",
      "Figure Skating",
    ]}
    correct={1}
    explanation="Simone Biles is regarded as one of the greatest gymnasts of all time."
  />

  <MCQCard
    question="67. Which country does Simone Biles represent?"
    options={[
      "Canada",
      "United States",
      "United Kingdom",
      "Australia",
    ]}
    correct={1}
    explanation="Simone Biles competes internationally for the United States."
  />

  <MCQCard
    question="68. Which sport is governed by the International Tennis Federation (ITF)?"
    options={[
      "Table Tennis",
      "Tennis",
      "Squash",
      "Badminton",
    ]}
    correct={1}
    explanation="The ITF is the international governing body of tennis."
  />

  <MCQCard
    question="69. The Davis Cup is associated with:"
    options={[
      "Football",
      "Tennis",
      "Cricket",
      "Basketball",
    ]}
    correct={1}
    explanation="The Davis Cup is the premier international men's team tennis competition."
  />

  <MCQCard
    question="70. Which Grand Slam tournament is played in Melbourne?"
    options={[
      "French Open",
      "US Open",
      "Australian Open",
      "Wimbledon",
    ]}
    correct={2}
    explanation="The Australian Open is held annually in Melbourne, Australia."
  />

  <MCQCard
    question="71. Which Pakistani cricketer is known as the 'Rawalpindi Express'?"
    options={[
      "Wasim Akram",
      "Shoaib Akhtar",
      "Waqar Younis",
      "Mohammad Amir",
    ]}
    correct={1}
    explanation="Shoaib Akhtar earned the nickname 'Rawalpindi Express' due to his exceptional pace."
  />

  <MCQCard
    question="72. Which Pakistani fast bowler is known as the 'Sultan of Swing'?"
    options={[
      "Waqar Younis",
      "Wasim Akram",
      "Shoaib Akhtar",
      "Shaheen Afridi",
    ]}
    correct={1}
    explanation="Wasim Akram is widely known as the 'Sultan of Swing'."
  />

  <MCQCard
    question="73. Who is Pakistan's highest Test run scorer?"
    options={[
      "Javed Miandad",
      "Inzamam-ul-Haq",
      "Younis Khan",
      "Mohammad Yousuf",
    ]}
    correct={2}
    explanation="Younis Khan is Pakistan's leading run scorer in Test cricket."
  />

  <MCQCard
    question="74. Which football player won the FIFA World Cup with Argentina in 2022?"
    options={[
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Neymar Jr.",
      "Kylian Mbappé",
    ]}
    correct={1}
    explanation="Lionel Messi captained Argentina to the 2022 FIFA World Cup title."
  />

  <MCQCard
    question="75. Kylian Mbappé represents which country?"
    options={[
      "Belgium",
      "France",
      "Portugal",
      "Spain",
    ]}
    correct={1}
    explanation="Kylian Mbappé is an international footballer for France."
  />

  <MCQCard
    question="76. Which country won the FIFA Men's World Cup in 2022?"
    options={[
      "France",
      "Brazil",
      "Argentina",
      "Croatia",
    ]}
    correct={2}
    explanation="Argentina defeated France in the final to win the 2022 FIFA World Cup."
  />

  <MCQCard
    question="77. Which country has won the most Cricket World Cup titles?"
    options={[
      "India",
      "Australia",
      "West Indies",
      "England",
    ]}
    correct={1}
    explanation="Australia has won the ICC Cricket World Cup more times than any other nation."
  />

  <MCQCard
    question="78. The ICC Champions Trophy is organized by:"
    options={[
      "PCB",
      "ICC",
      "ACC",
      "BCCI",
    ]}
    correct={1}
    explanation="The ICC Champions Trophy is organized by the International Cricket Council."
  />

  <MCQCard
    question="79. Which city is known as the Olympic Capital?"
    options={[
      "Athens",
      "Paris",
      "Lausanne",
      "Geneva",
    ]}
    correct={2}
    explanation="Lausanne, Switzerland, is officially known as the Olympic Capital."
  />

  <MCQCard
    question="80. Which symbol represents the unity of the five inhabited continents?"
    options={[
      "Olympic Torch",
      "Olympic Rings",
      "Olympic Flag",
      "Olympic Flame",
    ]}
    correct={1}
    explanation="The five Olympic Rings symbolize the unity of the five inhabited continents."
  />
    <MCQCard
    question="81. Which country hosted the 2024 Summer Olympic Games?"
    options={[
      "Japan",
      "France",
      "Italy",
      "United States",
    ]}
    correct={1}
    explanation="Paris, France hosted the 2024 Summer Olympic Games."
  />

  <MCQCard
    question="82. Arshad Nadeem won Pakistan's first Olympic gold medal in which athletics event?"
    options={[
      "Discus Throw",
      "Shot Put",
      "Javelin Throw",
      "Hammer Throw",
    ]}
    correct={2}
    explanation="Arshad Nadeem won Pakistan's historic Olympic gold medal in the men's javelin throw."
  />

  <MCQCard
    question="83. Arshad Nadeem belongs to which province of Pakistan?"
    options={[
      "Punjab",
      "Sindh",
      "Khyber Pakhtunkhwa",
      "Balochistan",
    ]}
    correct={0}
    explanation="Arshad Nadeem belongs to Mian Channu in Punjab, Pakistan."
  />

  <MCQCard
    question="84. Which Pakistani became President of the International Hockey Federation (FIH)?"
    options={[
      "Shahbaz Ahmed",
      "Akhtar Rasool",
      "Tayyab Ikram",
      "Samiullah Khan",
    ]}
    correct={2}
    explanation="Tayyab Ikram of Pakistan serves as President of the International Hockey Federation (FIH)."
  />

  <MCQCard
    question="85. Which city hosts the headquarters of FIFA?"
    options={[
      "Geneva",
      "Zurich",
      "Lausanne",
      "Bern",
    ]}
    correct={1}
    explanation="FIFA headquarters are located in Zurich, Switzerland."
  />

  <MCQCard
    question="86. Which country has won the most Olympic medals overall?"
    options={[
      "China",
      "Russia",
      "United States",
      "Germany",
    ]}
    correct={2}
    explanation="The United States has won the highest number of Olympic medals in history."
  />

  <MCQCard
    question="87. Which city is the headquarters of the International Olympic Committee (IOC)?"
    options={[
      "Geneva",
      "Zurich",
      "Lausanne",
      "Paris",
    ]}
    correct={2}
    explanation="The International Olympic Committee is headquartered in Lausanne, Switzerland."
  />

  <MCQCard
    question="88. Which country is famous for the All England Badminton Championships?"
    options={[
      "China",
      "England",
      "Malaysia",
      "Indonesia",
    ]}
    correct={1}
    explanation="The All England Open is one of badminton's oldest and most prestigious tournaments, held in England."
  />

  <MCQCard
    question="89. The Tour de France is associated with which sport?"
    options={[
      "Athletics",
      "Cycling",
      "Motor Racing",
      "Triathlon",
    ]}
    correct={1}
    explanation="The Tour de France is the world's most famous professional road cycling race."
  />

  <MCQCard
    question="90. Which country won the ICC Champions Trophy 2017?"
    options={[
      "India",
      "Australia",
      "Pakistan",
      "England",
    ]}
    correct={2}
    explanation="Pakistan defeated India in the final to win the ICC Champions Trophy 2017."
  />

  <MCQCard
    question="91. Which football player is popularly known as 'CR7'?"
    options={[
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Neymar Jr.",
      "Kylian Mbappé",
    ]}
    correct={1}
    explanation="Cristiano Ronaldo is globally recognized by the nickname 'CR7'."
  />

  <MCQCard
    question="92. Which football player is widely known as 'La Pulga' (The Flea)?"
    options={[
      "Cristiano Ronaldo",
      "Erling Haaland",
      "Lionel Messi",
      "Luka Modrić",
    ]}
    correct={2}
    explanation="Lionel Messi is affectionately known as 'La Pulga' because of his height and agility."
  />

  <MCQCard
    question="93. Which country has won the most UEFA European Championship titles?"
    options={[
      "Germany and Spain",
      "France",
      "Italy",
      "Portugal",
    ]}
    correct={0}
    explanation="Germany and Spain are tied for the most UEFA European Championship titles."
  />

  <MCQCard
    question="94. The Ballon d'Or award is associated with:"
    options={[
      "Cricket",
      "Football",
      "Hockey",
      "Tennis",
    ]}
    correct={1}
    explanation="The Ballon d'Or is the most prestigious individual award in world football."
  />

  <MCQCard
    question="95. Which Pakistani squash legend won over 500 consecutive professional matches?"
    options={[
      "Jansher Khan",
      "Jahangir Khan",
      "Qamar Zaman",
      "Azam Khan",
    ]}
    correct={1}
    explanation="Jahangir Khan remained unbeaten in 555 consecutive professional matches."
  />

  <MCQCard
    question="96. Which country is known as the birthplace of the modern Olympic Games?"
    options={[
      "France",
      "Italy",
      "Greece",
      "United Kingdom",
    ]}
    correct={2}
    explanation="The first modern Olympic Games were held in Athens, Greece, in 1896."
  />

  <MCQCard
    question="97. Which organization is responsible for organizing the Cricket World Cup?"
    options={[
      "Asian Cricket Council",
      "ICC",
      "PCB",
      "MCC",
    ]}
    correct={1}
    explanation="The International Cricket Council (ICC) organizes the Cricket World Cup."
  />

  <MCQCard
    question="98. Which Pakistani athlete won a gold medal at the 2024 Paris Olympics?"
    options={[
      "Nooh Dastgir Butt",
      "Talha Talib",
      "Arshad Nadeem",
      "Shah Hussain",
    ]}
    correct={2}
    explanation="Arshad Nadeem won Pakistan's first-ever Olympic gold medal in an individual athletics event at the Paris 2024 Olympics."
  />

  <MCQCard
    question="99. Which city is known as the 'Olympic Capital'?"
    options={[
      "Athens",
      "Paris",
      "Lausanne",
      "Geneva",
    ]}
    correct={2}
    explanation="Lausanne, Switzerland, is officially recognized as the Olympic Capital because it hosts the IOC headquarters."
  />

  <MCQCard
    question="100. Sports Current Affairs questions are most commonly asked in which competitive examinations in Pakistan?"
    options={[
      "PMA, ISSB, CSS, FPSC, PPSC",
      "Only Matric Exams",
      "Only University Entry Tests",
      "Only Board Exams",
    ]}
    correct={0}
    explanation="Sports Current Affairs is an important General Knowledge topic in PMA, ISSB, CSS, FPSC, PPSC, FIA, ASF, MOD, NTS and many other competitive examinations."
  />

  {/* ===========================
    FREQUENTLY ASKED QUESTIONS
=========================== */}

<section id="faq" className="motorways-section exa-card">

  <h2>Frequently Asked Questions</h2>

  <div className="faq-list">

    <details className="faq-item" open>
      <summary>What is the national sport of Pakistan?</summary>

      <p>
        Field Hockey is the official national sport of Pakistan, although
        cricket is the country's most popular sport.
      </p>
    </details>

    <details className="faq-item">
      <summary>Which Pakistani athlete won an Olympic gold medal?</summary>

      <p>
        Arshad Nadeem won Pakistan's historic Olympic gold medal in the men's
        javelin throw at the Paris 2024 Olympic Games.
      </p>
    </details>

    <details className="faq-item">
      <summary>Which country has won the most FIFA World Cup titles?</summary>

      <p>
        Brazil has won five FIFA Men's World Cup titles, making it the most
        successful nation in World Cup history.
      </p>
    </details>

    <details className="faq-item">
      <summary>Who is the greatest squash player from Pakistan?</summary>

      <p>
        Jahangir Khan is regarded as the greatest squash player in history,
        remaining unbeaten in 555 consecutive professional matches.
      </p>
    </details>

    <details className="faq-item">
      <summary>Where is FIFA headquarters located?</summary>

      <p>
        FIFA headquarters are located in Zurich, Switzerland.
      </p>
    </details>

    <details className="faq-item">
      <summary>Where is the headquarters of the International Olympic Committee (IOC)?</summary>

      <p>
        The International Olympic Committee (IOC) is headquartered in
        Lausanne, Switzerland.
      </p>
    </details>

    <details className="faq-item">
      <summary>Which organization governs international cricket?</summary>

      <p>
        The International Cricket Council (ICC) is responsible for governing
        international cricket.
      </p>
    </details>

    <details className="faq-item">
      <summary>Who led Pakistan to victory in the 1992 Cricket World Cup?</summary>

      <p>
        Pakistan won the 1992 ICC Cricket World Cup under the captaincy of
        Imran Khan.
      </p>
    </details>

    <details className="faq-item">
      <summary>Why are Sports Current Affairs important for competitive exams?</summary>

      <p>
        Questions about international tournaments, famous athletes, Olympic
        records, governing bodies and Pakistan's sporting achievements are
        frequently asked in PMA, ISSB, CSS, FPSC, PPSC, FIA, ASF and MOD
        examinations.
      </p>
    </details>

    <details className="faq-item">
      <summary>How should I prepare Sports Current Affairs effectively?</summary>

      <p>
        Study major international tournaments, governing organizations,
        Pakistan's achievements, world records and regularly practice MCQs to
        improve retention.
      </p>
    </details>

  </div>

</section>

      {/* ===========================
          CONCLUSION
      ============================ */}

      <section className="motorways-section exa-card">

        <h2>Conclusion</h2>

        <p>

          Sports Current Affairs is one of the most important sections of
          General Knowledge for PMA Long Course, ISSB, CSS, FPSC, PPSC, FIA,
          ASF, MOD, NTS and many other competitive examinations. Questions
          frequently cover international tournaments, governing organizations,
          legendary athletes, Pakistan's sporting achievements, Olympic Games,
          Cricket World Cups, FIFA World Cups, Hockey, Tennis, Formula One and
          recent sporting events.

        </p>

        <p>

          Understanding major championships, important records, famous players,
          international sports organizations and Pakistan's contributions to
          world sports can help candidates secure valuable marks in objective
          examinations. Along with studying theory, regularly practicing MCQs
          is one of the most effective ways to improve accuracy and confidence.

        </p>

        <div className="exa-alert exa-alert-success">

          <strong>Preparation Tip:</strong> Revise Sports Current Affairs every
          week, follow major international tournaments, remember important
          headquarters, famous athletes, recent champions and continue solving
          MCQs to strengthen your preparation.

        </div>

      </section>
</div>
    </main>
    <Footer />
    </>
  );
}
