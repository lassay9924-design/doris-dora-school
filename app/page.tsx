import Image from "next/image";

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
    alt: "Student graduation celebration",
  },
  {
    src: "/sports-field.jpeg",
    alt: "Students participating in school activities",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#home">
            <img
  src="/school-logo.jpeg"
  alt="Doris & Dora International School"
  className="school-logo"
            <span>
              <strong>Doris &amp; Dora</strong>
              <small>International School</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#life">School Life</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-cta" href="#contact">Apply Now</a>
        </div>
      </header>

      <section
  className="hero"
  style={{
    backgroundImage: "url('/sports-field.jpeg')",
  }}
>
  <div className="hero-overlay"></div>

  <div className="hero-content">
    <span className="location">PORT LOKO CITY • SIERRA LEONE</span>

    <h1>
      Where integrity, love and
      <br />
      learning shape tomorrow.
    </h1>

    <p>
      A welcoming learning community committed to academic growth,
      character, leadership and the development of confident young people.
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
</section>
      <section className="motto-strip">
        <div className="container motto-inner">
          <span>OUR MOTTO</span>
          <strong>Integrity • Love • Learning</strong>
          <span>PORT LOKO CITY</span>
        </div>
      </section>
      <section id="about" className="section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">WELCOME TO DORIS &amp; DORA</p>
            <h2>Education with purpose. Character with confidence.</h2>
            <p className="lead">
              Doris and Dora International School is dedicated to creating an
              environment where students can learn, grow and discover their
              potential.
            </p>
            <p>
              Our school brings together academic learning, personal
              development, creativity, leadership and activities that help
              students become responsible members of their communities.
            </p>
            <a className="text-link" href="#contact">Learn more about enrollment →</a>
          </div>

          <div className="logo-card">
            <Image
              src="/images/school-logo.jpeg"
              alt="Doris and Dora International School crest"
              width={520}
              height={520}
            />
            <div>
              <strong>Integrity, Love and Learning.</strong>
              <span>Our values guide the way we teach, lead and serve.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE OFFER</p>
            <h2>A school experience built around the whole student.</h2>
            <p>Strong academics, meaningful activities and a supportive school community.</p>
          </div>

          <div className="cards">
            <article className="card">
              <div className="icon">01</div>
              <h3>Quality Education</h3>
              <p>Learning experiences designed to build knowledge, confidence and a strong foundation for the future.</p>
            </article>
            <article className="card">
              <div className="icon">02</div>
              <h3>Leadership &amp; Character</h3>
              <p>Students are encouraged to lead with integrity, respect others and take responsibility for their growth.</p>
            </article>
            <article className="card">
              <div className="icon">03</div>
              <h3>Sports &amp; Activities</h3>
              <p>Opportunities beyond the classroom help students develop teamwork, discipline, creativity and confidence.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="life" className="section">
        <div className="container two-column reverse-mobile">
          <div className="photo-feature">
            <Image
              src="/images/graduation-1.jpeg"
              alt="Students celebrating graduation"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">SCHOOL LIFE</p>
            <h2>Celebrating achievement and possibility.</h2>
            <p className="lead">
              From the classroom to the field, students have opportunities to
              learn, compete, celebrate milestones and build memories together.
            </p>
            <ul className="check-list">
              <li>Academic development and lifelong learning</li>
              <li>Sports and teamwork</li>
              <li>Leadership and personal growth</li>
              <li>Celebrations of student achievement</li>
            </ul>
          </div>
        </div>
      </section>

     <section id="gallery" className="gallery-section">
  <div className="gallery-container">
    <div className="gallery-heading">
      <span>OUR SCHOOL</span>
      <h2>Life at Doris & Dora</h2>
      <p>
        Celebrating our students, achievements, and the moments
        that make our school community special.
      </p>
    </div>

    <div className="gallery-grid">
      <div className="gallery-card">
        <img
          src="/graduation-1.jpeg"
          alt="Doris & Dora International School graduation"
        />
      </div>

      <div className="gallery-card">
        <img
          src="/graduation-2.jpeg"
          alt="Students at graduation"
        />
      </div>

      <div className="gallery-card">
        <img
          src="/graduation-3.jpeg"
          alt="Graduation celebration"
        />
      </div>

      <div className="gallery-card">
        <img
          src="/sports-field.jpeg"
          alt="Doris & Dora International School sports field"
        />
      </div>
    </div>
  </div>
</section>
      <section id="contact" className="contact-section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow eyebrow-light">ADMISSIONS</p>
            <h2>Ready to learn more?</h2>
            <p>
              Contact Doris and Dora International School for admissions,
              enrollment information, school visits and questions about our
              programs.
            </p>
            <div className="contact-details">
              <div><span>Location</span><strong>Port Loko City, Sierra Leone</strong></div>
              <div><span>School</span><strong>Doris and Dora International School</strong></div>
            </div>
          </div>

          <div className="contact-card">
            <h3>Begin your inquiry</h3>
            <p>Replace the contact details below with the school&apos;s official phone number, WhatsApp and email before publishing.</p>
            <div className="placeholder-contact">
              <div>📞 <strong>School phone:</strong> +232 33 418107</div>
              <div>📞 <strong>School phone:</strong> +232 90 278551</div>
              <div>💬 <strong>WhatsApp:</strong> +232 90 278551</div>
              <div>✉️ <strong>Email:</strong> dorisanddoraschool@gmail.com</div>
            </div>
            <a className="button button-primary full" href="#home">Back to top</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Doris &amp; Dora International School</strong>
            <span>Port Loko City, Sierra Leone</span>
          </div>
          <span>Integrity • Love • Learning</span>
        </div>
      </footer>
    </main>
  );
}
