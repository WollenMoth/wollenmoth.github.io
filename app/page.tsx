export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header>
        <div className="wrap nav">
          <a className="brand" href="#main" aria-label="André Díaz home">
            André Díaz<span> / </span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Let’s connect ↗</a>
          </nav>
        </div>
      </header>
      <main id="main" className="wrap">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <div className="eyebrow">
              <span className="dot" aria-hidden="true"></span> Software Engineer
              · Mexico
            </div>
            <h1 id="hero-title">
              Useful software.<em>Less busywork.</em>
            </h1>
            <p className="intro">
              I’m André. I build web experiences and the automation behind them,
              turning repetitive work into reliable systems.
            </p>
            <div className="actions">
              <a className="button" href="#work">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="https://github.com/WollenMoth">
                GitHub ↗
              </a>
            </div>
          </div>
          <div
            className="architecture"
            aria-label="My engineering approach: thoughtful interfaces, dependable services, and repeatable delivery"
          >
            <div className="architecture-top">
              <span>HOW I THINK ABOUT SYSTEMS</span>
              <span>01—03</span>
            </div>
            <div className="flow">
              <div className="flow-item">
                <strong>Make it useful</strong>
                <span>INTERFACES</span>
              </div>
              <div className="connector" aria-hidden="true"></div>
              <div className="flow-item">
                <strong>Make it dependable</strong>
                <span>SERVICES + TESTS</span>
              </div>
              <div className="connector" aria-hidden="true"></div>
              <div className="flow-item">
                <strong>Make it repeatable</strong>
                <span>AUTOMATION + CI/CD</span>
              </div>
            </div>
            <div className="architecture-foot">
              From the first interaction to the next deployment, the details
              should hold up.
            </div>
          </div>
        </section>
        <section className="metrics" aria-label="Selected professional results">
          <div className="metric">
            <strong>4+ years</strong>
            <p>Across frontend, backend & delivery</p>
          </div>
          <div className="metric">
            <strong>300+ hrs</strong>
            <p>Saved annually through automation</p>
          </div>
          <div className="metric">
            <strong>90% less</strong>
            <p>Manual testing time</p>
          </div>
          <div className="metric">
            <strong>75% faster</strong>
            <p>Docker deployment time</p>
          </div>
        </section>
        <section id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Selected work</div>
              <h2 id="work-title">
                Small details. <em>Real impact.</em>
              </h2>
            </div>
            <p>
              A selection of professional improvements and hands-on project
              work.
            </p>
          </div>
          <article className="case">
            <div>
              <div className="case-num">01 / BACKEND & AUTOMATION</div>
              <h3>Give the team its time back.</h3>
              <div className="context">INFOTEC · Professional work</div>
              <ul className="tags" aria-label="Technologies">
                <li>Python</li>
                <li>Django</li>
                <li>Celery</li>
                <li>pytest</li>
                <li>Robot Framework</li>
                <li>Docker</li>
              </ul>
            </div>
            <div className="case-body">
              <p>
                Repetitive administration, manual checks, and slow delivery all
                compete with meaningful engineering work. I built Django admin
                automation and improved testing, background processing, and
                containerized deployment workflows.
              </p>
              <div className="outcome">
                <strong>300+ team hours saved annually.</strong> Automated tests
                reduced manual testing time by 90%, Docker improvements cut
                deployment time by 75%, and Celery work reduced response time
                for high-priority requests by 60%.
              </div>
              <p className="case-detail">
                Current focus: reusable Jenkins/JTE deployment pipelines and
                quality checks that make delivery more consistent.
              </p>
            </div>
          </article>
          <article className="case">
            <div>
              <div className="case-num">02 / FRONTEND & DELIVERY</div>
              <h3>Build once. Start faster.</h3>
              <div className="context">Kreaz DG · Professional work</div>
              <ul className="tags" aria-label="Technologies">
                <li>React</li>
                <li>TypeScript</li>
                <li>GitHub Actions</li>
                <li>CI/CD</li>
              </ul>
            </div>
            <div className="case-body">
              <p>
                I worked on React and TypeScript interfaces and the workflows
                that ship them. Instead of repeating project setup and static
                deployment steps, I introduced a reusable setup template and
                automated delivery with GitHub Actions.
              </p>
              <div className="outcome">
                <strong>80% faster static deployments.</strong> The reusable
                template also made project setup 90% faster, reducing repeated
                work before development could begin.
              </div>
              <p className="case-detail">
                <a href="https://github.com/WollenMoth/react-tailwind">
                  View a public React and TypeScript starter on GitHub ↗
                </a>
                .
              </p>
            </div>
          </article>
          <article className="case">
            <div>
              <div className="case-num">03 / PRODUCTION CASE STUDY</div>
              <h3>Golden Circle: Community operations, automated</h3>
              <div className="context">
                Golden Circle · Discord bot &amp; staff dashboard
              </div>
              <ul className="tags" aria-label="Technologies">
                <li>Python</li>
                <li>Django</li>
                <li>Discord.py</li>
                <li>Supabase</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="case-body">
              <p>
                Golden Circle started as a Discord bot for Hay Day derby
                reservations and grew into a production tool for running
                multiple neighborhoods. It now handles registration, task logs,
                and scheduled reminders in Discord. A private Django dashboard
                lets staff review weekly results, manage membership, and track
                shared inventory.
              </p>
              <div className="outcome">
                <strong>Less polling, with recovery built in.</strong> The bot
                now runs on Discord events, committed database changes, and
                scheduled deadlines instead of repeatedly scanning for work. It
                catches up after reconnecting and retries unfinished deliveries.
              </div>
              <p className="case-detail">
                Batched queries and reusable database connections help reduce
                Supabase traffic. Source code remains private.
              </p>
            </div>
          </article>
        </section>
        <section id="about" className="about" aria-labelledby="about-title">
          <div>
            <div className="eyebrow">The engineer behind the work</div>
            <h2 id="about-title">
              I like making the everyday things work better.
            </h2>
            <p>
              Backend is where I most enjoy working: building services, getting
              the data right, and automating repetitive tasks. I also enjoy the
              DevOps work that makes software easier to ship and maintain, from
              CI/CD pipelines to repeatable deployments. I can build the
              frontend when a project needs it, but my focus is on the systems
              behind it.
            </p>
            <p className="education">
              B.S. Mechatronics Engineering
              <br />
              Benemérita Universidad Autónoma de Puebla (BUAP)
            </p>
          </div>
          <ul className="capabilities">
            <li>
              <strong>01 / BACKEND & DATA</strong>
              <span>Python, Django, Celery, PostgreSQL</span>
            </li>
            <li>
              <strong>02 / DEVOPS & AUTOMATION</strong>
              <span>
                CI/CD with Jenkins/JTE and GitHub Actions, Docker, workflow
                automation
              </span>
            </li>
            <li>
              <strong>03 / TESTING & RELIABILITY</strong>
              <span>pytest, Robot Framework, and regression testing</span>
            </li>
            <li>
              <strong>04 / FRONTEND</strong>
              <span>React, TypeScript, responsive web interfaces</span>
            </li>
          </ul>
        </section>
        <section
          id="contact"
          className="contact"
          aria-labelledby="contact-title"
        >
          <div>
            <div className="eyebrow">Let’s connect</div>
            <h2 id="contact-title">
              Make useful things.
              <br />
              <em>Make them work well.</em>
            </h2>
            <p>
              Have a role at the intersection of web development and automation?
              I’d be glad to talk.
            </p>
          </div>
          <a
            className="button"
            href="https://www.linkedin.com/in/crhistian-diaz/"
          >
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <footer>
        <div className="wrap footer-inner">
          <span>André Díaz · Software Engineer · Mexico</span>
          <div className="footer-links">
            <a href="https://github.com/WollenMoth">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/crhistian-diaz/">LinkedIn ↗</a>
            <a href="#main">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
