export const siteConfig = {
  name: "Rindi Baskara Ujianto",
  shortName: "iBas",
  role: "Data Analyst",
  location: "Jakarta, Indonesia",
  status: "Open to Work",
  tagline:
    "Combining hands-on supply chain operations experience with data analytics capabilities to transform operational challenges into measurable business improvements.",
  email: "baskara.ur@gmail.com",
  linkedin: "https://linkedin.com/in/rbaskara",
  github: "https://github.com/rdbaskara",
  kaggle: "",
  responseTime: "Within 24 hours",
};

export const highlights = [
  {
    icon: "💰",
    title: "Financial & Operational Efficiency",
    description:
      "Reduced operating costs by up to Rp25M per month through optimized device asset migration and inventory management.",
  },
  {
    icon: "📈",
    title: "Large-Scale Management",
    description:
      "Managed and reconciled data for over 1,000+ EDC assets and reduced excess inventory by up to 20%.",
  },
  {
    icon: "⚡",
    title: "Reporting Automation",
    description:
      "Designed Excel-based automated reconciliation templates that reduced daily financial reporting turnaround time by up to 20%.",
  },
  {
    icon: "🚀",
    title: "Data & Supply Chain Projects",
    description:
      "Built interactive analytics dashboards to support business growth projections worth billions of rupiah.",
  },
];

export const services = [
  {
    title: "Data Reconciliation & Cleaning",
    description:
      "Cleaning raw data, synchronizing inventory and transaction records, and ensuring datasets are ready for analysis.",
  },
  {
    title: "Interactive Dashboarding",
    description:
      "Building intuitive visualizations of operational and financial KPIs for stakeholder performance monitoring.",
  },
  {
    title: "Operational & Supply Chain Analytics",
    description:
      "Analyzing inventory trends, logistics efficiency, and cost structures to prevent waste and optimize resources.",
  },
  {
    title: "Actionable Business Insights",
    description:
      "Translating data findings and predictive modeling into strategic recommendations that drive growth.",
  },
];

export type ProjectLinkType = "dashboard" | "code" | "slides" | "other";

export type ProjectLink = {
  label: string;
  url: string;
  type: ProjectLinkType;
};

export type ProjectOverview = {
  background: string;
  goals: string[];
  methodology: string[];
  findings: string[];
  recommendations: string[];
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: "Completed" | "Ongoing" | "Live";
  featured?: boolean;
  summary: string;
  tags: string[];
  tools: string[];
  metric: string;
  thumbnail: string;
  gallery: string[];
  overview: ProjectOverview;
  slidesUrl?: string;
  links: ProjectLink[];
  codeSnippet?: string;
  codeLanguage?: "sql" | "python";
};

export const projects: Project[] = [
  {
    id: "supply-chain-optimization",
    slug: "supply-chain-optimization",
    title: "Supply Chain Optimization: Profit Leakage & Delivery Performance",
    category: "Python",
    status: "Completed",
    featured: true,
    summary:
      "Analyzed commercial discount policies and logistics performance to identify profit leakage, reduce late deliveries, and improve fulfillment performance.",
    tags: ["Python", "XGBoost", "Tableau", "Supply Chain"],
    tools: ["Google Colab", "Python", "Tableau", "Excel", "Google Slides"],
    metric: "Rp828K projected revenue recovery",
    thumbnail: "/images/projects/supply-chain-optimization/thumbnail.png",
    gallery: [
      "/images/projects/supply-chain-optimization/slide-1.png",
      "/images/projects/supply-chain-optimization/slide-2.png",
      "/images/projects/supply-chain-optimization/slide-3.png",
    ],
    overview: {
      background:
        "DataCo Global faced significant profit losses and delayed order fulfillment. This analysis evaluated commercial discount policies and logistics performance to recover financial value and improve delivery reliability.",
      goals: [
        "Recover approximately Rp806K through discount optimization.",
        "Reduce late delivery rate from 57.3% to 42.8%.",
        "Improve fulfillment performance through conditional same-day delivery and 3PL SLA enforcement.",
      ],
      methodology: [
        "Data preparation and exploratory data analysis.",
        "RFM customer segmentation.",
        "XGBoost modeling.",
        "Sensitivity and scenario simulation.",
        "Development of five Tableau dashboards.",
      ],
      findings: [
        "Estimated profit leakage exposure reached Rp1.81M.",
        "82.2% of losses were concentrated in Fan Shop, Apparel, and Golf categories.",
        "57.3% of orders experienced late delivery, particularly in Europe and LATAM.",
      ],
      recommendations: [
        "Cap discounts at 15% and validate the policy through A/B testing.",
        "Renegotiate 3PL carrier penalty clauses.",
        "Reallocate discount savings to fund conditional same-day delivery.",
      ],
    },
    slidesUrl:
      "https://docs.google.com/presentation/d/e/2PACX-1vT3b6ohltRmKcv-1iS_x98MEiNfD1QsjNh4HgEO7wGlC7Ay5zRy7acsQbgSQ7reQ__a9svznb24aaPA/pubembed?start=false&loop=false&delayms=10000",
    links: [
      {
        label: "View Dashboard",
        url: "https://public.tableau.com/views/DataCoGlobalDashboardbyRindiBaskara/MarketPerformanceOverview",
        type: "dashboard",
      },
      {
        label: "DataCo Global Supply Chain Dataset",
        url: "https://www.kaggle.com/datasets/shashwatwork/dataco-smart-supply-chain-for-big-data-analysis/data",
        type: "other",
      },
      {
        label: "Data Cleaning Notebook",
        url: "https://colab.research.google.com/drive/1FAz0WUigW7B7ugbdv6Y3KmJ7Z6j2cS2H?usp=sharing",
        type: "code",
      },
      {
        label: "EDA & RFM Notebook",
        url: "https://colab.research.google.com/drive/13G0Hf86mS_maulqwLJ1xFgSn2u_0-eox?usp=sharing",
        type: "code",
      },
      {
        label: "Model Comparison: Linear, Logistic, Random Forest & XGBoost",
        url: "https://colab.research.google.com/drive/1zh5C52B9PhDm4Uvs0Mqdpu5slHPyR1zr?usp=sharing",
        type: "code",
      },
      {
        label: "XGBoost Simulation 1",
        url: "https://colab.research.google.com/drive/1bchU9G66gHRZhXX1YHIy9Z9jz8CVqG1-?usp=sharing",
        type: "code",
      },
      {
        label: "XGBoost Simulation 2",
        url: "https://colab.research.google.com/drive/17k7gugGLZvsDvg0T13qdlsfFBXVbFLxZ?usp=sharing",
        type: "code",
      },
      {
        label: "Open Google Slides",
        url: "https://docs.google.com/presentation/d/e/2PACX-1vT3b6ohltRmKcv-1iS_x98MEiNfD1QsjNh4HgEO7wGlC7Ay5zRy7acsQbgSQ7reQ__a9svznb24aaPA/pubembed?start=false&loop=false&delayms=10000",
        type: "slides",
      },
    ],
  },
  {
    id: "hospital-growth-strategy",
    slug: "hospital-growth-strategy",
    title: "Revo Hospital Growth Strategy: Unlocking Capacity",
    category: "Dashboard",
    status: "Completed",
    summary:
      "Analyzed hospital capacity constraints and revenue performance to identify operational bottlenecks and support a 10% net revenue growth target.",
    tags: ["Tableau", "Healthcare", "Operations", "Dashboard"],
    tools: ["Tableau", "Excel", "Google Slides"],
    metric: "Rp9.89B projected revenue opportunity",
    thumbnail: "/images/projects/hospital-growth-strategy/thumbnail.png",
    gallery: [
      "/images/projects/hospital-growth-strategy/slide-1.png",
      "/images/projects/hospital-growth-strategy/slide-2.png",
      "/images/projects/hospital-growth-strategy/slide-3.png",
    ],
    overview: {
      background:
        "This analysis examined capacity constraints and revenue disparities at Revo Hospital following a significant increase in patient volume from December 2024.",
      goals: [
        "Identify operational and financial bottlenecks.",
        "Support a 10% net revenue growth target over six months.",
        "Increase projected net revenue from Rp98.87B to Rp108.76B.",
      ],
      methodology: [
        "Data preparation and exploratory data analysis.",
        "Patient flow analysis.",
        "Financial performance analysis.",
        "Development of six Tableau dashboards.",
      ],
      findings: [
        "Oncology recorded the highest average length of stay at 6.98 days.",
        "Cirebon had the highest pending payment ratio at 17.73%.",
        "Central Jakarta generated lower revenue per bed than other flagship branches.",
      ],
      recommendations: [
        "Review bed allocation across flagship branches.",
        "Improve revenue productivity through pricing and payer-mix optimization.",
        "Expand referral partnerships in East Java.",
      ],
    },
    slidesUrl:
      "https://docs.google.com/presentation/d/e/2PACX-1vQw_8Bj_EsVCyPRJeOcCKs_6XPchJch5W2DHTk6ErclWSUNn8HUJzzrRoDZDRBW0GMSknBM4TIEiy29/pubembed?start=false&loop=false&delayms=10000",
    links: [
      {
        label: "View Dashboard",
        url: "https://public.tableau.com/views/RevoHospitalByRindiBaskara/ExecutiveOverview",
        type: "dashboard",
      },
      {
        label: "Open Google Slides",
        url: "https://docs.google.com/presentation/d/e/2PACX-1vQw_8Bj_EsVCyPRJeOcCKs_6XPchJch5W2DHTk6ErclWSUNn8HUJzzrRoDZDRBW0GMSknBM4TIEiy29/pubembed?start=false&loop=false&delayms=10000",
        type: "slides",
      },
    ],
  },
  {
    id: "credit-card-segmentation",
    slug: "credit-card-segmentation",
    title: "RevoBank Credit Card Performance & Customer Segmentation",
    category: "Python",
    status: "Completed",
    summary:
      "Segmented credit card customers based on transaction behavior, profitability, and financial risk to support retention, growth, and fraud mitigation strategies.",
    tags: ["Python", "Customer Analytics", "Risk Analysis", "Segmentation"],
    tools: ["Google Colab", "Python", "Excel", "Google Slides"],
    metric: "Rp7.11M VIP net profit per customer",
    thumbnail: "/images/projects/credit-card-segmentation/thumbnail.png",
    gallery: [
      "/images/projects/credit-card-segmentation/slide-1.png",
      "/images/projects/credit-card-segmentation/slide-2.png",
      "/images/projects/credit-card-segmentation/slide-3.png",
    ],
    overview: {
      background:
        "RevoBank aimed to increase credit card engagement and MDR revenue while minimizing fraud-related losses using six months of transaction and customer financial data.",
      goals: [
        "Identify transaction patterns and customer inactivity.",
        "Segment customers based on behavior and financial profiles.",
        "Evaluate fraud exposure and customer debt levels.",
      ],
      methodology: [
        "Data preparation and exploratory data analysis.",
        "Customer-level data integration.",
        "Customer segmentation.",
        "Financial performance analysis.",
      ],
      findings: [
        "VIP customers represented 17.20% of the customer base and generated the highest estimated profit per customer.",
        "Dormant customers represented 38.48% of the base, with an average inactivity period of 602 days.",
        "Fraud represented 0.10% of transaction count and 0.26% of transaction value.",
      ],
      recommendations: [
        "Implement tiered loyalty programs and personalized offers for high-value customers.",
        "Launch targeted win-back campaigns for dormant customers.",
        "Strengthen transaction monitoring and risk-based authentication for suspicious activity.",
      ],
    },
    slidesUrl:
      "https://docs.google.com/presentation/d/e/2PACX-1vSRm5ccdOeklY6baozxRx_EQ4poqkYjc3ysdJB2y5SucA8wLwvXEB8VcwNYEyowDZ-QK6SS-uxLgOV8/pubembed?start=false&loop=false&delayms=10000",
    links: [
      {
        label: "View Python Notebook",
        url: "https://colab.research.google.com/drive/11WbA9_L4w-1rnIBJE6zxOB1MC2opHl3c?usp=sharing",
        type: "code",
      },
      {
        label: "Open Google Slides",
        url: "https://docs.google.com/presentation/d/e/2PACX-1vSRm5ccdOeklY6baozxRx_EQ4poqkYjc3ysdJB2y5SucA8wLwvXEB8VcwNYEyowDZ-QK6SS-uxLgOV8/pubembed?start=false&loop=false&delayms=10000",
        type: "slides",
      },
    ],
  },
  {
    id: "grocers-sales-performance",
    slug: "grocers-sales-performance",
    title: "RevoGrocers Sales Performance Analysis",
    category: "SQL",
    status: "Completed",
    summary:
      "Analyzed category-level revenue performance and customer repeat-purchase behavior to identify growth opportunities and support a 10% revenue growth target.",
    tags: ["SQL", "BigQuery", "Retail", "Data Analytics"],
    tools: ["Google BigQuery", "SQL", "Excel", "Google Slides"],
    metric: "10% revenue growth target",
    thumbnail: "/images/projects/grocers-sales-performance/thumbnail.png",
    gallery: [
      "/images/projects/grocers-sales-performance/slide-1.png",
      "/images/projects/grocers-sales-performance/slide-2.png",
      "/images/projects/grocers-sales-performance/slide-3.png",
    ],
    overview: {
      background:
        "This project analyzed transaction, product, and category data to assess revenue performance and customer repeat-purchase behavior for RevoGrocers.",
      goals: [
        "Assess category-level revenue performance.",
        "Identify underperforming categories.",
        "Recommend data-driven actions to support a 10% revenue growth target.",
      ],
      methodology: [
        "Data preparation and exploratory data analysis.",
        "Multi-table data integration.",
        "Customer purchase behavior analysis.",
        "Financial performance analysis.",
      ],
      findings: [
        "Confection, Meat, and Poultry contributed 34.5% of total revenue.",
        "Seafood, Grain, and Shellfish contributed only 22.0% combined.",
        "Grain had the highest average price but the lowest repeat-purchase rate.",
      ],
      recommendations: [
        "Create cross-category bundles combining high- and low-performing categories.",
        "Test volume-based promotions for Grain.",
        "Introduce targeted cross-selling campaigns for Seafood and Shellfish.",
      ],
    },
    slidesUrl:
      "https://docs.google.com/presentation/d/e/2PACX-1vQrBl-MU1KpLCplEtrL3TOibIFE-GsT1bqRPrcWj8NfDBkBp1uhNNgZZoLRS8jmafwjeVpniTWecdGR/pubembed?start=false&loop=false&delayms=10000",
    links: [
      {
        label: "View SQL Queries",
        url: "https://github.com/rdbaskara/revo-grocers-sales-analysis",
        type: "code",
      },
      {
        label: "Grocery Sales Dataset",
        url: "https://www.kaggle.com/datasets/andrexibiza/grocery-sales-dataset?resource=download&select=products.csv",
        type: "other",
      },
      {
        label: "Open Google Slides",
        url: "https://docs.google.com/presentation/d/e/2PACX-1vQrBl-MU1KpLCplEtrL3TOibIFE-GsT1bqRPrcWj8NfDBkBp1uhNNgZZoLRS8jmafwjeVpniTWecdGR/pubembed?start=false&loop=false&delayms=10000",
        type: "slides",
      },
    ],
    codeLanguage: "sql",
    codeSnippet: `-- Revenue contribution by product category
SELECT
  c.category_name,
  SUM(s.revenue) AS total_revenue,
  ROUND(
    SUM(s.revenue) / SUM(SUM(s.revenue)) OVER () * 100,
    1
  ) AS revenue_contribution_pct
FROM \`revo-grocers.sales_transactions\` AS s
JOIN \`revo-grocers.products\` AS p
  ON s.product_id = p.product_id
JOIN \`revo-grocers.categories\` AS c
  ON p.category_id = c.category_id
GROUP BY
  c.category_name
ORDER BY
  total_revenue DESC;`,
  },
];

export const experiences = [
  {
    id: "administration-bpr-karyajatnika-sadaya",
    role: "Administration",
    company: "PT. BPR Karyajatnika Sadaya",
    period: "Jan 2024 — Present",
    location: "Bandung, Indonesia",
    description:
      "Supported operational efficiency and asset governance by managing EDC transactions, inventory records, and partner lease administration.",
    responsibilities: [
      "Managed administrative operations, partner transactions, and lease records for 1,000+ EDC assets.",
      "Conducted monthly stock reconciliations to maintain accurate inventory records.",
      "Centralized operational data and standardized workflows through revised SOPs and asset request forms.",
    ],
    impact: [
      "Maintained accurate and up-to-date inventory records through monthly reconciliation.",
      "Accelerated EDC migration and optimized SIM card utilization.",
      "Contributed to operating cost reduction of up to Rp25M per month.",
    ],
    metrics: [{ value: "Rp25M/month" }, { value: "1,000+ EDC assets" }],
    tags: ["Excel", "Data Reconciliation", "Inventory Management"],
  },
  {
    id: "administration-pratama-link",
    role: "Administration",
    company: "PT. Pratama Link",
    period: "Jun 2022 — Dec 2023",
    location: "Bandung, Indonesia",
    description:
      "Supported financial data integrity through daily transaction reconciliation and standardized reporting workflows.",
    responsibilities: [
      "Reconciled daily high-volume partner transactions by matching biller records with bank transfer statements.",
      "Designed standardized Excel reconciliation templates to streamline tracking.",
    ],
    impact: [
      "Ensured transaction accuracy and financial data integrity.",
      "Reduced manual reconciliation discrepancies.",
      "Improved daily financial reporting turnaround time by up to 20%.",
    ],
    metrics: [{ value: "20% faster reporting" }],
    tags: ["Excel", "Financial Reconciliation", "Reporting"],
  },
  {
    id: "inventory-control-unicorn-tosan-perkasa",
    role: "Inventory Control",
    company: "PT. Unicorn Tosan Perkasa",
    period: "Jun 2021 — Jun 2022",
    location: "Bandung, Indonesia",
    description:
      "Supported material availability and procurement efficiency through inventory validation, stock monitoring, and cross-functional coordination.",
    responsibilities: [
      "Validated daily material requests against stock levels, BOM, and historical consumption data.",
      "Monitored warehouse inventory against engineering requirements.",
      "Coordinated material transactions between field operations and purchasing.",
    ],
    impact: [
      "Prevented unnecessary purchases and improved inventory allocation.",
      "Contributed to a 20% reduction in excess inventory.",
      "Improved procurement coordination and inventory visibility.",
    ],
    metrics: [{ value: "20% excess inventory reduction" }],
    tags: ["Excel", "Inventory Control", "Procurement"],
  },
  {
    id: "ppic-toyota-motor-manufacturing-indonesia",
    role: "PPIC — Component Ordering",
    company: "PT. Toyota Motor Manufacturing Indonesia",
    period: "May 2016 — Feb 2019",
    location: "Karawang, Indonesia",
    description:
      "Supported manufacturing supply continuity by managing component ordering, inventory planning, and procurement reporting.",
    responsibilities: [
      "Analyzed component inventory levels and historical consumption data to determine appropriate safety stock.",
      "Prepared inventory level reports to support procurement planning and management decisions.",
      "Implemented emergency ordering protocols for low-demand components.",
    ],
    impact: [
      "Maintained appropriate safety stock levels through inventory analysis.",
      "Improved visibility into component availability for procurement planning.",
      "Reduced excess component inventory by 20%.",
    ],
    metrics: [{ value: "20% excess inventory reduction" }],
    tags: ["Excel", "PPIC", "Inventory Planning"],
  },
  {
    id: "warehouse-operator-toyota-motor-manufacturing-indonesia",
    role: "Warehouse Operator",
    company: "PT. Toyota Motor Manufacturing Indonesia",
    period: "Feb 2016 — Apr 2016",
    location: "Karawang, Indonesia",
    description:
      "Supported warehouse inventory accuracy and stock traceability through FIFO procedures and transaction recording.",
    responsibilities: [
      "Monitored warehouse inventory and applied FIFO procedures.",
      "Recorded and verified incoming and outgoing production equipment transactions.",
    ],
    impact: [
      "Maintained inventory rotation, stock traceability, and accurate warehouse records.",
      "Earned a fast-track promotion to PPIC Staff within three months.",
    ],
    metrics: [{ value: "Promoted in 3 months" }],
    tags: ["Excel", "Warehouse Operations", "FIFO"],
  },
];

export const achievements = [
  {
    value: "Rp25M",
    label: "Monthly operating cost reduction",
  },
  {
    value: "20%",
    label: "Excess inventory reduction",
  },
  {
    value: "1,000+",
    label: "EDC assets managed and reconciled",
  },
];

export const skillGroups = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    skills: [
      "Excel",
      "Tableau",
      "SQL",
      "Python",
      "Pandas",
      "Data Visualization",
    ],
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    skills: [
      "Inventory Management",
      "Reconciliation",
      "Logistics Analysis",
      "Process Improvement",
      "Cost Optimization",
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    skills: [
      "Microsoft Excel",
      "Tableau",
      "Google BigQuery",
      "Google Colab",
      "Spreadsheet",
    ],
  },
];

export const education = [
  {
    school: "RevoU",
    degree: "Full Stack Data Analytics",
    period: "Jun 2026 – Oct 2026",
    location: "Online",
    description:
      "Completed an intensive 14-week program in Full Stack Data Analytics, applying SQL, Python, Tableau, and Advanced Excel to solve end-to-end business problems.",
    highlights: [
      "Exploratory Data Analysis (EDA)",
      "Statistical modeling: clustering, regression, and A/B testing",
      "Interactive dashboard creation",
      "Final project: data collection, cleaning, analysis, and presentation",
    ],
  },
  {
    school: "Vocational High School 1 Gombong",
    degree: "Machine Engineering",
    period: "Jun 2011 – May 2014",
    location: "Gombong, Indonesia",
    description:
      "Built a foundation in industrial operations, precision measurement, and quality control.",
    highlights: [
      "Equipment data logging",
      "Manufacturing business processes",
      "Precision measurement techniques",
      "Industrial data recording and quality control",
    ],
  },
];

export const navigation = [
  {
    label: "Overview",
    href: "#overview",
  },
  {
    label: "About Me",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];