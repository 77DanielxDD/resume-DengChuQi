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
    "hero.title": "AI 应用开发/全栈开发",
    "hero.bio": "热衷于构建高性能后端系统与AI驱动的应用，具备全链路开发与系统集成经验。",

    // Skills
    "skills.title": "专业技能",
    "skill.1": "熟练使用 Cursor、Claude Code 等工具辅助需求拆解、编码调试及测试，能快速搭建前后端分离 Web 应用",
    "skill.2": "善于使用 LangChain、Dify、Coze 等框架，能够实现 ReAct 决策及上下文/Memory 管理机制的设计与构建，具备 Agent 多智能体编排、MCP 工具、完整 RAG 链路实践调用落地实践",
    "skill.3": "具备后端开发与数据处理及前端开发能力，熟练使用 Git 进行代码版本管理与团队协作开发",

    // Internship
    "internship.title": "实习经历",
    "internship.company": "深圳市喜国科技有限公司",
    "internship.role": "AI 应用开发",
    "internship.date": "2025.12 - 2026.02",
    "internship.project": "参与小红花AI自动化视频生产/营销发布后端系统开发",
    "internship.project.desc": "基于FastAPI构建的企业级AI内容生产平台，集成大语言模型（OpenAI/智谱）实现热门内容学习、智能文案生成、视频自动化制作与多平台分发。系统采用模块化架构，保障开发效率与生产稳定性。",
    "internship.tech": "技术栈：FastAPI, SQLAlchemy, PostgreSQL, Redis, Docker, OpenAI, 智谱AI, 对象存储",
    "internship.work.title": "主要工作",
    "internship.work.1.title": "大模型输出质量治理",
    "internship.work.1.desc": "迭代 LLM 结构化输出解析器，实现分层 Prompt 约束 + JSON 容错清洗、格式校验；配合团队将文案输出不合规率由 32% 降至 15% 以内；独立编码双层合规校验，拦截脏输出、阻断不合规内容向下游流转。",
    "internship.work.2.title": "真实业务链路迁移",
    "internship.work.2.desc": "推进 Mock 环境向真实业务链路迁移，打通「素材 → 生成 → 合规 → 分发」业务数据流。",
    "internship.work.3.title": "营销素材模块后端",
    "internship.work.3.desc": "实现对象存储上传下载与多维度标签检索，提升素材资产复用效率。",
    "internship.work.4.title": "测试体系沉淀",
    "internship.work.4.desc": "沉淀 15+ 测试模块覆盖网关调用、工具防护、合规校验，保障核心链路可回归。",

    // Projects
    "projects.title": "项目作品",
    "project.1.name": "AI Sport — 基于 Agentic RAG 的健身动作分析与智能问答系统",
    "project.1.date": "2025.11 - 2026.04",
    "project.1.tech": "Spring Boot · FastAPI · LangChain · MediaPipe · OpenCV · Chroma · BM25 · BAAI/bge-reranker-v2-m3 · RabbitMQ · Redis · SSE · pytrec_eval",
    "project.1.desc": "基于 Spring Boot + FastAPI + LangChain Agentic RAG 的健身分析系统。支持视频异步分析评分、多意图工具调用、RAG 知识库问答，结构化输出带引用的训练建议，配套离线检索评测闭环。",
    "project.1.hl.1": "双端职责解耦：Java 鉴权 + MQ 调度，Python MediaPipe 姿态分析 + Agent + RAG",
    "project.1.hl.2": "LangChain 编排 5 类工具多意图调用，Schema 结构化输出 + LLM 异常降级兜底",
    "project.1.hl.3": "RabbitMQ / Redis / SSE 异步分析 + 状态推送，断线指数退避轮询，不阻塞不挂死",
    "project.1.hl.4": "可量化评测闭环：qrels/run 多指标 + 20 条固定测试集核心 100% + 回归 20/20",
    "project.1.btn": "查看详情",
    "project.2.name": "HelloAgents — 智能旅行规划助手",
    "project.2.date": "2026.02 - 2026.06",
    "project.2.desc": "基于 FastAPI + LangGraph + 高德 MCP 的旅行规划智能体。支持意图路由、用户偏好记忆、多候选生成与规则评测，以候选 ID 约束自主编排真实景点与酒店，如按预算生成每日可验证的完整行程。",
    "project.2.hl.1": "真实数据接入：连接池 + 两级缓存，暖缓存候选编译约 2.85s、命中率近 100%",
    "project.2.hl.2": "生成质量：一次 3 套差异化候选，fast 模式省约 75% LLM 调用，支持多 Agent 子任务拆解",
    "project.2.hl.3": "用户偏好记忆：结构化 + 向量双轨，只调节奏排序、不生成事实，异常自动降级",
    "project.2.hl.4": "评测与回归：代码规则裁判 + 200+ 单测，候选质量/规则命中/rerank 持续回归",
    "project.2.btn": "查看详情",

    // Project 2 Detail
    "p2.title": "HelloAgents — 智能旅行规划助手",
    "p2.desc": "基于 FastAPI + LangGraph + 高德 MCP 的旅行规划智能体。支持意图路由、用户偏好记忆、多候选生成与规则评测，以候选 ID 约束自主编排真实景点与酒店，如按预算生成每日可验证的完整行程。",
    "p2.intro.title": "项目简介",
    "p2.intro": "基于 FastAPI + LangGraph + 高德 MCP 的旅行规划智能体。支持意图路由、用户偏好记忆、多候选生成与规则评测，以候选 ID 约束自主编排真实景点与酒店，如按预算生成每日可验证的完整行程。",
    "p2.techstack.title": "技术栈",
    "p2.techstack": "FastAPI、LangGraph、高德 MCP、SQLite + sqlite-vec、BGE-M3、bge-reranker-v2-m3、Python、TypeScript",
    "p2.highlights.title": "技术亮点",
    "p2.hl.1.title": "真实数据接入",
    "p2.hl.1.desc": "持久连接池 + 并发控制 + 两级缓存，第三方调用统一超时管控、失败自动重连 → 暖缓存候选编译约 2.85s、命中率近 100%，错误响应不缓存。",
    "p2.hl.2.title": "生成质量",
    "p2.hl.2.desc": "一次生成 3 套差异化候选，规则优先 + 语义重排，不合格方案不参与择优；fast 模式架构层面省约 75% LLM 调用；另外支持多 Agent 模式：拆分景点 / 天气 / 酒店 / 规划 4 个子任务，子模块自主调工具取真实数据后组装行程。",
    "p2.hl.3.title": "用户偏好记忆",
    "p2.hl.3.desc": "实现结构化 + 向量双轨记忆，规划阶段自动注入；只调整节奏与排序、不生成事实，加载异常自动降级。",
    "p2.hl.4.title": "评测与回归",
    "p2.hl.4.desc": "LangGraph 图编排 + 纯 Python 双轨，异常自动回退不单点故障；代码规则裁判（非 LLM Judge）确定性可回归 → 200+ 单测，候选质量 / 规则命中 / rerank 调用持续回归。",
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
    "p1.title": "AI Sport — 基于 Agentic RAG 的健身动作分析与智能问答系统",
    "p1.desc": "基于 Spring Boot + FastAPI + LangChain Agentic RAG 的健身分析系统。支持视频异步分析评分、多意图工具调用、RAG 知识库问答，结构化输出带引用的训练建议，配套离线检索评测闭环。",
    "p1.intro.title": "项目简介",
    "p1.intro": "基于 Spring Boot + FastAPI + LangChain Agentic RAG 的健身分析系统。支持视频异步分析评分、多意图工具调用、RAG 知识库问答，结构化输出带引用的训练建议，配套离线检索评测闭环。",
    "p1.techstack.title": "技术栈",
    "p1.techstack": "Spring Boot、FastAPI、LangChain、MediaPipe、OpenCV、Chroma、BM25、BAAI/bge-reranker-v2-m3、RabbitMQ、Redis、SSE、pytrec_eval",
    "p1.highlights.title": "技术亮点",
    "p1.hl.1.title": "双端职责解耦",
    "p1.hl.1.desc": "Java 处理鉴权、MQ 异步任务调度；Python 实现 MediaPipe 姿态分析、Agent、RAG 检索生成。",
    "p1.hl.2.title": "多意图工具编排与降级兜底",
    "p1.hl.2.desc": "基于 LangChain 编排 5 类工具完成多意图工具调用，Schema 结构化输出；处理 LLM 返回截断 / 非 JSON / 空响应等异常，配置规则降级兜底。",
    "p1.hl.3.title": "异步分析不阻塞",
    "p1.hl.3.desc": "针对视频分析耗时过长痛点：高帧率、原始分辨率视频曾使单任务长时间卡 PROCESSING、前端干等。基于 RabbitMQ、Redis、SSE 实现异步分析、缓存加速和状态推送 + 断线指数退避轮询，实现分析不阻塞、前端不挂死。",
    "p1.hl.4.title": "可量化的评测闭环",
    "p1.hl.4.desc": "按标准 qrels/run 完成 RAG 多指标评测（MAP / NDCG@10 / Recall@K / MRR）；自建 20 条 Agent 固定测试集，意图识别准确率、工具计划匹配率、工具选择 Precision / Recall / F1、grounding 覆盖率均 100%；真实链路回归接口成功率 20/20。",

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
    "hero.title": "AI Application / Full-Stack Developer",
    "hero.bio": "Passionate about building high-performance backend systems and AI-driven applications, with full-stack development and system integration experience.",

    // Skills
    "skills.title": "Skills",
    "skill.1": "Proficient in Cursor, Claude Code and other tools for requirement breakdown, coding, debugging, and testing — able to rapidly build full-stack web applications",
    "skill.2": "Skilled with LangChain, Dify, Coze and similar frameworks — able to design and build ReAct decision-making and context/Memory management, with hands-on practice in multi-agent orchestration, MCP tools, and end-to-end RAG pipelines",
    "skill.3": "Full-stack development plus data processing capability — proficient in Git for version control and team collaboration",

    // Internship
    "internship.title": "Internship Experience",
    "internship.company": "Shenzhen Xiguo Technology Co., Ltd.",
    "internship.role": "AI Application Developer",
    "internship.date": "2025.12 - 2026.02",
    "internship.project": "Participated in backend development of the LittleRedFlower AI automated video production / marketing distribution system",
    "internship.project.desc": "An enterprise-grade AI content production platform built on FastAPI, integrating LLMs (OpenAI/ZhipuAI) for trending content learning, intelligent copy generation, automated video production, and multi-platform distribution. The system adopts a modular architecture to ensure development efficiency and production stability.",
    "internship.tech": "Tech Stack: FastAPI, SQLAlchemy, PostgreSQL, Redis, Docker, OpenAI, ZhipuAI, Object Storage",
    "internship.work.title": "Key Contributions",
    "internship.work.1.title": "LLM Output Quality Governance",
    "internship.work.1.desc": "Iterated the LLM structured-output parser with layered Prompt constraints, JSON fault-tolerant cleaning, and format validation; worked with the team to cut non-compliant copy output from 32% to below 15%; independently coded a two-layer compliance check that blocks dirty output and prevents non-compliant content from flowing downstream.",
    "internship.work.2.title": "Real Business Pipeline Migration",
    "internship.work.2.desc": "Pushed migration from Mock environment to the real business pipeline, connecting the 'asset → generation → compliance → distribution' business data flow.",
    "internship.work.3.title": "Marketing Asset Module Backend",
    "internship.work.3.desc": "Implemented object-storage upload/download and multi-dimensional tag retrieval, improving asset reuse efficiency.",
    "internship.work.4.title": "Test Suite Consolidation",
    "internship.work.4.desc": "Built 15+ test modules covering gateway calls, tool protection, and compliance checks, ensuring core pipelines stay regression-safe.",

    // Projects
    "projects.title": "Projects",
    "project.1.name": "AI Sport — Agentic RAG Fitness Movement Analysis & Intelligent Q&A",
    "project.1.date": "2025.11 - 2026.04",
    "project.1.tech": "Spring Boot · FastAPI · LangChain · MediaPipe · OpenCV · Chroma · BM25 · BAAI/bge-reranker-v2-m3 · RabbitMQ · Redis · SSE · pytrec_eval",
    "project.1.desc": "A fitness analysis system built on Spring Boot + FastAPI + LangChain Agentic RAG. Supports async video analysis & scoring, multi-intent tool calling, and RAG knowledge-base Q&A — outputting structured, cited training advice alongside an offline retrieval evaluation loop.",
    "project.1.hl.1": "Decoupled responsibilities: Java auth + MQ scheduling; Python MediaPipe pose analysis + Agent + RAG",
    "project.1.hl.2": "LangChain orchestrates 5 tools for multi-intent calls, Schema-structured output + LLM anomaly fallback",
    "project.1.hl.3": "RabbitMQ / Redis / SSE async analysis + status push with exponential backoff polling — non-blocking, no frozen UI",
    "project.1.hl.4": "Quantifiable eval loop: qrels/run metrics + 20 fixed Agent tests at 100% core + 20/20 regression",
    "project.1.btn": "View Details",
    "project.2.name": "HelloAgents — Intelligent Travel Planning Assistant",
    "project.2.date": "2026.02 - 2026.06",
    "project.2.desc": "A travel planning agent built on FastAPI + LangGraph + AMAP MCP. Supports intent routing, user preference memory, multi-candidate generation, and rule-based evaluation — autonomously orchestrating real attractions and hotels under candidate-ID constraints, e.g. verifiable full daily itineraries within budget.",
    "project.2.hl.1": "Real data integration: connection pool + two-tier cache, warm-cache candidate compile ≈2.85s, ~100% hit rate",
    "project.2.hl.2": "Generation quality: 3 differentiated candidates per run, fast mode saves ~75% LLM calls, multi-Agent subtask split",
    "project.2.hl.3": "User preference memory: structured + vector dual-track, adjusts pacing/ranking only, graceful degradation",
    "project.2.hl.4": "Evaluation & regression: code rule judge + 200+ unit tests, continuous regression on quality/rule hit/rerank",
    "project.2.btn": "View Details",

    // Project 2 Detail
    "p2.title": "HelloAgents — Intelligent Travel Planning Assistant",
    "p2.desc": "A travel planning agent built on FastAPI + LangGraph + AMAP MCP. Supports intent routing, user preference memory, multi-candidate generation, and rule-based evaluation — autonomously orchestrating real attractions and hotels under candidate-ID constraints, e.g. verifiable full daily itineraries within budget.",
    "p2.intro.title": "Overview",
    "p2.intro": "A travel planning agent built on FastAPI + LangGraph + AMAP MCP. Supports intent routing, user preference memory, multi-candidate generation, and rule-based evaluation — autonomously orchestrating real attractions and hotels under candidate-ID constraints, e.g. verifiable full daily itineraries within budget.",
    "p2.techstack.title": "Tech Stack",
    "p2.techstack": "FastAPI, LangGraph, AMAP MCP, SQLite + sqlite-vec, BGE-M3, bge-reranker-v2-m3, Python, TypeScript",
    "p2.highlights.title": "Technical Highlights",
    "p2.hl.1.title": "Real Data Integration",
    "p2.hl.1.desc": "Persistent connection pooling + concurrency control + two-tier caching; unified timeout control and auto-reconnect for third-party calls → warm-cache candidate compilation ≈2.85s with ~100% hit rate; error responses are never cached.",
    "p2.hl.2.title": "Generation Quality",
    "p2.hl.2.desc": "Generates 3 differentiated candidates per request with rule-first + semantic reranking; unqualified plans never enter selection. Fast mode cuts ~75% of LLM calls at the architecture level. Also supports multi-Agent mode: splits attractions / weather / hotels / planning into 4 subtasks, each submodule autonomously calling tools for real data before assembling the itinerary.",
    "p2.hl.3.title": "User Preference Memory",
    "p2.hl.3.desc": "Dual-track structured + vector memory auto-injected during planning; only adjusts pacing and ranking — never fabricates facts; degrades gracefully on load failure.",
    "p2.hl.4.title": "Evaluation & Regression",
    "p2.hl.4.desc": "LangGraph graph orchestration + pure-Python dual track with auto-fallback on anomalies to avoid single points of failure; code-based rule judge (not an LLM Judge) is deterministic and regression-safe → 200+ unit tests; candidate quality / rule hit rate / rerank calls continuously regression-tested.",
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
    "p1.title": "AI Sport — Agentic RAG Fitness Movement Analysis & Intelligent Q&A",
    "p1.desc": "A fitness analysis system built on Spring Boot + FastAPI + LangChain Agentic RAG. Supports async video analysis & scoring, multi-intent tool calling, and RAG knowledge-base Q&A — outputting structured, cited training advice alongside an offline retrieval evaluation loop.",
    "p1.intro.title": "Overview",
    "p1.intro": "A fitness analysis system built on Spring Boot + FastAPI + LangChain Agentic RAG. Supports async video analysis & scoring, multi-intent tool calling, and RAG knowledge-base Q&A — outputting structured, cited training advice alongside an offline retrieval evaluation loop.",
    "p1.techstack.title": "Tech Stack",
    "p1.techstack": "Spring Boot, FastAPI, LangChain, MediaPipe, OpenCV, Chroma, BM25, BAAI/bge-reranker-v2-m3, RabbitMQ, Redis, SSE, pytrec_eval",
    "p1.highlights.title": "Technical Highlights",
    "p1.hl.1.title": "Decoupled Backend Responsibilities",
    "p1.hl.1.desc": "Java handles auth and MQ async task scheduling; Python implements MediaPipe pose analysis, the Agent, and RAG retrieval/generation.",
    "p1.hl.2.title": "Multi-Intent Tool Orchestration & Fallback",
    "p1.hl.2.desc": "LangChain orchestrates 5 tools for multi-intent calls with Schema-structured output; handles LLM truncation / non-JSON / empty-response anomalies with rule-based degradation fallback.",
    "p1.hl.3.title": "Non-Blocking Async Analysis",
    "p1.hl.3.desc": "Addressing the slow-video-analysis pain point: high-frame-rate, original-resolution videos once left tasks stuck in PROCESSING while the frontend waited. RabbitMQ, Redis, and SSE enable async analysis, cache acceleration, and status push + exponential-backoff polling on disconnect — analysis never blocks, the UI never hangs.",
    "p1.hl.4.title": "Quantifiable Evaluation Loop",
    "p1.hl.4.desc": "Runs multi-metric RAG evaluation against standard qrels/run (MAP / NDCG@10 / Recall@K / MRR); 20 fixed Agent test cases achieve 100% on intent-recognition accuracy, tool-plan match rate, tool-selection Precision/Recall/F1, and grounding coverage; real-pipeline regression API success rate 20/20.",

    // Back
    "back": "← Back to Home",
    "load_more": "Load More",
    "view_detail": "View Details"
  }
};
