/**
 *
 * PORTFOLIO TYPESCRIPT
 *
 * COMPILER: tsc -watch --outDir ..\ .\default.ts
 *
 *
*/
var menu = [
    {
        "title": "Sobre mim",
        "link": "#about"
    },
    {
        "title": "Habilidades",
        "link": "#skills"
    },
    {
        "title": "Projetos",
        "link": "#projects"
    },
    {
        "title": "Carreira",
        "link": "#jobs"
    },
    {
        "title": "Formação Acadêmica",
        "link": "#academic"
    }, ,
    {
        "title": "Artigos",
        "link": "#articles"
    },
    {
        "title": "Idiomas",
        "link": "#languages"
    }
];
var social = [
    {

        "title": "Facebook",
        "link": "https://www.facebook.com/neto.samara",
        "icon": "fab fa-facebook-f"
    },
    {

        "title": "Instagram",
        "link": "https://www.instagram.com/francisco.goncalves.neto/",
        "icon": "fab fa-instagram"
    },
    {

        "title": "Linkedin",
        "link": "https://www.linkedin.com/in/franciscogpneto/",
        "icon": "fab fa-linkedin-in"
    },
    {

        "title": "Github",
        "link": "https://github.com/frangpneto",
        "icon": "fab fa-github"
    }/*,
    {

        "title": "Spotify",
        "link": "https://open.spotify.com/user/wh15y5gilc2rzany6blje0649?si=1ogxVcgtSLuPGmcvWOQUtA",
        "icon": "fab fa-spotify"
    }*/
];
var skills = [
    {
        "name": "Java",
        "type": "Back-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 50,
        "description": "Desenvolvimento com JSF",
        "experience": ""
    },
    {
        "name": "JavaScript",
        "type": "Front-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 90,
        "description": "",
        "experience": ""
    },
    {
        "name": "TypeScript",
        "type": "Full Stack",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 70,
        "description": "",
        "experience": ""
    },
    {
        "name": "Java Android",
        "type": "Back-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
	{
        "name": "C#",
        "type": "Back-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 90,
        "description": "",
        "experience": ""
    },
    {
        "name": "C/C++",
        "type": "Back-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 30,
        "description": "",
        "experience": ""
    },
    {
        "name": "PHP",
        "type": "Back-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 30,
        "description": "",
        "experience": ""
    },
    {
        "name": "JSF",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 30,
        "description": "",
        "experience": ""
    },
    {
        "name": "JSP",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 30,
        "description": "",
        "experience": ""
    },
    {
        "name": "Node",
        "type": "Back-end",
        "technologyType": "JavaScript Framework",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {
        "name": "Angular",
        "type": "Front-end",
        "technologyType": "JavaScript Framework",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {
        "name": "React",
        "type": "Front-end",
        "technologyType": "JavaScript Framework",
        "knowledgePercentage": 60,
        "description": "",
        "experience": ""
    },
    {
        "name": "jQuery",
        "type": "Front-end",
        "technologyType": "JavaScript Library",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "FontAwesome",
        "type": "Front-end",
        "technologyType": "Html Library",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {
        "name": "NetBeans",
        "type": "Back-end",
        "technologyType": "IDE",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {
        "name": "Eclipse",
        "type": "Back-end",
        "technologyType": "IDE",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {
        "name": "Visual Studio Code",
        "type": "Back-end",
        "technologyType": "IDE",
        "knowledgePercentage": 90,
        "description": "",
        "experience": ""
    },
	{
        "name": "Visual Studio",
        "type": "Back-end",
        "technologyType": "IDE",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "ATOM",
        "type": "Back-end",
        "technologyType": "IDE",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {
        "name": "PrettyFaces",
        "type": "Back-end",
        "technologyType": "JSF Library",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {
        "name": "Bootstrap",
        "type": "Front-end",
        "technologyType": "Front-end Library",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "SASS",
        "type": "Front-end",
        "technologyType": "Linguagem web",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "CSS3",
        "type": "Front-end",
        "technologyType": "Linguagem web",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "HTML5",
        "type": "Front-end",
        "technologyType": "Linguagem web",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "XHTML",
        "type": "Front-end",
        "technologyType": "Linguagem web",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "XML",
        "type": "Front-end",
        "technologyType": "Linguagem web",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "Primefaces",
        "type": "Front-end",
        "technologyType": "JSF Library",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {
        "name": "JPA",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "Criteria API",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {
        "name": "Hibernate",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {
        "name": "PostgreSQL",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
	{
        "name": "Oracle",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 90,
        "description": "",
        "experience": ""
    },
	{
        "name": "MySQL",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 90,
        "description": "",
        "experience": ""
    },
	{
        "name": "SqlServer",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 90,
        "description": "",
        "experience": ""
    },
    {
        "name": "MongoDB",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 30,
        "description": "",
        "experience": ""
    },
    {
        "name": "Derby",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "DB4O",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 10,
        "description": "",
        "experience": ""
    },
    {
        "name": "Jersey",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {
        "name": "Blender",
        "type": "Game Development",
        "technologyType": "Visual software",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {
        "name": "LWJGL",
        "type": "Game Development",
        "technologyType": "Java Library",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {
        "name": "OpenGL",
        "type": "Game Development",
        "technologyType": "C/C++ Library",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {
        "name": "MVC",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "UML",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {
        "name": "SCRUM",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 90,
        "description": "",
        "experience": ""
    },
    {
        "name": "AJAX",
        "type": "Front-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 70,
        "description": "",
        "experience": ""
    },
    {
        "name": "GIT",
        "type": "Full Stack",
        "technologyType": "Version Control System",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "Subversion",
        "type": "Full Stack",
        "technologyType": "Version Control System",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {
        "name": "JSON",
        "type": "Front-end",
        "technologyType": "JavaScript Library",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "Astah",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {
        "name": "JAX-RS",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {
        "name": "TOMCAT",
        "type": "Back-end",
        "technologyType": "Server",
        "knowledgePercentage": 60,
        "description": "",
        "experience": ""
    },
    {
        "name": "TOMEE",
        "type": "Back-end",
        "technologyType": "Server",
        "knowledgePercentage": 70,
        "description": "",
        "experience": ""
    },
    {
        "name": "GLASSFISH",
        "type": "Back-end",
        "technologyType": "Server",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {
        "name": "Ubuntu",
        "type": "Computer Network",
        "technologyType": "Operational System",
        "knowledgePercentage": 70,
        "description": "",
        "experience": ""
    },
    {
        "name": "Windows",
        "type": "Computer Network",
        "technologyType": "Operational System",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {
        "name": "macOS",
        "type": "Computer Network",
        "technologyType": "Operational System",
        "knowledgePercentage": 40,
        "description": "",
        "experience": ""
    }
];
var projects = [
    {
        "name": "Leveros Integra",
        "type": "Back-end",
        "logo": "resources/img/projects/leveros-integra.png",
        "technologies": "Java, jQuery, Angular, asp.Net, C#, Bootstrap4, XHMTL, RestAPI, Font Awesome, Oracle",
        "description": "Plataforma de Vendas",
        "category": "Leveros",
        "link": "https://www.leverosintegra.com.br",
        "status": "Concluído"
    },
    {
        "name": "Dashboard Mercado Livre",
        "type": "Back-end",
        "logo": "resources/img/projects/mercado-livre.png",
        "technologies": "Node.JS, Vue.js, Hibernate, RestAPI, MySql, Bootstrap4",
        "description": "Dashboard gratuito para quem vende no Mercado Livre",
        "category": "autônomo",
        "link": "http://www.calei.com.br",
        "status": "Concluído"
    },
    {
        "name": "App Comissão",
        "type": "Front-end",
        "logo": "resources/img/projects/leveros.png",
        "technologies": "React Native, RestAPI, React",
        "description": "Aplicativo para parceiros gerenciar suas comissões",
        "category": "Leveros",
        "link": "",
        "status": "Em desenvolvimento"
    }
];
var jobs = [
    {
        "name": "Leveros",
        "logo": "resources/img/jobs/leveros.png",
        "post": "Desenvolvedor de Sistemas",
        "description": "Melhorias e projetos, portfólio sistêmico variado, atuando com aplicações e-commerce (Vtex), SAC (SAP CRM) e desenvolvimentos internos (C#, Asp.Net, Angular, Node.js, VUE), Analise de requerimentos e aderência de produtos da plataforma SAP e VTEX, portfólio de integração da plataforma SAP com outras plataformas especialmente e-commerce VTEX, Mercado Livre, B2W (Americanas, Shoptime, Submarino), Amazon, CNOVA, Magazine Luiza, Ricardo Eletro e Buscape.",
        "category": "CLT",
        "link": "http://www.leveros.com.br",
        "start": "07/01/2011",
        "end": ""
    },
    {
        "name": "Fomenta Vale",
        "logo": "resources/img/jobs/fomentavale.png",
        "post": "Mentor",
        "description": "Voluntário na ONG Fomenta Vale como Mentor durante os Hackathons organizado.",
        "category": "Voluntário",
        "link": "https://www.fomentavale.com.br/",
        "start": "01/01/2019",
        "end": "01/09/2019"
    }
];
var academic = [
    {
        "school": "UNOPAR-PR",
        "course": "Ciências Contábeis",
        "description": "Barachel em Ciências Contábeis - Tema TCC: Auditoria e Gestão Empresarial",
        "type": "Ensino Superior",
        "start": "01/2009",
        "end": "12/2013"
    },
    {
        "school": "ESAB-ES",
        "course": "Engenharia de Sistemas",
        "description": "Pós-Graduação em Engenharia de Sistemas - TCC: Gerenciamento de Projetos tendo como Base o PMBOK",
        "type": "Pós Graduação",
        "start": "08/2017",
        "end": "04/2019"
    },
    {
        "school": "Trainning Education Center",
        "course": "ABAP",
        "description": "Linguagem de programação para SAP",
        "type": "Certificação",
        "start": "04/2019",
        "end": "07/2019"
    },
    {
        "school": "CertProf",
        "course": "DevOps Essentials Professional Certificate",
        "description": "O DevOps é mais que uma tecnologia ou um conjunto de ferramentas. É uma mentalidade que requer evolução cultural. São pessoas, processos e as ferramentas certas para tornar o ciclo de vida de sua aplicação mais rápido e mais previsível.",
        "type": "Certificação",
        "start": "2019",
        "end": "2019"
    },
    {
        "school": "TI Exames Consultoria",
        "course": "ITIL V3 Foundation",
        "description": "ITIL® (Information Technology Infrastructure Library) é o framework para gerenciamento de serviços de TI (ITSM) mais adotado mundialmente.",
        "type": "Certificação",
        "start": "04/2017",
        "end": "06/2017"
    }
];
var languages = [
    {
        "name": "Português",
        "level": "Nativo"
    },
    {
        "name": "Inglês",
        "level": "Técnico"
    },
    {
        "name": "Espanhol",
        "level": "Intermediário"
    }
];
var publishedArticles = [
    {
        "name": "Web Artifacts Generator support IDE Desktop",
        "image": "resources/img/articles/uspsp.jpg",
        "institution": "USP de São Paulo",
        "eventName": "2º Etapa Internacional do 24º Simpósio Internacional de Iniciação Científica e Tecnológica da USP - SIICUSP",
        "city": "São Paulo",
        "date": "2016",
        "description": "This work presents a web artifacts generator that with modeling, forms and drag and drop elements, facilitates the development of JavaServer Faces (JSF) applications, automating the generator of major artifacts based on this architecture: ManagedBeans, Data Access Object (DAO), User Interfaces and JPA Persistence Entities. This tools uses the concepts of Fluent Interface and Abstract Syntax Tree (AST). A autenticidade deste documento pode ser verificada na página da Universidade de São Paulo http://uspdigital.usp.br/webdoc"
    },
    {
        "name": "Gerador de Artefatos e Projetos Web",
        "image": "resources/img/articles/fateclins.jpg",
        "institution": "Fatec Lins",
        "eventName": "II Congresso de Iniciação Científica e Tecnológica Fatec Lins",
        "city": "Lins",
        "date": "2016",
        "description": "O presente trabalho apresenta uma ferramenta web para auxiliar no desenvolvimento de aplicações JavaServer Faces automatizando a geração de artefatos e projetos, por meio de modelagem de entidades e relacionamentos, preenchimento de formulários e a utilização de elementos Drag-and-Drop. Os artefatos produzidos são baseados na arquitetura JSF: ManagedBeans, Entidades de Persistência, Data Access Object (DAO) e Interfaces de Usuário e tal ferramenta faz uso de conceitos de Fluent Interfaces e Abstract Syntax Tree (AST). Os artefatos produzidos podem ser utilizados em aplicações Web e o seu funcionamento é satisfatório. Palavras-chave:JAVASERVER FACES; GERADOR DE ARTEFATOS; AUTOMATIZAÇÃO DE CÓDIGO; SISTEMAS WEB"
    },
    {
        "name": "Gerador de Artefatos Web compatível com IDE Desktop",
        "image": "resources/img/articles/uspsc.jpg",
        "institution": "USP de São Carlos",
        "eventName": "1º Etapa do 24º Simpósio Internacional de Iniciação Científica e Tecnológica da USP - SIICUSP",
        "city": "São Carlos",
        "date": "2016",
        "description": "Este trabalho apresenta um gerador de artefatos web que, por meio de modelagem, formulários e elementos drag and drop, facilitando o desenvolvimento de aplicações JavaServer Faces (JSF), automatizando a geração dos principais artefatos de uma aplicação baseada nessa arquitetura: ManagedBeans, Data Access Object (DAO), interfaces de usuário e as Entidades de Persistência JPA. Tal ferramenta faz uso de conceitos de Fluent Interface e Abstract Syntax Tree (AST)."
    }
];
/**
 * Components Helper Class
*/
var Components = /** @class */ (function () {
    function Components() {
    }
    /**
     * Typing text
    */
    Components.typeWriter = function (elementId, text, index) {
        if (index < text.length) {
            var string = elementId.html();
            string += text.charAt(index);
            $(elementId).html(string);
            index++;
            setTimeout(function () {
                Components.typeWriter(elementId, text, index);
            }, 100);
        }
    };
    Components.smoothScrolling = function () {
        // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .on("click", function (event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                    location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        }
                        else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });
    };
    Components.deactivateHeader = function () {
        if (!$header.hasClass(scrollClass)) {
            $header.addClass(scrollClass);
        }
    };
    Components.activateHeader = function () {
        if ($header.hasClass(scrollClass)) {
            $header.removeClass(scrollClass);
        }
    };
    Components.checkHeader = function () {
        if ($(window).scrollTop() > activateAtY) {
            Components.deactivateHeader();
        }
        else {
            Components.activateHeader();
        }
    };
    Components.findObjectByKey = function (array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    };
    Components.changeDevtype = function (type) {
        $(".other-skills ul").empty();
        $("#skills .sections").empty();
        $("#projects .card-columns").empty();
        $(".other-skills ul, #skills .sections, #projects .card-columns").prepend("\n            <div class=\"loader\">\n                <i class=\"fas fa-spinner fa-spin\"></i>\n            </div>\n        ");
        setTimeout(function () {
            var skillsByTechType = [];
            skillsByTechType.push({ "order": 1, "name": "Linguagem de programação", "elements": [] });
            skillsByTechType.push({ "order": 2, "name": "Linguagem web", "elements": [] });
            skillsByTechType.push({ "order": 4, "name": "Java Framework", "elements": [] });
            skillsByTechType.push({ "order": 5, "name": "JavaScript Library", "elements": [] });
            skillsByTechType.push({ "order": 6, "name": "JavaScript Framework", "elements": [] });
            var skillsByType = [];
            skills.forEach(function (element) {
                if (type == null || (element.type == type || element.type == "Full Stack")) {
                    skillsByType.push(element);
                }
            });
            var t = setInterval(function () {
                var otherSkillsList = $('.other-skills ul li');
                if (otherSkillsList.length == skillsByType.length) {
                    $('.other-skills ul .loader').remove();
                    clearInterval(t);
                }
            }, 500);
            skillsByType.forEach(function (element) {
                var imageUrl = "resources/img/skills/" + element.name.replace("/", "-").toLowerCase() + ".png";
                var image = new Image();
                image.src = imageUrl;
                image.onload = function () {
                    $(".other-skills ul").append("\n                    <li data-name=\"" + element.name + "\">\n                        <a href=\"#" + element.name + "\">\n                            <img src=\"" + imageUrl + "\"> \n                            <span class=\"title\">" + element.name + "</span>\n                        </a>\n                    </li>\n                ");
                };
                image.onerror = function () {
                    imageUrl = "resources/img/favicon.png";
                    $(".other-skills ul").append("\n                    <li class=\"no-image\" data-name=\"" + element.name + "\">\n                        <a href=\"#" + element.name + "\">\n                            <img src=\"" + imageUrl + "\"> \n                            <span class=\"title\">" + element.name + "</span>\n                        </a>\n                    </li>\n                ");
                };
                if (element.knowledgePercentage > 0) {
                    var skill = Components.findObjectByKey(skillsByTechType, "name", element.technologyType);
                    if (skill == null) {
                        skill = { "order": 10, "name": element.technologyType, "elements": [] };
                        skillsByTechType.push(skill);
                    }
                    skill.elements.push(element);
                }
            });
            skillsByTechType.sort(Components.compareByOrder);
            var skillsByTechTypeAux = [];
            skillsByTechType.forEach(function (element) {
                if (element.elements.length > 0) {
                    skillsByTechTypeAux.push(element);
                }
            });
            var t2 = setInterval(function () {
                var sections = $('#skills .sections .section');
                if (sections.length == skillsByTechTypeAux.length) {
                    $('#skills .sections .loader').remove();
                    clearInterval(t2);
                }
            }, 500);
            skillsByTechTypeAux.forEach(function (element) {
                var section = $("\n                        <div class=\"section\">\n                            <h5>" + element.name + "</h5>\n                            <ul>\n                            </ul>\n                        </div>\n                    ");
                section.appendTo("#skills .sections");
                element.elements.forEach(function (skill) {
                    if (type == null || (skill.type == type || skill.type == "Full Stack")) {
                        section.find("ul").append("\n                            <li data-name=\"" + skill.name + "\">\n                                " + (skill.knowledgePercentage < 30 ? skill.name + " (Iniciante)" : '') + "\n                                " + (skill.knowledgePercentage >= 30 && skill.knowledgePercentage < 60 ? skill.name + " (Intermediário)" : '') + "\n                                " + (skill.knowledgePercentage >= 60 && skill.knowledgePercentage <= 100 ? skill.name + " (Avançado)" : '') + "\n                            </li>\n                        ");
                    }
                });
            });
            var projectsByType = [];
            projects.forEach(function (element) {
                if (type == null || (element.type == type || element.type == "Full Stack")) {
                    projectsByType.push(element);
                }
            });
            projectsByType.forEach(function (element) {
                var imageUrl = "" + element.logo;
                var image = new Image();
                image.src = imageUrl;
                image.onload = function () {
                    $("#projects .card-columns").append("\n                        <div class=\"card" + (element.status == "Em desenvolvimento" ? ' development' : '') + "\">\n                            <img class=\"card-img-top\" src=\"" + element.logo + "\" alt=\"" + element.name + "\">\n                            " + (element.status == "Em desenvolvimento" ? '<span class="badge badge-dark">' + element.status + '</span>' : '') + "\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title\"><a href=\"" + element.link + "\" target=\"_blank\">" + element.name + "</a></h5>\n                                <p class=\"card-text\">\n                                    " + element.description + "\n                                </p>\n                                <p class=\"card-text\">\n                                    <small class=\"text-muted\">" + element.technologies + "</small>\n                                </p>\n                            </div>\n                        </div>\n                    ");
                };
                image.onerror = function () {
                    $("#projects .card-columns").append("\n                        <div class=\"card" + (element.status == "Em desenvolvimento" ? ' development' : '') + "\">\n                            " + (element.status == "Em desenvolvimento" ? '<span class="badge badge-dark">' + element.status + '</span>' : '') + "\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title\"><a href=\"" + element.link + "\" target=\"_blank\">" + element.name + "</a></h5>\n                                <p class=\"card-text\">\n                                    " + element.description + "\n                                </p>\n                                <p class=\"card-text\">\n                                    <small class=\"text-muted\">" + element.technologies + "</small>\n                                </p>\n                            </div>\n                        </div>\n                    ");
                };
            });
            var t3 = setInterval(function () {
                var cards = $('#projects .card-columns .card');
                if (cards.length == projectsByType.length) {
                    $('#projects .card-columns .loader').remove();
                    clearInterval(t3);
                }
            }, 500);
            var t4 = setInterval(function () {
                var cards = $('#projects .card-columns .card');
                var sections = $('#skills .sections .section');
                var otherSkillsList = $('.other-skills ul li');
                if (cards.length == projectsByType.length && sections.length == skillsByTechTypeAux.length && otherSkillsList.length == skillsByType.length) {
                    $(".dev-type-modal").modal('hide');
                    clearInterval(t4);
                }
            }, 500);
        }, 3000);
    };
    Components.compareByKnowledge = function (a, b) {
        if (a.knowledgePercentage > b.knowledgePercentage)
            return -1;
        if (a.knowledgePercentage < b.knowledgePercentage)
            return 1;
        return 0;
    };
    Components.compareByOrder = function (a, b) {
        if (a.order < b.order)
            return -1;
        if (a.order > b.order)
            return 1;
        return 0;
    };
    return Components;
}());
var $header = $('#header'), scrollClass = 'on-scroll', activateAtY = 80;
$(window).scroll(function () {
    Components.checkHeader();
});
$(document).ready(function () {
    var imageUrl = "resources/img/photo.jpg";
    var image = new Image();
    image.src = imageUrl;
    image.onload = function () {
        // Title effect
        var title = "FRANCISCO GONÇALVES";
        var timer = title.length * 100;
        Components.typeWriter($("#full-banner .title"), title, 0);
        // Show Photo
        setTimeout(function () {
            $("#full-banner .title img").addClass("show");
        }, timer);
    };
    // Check header position
    Components.checkHeader();
    menu.forEach(function (element) {
        $("#header .col-menu ul").append("\n            <li>\n                <a class=\"nav-link\" href=\"" + element.link + "\" alt=\"" + element.title + "\">" + element.title + "</a>\n            </li>\n        ");
    });
    social.forEach(function (element) {
        $("#header .col-social-links ul").append("\n            <li>\n                <a class=\"nav-link target=\"_blank\" href=\"" + element.link + "\" alt=\"" + element.title + "\"><i class=\"" + element.icon + "\"></i></a>\n            </li>\n        ");
    });
    skills.sort(Components.compareByKnowledge);
    Components.changeDevtype(null);
    jobs.forEach(function (element) {
        var imageUrl = "" + element.logo;
        var image = new Image();
        image.src = imageUrl;
        image.onload = function () {
            $("#jobs .card-columns").append("\n                <div class=\"card " + (element.end == '' ? 'border-success' : '') + "\">\n                    <img class=\"card-img-top\" src=\"" + element.logo + "\" alt=\"" + element.name + "\">\n                    " + (element.end == '' ? '<span class="badge badge-success">Atualmente</span>' : '') + "\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"><a href=\"" + element.link + "\">" + element.name + "</a></h5>\n                        <p class=\"card-text\">\n                            " + element.description + "\n                        </p>\n                        <p class=\"card-text\">\n                            <small class=\"text-muted\">" + element.start + " " + (element.end != '' ? '- ' + element.end : '') + "</small>\n                        </p>\n                    </div>\n                </div>\n            ");
        };
        image.onerror = function () {
            $("#jobs .card-columns").append("\n                <div class=\"card " + (element.end == '' ? 'border-success' : '') + "\">\n                    " + (element.end == '' ? '<span class="badge badge-success">Atualmente</span>' : '') + "\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"><a href=\"" + element.link + "\">" + element.name + "</a></h5>\n                        <p class=\"card-text\">\n                            " + element.description + "\n                        </p>\n                        <p class=\"card-text\">\n                            <small class=\"text-muted\">" + element.start + " " + (element.end != '' ? '- ' + element.end : '') + "</small>\n                        </p>\n                    </div>\n                </div>\n            ");
        };
    });
    academic.forEach(function (element) {
        $("#academic .card-columns").append("\n            <div class=\"card " + (element.end == '' ? 'bg-secondary' : '') + "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + element.school + "</h5>\n                    <span class=\"d-block course\">" + element.course + "</span>\n                    <span class=\"type badge badge-dark\">" + element.type + "</span>\n                    <p class=\"card-text\">\n                        " + element.description + "\n                    </p>\n                    <p class=\"card-text\">\n                        <small class=\"text-muted\">" + element.start + " " + (element.end != '' ? '- ' + element.end : '') + "</small>\n                    </p>\n                </div>\n            </div>\n        ");
    });
    languages.forEach(function (element) {
        $("#languages .card-columns").append("\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + element.name + "</h5>\n                    <p class=\"card-text\">\n                        " + element.level + "\n                    </p>\n                </div>\n            </div>\n        ");
    });
    publishedArticles.forEach(function (element) {
        $("#articles .card-columns").append("\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"" + element.image + "\" alt=\"" + element.name + "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">\n                        " + element.name + "\n                        <small class=\"d-block text-muted\">" + element.eventName + "</small>\n                    </h5>\n                    <span class=\"badge badge-secondary\">\n                        " + element.institution + "\n                    </span>\n                    <p class=\"card-text\">\n                        " + element.description + "\n                    </p>\n                    <p class=\"card-text\">\n                        <small class=\"text-muted\">" + element.date + "</small>\n                    </p>\n                </div>\n            </div>\n        ");
    });
    // Bootstrap scrollspy
    $('body').scrollspy({ target: '#navbar-section' });
    // Mobile Menu
    if ($(window).width() <= 767) {
        $(".category-menu").insertAfter("#header");
        $(".category-menu").removeClass("my-auto col-sm-6");
    }
    $(document).on("click", ".btn-toggle-menu, #navbar-section .nav-link", function () {
        $(".category-menu").toggleClass("active");
    });
    $(document).on("click", ".dev-type a", function (event) {
        event.preventDefault();
        var element = event.currentTarget;
        if ($(element).parent().hasClass("active")) {
            $(".dev-type").removeClass("active");
            Components.changeDevtype(null);
        }
        else {
            $(".dev-type").removeClass("active");
            $(element).parent().addClass("active");
            $(".dev-type-modal").modal('show');
            Components.changeDevtype($(element).attr("href"));
            $('html, body').animate({
                scrollTop: $("#skills").offset().top
            }, 2000);
        }
    });
    // Call components
    Components.smoothScrolling();
});
