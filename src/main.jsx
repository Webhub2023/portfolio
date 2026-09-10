import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, CheckCircle2, Code2, Database, Globe2, Menu, X,
  Smartphone, Search, ShieldCheck, Zap, MessageCircle, Mail,
  MapPin, ExternalLink, ChevronDown, Sparkles, Phone, Play, Monitor
} from "lucide-react";
import "./styles.css";

const WA = "918618639371";
const wa = (msg = "Hello Md Noor Alam, I want to discuss a website/software project.") =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const services = [
  { icon: Globe2, title: "Business Website Development", text: "Professional, responsive websites designed to build trust and generate enquiries.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { icon: Code2, title: "Custom Software Development", text: "CRM, dashboards, automation and business software designed around your workflow.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" },
  { icon: Zap, title: "Web Application Development", text: "Fast React, Next.js and Node.js applications with scalable architecture.", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80" },
  { icon: Database, title: "E-Commerce Development", text: "Modern online stores with catalogue, cart, checkout, authentication and integrations.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
  { icon: Smartphone, title: "Mobile-First Websites", text: "Smooth experiences across mobile, tablet and desktop with responsive UI.", img: "https://www.codica.com/static/4a586aa96f8e2996b9c9e1ad28a74992/eedb8/chattic_min_887449a36d.jpg" },
  { icon: Search, title: "SEO & Performance", text: "Technical SEO, semantic HTML, speed optimization and search-friendly structure.", img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80" }
];

const projects = [
  {
    title: "Bharat Loha Matrix",
    cat: "Business Website",
    tech: "Next.js • Tailwind CSS",
    text: "Professional fabrication website focused on trust, local SEO and enquiries.",
    img: "/image/image.png"
  },
  {
    title: "E-Commerce Platform",
    cat: "Web Application",
    tech: "React • Node.js • MongoDB",
    text: "Full-stack shopping platform with products, authentication, cart and orders.",
    img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80"
  },
  {
    title: "Business Admin Dashboard",
    cat: "Custom Software",
    tech: "React • REST API",
    text: "Responsive dashboard for analytics, data management and operations.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    title: "SEO Landing Page",
    cat: "Lead Generation",
    tech: "React • SEO",
    text: "Conversion-focused landing page built for speed, mobile usability and search visibility.",
    img: "https://elements-resized.envatousercontent.com/elements-cover-images/8da6ccd1-2681-49d9-bef3-f17d717f4af3?w=433&cf_fit=scale-down&q=85&format=auto&s=9d23d87c912b1bd8e02f6bd916d48efd8da70e8442f85372a06e00bab757d057"
  }
];

const cities = ["Purnea", "Araria", "Kishanganj", "Bhagalpur", "Katihar", "Darbhanga", "Patna", "Gaya", "Muzaffarpur", "Bihar & India"];

const faqs = [
  ["What projects do you develop?", "Business websites, e-commerce stores, web applications, dashboards, custom software and website improvements."],
  ["Do you serve all Bihar?", "Yes. Local service focus includes Purnea, Araria, Kishanganj, Bhagalpur, Katihar, Darbhanga, Patna and other Bihar districts. Remote delivery is available across India."],
  ["Can you redesign an existing website?", "Yes. I can improve design, responsiveness, speed, technical SEO, content structure and conversion flow."],
  ["Do you provide maintenance?", "Yes. Website updates, bug fixing, content changes and performance improvements can be arranged after launch."],
  ["How can I get a quote?", "Send your requirements on WhatsApp or through the enquiry form. I will review the project and discuss the best approach before quoting."]
];

function App() {
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const nav = ["home", "services", "work", "coding", "about", "process", "contact"];

  const [typedCode, setTypedCode] = useState("");
  const fullCode = `const project = {
  client: "Your Business",
  goal: "More Growth",
  stack: ["React", "Next.js", "Node.js"],
  seo: true,
  responsive: true
};`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullCode.length) {
        setTypedCode(fullCode.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 35);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <button className="brand" onClick={() => scrollTo("home")}>
            <span className="brandMark"><img src="/image/rL2Fx.jpg" alt="" /></span>
            <span>Noor Web Solutions</span>
          </button>
          <nav className={open ? "navLinks open" : "navLinks"}>
            {nav.map((x) => (
              <button key={x} onClick={() => scrollTo(x)}>
                {x === "work" ? "Portfolio" : x === "coding" ? "Coding" : x[0].toUpperCase() + x.slice(1)}
              </button>
            ))}
          </nav>
          <a
            className="navCta"
            href={wa("Hello Md Noor Alam, I want a free consultation for my project.")}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp <MessageCircle size={17} />
          </a>
          <button className="menuBtn" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroGlow glowOne" />
          <div className="heroGlow glowTwo" />
          <div className="container heroGrid">
            <div className="heroCopy">
              <div className="eyebrow">
                <Sparkles size={16} /> Full Stack Developer • Bihar, India
              </div>
              <h1>
                Professional Website & <span>Software Developer in Bihar</span>
              </h1>
              <p className="heroLead">
                I build modern, fast, responsive and SEO-friendly websites, web applications and custom software for businesses, startups and organizations across Bihar and India.
              </p>
              <div className="heroButtons">
                <a className="primary" href={wa()} target="_blank" rel="noreferrer">
                  Get Free Consultation <MessageCircle size={18} />
                </a>
                <button className="secondary" onClick={() => scrollTo("work")}>
                  View My Work <ExternalLink size={17} />
                </button>
              </div>
              <div className="trustRow">
                <div><CheckCircle2 /> 4+ Years Development Experience</div>
                <div><CheckCircle2 /> Modern Technology</div>
                <div><CheckCircle2 /> Direct Developer Support</div>
              </div>
            </div>
            <div className="heroCard">
              <div className="codeTop">
                <span /><span /><span />
                <small>project.ts</small>
              </div>
              <div className="codeBody">
                <pre className="typed-code">{typedCode}<span className="cursor">|</span></pre>
                <div className="codeStatus">
                  <span /> Ready to build
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container statGrid">
            <div><strong>4+</strong><span>Years Development</span></div>
            <div><strong>20+</strong><span>Projects & Builds</span></div>
            <div><strong>100%</strong><span>Responsive Approach</span></div>
            <div><strong>SEO</strong><span>Friendly Architecture</span></div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="sectionHead">
              <div>
                <div className="miniTitle">SERVICES</div>
                <h2>Digital solutions built for <span>real business goals.</span></h2>
              </div>
              <p>From a professional business website to a complete custom application, I focus on useful products, clean interfaces and measurable performance.</p>
            </div>
            <div className="serviceGrid">
              {services.map(({ icon: Icon, title, text, img }) => (
                <article className="serviceCard" key={title}>
                  <div className="serviceImgWrap">
                    <img src={img} alt={title} loading="lazy" />
                    <div className="iconBox"><Icon size={22} /></div>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a
                    href={wa(`Hello, I am interested in ${title}. Please share details.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discuss this service <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section darkSection">
          <div className="container">
            <div className="sectionHead">
              <div>
                <div className="miniTitle">SELECTED WORK</div>
                <h2>Projects that show <span>what I can build.</span></h2>
              </div>
              <p>Each project is approached around audience, business objective, usability, performance and maintainability.</p>
            </div>
            <div className="projectGrid">
              {projects.map((p) => (
                <article className="projectCard" key={p.title}>
                  <div className="projectVisual">
                    <img src={p.img} alt={p.title} loading="lazy" />
                    <div className="projectOverlay">
                      <span>{p.cat}</span>
                    </div>
                  </div>
                  <div className="projectInfo">
                    <span>{p.cat}</span>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <small>{p.tech}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="coding" className="section codingSection">
  <div className="container">
    <div className="centerHead">
      <div className="miniTitle">AAPKE BUSINESS KE LIYE WEBSITE</div>
      <h2>Website nahi hai to <span>customers kho rahe ho.</span></h2>
      <p>Aajkal jo business online nahi hai, woh customers kho raha hai. Professional website se business badhta hai.</p>
    </div>

    <div className="videoGrid">
      {/* Video 1 - No Website = No Growth */}
      <div className="videoCard">
        <div className="videoThumb" onClick={() => setActiveVideo("https://www.youtube.com/shorts/ioOrelkOg20")}>
          <img src="/image/t.jpg" alt="No Website No Growth" />
          <div className="playBtn"><Play size={32} fill="white" /></div>
          <div className="videoLabel">No Website = No Growth</div>
        </div>
        <h3>Website Nahi Hai To Growth Nahi</h3>
        <p>2026 mein bina website ke business customers kho raha hai. Ye video clear dikhata hai.</p>
      </div>

      {/* Video 2 - Business Adhura Hai */}
      <div className="videoCard">
        <div className="videoThumb" onClick={() => setActiveVideo("https://www.youtube.com/embed/cycdVLihN2w?autoplay=1")}>
          <img src="https://img.youtube.com/vi/cycdVLihN2w/hqdefault.jpg" alt="Business Adhura" />
          <div className="playBtn"><Play size={32} fill="white" /></div>
          <div className="videoLabel">Business Adhura Hai</div>
        </div>
        <h3>Website Nahi To Business Adhura</h3>
        <p>Agar website nahi hai to aapka business aadha adhura hai. Customers aapko nahi dhoondh paate.</p>
      </div>

      {/* Video 3 - Website Ke Fayde */}
      <div className="videoCard">
        <div className="videoThumb" onClick={() => setActiveVideo("https://www.youtube.com/embed/OFyrwV_4haU?autoplay=1")}>
          <img src="https://img.youtube.com/vi/OFyrwV_4haU/hqdefault.jpg" alt="Website Ke Fayde" />
          <div className="playBtn"><Play size={32} fill="white" /></div>
          <div className="videoLabel">Website Ke Fayde</div>
        </div>
        <h3>Website Banane Ke Fayde</h3>
        <p>Website se trust, customers aur sale kaise badhti hai — clear explanation.</p>
      </div>
    </div>
            <div className="liveCodeBox">
              <div className="liveCodeHeader">
                <Monitor size={18} />
                <span>Live Coding Environment</span>
                <span className="liveDot" />
              </div>
              <div className="liveCodeBody">
                <div className="codeLine"><span className="cmt">// Professional development stack</span></div>
                <div className="codeLine"><span className="kw">const</span> stack = [<span className="str">"React"</span>, <span className="str">"Next.js"</span>, <span className="str">"Node.js"</span>, <span className="str">"MongoDB"</span>];</div>
                <div className="codeLine"><span className="kw">const</span> approach = <span className="str">"Mobile-first + SEO + Performance"</span>;</div>
                <div className="codeLine"><span className="kw">function</span> <span className="fn">deliverProject</span>(client) {"{"}</div>
                <div className="codeLine indent">return <span className="str">"Production-ready website"</span>;</div>
                <div className="codeLine">{"}"}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container aboutGrid">
            <div className="aboutVisual">
              <div className="portraitCard">
                <div className="avatar"><img src="/image/Freelance.jpeg" className="avatar" alt="" /></div>
                <h3>Md Noor Alam</h3>
                <p>Full Stack Developer</p>
                <div className="location"><MapPin size={16} /> Bihar, India</div>
              </div>
              <div className="floatingBadge"><ShieldCheck /> Reliable & Secure Development</div>
            </div>
            <div className="aboutCopy">
              <div className="miniTitle">ABOUT</div>
              <h2>A developer who thinks about the <span>business, not only the code.</span></h2>
              <p>I help businesses, startups and professionals build a stronger digital presence through modern websites and practical software solutions.</p>
              <p>My core stack includes React.js, Next.js, Node.js, MongoDB, REST APIs and modern frontend technologies. I care about responsive design, performance, maintainable code and search-friendly structure.</p>
              <div className="checkList">
                <div><CheckCircle2 /> Direct communication with the developer</div>
                <div><CheckCircle2 /> Mobile-first responsive implementation</div>
                <div><CheckCircle2 /> SEO-conscious technical structure</div>
                <div><CheckCircle2 /> Post-launch fixes and improvements</div>
              </div>
              <a className="primary" href={wa()} target="_blank" rel="noreferrer">
                Let's Discuss Your Project <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="process" className="section soft">
          <div className="container">
            <div className="centerHead">
              <div className="miniTitle">PROCESS</div>
              <h2>Simple process. <span>Clear communication.</span></h2>
              <p>You always know what happens next.</p>
            </div>
            <div className="processGrid">
              {[
                ["01", "Discovery", "Understand your business, audience, requirements and goals."],
                ["02", "Planning", "Define features, structure, technology and milestones."],
                ["03", "Design", "Create a clean, professional and conversion-focused interface."],
                ["04", "Development", "Build the website or application with modern technologies."],
                ["05", "Testing", "Check responsiveness, functionality, speed and SEO basics."],
                ["06", "Launch", "Deploy the project and provide handover and support."]
              ].map(([n, t, d]) => (
                <div className="processCard" key={n}>
                  <b>{n}</b>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section localSeo">
          <div className="container localBox">
            <div>
              <div className="miniTitle">LOCAL DEVELOPMENT • BIHAR</div>
              <h2>Website & Software Development <span>Across Bihar</span></h2>
              <p>Looking for a professional website developer or software developer in Bihar? I create modern digital solutions with local service focus and remote delivery across India.</p>
            </div>
            <div className="cityTags">
              {cities.map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
        </section>

        <section className="section citySeo">
          <div className="container">
            <div className="sectionHead">
              <div>
                <div className="miniTitle">LOCAL SEO</div>
                <h2>Web Developer Services in <span>Bihar Cities</span></h2>
              </div>
              <p>Professional website and software development services for businesses and professionals in major Bihar locations.</p>
            </div>
            <div className="cityGrid">
              {cities.slice(0, 7).map((c) => (
                <div className="cityCard" key={c}>
                  <MapPin size={18} />
                  <h3>Website Developer in {c}</h3>
                  <p>Business websites, custom software, React applications, e-commerce and SEO solutions.</p>
                  <a href={wa(`Hello, I need a website/software developer in ${c}.`)} target="_blank" rel="noreferrer">
                    Get a Quote <ArrowRight size={15} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section faqSection">
          <div className="container faqGrid">
            <div>
              <div className="miniTitle">FAQ</div>
              <h2>Questions clients <span>usually ask.</span></h2>
              <p>Have another question? Send the project details and I’ll help you choose the right approach.</p>
            </div>
            <div className="faqList">
              {faqs.map(([q, a], i) => (
                <div className={`faq ${faq === i ? "active" : ""}`} key={q}>
                  <button onClick={() => setFaq(faq === i ? null : i)}>
                    <span>{q}</span>
                    <ChevronDown size={19} />
                  </button>
                  {faq === i && <p>{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contactSection">
          <div className="container contactBox">
            <div className="contactCopy">
              <div className="miniTitle">START A PROJECT</div>
              <h2>Have an idea? <span>Let's build it.</span></h2>
              <p>Tell me what you want to build, improve or automate. I’ll review the requirements and discuss the best next step.</p>
              <div className="contactItems">
                <a href={wa()} target="_blank" rel="noreferrer">
                  <MessageCircle />
                  <span>WhatsApp<br /><small>+91 8618639371</small></span>
                </a>
                <a href="mailto:mdnoor.net13@gmail.com">
                  <Mail />
                  <span>Email<br /><small>mdnoor.net13@gmail.com</small></span>
                </a>
                <div>
                  <MapPin />
                  <span>Service Area<br /><small>Bihar • India • Remote</small></span>
                </div>
              </div>
            </div>

            <form
              className="contactForm"
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const message = `Hello Md Noor Alam,%0A%0A*New Enquiry from Website*%0A%0AName: ${f.get("name")}%0AEmail: ${f.get("email")}%0APhone: ${f.get("phone")}%0AProject Type: ${f.get("type")}%0A%0ADetails:%0A${f.get("details")}`;
                window.open(wa(message), "_blank");
              }}
            >
              <label>
                Full Name
                <input name="name" required placeholder="Your name" />
              </label>
              <label>
                Email Address
                <input name="email" required type="email" placeholder="you@example.com" />
              </label>
              <label>
                Phone Number
                <input name="phone" type="tel" placeholder="+91 XXXXXXXXXX" />
              </label>
              <label>
                Project Type
                <select name="type">
                  <option>Business Website</option>
                  <option>Custom Software</option>
                  <option>Web Application</option>
                  <option>E-Commerce</option>
                  <option>SEO / Website Improvement</option>
                </select>
              </label>
              <label>
                Project Details
                <textarea name="details" required rows="4" placeholder="Tell me about your project, features and timeline..." />
              </label>
              <button className="primary" type="submit">
                Send Enquiry on WhatsApp <MessageCircle size={18} />
              </button>
              <p className="formNote">Your message will open directly in WhatsApp to +91 8618639371</p>
            </form>
          </div>
        </section>
      </main>

      <a className="floatingWhatsApp" href={wa()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle size={27} />
        <span>Chat on WhatsApp</span>
      </a>

      {activeVideo && (
        <div className="videoModal" onClick={() => setActiveVideo(null)}>
          <div className="videoModalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setActiveVideo(null)}>×</button>
            <iframe
              src={activeVideo}
              title="Coding Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <div className="brand footerBrand">
              <span className="brandMark">N</span>
              <span>Noor Web Solutions</span>
            </div>
            <p>Independent Full Stack Developer building websites, web applications and custom software for businesses across Bihar and India.</p>
          </div>
          <div>
            <h4>Services</h4>
            <button onClick={() => scrollTo("services")}>Website Development</button>
            <button onClick={() => scrollTo("services")}>Custom Software</button>
            <button onClick={() => scrollTo("services")}>Web Applications</button>
            <button onClick={() => scrollTo("services")}>SEO & Performance</button>
          </div>
          <div>
            <h4>Navigation</h4>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("work")}>Portfolio</button>
            <button onClick={() => scrollTo("coding")}>Coding</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>
        </div>
        <div className="container footerBottom">
          <span>© 2026 Noor Web Solutions / Md Noor Alam. All rights reserved.</span>
          <span>Website & Software Developer in Bihar</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
