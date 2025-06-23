export const portfolioData = {
    personal: {
        name: "Simrah Shabandri",
        title: "Computing & IT Student",
        email: "simrahshabandri@gmail.com",
        location: "Sharjah, UAE",
        github: "https://github.com/SimrahRuqiya",
        linkedin: "https://www.linkedin.com/in/simrah-shabandri/",
        bio: "I'm a passionate developer with a strong interest in IT, Networking, Cloud Computing, Dev Ops, Software Development and UI/UX Design. I love creating innovative solutions and exploring new technologies.",
        cv: "src/assets/SimrahShabandri_CV.pdf"
    },
      skills: [
    // Programming Languages
    { name: 'Python', icon: '/icons/python.svg', category: 'programming' },
    { name: 'Java', icon: '/icons/java.svg', category: 'programming' },
    { name: 'JavaScript', icon: '/icons/javascript.svg', category: 'programming' },
    { name: 'TypeScript', icon: '/icons/typescript.svg', category: 'programming' },
    { name: 'Bash', icon: '/icons/csharp.svg', category: 'programming' },
    
    // Web Development
    { name: 'HTML5', icon: '/icons/html5.svg', category: 'web' },
    { name: 'CSS3', icon: '/icons/css3.svg', category: 'web' },
    { name: 'React', icon: '/icons/react.svg', category: 'web' },
    { name: 'Next.js', icon: '/icons/nextjs.svg', category: 'web' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', category: 'web' },
    { name: 'Swift', icon: '/icons/swift.svg', category: 'web' },
    { name: 'Node.js', icon: '/icons/nodejs.svg', category: 'web' },
    { name: 'Spring Boot', icon: '/icons/spring.svg', category: 'web' },
    
    // Database
    { name: 'MySQL', icon: '/icons/mysql.svg', category: 'database' },
    { name: 'MariaDB', icon: '/icons/postgresql.svg', category: 'database' },
    { name: 'PostgreSQL', icon: '/icons/mongodb.svg', category: 'database' },
    
    // Cloud & DevOps
    { name: 'Azure', icon: '/icons/aws.svg', category: 'cloud' },
    { name: 'AWS', icon: '/icons/docker.svg', category: 'cloud' },
    { name: 'Docker', icon: '/icons/kubernetes.svg', category: 'cloud' },
    { name: 'Jenkins', icon: '/icons/jenkins.svg', category: 'cloud' },
    
    // Tools
    { name: 'Git', icon: '/icons/git.svg', category: 'tools' },
    { name: 'VS Code', icon: '/icons/vscode.svg', category: 'tools' },
    { name: 'Figma', icon: '/icons/figma.svg', category: 'tools' },
    ],
    projects: {
        webDevelopement: [
        {
            id: 1,
            title: "L2S Car Rental System",
            description: "A comprehensive car rental system enabling users to browse, filter, and rent vehicles based on preferences, with dynamic car availability and detailed supplier information and built a review and feedback module allowing users to share rental experiences",
            technologies: ["Java", "Spring Boot", "Semantic UI", "Mustache", "HTML", "CSS", "MariaDB"],
            github: "https://github.com/SimrahRuqiya/project-l2s",
            image: "src/assets/l2s.png",
            date: "March 2025 - May 2025",
            featured: true
        },
        {
            id: 2,
            title: "SpacePulse: Space Platform",
            description: "A space website that provides information about space, including planets, stars, and galaxies. It features a user-friendly interface with interactive elements and responsive design.",
            technologies: ["HTML5", "CSS"],
            github: "https://github.com/SimrahRuqiya/space-pulse",
            image: "src/assets/spacepulse.png",
            date: "November 2024",
            featured: true
        },
        {
            id: 3,
            title: "Cat Cafe Website",
            description: "A website for a cat cafe that showcases the cafe's offerings, including cafe pricing, events, and drinks. It features a responsive design and proper understading of Flexbox and CSS Grid.",
            technologies: ["HTML5", "CSS3"],
            github: "https://github.com/SimrahRuqiya/cat-cafe",
            image: "src/assets/catcafe.png",
            date: "November 2024",
            featured: true
        },
        {
            id: 4,
            title: "Cuisine and Restaurant Website",
            description: "Collaborated to create a website on famous cuisines and few restaurants of the respective cuisines. The website features a responsive design, showcasing various cuisines and their respective restaurants.",
            technologies: ["HTML5", "CSS3"],
            github: "https://github.com/SimrahRuqiya/cuisine-website",
            image: "src/assets/cuisine.png",
            date: "November 2024",
            featured: true
        },
        ],
        networking: [
        {
            id: 1,
            title: "Network Traffic Analyzer",
            description: "Developed a command-line network traffic analyzer using PyShark to capture filtered live packets from specified interfaces, saving results to CSV. Implemented automated analysis to extract protocol statistics and traffic summaries, and visualized patterns using Seaborn and Matplotlib, including protocol distribution, top IPs, and packet lengths.",
            technologies: ["Python", "PyShark", "Seaborn", "Matplotlib", "Pandas"],
            github: "https://github.com/SimrahRuqiya/network-traffic-analyzer",
            image: "src/assets/network-traffic-analyzer.png",
            date: "May 2025",
            featured: true
        }

    ]
    }
}