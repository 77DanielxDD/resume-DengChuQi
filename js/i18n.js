const i18n = {
  zh: {
    // Nav
    "nav.home": "首页",
    "nav.internship": "实习经历",
    "nav.projects": "项目作品",
    "nav.honors": "荣誉奖项",
    "nav.contact": "联系方式",
    "lang.btn": "EN",

    // Hero
    "hero.name": "邓楚麒",
    "hero.title": "后端工程师 & AI应用开发",
    "hero.bio": "热衷于构建高性能后端系统与AI驱动的应用，具备全链路开发与系统集成经验。",

    // Skills
    "skills.title": "专业技能",
    "skill.1": "熟悉 SpringBoot、FastAPI、ElementPlus，能快速搭建前后端分离的 Web 应用",
    "skill.2": "熟悉 RAG 全链路设计与优化：召回策略、响应质量、系统性能调优",
    "skill.3": "熟悉 Agent 原理（任务规划、工具调用、记忆系统）与 Coze、LangChain 框架的 WorkFlow 搭建",
    "skill.4": "熟练使用 Claude Code、Codex 等 AI 编程工具，具备 VibeCoding 经验，能独立完成需求拆解→模块交付的全流程闭环",
    "skill.5": "熟悉 Git 版本控制、Docker 容器化技术",

    // Internship
    "internship.title": "实习经历",
    "internship.company": "深圳市喜国科技有限公司",
    "internship.role": "后端开发",
    "internship.date": "2026.01 - 2026.02",
    "internship.project": "项目：AI自动化视频生产/营销发布后端系统",
    "internship.tech": "技术栈：FastAPI, SQLAlchemy, PostgreSQL, Redis, Docker, OpenAI, 对象存储",
    "internship.work.title": "核心工作",
    "internship.work.1.title": "多Agent协作工作流设计",
    "internship.work.1.desc": "将规划/策略/文案/合规/视频生成/发布拆分为独立Agent，按步骤编排串联执行，每步输入输出沉淀为可追踪的任务产物。",
    "internship.work.1.metric": "吞吐提升 3x",
    "internship.work.1.metric2": "6个Agent协同",
    "internship.work.2.title": "Agent编排与状态机",
    "internship.work.2.desc": "用\"任务-步骤\"状态流转管理多Agent执行，保证长链路可回溯。",
    "internship.work.2.metric": "10+ 状态节点",
    "internship.work.2.metric2": "全链路可回溯",
    "internship.work.3.title": "异步Worker调度",
    "internship.work.3.desc": "驱动各Agent/工具调用，对异步视频Job轮询与超时控制，完成结果回写与后续Agent续跑。",
    "internship.work.3.metric": "视频Job 100% 超时可控",
    "internship.work.3.metric2": "自动续跑",

    // Projects
    "projects.title": "项目作品",
    "project.1.name": "基于SpringBoot与AI视觉的健身动作分析系统",
    "project.1.tech": "SpringBoot · MySQL · RabbitMQ · FastAPI · MediaPipe · React · RAG · JMeter · 腾讯云COS · Redis",
    "project.1.desc": "视频上传→异步分析→多维度逐次评估→报告展示→历史对比→RAG问答→资源清理的业务闭环系统。",
    "project.1.hl.1": "RabbitMQ解耦 + 状态机轮询，避免长链路超时",
    "project.1.hl.2": "逐次动作多维度评估：深度·稳定性·对称性·节奏，8种动作类型",
    "project.1.hl.3": "Agent+RAG智能问答：5工具编排 + DeepSeek LLM + 流式输出",
    "project.1.hl.4": "COS对象存储 + Redis缓存热点接口",
    "project.1.btn": "查看详情",
    // Honors
    "honors.title": "荣誉奖项",
    "honor.1": "国家励志奖学金（2023-2024）",
    "honor.2": "校二等奖学金（2022-2025）",
    "honor.3": "全国大学生C语言程序设计大赛 一等奖",
    "honor.4": "全国高校计算机能力挑战赛Java组 二等奖",
    "honor.5": "CET-4、CET-6",
    "honor.6": "华为HCCDA认证",
    "honor.7": "普通话二级乙等",

    // Contact
    "contact.title": "联系方式",
    "contact.email": "邮箱：2827190986@qq.com",
    "contact.github": "GitHub：https://github.com/77DanielxDD",
    "contact.github.placeholder": "https://github.com/77DanielxDD",

    // Footer
    "footer": "© 2026 邓楚麒. All Rights Reserved.",

    // Project 1 Detail
    "p1.title": "基于SpringBoot与AI视觉的健身动作分析系统",
    "p1.desc": "视频上传→异步分析→多维度逐次评估→报告展示→历史对比→RAG问答→资源清理的业务闭环系统。",
    "p1.background.title": "项目背景与目标",
    "p1.background": "面向健身爱好者与运动训练场景，构建一套视频动作分析平台。用户上传健身视频后，系统异步进行AI姿态分析，生成动作评估报告、关键帧标注与中文建议，支持历史数据对比追踪。",
    "p1.challenge.title": "核心挑战",
    "p1.challenge.1": "长链路视频分析流程如何保证可靠性，避免HTTP超时",
    "p1.challenge.2": "如何实现逐次动作的多维度评估（深度、节奏、稳定性、对称性）",
    "p1.challenge.3": "如何结合RAG与用户历史数据提供个性化训练问答",
    "p1.solution.title": "我的方案",
    "p1.solution": "设计前后端分离架构，前端React负责视频上传与多维度报告展示，后端SpringBoot管理业务逻辑与任务状态，通过RabbitMQ将上传与分析解耦。Python AI服务层基于MediaPipe实现健身动作的关键点检测、逐次动作的多维度评估（深度评分、节奏分析、稳定性计算、对称性对比），输出结构化分析结果与关键帧渲染。基于RAG框架+Agent编排器，集成知识搜索、分数趋势、训练历史、视频报告等工具，提供个性化问答并支持流式输出。使用腾讯云COS管理媒体资源，Redis缓存热点接口，Docker Compose实现一键启动开发环境。",
    "p1.arch.placeholder": "系统架构图（待替换）",
    "p1.screenshots.placeholder": "前端页面截图（待替换）",
    "p1.highlights.title": "项目成果与亮点",
    "p1.highlight.1": "设计异步任务架构，基于RabbitMQ解耦上传与分析，配合任务状态机与轮询机制，避免长链路HTTP超时",
    "p1.highlight.2": "封装Python AI推理服务，集成MediaPipe实现8种健身动作的逐次多维度评估——深度评分(45%)、稳定性(20%)、对称性(20%)、节奏加成，输出加权综合评分、诊断建议与关键帧渲染",
    "p1.highlight.3": "构建Agent+RAG智能问答系统，编排知识搜索、分数趋势、训练历史、用户记忆、视频报告5个工具，结合DeepSeek LLM生成个性化训练建议并支持流式输出",
    "p1.highlight.4": "接入COS对象存储与Redis缓存，实现媒体资源治理与热点接口缓存优化",
    "p1.highlight.5": "使用JMeter进行压力测试，覆盖视频上传、分析查询、RAG问答等核心接口，验证系统在高并发场景下的稳定性",

    // Back
    "back": "← 返回首页",
    "load_more": "加载更多",
    "view_detail": "查看详情"
  },

  en: {
    // Nav
    "nav.home": "Home",
    "nav.internship": "Internship",
    "nav.projects": "Projects",
    "nav.honors": "Honors",
    "nav.contact": "Contact",
    "lang.btn": "中文",

    // Hero
    "hero.name": "Chuqi Deng",
    "hero.title": "Backend Engineer & AI Application Developer",
    "hero.bio": "Passionate about building high-performance backend systems and AI-driven applications, with full-stack development and system integration experience.",

    // Skills
    "skills.title": "Skills",
    "skill.1": "Proficient in SpringBoot, FastAPI, ElementPlus — building full-stack web applications",
    "skill.2": "Skilled in end-to-end RAG design & optimization: retrieval strategy, response quality, performance tuning",
    "skill.3": "Agent principles (task planning, tool calling, memory) & Coze/LangChain workflow building",
    "skill.4": "Experienced with Claude Code, Codex, and VibeCoding — requirements decomposition to module delivery",
    "skill.5": "Proficient in Git, Docker containerization, and Linux fundamentals",

    // Internship
    "internship.title": "Internship Experience",
    "internship.company": "Shenzhen Xiguo Technology Co., Ltd.",
    "internship.role": "Backend Developer",
    "internship.date": "2026.01 - 2026.02",
    "internship.project": "Project: AI Automated Video Production / Marketing Distribution Backend System",
    "internship.tech": "Tech Stack: FastAPI, SQLAlchemy, PostgreSQL, Redis, Docker, OpenAI, Object Storage",
    "internship.work.title": "Key Contributions",
    "internship.work.1.title": "Multi-Agent Collaboration Workflow Design",
    "internship.work.1.desc": "Decomposed planning/strategy/copywriting/compliance/video generation/publishing into independent Agents, orchestrating them in sequence with each step's I/O preserved as traceable artifacts.",
    "internship.work.1.metric": "3x throughput gain",
    "internship.work.1.metric2": "6 Agents in sync",
    "internship.work.2.title": "Agent Orchestration & State Machine",
    "internship.work.2.desc": "Managed multi-Agent execution via task-step state transitions, ensuring full-chain traceability.",
    "internship.work.2.metric": "10+ state nodes",
    "internship.work.2.metric2": "Full-chain traceable",
    "internship.work.3.title": "Async Worker Scheduling",
    "internship.work.3.desc": "Drove Agent/tool invocations through async workers, polling video jobs with timeout control and triggering downstream Agent continuation upon completion.",
    "internship.work.3.metric": "100% timeout control",
    "internship.work.3.metric2": "Auto-resume pipeline",

    // Projects
    "projects.title": "Projects",
    "project.1.name": "Fitness Movement Analysis System with SpringBoot & AI Vision",
    "project.1.tech": "SpringBoot · MySQL · RabbitMQ · FastAPI · MediaPipe · React · RAG · JMeter · Tencent COS · Redis",
    "project.1.desc": "A closed-loop system: video upload → async analysis → multi-dim rep evaluation → reports → history → RAG Q&A → cleanup.",
    "project.1.hl.1": "RabbitMQ decoupling + state machine polling to avoid long-chain timeout",
    "project.1.hl.2": "Per-rep multi-dim metrics: depth, stability, symmetry, tempo — 8 exercise types",
    "project.1.hl.3": "Agent+RAG Q&A: 5-tool orchestration + DeepSeek LLM + streaming output",
    "project.1.hl.4": "COS object storage + Redis caching for hot endpoints",
    "project.1.btn": "View Details",
    // Honors
    "honors.title": "Honors & Awards",
    "honor.1": "National Endeavor Scholarship (2023-2024)",
    "honor.2": "University Second-Class Scholarship (2022-2025)",
    "honor.3": "1st Prize, National College C Programming Contest",
    "honor.4": "2nd Prize, National Computer Skills Challenge (Java)",
    "honor.5": "CET-4 & CET-6",
    "honor.6": "Huawei HCCDA Certification",
    "honor.7": "Mandarin Level II-B",

    // Contact
    "contact.title": "Contact",
    "contact.email": "Email: 2827190986@qq.com",
    "contact.github": "GitHub：https://github.com/77DanielxDD",
    "contact.github.placeholder": "https://github.com/77DanielxDD",

    // Footer
    "footer": "© 2026 Chuqi Deng. All Rights Reserved.",

    // Project 1 Detail
    "p1.title": "Fitness Movement Analysis System with SpringBoot & AI Vision",
    "p1.desc": "A closed-loop system: video upload → async analysis → multi-dim rep evaluation → reports → history → RAG Q&A → cleanup.",
    "p1.background.title": "Background & Objectives",
    "p1.background": "Built for fitness enthusiasts and sports training scenarios, this platform enables users to upload workout videos for async AI posture analysis, generating movement assessment reports with keyframe annotations and Chinese recommendations, plus historical trend tracking.",
    "p1.challenge.title": "Key Challenges",
    "p1.challenge.1": "Ensuring reliability of long-chain video analysis workflows without HTTP timeouts",
    "p1.challenge.2": "Implementing per-rep multi-dimensional evaluation (depth, tempo, stability, symmetry)",
    "p1.challenge.3": "Delivering personalized training Q&A by integrating RAG with user history",
    "p1.solution.title": "My Approach",
    "p1.solution": "Designed a decoupled front-end/back-end architecture: React handles video upload and multi-dimensional report display, SpringBoot manages business logic and task state, and RabbitMQ decouples upload from analysis. The Python AI service layer uses MediaPipe for keypoint detection and per-rep multi-dimensional evaluation (depth score, tempo analysis, stability calculation, symmetry comparison), outputting structured results and keyframe rendering. Built on RAG framework + Agent orchestrator, integrating 5 tools (knowledge search, score trends, training history, video reports) with DeepSeek LLM for personalized Q&A with streaming output. Tencent COS manages media assets, Redis caches hot endpoints, Docker Compose enables one-click dev startup.",
    "p1.arch.placeholder": "System Architecture Diagram (To be replaced)",
    "p1.screenshots.placeholder": "UI Screenshots (To be replaced)",
    "p1.highlights.title": "Highlights & Achievements",
    "p1.highlight.1": "Designed async task architecture with RabbitMQ decoupling upload and analysis, combined with task state machine and polling mechanism to avoid long-chain HTTP timeouts",
    "p1.highlight.2": "Built Python AI inference service with MediaPipe for per-rep multi-dimensional evaluation across 8 exercise types — depth (45%), stability (20%), symmetry (20%), tempo bonus — outputting weighted composite scores, diagnosis, and keyframe rendering",
    "p1.highlight.3": "Built Agent+RAG intelligent Q&A system orchestrating 5 tools (knowledge search, score trends, training history, user memory, video reports) with DeepSeek LLM for personalized coaching and streaming output",
    "p1.highlight.4": "Integrated COS object storage and Redis caching for media resource management and hot endpoint optimization",
    "p1.highlight.5": "Conducted JMeter stress testing across upload, analysis query, and RAG Q&A endpoints to verify system stability under high concurrency",

    // Back
    "back": "← Back to Home",
    "load_more": "Load More",
    "view_detail": "View Details"
  }
};
