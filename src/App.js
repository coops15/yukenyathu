import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileimg from './assets/img/profile-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationCrosshairs, faPhone } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import "boxicons";

function App() {

  const [index, setIndex] = useState(0);
  const typedItems = ['Full Stack Developer', 'Designer', 'Freelancer', 'Software Engineer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % typedItems.length);
    }, 2000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  const [activeSection, setActiveSection] = useState('');

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <>

      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src={profileimg}
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Yukenthiran Yathu</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="mailto:yukenyathu@gmail.com" className="email">
                <box-icon name='envelope' color='#ffffff' ></box-icon>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100091305362940" className="facebook">
                <box-icon name='facebook' type='logo' color='#ffffff' ></box-icon>
              </a>
              <a href="https://www.instagram.com/ty_harington_99?igsh=dXhqcXBzazR3cXB6" className="instagram">
                <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon>
              </a>
              <a href="https://wa.me/+94788648271" className="whatsapp">
                <box-icon name='whatsapp' type='logo' color='#ffffff' ></box-icon>
              </a>
              <a href="https://www.linkedin.com/in/yukenthiranyathu/" className="linkedin">
                <box-icon name='linkedin' type='logo' color='#ffffff' ></box-icon>
              </a>
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className={activeSection === 'hero' ? 'nav-link scrollto active' : 'nav-link scrollto'} onClick={() => handleNavLinkClick('hero')}>
                  <box-icon name='home' color='#ffffff'></box-icon> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className={activeSection === 'about' ? 'nav-link scrollto active' : 'nav-link scrollto'} onClick={() => handleNavLinkClick('about')}>
                  <box-icon name='user' color='#ffffff'></box-icon> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className={activeSection === 'resume' ? 'nav-link scrollto active' : 'nav-link scrollto'} onClick={() => handleNavLinkClick('resume')}>
                  <box-icon name='file-blank' color='#ffffff'></box-icon> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className={activeSection === 'portfolio' ? 'nav-link scrollto active' : 'nav-link scrollto'} onClick={() => handleNavLinkClick('portfolio')}>
                  <box-icon name='book-content' color='#ffffff'></box-icon> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className={activeSection === 'services' ? 'nav-link scrollto active' : 'nav-link scrollto'} onClick={() => handleNavLinkClick('services')}>
                  <box-icon name='server' color='#ffffff'></box-icon> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className={activeSection === 'contact' ? 'nav-link scrollto active' : 'nav-link scrollto'} onClick={() => handleNavLinkClick('contact')}>
                  <box-icon name='envelope' color='#ffffff'></box-icon> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
        </div>
      </header>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Yukenthiran Yathu</h1>
          <p>
            I'm{' '}
            <span className="typed">
              {typedItems[index]}
            </span>
          </p>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
              <p>
                Hi there! I'm <b>Yukenthiran Yathu, </b> a passionate computer science student with a knack for problem-solving and a love for technology. Currently, I'm honing my skills as a Junior Software Engineer and Freelancer.<br /><br />
                My journey into the world of programming began during my studies, where I delved deep into coding languages and techniques through open-source resources and online tutorials. I've developed a strong foundation in various technologies, including ReactJS, MongoDB, JavaScript, Java, C++, and Python, along with proficiency in several frameworks.
                <br /><br />
                As a freelancer, I thrive on challenges and enjoy working on diverse projects that allow me to apply my expertise and creativity. Whether it's building web applications, crafting elegant solutions, or troubleshooting complex issues, I'm always eager to dive in and deliver exceptional results.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img
                  src={profileimg}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Junier Software Engineer.</h3>
                <p className="fst-italic">
                  Junior Software Engineer | Actively Seeking Part-Time Opportunities
                </p>
                <div className="row">
                  <div className="col-lg-6">

                    <ul>

                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Degree:</strong> <span>B.Sc, Computer Science</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Email:</strong> <span>Yukenyathu@gmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Phone:</strong> <span>+94 788648271</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                        <span>Trincomalee , Srilanka</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                        <span>24</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Outside of freelancing, you'll often find me exploring the latest developments in the tech industry, experimenting with new tools and technologies, and contributing to the vibrant developer community. I'm a firm believer in lifelong learning and continuously seek opportunities to expand my knowledge and skills.
                  <br /><br />
                  Currently, I'm actively seeking part-time remote opportunities that align with my expertise and interests. If you're looking for a dedicated and versatile developer to join your team or collaborate on exciting projects, feel free to reach out. Let's connect and explore how we can work together to bring your ideas to life!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        

        
        {/* ======= Skills Section ======= */}
        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
            </div>
            <div className='skills-2'>
              <div className="progress">
                <span className="skill">
                  HTML,CSS,JavaScript
                </span>

              </div>
              <div className="progress">
                <span className="skill">
                  ReactJS
                  <span style={{ color: 'hsl(115, 96%, 45%)', fontSize: '11px', fontWeight: '100' }}>(Advanced)</span>
                </span>

              </div>
              <div className="progress">
                <span className="skill">
                  Python,java
                  <span style={{ color: '#eeff00', fontSize: '11px', fontWeight: '100' }}>(Basic)</span>
                </span>

              </div>
              <div className="progress">
                <span className="skill">
                  NodeJs
                </span>

              </div>
              <div className="progress">
                <span className="skill">
                  Git and GitHub
                </span>

              </div>
              <div className="progress">
                <span className="skill">
                  Mongodb, Mysql
                </span>

              </div>
              <div className="progress">
                <span className="skill">
                  Wordpress
                </span>

              </div>
            </div>

          </div>
        </section>
        {/* End Skills Section */}

        {/* ======= Resume Section ======= */}
        <section id="resume" className="resume">
          <div className="container">
            <div className="section-title">
              <h2>Resume</h2>
              <p>
                I am a motivated B.Sc. Computer Science undergraduate student, passionate about full stack web application development. I am passionate about exploring front-end and back-end technologies, aiming to create seamless user experiences and contribute to innovative projects, staying abreast of industry trends.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>B.Sc Computer Science</h4>
                  <h5>2021 - Present</h5>
                  <p>
                    <em>Eastern University Of Trincomalee Cempus.</em>
                  </p>
                  <p>
                    I am a B.Sc. Computer Science undergraduate student enrolled at Trincomalee Campus. Passionate about technology, I am focused on honing my skills in web development and software engineering. Eager to leverage my education and enthusiasm to contribute effectively to projects and teams.
                  </p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Certificates</h3>
                <div className="resume-item">
                  <h6 style={{fontWeight:500,display:'flex',flexDirection:'row',margin:'0'}}>Frontend Developer (React)_<p><a href="https://drive.google.com/drive/folders/1pELmqPrjwdVwdC-FVChDYx2Zc8c_pEMo?usp=drive_link" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"> Certificate</a></p></h6>
                  <h5>14 May, 2024</h5>
                  <p>
                    <em>HackerRank</em>
                  </p>
                </div>
                <div className="resume-item">
                <h6 style={{fontWeight:500,display:'flex',flexDirection:'row',margin:'0'}}>Problem Solving (Basic)_<p><a href="https://drive.google.com/drive/folders/1pELmqPrjwdVwdC-FVChDYx2Zc8c_pEMo?usp=drive_link" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"> Certificate</a></p></h6>
                  <h5>13 May, 2024</h5>
                  <p>
                    <em>HackerRank</em>
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          <br />
          <span style={{ color: '#149ddd', fontWeight: 500, display: 'flex', flexDirection: 'row', alignItems: 'center' }}> <button className='resume-button'><box-icon name='file-blank' color='#ffffff' ></box-icon>Download Full Resume</button></span>
        </section>
        {/* End Resume Section */}

        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>
                Welcome to my portfolio!
                Here, I showcase my passion for crafting innovative and responsive websites.
                Explore my projects to witness creativity in action.<span style={{ color: '#149ddd', fontWeight: 500 }}> Click image</span> to view the project details.
              </p>
            </div>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
            >
              <div >
                <div className="portfolio-wrap">
                  <a href='https://drive.google.com/file/d/1MSAauQpaLkDWKptQYDuTfAZydypw_yBQ/view'>
                    <img
                    src={require("./assets/img/portfolio/esell.png")}
                    alt=""
                  /></a>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* End Portfolio Section */}

        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                I possess a diverse range of skills and expertise that enable me to offer
                various services to clients or employers. Here are some of the services I can provide:
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                <div className="icon">
                  <box-icon name='code-alt' color='#ffffff' className='i'></box-icon>
                </div>
                <h4 className="title">
                  Web Development:
                </h4>
                <p className="description">
                  Designing and developing web applications from scratch using a
                  combination of front-end and back-end technologies. This includes creating
                  responsive and user-friendly interfaces,
                  implementing functionality, and ensuring scalability and security.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
              >
                <div className="icon">
                  <box-icon name='play-store' type='logo' color='#ffffff' ></box-icon>
                </div>
                <h4 className="title">
                  Custom Software Development:
                </h4>
                <p className="description">
                  Building custom software solutions tailored to the specific needs
                  and requirements of clients. This may involve creating bespoke applications, tools,
                  or systems to address unique challenges or enhance existing processes.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
              >
                <div className="icon">
                  <box-icon name='mobile' color='#ffffff' ></box-icon>
                </div>
                <h4 className="title">
                  Mobile App Development:
                </h4>
                <p className="description">
                  Developing mobile applications for iOS, Android, or cross-platform
                  environments using frameworks like React Native or Flutter. This includes
                  designing intuitive user interfaces,
                  integrating with backend services, and optimizing performance for mobile devices.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
              >
                <div className="icon">
                  <box-icon name='shopping-bag-alt' type='solid' color='#ffffff' ></box-icon>
                </div>
                <h4 className="title">
                  E-commerce Solutions:
                </h4>
                <p className="description">
                  Building e-commerce platforms or online stores for businesses to
                  sell products or services online. This involves implementing features
                  such as product listings,
                  shopping carts, payment gateways, and order management systems.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
              >
                <div className="icon">
                  <box-icon name='devices' color='#ffffff' ></box-icon>
                </div>
                <h4 className="title">
                  UI/UX designing:
                </h4>
                <p className="description">
                  Enhancing digital experiences through thoughtful design is my forte.
                  With a keen eye for aesthetics and a deep understanding of user psychology,
                  I craft intuitive interfaces that captivate and delight. From wireframing to prototyping,
                  let's collaborate to elevate your digital presence with seamless UI/UX design.
                </p>
              </div>

            </div>
          </div>
        </section>
        {/* End Services Section */}
        
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                Hey there! Have a question or interested in our services?
                <span style={{ color: 'yellow', fontSize: '17px', fontWeight: '500', fontFamily: 'cursive' }}> Feel free to reach out through this Friendly contact form.  </span>
                We're here to assist you with anything you need and provide the best solutions
                tailored to your requirements. Looking forward to hearing from you!.
              </p>
            </div>
            <div className="row" data-aos="fade-in">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <FontAwesomeIcon icon={faLocationCrosshairs} className='i' />
                    <h4>Location:</h4>
                    <p>Trincomalee, Srilanka</p>
                  </div>
                  <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} className='i' />
                    <h4>Email:</h4>
                    <p>Yukenyathu@gmail.com</p>
                  </div>
                  <div className="phone">
                    <FontAwesomeIcon icon={faPhone} className='i' />
                    <h4>Call:</h4>
                    <p>+94 788648271</p>
                  </div>
                  <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Trincomalee%20cempus+(Yukenthiran%20Yathu)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 290 }}
                    allowFullScreen=""
                  />
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  className="email-form"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        required=""
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows={10}
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}


      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>2024</span>
            </strong>
          </div>
          <div className="credits">
            Designed by <a href="https://yukenyathu.vercel.app/">Yukenthiran Yathu</a>
          </div>
        </div>
      </footer>

    </>

  );
}

export default App;
