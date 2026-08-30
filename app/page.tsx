const gallery = [
  {
    src: "/graduation-1.jpeg",
    alt: "Students celebrating graduation",
  },
  {
    src: "/graduation-2.jpeg",
    alt: "Graduating students",
  },
  {
    src: "/graduation-3.jpeg",
    alt: "Students celebrating their achievement",
  },
  {
    src: "/sports-field.jpeg",
    alt: "Students participating in school activities",
  },
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <div className="container nav">
          <a href="#home" className="brand">
            <img
              src="/school-logo.jpeg"
              alt="Doris & Dora International School"
              className="school-logo"
            />

            <div className="brand-text">
              <strong>Doris &amp; Dora</strong>
              <span>International School</span>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#life">School Life</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Apply Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-overlay" />

        <div className="container hero-content">
          <div className="location-pill">
            PORT LOKO CITY • SIERRA LEONE
          </div>

          <h1>
            Where integrity, love
            <br />
            and learning shape tomorrow.
          </h1>

          <p>
            A welcoming learning community committed to academic growth,
            character, leadership and the development of confident young
            people.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-button">
              Start an Application
            </a>

            <a href="#about" className="secondary-button">
              Discover Our School
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>OUR MOTTO</span>
          <strong>Integrity • Love • Learning</strong>
          <span>PORT LOKO CITY</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">WELCOME TO DORIS &amp; DORA</p>

            <h2>
              Building strong minds,
              <br />
              strong character.
            </h2>

            <p className="section-text">
              Doris &amp; Dora International School is a welcoming educational
              community dedicated to helping young people learn, grow and
              discover their potential.
            </p>

            <p className="section-text">
              Through quality education, positive values and a supportive
              environment, we prepare students to become confident,
              responsible and compassionate leaders.
            </p>

            <a href="#contact" className="text-link">
              Learn more about our school →
            </a>
          </div>

          <div className="values-card">
            <div className="value">
              <span>01</span>
              <div>
                <h3>Integrity</h3>
                <p>
                  We encourage honesty, responsibility and strong personal
                  values.
                </p>
              </div>
            </div>

            <div className="value">
              <span>02</span>
              <div>
                <h3>Love</h3>
                <p>
                  We create a caring environment where every student can feel
                  valued.
                </p>
              </div>
            </div>

            <div className="value">
              <span>03</span>
              <div>
                <h3>Learning</h3>
                <p>
                  We inspire curiosity, academic growth and a lifelong love of
                  learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="section programs-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE OFFER</p>
            <h2>Learning with purpose.</h2>
            <p>
              A balanced educational experience designed to help students
              succeed academically and personally.
            </p>
          </div>

          <div className="program-grid">
            <article className="program-card">
              <span className="program-number">01</span>
              <h3>Academic Excellence</h3>
              <p>
                Encouraging students to develop strong foundations, critical
                thinking and a passion for learning.
              </p>
            </article>

            <article className="program-card featured">
              <span className="program-number">02</span>
              <h3>Character Development</h3>
              <p>
                Helping students grow into respectful, responsible and
                confident members of their communities.
              </p>
            </article>

            <article className="program-card">
              <span className="program-number">03</span>
              <h3>Leadership &amp; Growth</h3>
              <p>
                Giving young people opportunities to build confidence,
                teamwork and leadership skills.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SCHOOL LIFE */}
      <section id="life" className="life-section">
        <div className="life-image">
          <img
            src="/sports-field.jpeg"
            alt="Students participating in school activities"
          />
        </div>

        <div className="life-content">
          <p className="eyebrow">SCHOOL LIFE</p>

          <h2>Learning happens beyond the classroom.</h2>

          <p>
            Our students are encouraged to participate, collaborate and build
            friendships through school activities and experiences.
          </p>

          <div className="life-points">
            <span>✓ Teamwork</span>
            <span>✓ Confidence</span>
            <span>✓ Creativity</span>
            <span>✓ Leadership</span>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section gallery-section">
        <div className="container">
          <div className="section-heading gallery-heading">
            <p className="eyebrow">OUR COMMUNITY</p>
            <h2>Moments worth remembering.</h2>
            <p>
              A glimpse into the experiences and celebrations that make our
              school community special.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <div
                className={`gallery-item gallery-item-${index + 1}`}
                key={image.src}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / APPLICATION */}
      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <div>
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Give your child a place to grow.</h2>
            <p>
              Interested in learning more about Doris &amp; Dora International
              School? Contact us to learn about admissions and enrollment.
            </p>
          </div>

          <div className="contact-card">
            <h3>Admissions</h3>
            <p>We would love to hear from you.</p>

            <a href="mailto:info@dorisdorainternationalschool.com">
              Contact the School
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img
              src="/school-logo.jpeg"
              alt="Doris & Dora International School"
              className="school-logo"
            />

            <div>
              <strong>Doris &amp; Dora</strong>
              <span>International School</span>
            </div>
          </div>

          <div className="footer-motto">
            Integrity • Love • Learning
          </div>

          <div className="footer-location">
            Port Loko City, Sierra Leone
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Doris &amp; Dora International School.
          All rights reserved.
        </div>
      </footer>
    </main>
  );
}
