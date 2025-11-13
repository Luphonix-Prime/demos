function initParallaxEffect() {
    const heroContent = document.getElementById('heroContent');
    
    const handleScroll = () => {
        requestAnimationFrame(() => {
            const scrollPosition = window.pageYOffset;
            const maxScroll = 400;
            const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
            
            if (heroContent) {
                heroContent.style.opacity = opacity.toString();
            }
        });
    };
    
    window.addEventListener('scroll', handleScroll);
}

const projects = [
    {
        title: "NexusAI Platform",
        description: "Advanced AI-powered analytics dashboard with real-time data visualization and predictive modeling capabilities.",
        category: "AI",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        url: "https://example.com/nexusai"
    },
    {
        title: "CloudSync Pro",
        description: "Enterprise cloud infrastructure management system with automated deployment and scalability features.",
        category: "Cloud",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        url: "https://example.com/cloudsync"
    },
    {
        title: "AutoFlow Suite",
        description: "Intelligent workflow automation platform that streamlines business processes and reduces manual tasks by 80%.",
        category: "Automation",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop",
        url: "https://example.com/autoflow"
    },
    {
        title: "ShopSphere",
        description: "Next-generation eCommerce platform with AI recommendations, seamless checkout, and inventory management.",
        category: "eCommerce",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
        url: "https://example.com/shopsphere"
    },
    {
        title: "QuantumUI Design System",
        description: "Comprehensive design system with 200+ components, dark mode support, and accessibility-first approach.",
        category: "Design",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        url: "https://example.com/quantumui"
    },
    {
        title: "CodeHub Portal",
        description: "Full-stack developer collaboration platform with version control, code review, and CI/CD integration.",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        url: "https://example.com/codehub"
    },
    {
        title: "DataFlow Analytics",
        description: "Real-time data processing engine with machine learning capabilities for business intelligence insights.",
        category: "AI",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        url: "https://example.com/dataflow"
    },
    {
        title: "TaskMaster Automation",
        description: "Smart task scheduler and automation tool that integrates with 50+ business applications.",
        category: "Automation",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
        url: "https://example.com/taskmaster"
    },
    {
        title: "PixelPerfect Studio",
        description: "Professional design agency portfolio showcasing cutting-edge UI/UX work for Fortune 500 clients.",
        category: "Design",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
        url: "https://example.com/pixelperfect"
    },
    {
        title: "MarketPlace Elite",
        description: "Multi-vendor marketplace with advanced seller tools, payment gateway integration, and analytics dashboard.",
        category: "eCommerce",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        url: "https://example.com/marketplace"
    },
    {
        title: "ServerlessStack",
        description: "Microservices architecture deployed on AWS Lambda with auto-scaling and cost optimization.",
        category: "Cloud",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
        url: "https://example.com/serverless"
    },
    {
        title: "WebCraft Studio",
        description: "Modern web application built with cutting-edge technologies, featuring blazing-fast performance.",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
        url: "https://example.com/webcraft"
    }
];

let filteredProjects = [...projects];

function renderProjects(projectsToRender) {
    const projectsGrid = document.getElementById('projectsGrid');
    const noResults = document.getElementById('noResults');
    
    projectsGrid.innerHTML = '';
    
    if (projectsToRender.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    projectsToRender.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
            <div class="project-info">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-link">View Project →</a>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
    
    observeCards();
}

function filterProjects() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;
    
    filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm) || 
                            project.description.toLowerCase().includes(searchTerm) ||
                            project.category.toLowerCase().includes(searchTerm);
        
        const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    renderProjects(filteredProjects);
}

document.getElementById('searchInput').addEventListener('input', filterProjects);
document.getElementById('categoryFilter').addEventListener('change', filterProjects);

function observeCards() {
    const cards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initParallaxEffect();
    renderProjects(projects);
});
