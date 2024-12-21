export const allProducts = [
  {
    id: 1,
    name: "CyberShield Pro",
    description: "Advanced security software with real-time protection and threat detection",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    prices: { day: 2.99, week: 14.99, month: 49.99 }
  },
  {
    id: 2,
    name: "DataFlow Analytics",
    description: "Powerful data analytics platform with AI-driven insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    prices: { day: 3.99, week: 19.99, month: 59.99 }
  },
  {
    id: 3,
    name: "CloudSync Suite",
    description: "Enterprise-grade cloud storage and synchronization solution",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
    prices: { day: 1.99, week: 9.99, month: 39.99 }
  },
  {
    id: 4,
    name: "DevOps Maestro",
    description: "Complete CI/CD pipeline automation and monitoring toolkit",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
    prices: { day: 4.99, week: 24.99, month: 79.99 }
  },
  {
    id: 5,
    name: "NetworkPro Elite",
    description: "Advanced network monitoring and optimization suite",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    prices: { day: 3.99, week: 19.99, month: 69.99 }
  },
  {
    id: 6,
    name: "AI Assistant Pro",
    description: "Intelligent automation and decision support system",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    prices: { day: 5.99, week: 29.99, month: 89.99 }
  },
  {
    id: 7,
    name: "SecureVault",
    description: "Enterprise password and secrets management solution",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    prices: { day: 2.99, week: 14.99, month: 54.99 }
  },
  {
    id: 8,
    name: "DataGuard Pro",
    description: "Complete data backup and disaster recovery system",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    prices: { day: 3.99, week: 19.99, month: 64.99 }
  }
];

export const topProducts = allProducts.slice(0, 3);