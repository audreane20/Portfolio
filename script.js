const translations = {
  en: {
    pageTitle: "Audreane Deschenes | Portfolio",
    pageDescription:
      "A personal portfolio showcasing selected projects, skills, bilingual content, and contact information.",
    nav: {
      projects: "Projects",
      journey: "Journey",
      tech: "Tech",
      about: "About",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Portfolio 2026",
      title: "Building digital work with clarity, taste, and purpose.",
      copy:
        "I design and build experiences that feel sharp, useful, and human. Here are a few projects that show how I think and what I can ship.",
      ctaProjects: "View Projects",
      ctaContact: "Let's Work Together",
      panelLabel: "Quick Snapshot",
      statOne: "Featured case studies",
      statTwo: "Design-minded front-end delivery",
      statThree: "Responsive builds for desktop and mobile"
    },
    projects: {
      eyebrow: "Selected Work",
      title: "Projects I built to solve real problems",
      copy:
        "A mix of client-facing websites, internal tools, mobile work, and custom software built across web, Flutter, and desktop platforms.",
      meta: "Featured Project",
      liveDemo: "Live Demo",
      source: "Source",
      sourceOnly: "View Source",
      items: [
        {
          title: "UBarbershop Website",
          description:
            "A Slim 4 and Twig barbershop booking platform with client login, appointment scheduling, profile management, real-time availability, and a separate admin side for managing employees, services, and calendar operations.",
          tags: ["PHP", "Twig", "HTML", "CSS", "JavaScript"],
          imageUrl: "../UBarbershop/public/images/Salon/fullSalon.png",
          liveUrl: "#",
          sourceUrl: "#"
        },
        {
          title: "UBarbershop Mobile App",
          description:
            "A Flutter and Dart admin app connected through Firebase Auth and Firestore for UBarbershop staff, with tools to manage appointments, employee schedules, services, client profiles, unavailable days, and employee-only account access in both English and French.",
          tags: ["Flutter", "Dart", "Internal Tools", "Mobile App"],
          imageUrl: "assets/ubarbershop-mobile-logo.png",
          liveUrl: "#",
          sourceUrl: "#"
        },
        {
          title: "Scheduling App",
          description:
            "A mobile plumbing scheduling application created for a real client in collaboration with two other developers, focused on organizing appointments and workflow management.",
          tags: ["Mobile App", "Team Project", "Client Work", "Scheduling"],
          liveUrl: "#",
          sourceUrl: "#"
        },
        {
          title: "Clemexique Website",
          description:
            "A multilingual Slim 4 real estate website focused on property discovery in Mexico, with listing pages, property detail galleries, inquiry flows, car rental information, and property management content.",
          tags: ["PHP", "Twig", "HTML", "CSS", "JavaScript"],
          imageUrl: "../clemexique/public/Images/Puerto%20Aventuras.png",
          liveUrl: "#",
          sourceUrl: "https://github.com/audreane20/clemexique"
        },
        {
          title: "Comfy Cozy Cafe",
          description:
            "A C# Windows Forms desktop ordering app for a cafe, with separate menus for hot drinks, cold drinks, and pastries, plus cart management, quantity updates, and customizable add-ons for drink orders.",
          tags: ["C#", "Desktop App", "Software Development"],
          imageUrl: "assets/comfy-cozy-cafe-preview.png",
          liveUrl: "#",
          sourceUrl: "#"
        }
      ]
    },
    journey: {
      eyebrow: "My Journey",
      title: "Why I build the projects I build",
      storyOne:
        "I enjoy working in a team, collaborating with others, and building projects that feel useful in real life. For me, development is not just about writing code. It is about understanding people, their goals, and how technology can make their work feel more personal and more professional.",
      storyTwo:
        "A lot of my work comes from real situations around me. I like creating things that have a purpose, whether that means helping a business improve its presence, supporting someone starting a new venture, or building a school project around a realistic client need.",
      cardOneTitle: "UBarbershop",
      cardOneCopy:
        "I built the UBarbershop website for my cousin because she owns her own barbershop and was relying on a third-party reservation system that did not feel professional or personal to her brand. I wanted to give her a platform that felt custom to her business.",
      cardTwoTitle: "Clemexique",
      cardTwoCopy:
        "I created the Clemexique website for my stepfather as he works toward becoming an entrepreneur and realtor in Mexico. The site supports his goal of sharing property opportunities and practical guidance about life in Mexico, including restaurants, excursions, car rentals, renting properties, and temporary residency.",
      cardThreeTitle: "Comfy Cozy Cafe",
      cardThreeCopy:
        "Comfy Cozy Cafe was created as a school desktop project, giving me the chance to explore C# and Windows Forms while designing a cafe ordering experience with multiple menu flows and cart logic.",
      cardFourTitle: "Scheduling App",
      cardFourCopy:
        "Scheduling App was also part of a school project, but it was built around a real client. That experience gave me the chance to collaborate with teammates, work with real requirements, build something grounded in an actual business workflow, and experience a class project structured around Agile methodology."
    },
    tech: {
      eyebrow: "Technical Experience",
      title: "Technologies and tools I have learned",
      copy:
        "My work includes front-end, back-end, mobile, desktop, database, and third-party integration experience across school, personal, and real client projects.",
      cardOneTitle: "Languages and Frameworks",
      cardOneCopy: "Java, C#, JavaScript, CSS, HTML, SQL, Dart, Flutter, PHP",
      cardTwoTitle: "Platforms and Services",
      cardTwoCopy: "Firebase, EmailJS, Brevo",
      cardThreeTitle: "Databases",
      cardThreeCopy: "Microsoft SQL Server, MariaDB, Firebase Firestore",
      cardFourTitle: "API Integrations",
      cardFourCopy:
        "Google Places API for Canadian address autofill, email integrations for messaging and notifications, and image upload APIs for scalable media storage."
    },
    about: {
      eyebrow: "About Me",
      title: "A portfolio should feel like a person, not a template.",
      copyOne:
        "I care about building digital experiences that are functional, thoughtful, and connected to real people. My work blends clean development, visual structure, and a strong interest in helping others present their ideas in a more professional way.",
      copyTwo:
        "I especially enjoy collaborative environments where ideas can be shared, improved, and shaped into something stronger together. Whether I am working on a personal favor, a class project, or a real client need, I like creating work that feels useful and intentional."
    },
    contact: {
      eyebrow: "Contact",
      title: "Interested in working together?",
      copy:
        "You can reach me by email, phone, GitHub, or LinkedIn. You can also use the protected form below.",
      formName: "Your name",
      formNamePlaceholder: "Your name",
      formEmail: "Your email",
      formEmailPlaceholder: "you@example.com",
      formMessage: "Message",
      formMessagePlaceholder: "Tell me a little about your project.",
      formSubmit: "Send Message",
      formNote:
        "This form uses invisible Google reCAPTCHA and sends your message directly to my inbox.",
      note:
        "Visible contact details can still be read by bots on any public website, so this page also uses safer rendering instead of exposing everything directly in the HTML source.",
      github: "GitHub",
      linkedin: "LinkedIn",
      sending: "Running security verification...",
      verifying: "Sending your message...",
      success: "Your message was sent successfully.",
      genericError: "Something went wrong. Please try again.",
      errors: {
        missingFields: "Please fill in your name, email, and message.",
        invalidEmail: "Please enter a valid email address.",
        recaptchaMissing: "Please complete the reCAPTCHA verification first.",
        recaptchaUnavailable:
          "Google reCAPTCHA is not configured yet. Add your site key and secret key in config.php."
      }
    }
  },
  fr: {
    pageTitle: "Audreane Deschenes | Portfolio",
    pageDescription:
      "Un portfolio personnel presentant des projets, des competences, du contenu bilingue et des informations de contact.",
    nav: {
      projects: "Projets",
      journey: "Parcours",
      tech: "Tech",
      about: "A propos",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Portfolio 2026",
      title: "Creer des projets numeriques avec clarte, style et intention.",
      copy:
        "Je concois et developpe des experiences utiles, soignees et humaines. Voici quelques projets qui montrent ma facon de reflechir et ce que je peux livrer.",
      ctaProjects: "Voir les projets",
      ctaContact: "Travaillons ensemble",
      panelLabel: "Apercu rapide",
      statOne: "Etudes de cas mises en avant",
      statTwo: "Developpement front-end avec sens du design",
      statThree: "Conception reactive pour mobile et bureau"
    },
    projects: {
      eyebrow: "Travaux selectionnes",
      title: "Des projets que j'ai crees pour repondre a de vrais besoins",
      copy:
        "Un melange de sites web orientes client, d'outils internes, de projets mobiles et de logiciels sur mesure realises en web, Flutter et bureau.",
      meta: "Projet en vedette",
      liveDemo: "Demo en ligne",
      source: "Code source",
      sourceOnly: "Voir le code",
      items: [
        {
          title: "Site web UBarbershop",
          description:
            "Une plateforme de reservation pour barbershop construite avec Slim 4 et Twig, avec connexion client, prise de rendez-vous, gestion du profil, disponibilites en temps reel et une section admin separee pour gerer les employes, les services et le calendrier.",
          tags: ["PHP", "Twig", "HTML", "CSS", "JavaScript"],
          imageUrl: "../UBarbershop/public/images/Salon/fullSalon.png",
          liveUrl: "#",
          sourceUrl: "#"
        },
        {
          title: "Application mobile UBarbershop",
          description:
            "Une application admin en Flutter et Dart connectee avec Firebase Auth et Firestore pour le personnel de UBarbershop, avec des outils pour gerer les rendez-vous, les horaires des employes, les services, les profils clients, les journees indisponibles et un acces reserve aux employes en anglais et en francais.",
          tags: ["Flutter", "Dart", "Outils internes", "Application mobile"],
          imageUrl: "assets/ubarbershop-mobile-logo.png",
          liveUrl: "#",
          sourceUrl: "#"
        },
        {
          title: "Scheduling App",
          description:
            "Une application mobile de planification en plomberie creee pour un vrai client en collaboration avec deux autres developpeurs, axee sur l'organisation des rendez-vous et des flux de travail.",
          tags: ["Application mobile", "Projet d'equipe", "Client reel", "Planification"],
          liveUrl: "#",
          sourceUrl: "#"
        },
        {
          title: "Site web Clemexique",
          description:
            "Un site immobilier multilingue avec Slim 4, centre sur la decouverte de proprietes au Mexique, avec pages d'annonces, galeries de proprietes, demandes d'information, location de voiture et contenu de gestion immobiliere.",
          tags: ["PHP", "Twig", "HTML", "CSS", "JavaScript"],
          imageUrl: "../clemexique/public/Images/Puerto%20Aventuras.png",
          liveUrl: "#",
          sourceUrl: "https://github.com/audreane20/clemexique"
        },
        {
          title: "Comfy Cozy Cafe",
          description:
            "Une application de commande de cafe en bureau avec Windows Forms en C#, comprenant des menus separes pour les boissons chaudes, les boissons froides et les patisseries, ainsi que la gestion du panier, la modification des quantites et des options supplementaires pour les boissons.",
          tags: ["C#", "Application bureau", "Developpement logiciel"],
          imageUrl: "assets/comfy-cozy-cafe-preview.png",
          liveUrl: "#",
          sourceUrl: "#"
        }
      ]
    },
    journey: {
      eyebrow: "Mon parcours",
      title: "Pourquoi je cree les projets que je cree",
      storyOne:
        "J'aime travailler en equipe, collaborer avec les autres et creer des projets utiles dans la vraie vie. Pour moi, le developpement ne consiste pas seulement a ecrire du code. Il s'agit aussi de comprendre les gens, leurs objectifs et la maniere dont la technologie peut rendre leur travail plus personnel et plus professionnel.",
      storyTwo:
        "Beaucoup de mes projets viennent de situations reelles autour de moi. J'aime creer des solutions qui ont un sens, que ce soit pour aider une entreprise a ameliorer sa presence, soutenir quelqu'un qui demarre un projet ou realiser un travail scolaire base sur un besoin concret.",
      cardOneTitle: "UBarbershop",
      cardOneCopy:
        "J'ai cree le site web UBarbershop pour ma cousine parce qu'elle possede son propre barbershop et utilisait un systeme de reservation tiers qui ne refletait pas bien son image. Je voulais lui offrir une plateforme plus professionnelle et plus personnalisee pour son entreprise.",
      cardTwoTitle: "Clemexique",
      cardTwoCopy:
        "J'ai cree le site web Clemexique pour mon beau-pere, qui cherche a devenir entrepreneur et courtier immobilier au Mexique. Le site soutient son objectif de presenter des proprietes et de partager des conseils pratiques sur la vie au Mexique, comme les restaurants, les excursions, la location de voiture, la location de proprietes et la residence temporaire.",
      cardThreeTitle: "Comfy Cozy Cafe",
      cardThreeCopy:
        "Comfy Cozy Cafe a ete realise dans le cadre d'un projet scolaire en bureau, ce qui m'a permis d'explorer C# et Windows Forms tout en concevant une experience de commande avec plusieurs menus et une logique de panier.",
      cardFourTitle: "Scheduling App",
      cardFourCopy:
        "Scheduling App faisait aussi partie d'un projet scolaire, mais il etait base sur un vrai client. Cette experience m'a permis de collaborer avec mes coequipiers, de travailler avec de vraies exigences, de construire quelque chose lie a un flux de travail reel et de decouvrir un projet de classe structure selon la methodologie Agile."
    },
    tech: {
      eyebrow: "Experience technique",
      title: "Technologies et outils que j'ai appris",
      copy:
        "Mon experience couvre le front-end, le back-end, le mobile, le bureau, les bases de donnees et les integrations avec des services tiers dans des projets scolaires, personnels et reels.",
      cardOneTitle: "Langages et frameworks",
      cardOneCopy: "Java, C#, JavaScript, CSS, HTML, SQL, Dart, Flutter, PHP",
      cardTwoTitle: "Plateformes et services",
      cardTwoCopy: "Firebase, EmailJS, Brevo",
      cardThreeTitle: "Bases de donnees",
      cardThreeCopy: "Microsoft SQL Server, MariaDB, Firebase Firestore",
      cardFourTitle: "Integrations API",
      cardFourCopy:
        "Google Places API pour l'autocompletion d'adresses canadiennes, integrations courriel pour la messagerie et les notifications, et APIs d'upload d'images pour un stockage media plus evolutif."
    },
    about: {
      eyebrow: "A propos",
      title: "Un portfolio devrait refleter une personne, pas seulement un modele.",
      copyOne:
        "J'aime creer des experiences numeriques fonctionnelles, reflechies et liees a de vrais besoins. Mon travail melange developpement propre, structure visuelle et envie d'aider les autres a presenter leurs idees de maniere plus professionnelle.",
      copyTwo:
        "J'apprecie particulierement les environnements collaboratifs ou les idees peuvent etre partagees, ameliorees et transformees ensemble en quelque chose de plus fort. Que ce soit pour un service personnel, un projet scolaire ou un client reel, j'aime creer des projets utiles et intentionnels."
    },
    contact: {
      eyebrow: "Contact",
      title: "Envie de travailler avec moi ?",
      copy:
        "Vous pouvez me joindre par courriel, par telephone, sur GitHub ou sur LinkedIn. Vous pouvez aussi utiliser le formulaire protege ci-dessous.",
      formName: "Votre nom",
      formNamePlaceholder: "Votre nom",
      formEmail: "Votre courriel",
      formEmailPlaceholder: "vous@exemple.com",
      formMessage: "Message",
      formMessagePlaceholder: "Parlez-moi un peu de votre projet.",
      formSubmit: "Envoyer le message",
      formNote:
        "Ce formulaire utilise Google reCAPTCHA invisible et envoie votre message directement dans ma boite de reception.",
      note:
        "Des coordonnees visibles peuvent quand meme etre lues par des bots sur un site public, donc cette page utilise aussi un rendu plus prudent au lieu d'exposer directement toutes les informations dans le code HTML.",
      github: "GitHub",
      linkedin: "LinkedIn",
      sending: "Verification de securite en cours...",
      verifying: "Envoi du message...",
      success: "Votre message a ete envoye avec succes.",
      genericError: "Une erreur est survenue. Veuillez reessayer.",
      errors: {
        missingFields: "Veuillez remplir votre nom, votre courriel et votre message.",
        invalidEmail: "Veuillez entrer une adresse courriel valide.",
        recaptchaMissing: "Veuillez completer la verification reCAPTCHA d'abord.",
        recaptchaUnavailable:
          "Google reCAPTCHA n'est pas encore configure. Ajoutez votre cle de site et votre cle secrete dans config.php."
      }
    }
  }
};

const protectedContact = {
  email: "moc.oohay@02enaerdua".split("").reverse().join(""),
  phoneDigits: "0250528415".split("").reverse().join(""),
  github: "https://github.com/audreane20",
  linkedin:
    "https://www.linkedin.com/in/audr%C3%A9ane-desch%C3%AAnes-04a526228/?skipRedirect=true"
};

const pageDescription = document.querySelector("#page-description");
const projectGrid = document.querySelector("#projects-grid");
const contactLinks = document.querySelector("#contact-links");
const langButtons = document.querySelectorAll("[data-lang-switch]");
const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const nameField = document.querySelector("#contact-name");
const emailField = document.querySelector("#contact-email");
const messageField = document.querySelector("#contact-message");
const honeypotField = document.querySelector("#company");
const recaptchaContainer = document.querySelector("#recaptcha-widget");

let currentLang = localStorage.getItem("portfolio-lang") || "en";
let publicConfig = {
  recaptchaEnabled: false,
  recaptchaSiteKey: ""
};
let recaptchaWidgetId = null;
let pendingSubmission = null;

function getTranslation(path) {
  return path.split(".").reduce((accumulator, part) => {
    if (accumulator && Object.prototype.hasOwnProperty.call(accumulator, part)) {
      return accumulator[part];
    }

    return null;
  }, translations[currentLang]);
}

function setFormStatus(message, tone) {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = message;
  formStatus.classList.remove("is-error", "is-success");

  if (tone) {
    formStatus.classList.add(tone === "error" ? "is-error" : "is-success");
  }
}

function clearFormStatus() {
  setFormStatus("", null);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function renderProjects() {
  if (!projectGrid) {
    return;
  }

  const projectContent = translations[currentLang].projects;

  projectGrid.innerHTML = projectContent.items
    .map((project) => {
      const links = [];

      if (project.liveUrl && project.liveUrl !== "#") {
        links.push(
          `<a href="${project.liveUrl}" target="_blank" rel="noreferrer">${projectContent.liveDemo}</a>`
        );
      }

      if (project.sourceUrl && project.sourceUrl !== "#") {
        links.push(
          `<a href="${project.sourceUrl}" target="_blank" rel="noreferrer">${
            project.liveUrl && project.liveUrl !== "#"
              ? projectContent.source
              : projectContent.sourceOnly
          }</a>`
        );
      }

      return `
        <article class="project-card">
          <div class="project-visual" aria-hidden="true">
            ${project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.title} preview">` : ""}
          </div>
          <div class="project-meta">${projectContent.meta}</div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tag-row">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          ${links.length ? `<div class="project-links">${links.join("")}</div>` : ""}
        </article>
      `;
    })
    .join("");
}

function renderContactLinks() {
  if (!contactLinks) {
    return;
  }

  const t = translations[currentLang].contact;
  const formattedPhone = "514-825-0520";

  contactLinks.innerHTML = `
    <a class="button button-primary" href="mailto:${protectedContact.email}">${protectedContact.email}</a>
    <a class="button button-secondary" href="tel:1${protectedContact.phoneDigits}">${formattedPhone}</a>
    <a class="button button-secondary" href="${protectedContact.github}" target="_blank" rel="noreferrer">${t.github}</a>
    <a class="button button-secondary" href="${protectedContact.linkedin}" target="_blank" rel="noreferrer">${t.linkedin}</a>
  `;
}

function renderRecaptcha() {
  if (!recaptchaContainer || !publicConfig.recaptchaEnabled || !publicConfig.recaptchaSiteKey) {
    return;
  }

  if (!window.grecaptcha || typeof window.grecaptcha.render !== "function") {
    window.setTimeout(renderRecaptcha, 250);
    return;
  }

  if (recaptchaWidgetId !== null) {
    return;
  }

  recaptchaWidgetId = window.grecaptcha.render(recaptchaContainer, {
    sitekey: publicConfig.recaptchaSiteKey,
    size: "invisible",
    callback: handleRecaptchaVerified,
    "expired-callback": handleRecaptchaExpired,
    "error-callback": handleRecaptchaError
  });
}

function handleRecaptchaVerified(token) {
  if (!pendingSubmission) {
    return;
  }

  const submission = pendingSubmission;
  pendingSubmission = null;
  submitContactForm(submission, token);
}

function handleRecaptchaExpired() {
  pendingSubmission = null;
  setFormStatus(translations[currentLang].contact.errors.recaptchaMissing, "error");
}

function handleRecaptchaError() {
  pendingSubmission = null;
  setFormStatus(translations[currentLang].contact.genericError, "error");
}

async function loadPublicConfig() {
  try {
    const response = await fetch("public-config.php", {
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      return;
    }

    const data = await response.json();

    publicConfig = {
      recaptchaEnabled: Boolean(data.recaptchaEnabled),
      recaptchaSiteKey: data.recaptchaSiteKey || ""
    };

    renderRecaptcha();
  } catch (error) {
    console.error("Failed to load public config.", error);
  }
}

function setLanguage(lang) {
  if (!translations[lang]) {
    return;
  }

  currentLang = lang;
  localStorage.setItem("portfolio-lang", lang);
  document.documentElement.lang = lang;
  document.title = translations[lang].pageTitle;

  if (pageDescription) {
    pageDescription.setAttribute("content", translations[lang].pageDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getTranslation(node.getAttribute("data-i18n"));

    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = getTranslation(node.getAttribute("data-i18n-placeholder"));

    if (typeof value === "string") {
      node.setAttribute("placeholder", value);
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langSwitch === lang);
  });

  renderProjects();
  renderContactLinks();
}

async function submitContactForm(submission, recaptchaToken) {
  const t = translations[currentLang].contact;

  setFormStatus(t.verifying, null);

  try {
    const response = await fetch("contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        lang: currentLang,
        name: submission.name,
        email: submission.email,
        message: submission.message,
        honeypot: submission.honeypot,
        recaptchaToken
      })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      setFormStatus(result.message || t.genericError, "error");

      if (window.grecaptcha && recaptchaWidgetId !== null) {
        window.grecaptcha.reset(recaptchaWidgetId);
      }

      return;
    }

    setFormStatus(result.message || t.success, "success");
    form.reset();

    if (window.grecaptcha && recaptchaWidgetId !== null) {
      window.grecaptcha.reset(recaptchaWidgetId);
    }
  } catch (error) {
    console.error("Contact submission failed.", error);
    setFormStatus(t.genericError, "error");

    if (window.grecaptcha && recaptchaWidgetId !== null) {
      window.grecaptcha.reset(recaptchaWidgetId);
    }
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  const t = translations[currentLang].contact;
  const name = nameField ? nameField.value.trim() : "";
  const email = emailField ? emailField.value.trim() : "";
  const message = messageField ? messageField.value.trim() : "";
  const honeypot = honeypotField ? honeypotField.value.trim() : "";

  if (!name || !email || !message) {
    setFormStatus(t.errors.missingFields, "error");
    return;
  }

  if (!isValidEmail(email)) {
    setFormStatus(t.errors.invalidEmail, "error");
    return;
  }

  if (honeypot !== "") {
    setFormStatus("Submission blocked.", "error");
    return;
  }

  if (!publicConfig.recaptchaEnabled) {
    setFormStatus(t.errors.recaptchaUnavailable, "error");
    return;
  }

  if (!window.grecaptcha || recaptchaWidgetId === null) {
    setFormStatus(t.errors.recaptchaMissing, "error");
    return;
  }

  pendingSubmission = { name, email, message, honeypot };
  setFormStatus(t.sending, null);
  window.grecaptcha.execute(recaptchaWidgetId);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearFormStatus();
    setLanguage(button.dataset.langSwitch);
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof Element)) {
    return;
  }

  if (target.closest("#contact-form button[type='submit']")) {
    return;
  }

  clearFormStatus();
});

if (form) {
  form.addEventListener("submit", handleFormSubmit);
}

loadPublicConfig();
setLanguage(currentLang);
