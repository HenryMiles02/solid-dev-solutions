import close_icon from "./close-icon.svg?react";
import menu_icon from "./menu-icon.svg?react";
import engeplanti_template from "./engeplanti_template.png";
import erp_system_template from "./erp_system.png";
import streaming_platform_template from "./streaming_plataform_dark.png";
import landing_page_template from "./landing_page.png";
import rest_api_template from "./api.png";
import admin_dashboard_template from "./dashboard.png";

const Assets = {
    Icons: {
        Close: close_icon,
        Menu: menu_icon,
    },
    projectsData: [
        {
            image: engeplanti_template,
            title: "Engeplanti",
            description: "Site institucional morderno, com foco em conversão e performance, desenvolvido para a Engeplanti.",
            technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
            link: "https://engeplanti.vercel.app",
        },
        {
            image: erp_system_template,
            title: "Sistema ERP Multiempresa",
            description: "Sistema ERP completo para gestão empresarial. Suporta múltiplas empresas em uma única instalação, oferecendo funcionalidades como gestão financeira, controle de estoque, vendas e relatórios personalizados.",
            technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker"],
            link: "",
        },
        {
            image: streaming_platform_template,
            title: "Plataforma de Streaming",
            description: "Aplicação web de streaming com foco em performance, escalabilidade e UX morderna.",
            technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Express"],
            link: "",
        },
        {
            image: landing_page_template,
            title: "Landing Page de Alta Conversão",
            description: "Landing page otimizada para conversão, com animações suaves e design estratégico.",
            technologies: ["React", "TypeScript", "TailwindCSS"],
            link: "",
        },
        {
            image: rest_api_template,
            title: "API REST Profissional",
            description: "API REST segura, escalável e documentada para integração com sistemas web e mobile.",
            technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Docker"],
            link: "",
        },
        {
            image: admin_dashboard_template,
            title: "Dashboard Administrativo",
            description: "Dashboard interativo para monitoramento e gestão de dados empresariais em tempo real, focado em tomada de decisões.",
            technologies: ["React", "TypeScript", "TailwindCSS", "Chart.js"],
            link: "",
        }
    ]
}

export default Assets