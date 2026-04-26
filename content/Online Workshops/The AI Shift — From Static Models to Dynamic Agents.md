# Build Your Own AI Assistant

> **Workshop:** The AI Shift — From Static Models to Dynamic Agents
> *Build Your First AI Agent in 30 Minutes*
---
## 1. The Evolution to Agentic AI

> **❓ What's the difference between a chatbot and an agent?**

### AI Evolution Timeline

The shift from static AI to autonomous agents is happening rapidly — from AI generating code and having context, to AI recommending workflows and executing tasks autonomously.

| Era               | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| **AI & ML**        | Rule-based systems (if/else logic).                                         |
| **Deep Learning**  | Machine learning models that train on large datasets.                       |
| **LLMs**           | Transformer-based algorithms that generate and understand language.         |
| **Agents**         | Autonomous entities that use LLMs as their "brain" and tools to act.       |

- AI started as rule-based, then evolved into machine learning.
- As more data became available, AI needed more computational power to train on it.
- Transformers are the core algorithm behind modern LLMs, used to generate and comprehend language.
- **LLMs are the processing core of agents.** The agent is the entity; the tools it has are what enable it to perform tasks.
- **Chatbot vs. Agent:** A chatbot only exchanges messages. An agent can execute actions using tools, making processes autonomous.

### LLM Core Concepts

| Concept              | Definition                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Tokens**           | The atomic units of text processed by the model — like "syllables" for AI. Input is split into tokens, vectorized, and turned into math operations to either analyze or generate text. |
| **Context Window**   | The "short-term memory" limit — how much information the model can "see" at once. A larger context window allows AI to comprehend more. |
| **Temperature**      | Controls randomness. Lower = predictable; Higher = creative/random. More randomness yields more creative outputs.   |
| **Hallucination**    | When models generate plausible but false information with high confidence. Agents reduce this risk by using tools for verification. |

### Tips to Reduce Iteration Costs

- Use **prompt engineering** to guide the model effectively.
- Provide **specific files for context** rather than broad descriptions.
- Be as **specific as possible from the beginning** of the conversation.

---

## 2. Anatomy of Autonomy

> **❓ Can an LLM access your local files without a tool?**

An AI agent is like a **digital employee** — it has tools, can be autonomous, executes tasks, performs reasoning, and retains memory to return to context.

### The Agentic Loop

```
PLAN → ACT → OBSERVE → REFLECT
```

The agent can reflect on its own output, identify mistakes, and fix them.

### Core Components

| Component              | Role                                                       |
| ---------------------- | ---------------------------------------------------------- |
| **The Brain (LLM)**    | Reasoning and decision engine.                             |
| **Memory**             | Short-term and long-term context retention.                |
| **Tools**              | APIs, search engines, and code execution capabilities.     |
| **Planning**           | Task decomposition and logical sequencing.                 |
| **Structured Output**  | JSON schema is crucial for reliable agent interaction and tool calling. |

---

## 3. The Next Big Wave (2026+)

> **❓ How many of you use AI for execution rather than just generation?**

> 📊 *AI agents are projected to drive a **40% increase** in operational efficiency by 2026.*

The market is shifting from simple chatbots to autonomous execution systems. Everyone is adopting agents for customer service, scheduling, and more.

| Trend                    | Description                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------- |
| **Automation > Chatbots** | Moving from conversational interfaces to autonomous execution systems.                            |
| **Digital Employees**     | Agents are becoming specialized, scalable team members handling end-to-end workflows.             |
| **Action-Oriented AI**    | Moving beyond content generation to real-world task completion and tool interaction.               |
| **Cost Reduction**        | AI agents act as a force multiplier, significantly reducing the cost of complex operations.       |

> ⚠️ Agents make work significantly faster, but they **should not replace humans** — they are tools to augment, not substitute.

---

## 4. Real-World Agent Examples

### Coding Agents

> **❓ Who here has used an AI coding assistant?**

- **GitHub Copilot** — The industry-standard AI pair programmer. It suggests code, functions, and tests in real-time within your IDE.
- **Devin (Cognition)** — The world's first autonomous AI software engineer. It can plan, code, debug, and deploy entire projects independently.

### Research Agents

- **Perplexity AI** — A powerful answer engine that searches the live web to provide direct, cited answers to complex queries.
- **Elicit** — Automates research workflows by finding relevant papers and extracting key data from scientific literature.

> *"Research agents act as digital librarians, synthesizing vast amounts of data in seconds."*

### Business & Automation Agents

> **❓ What is the most repetitive task in your daily workflow?**

**Business Productivity:**

- **Microsoft Copilot** — Integrates across the Office suite to draft emails, summarize meetings, and generate presentations from simple prompts.
- **Notion AI** — An integrated workspace assistant that helps with writing, brainstorming, and organizing complex project data.

**Workflow Automation:**

- **Zapier Central** — AI-first automation that lets you teach agents to interact with 6,000+ apps using natural language.
- **Make.com AI** — Visual automation platform that uses AI to build complex, multi-step logic and data transformations between systems.

> *"Agents are shifting from tools we use to digital employees we manage."*

---

## 5. Building Your Own Agent — Step by Step

### Vibe Coding

"Vibe coding" is the concept of making AI write the code for you. An AI agent can be built using Replit with a single, well-structured prompt and a free LLM tool like Gemini (which provides a free API).

### Step 1: Role & System Prompt

> **❓ If your agent was a human employee, what would their job title be?**

The **system prompt** is essentially the job description for the AI agent — it defines the tasks it needs to perform.

**Defining the Persona:**

1. **Identity & Expertise** — Who is the agent? *(e.g., "You are a Senior Research Analyst").*
2. **Primary Goal** — What is the specific outcome? *(e.g., "Synthesize web data into outreach").*
3. **Operational Constraints** — Rules to follow. *(e.g., "Use professional tone", "JSON output only").*

**Example System Prompt:**

> *"You are a Smart Research agent. Your goal is to research [Topic] and draft a personalized email.*
> *Rules: 1. Be factual and concise. 2. Output must be valid JSON. 3. Self-check for accuracy before returning the final result."*

> 💡 **Tip:** Clear instructions reduce hallucinations and improve tool reliability. In content generation (including video), more context and less generality — letting the AI "live a role" — always produces better results.

### Step 2: Provide the Tools

Not all AIs have built-in tools. Some need **APIs** to perform specific tasks, such as accessing an email mailbox. You connect the agent to external services by providing it with the appropriate tools.

### Step 3: Self-Check & UI

> **❓ How do you ensure your agent doesn't make mistakes?**

**Agent Self-Correction Mechanism:**

1. **Validation** — Check output against the JSON schema.
2. **Correction Loop** — If invalid, feed the error back to the LLM.
3. **Finalization** — Return only verified, structured data.

This self-reflection mechanism minimizes errors and decreases human intervention — the agent asks itself how to fix the errors it made.

**Python Logic:**

```python
try:
    AgentOutput.model_validate_json(context)
except ValidationError as e:
    # Ask LLM to fix the error
    correct_output(context, e)
```

**Streamlit UI Integration (`app.py`):**

```python
import streamlit as st

st.title("Universal Task Automator")
topic = st.text_input("Research Topic")

if st.button("Run Agent"):
    result = agent.run(topic)
    st.write(result["summary"])
```

> ✅ **Ready to Run!** Your agent is now a functional web application.

---

## 6. Workshop Demo — The Full Prompt

The following prompt was used in Replit to build the task automation app. The API key is obtained from Google AI Studio, which provides a generous free tier for prototyping.

<details>
<summary>📋 Click to expand the full Replit prompt</summary>

```
Create a Streamlit web application that functions as a "Universal Task Automator" AI agent.
This agent will use the Google Gemini API (specifically the `gemini-pro` model, which is
available in the free tier) to perform research and draft outreach messages. The application
should be structured into four Python files: `requirements.txt`, `schema.py`, `agent.py`,
and `app.py`.

**Project Requirements:**

1. **`requirements.txt`**: List all necessary Python libraries: `google-generativeai`,
   `pydantic`, `streamlit`.

2. **`schema.py`**: Define a Pydantic `BaseModel` named `AgentOutput` for structured output.
   It should have two fields:
   * `research_summary`: A `List[str]` for key research points.
   * `outreach_draft`: A `str` for the personalized outreach message.
   Include a `Config` class with `schema_extra` for an example JSON output.

3. **`agent.py`**: Implement the core agent logic in a class named `UniversalTaskAutomator`.
   * Initialize the `google.generativeai` client using `os.environ.get("GEMINI_API_KEY")`.
   * Use the `gemini-pro` model.
   * Implement a `_get_system_prompt(topic: str)` method that defines the agent's role:
     "You are a Smart Research and Outreach Agent. Your primary goal is to conduct concise
     research on a given topic and then draft a personalized outreach message based on that
     research. RULES: 1. Be factual, concise, and professional. 2. The research summary
     should be presented as a list of key bullet points. 3. The outreach draft should be a
     personalized message (e.g., email or social media post) that leverages the research
     findings. 4. Output MUST be valid JSON, strictly adhering to the AgentOutput schema.
     5. Self-check your output against the schema before returning the final result. If it
     doesn't conform, correct it. Your current task is to research: {topic}"
   * Implement a `_call_llm(messages: list)` method to interact with the Gemini API. Ensure
     `response_mime_type="application/json"` is used in the `generate_content` call to
     enforce JSON output directly from Gemini.
   * Implement a `run(topic: str)` method that orchestrates the agent's workflow:
     * Construct messages with the system prompt and user query.
     * Call the LLM to get raw JSON output.
     * Implement a **self-correction loop**: Use Pydantic's `model_validate_json` to
       validate the `raw_output`. If `ValidationError` occurs, construct a new prompt asking
       the LLM to correct its output based on the error, and retry the LLM call. Return the
       validated `AgentOutput` as a dictionary.

4. **`app.py`**: Create the Streamlit user interface.
   * Set page config for a centered layout and title.
   * Display a main title "🚀 Universal Task Automator" and a markdown subtitle.
   * Initialize the `UniversalTaskAutomator` agent in `st.session_state` to prevent
     re-initialization.
   * Provide a `st.text_input` for the user to enter a research topic (default: "Impact of
     AI on small businesses").
   * Include a `st.button` to trigger the agent.
   * When the button is clicked:
     * Show a `st.spinner` while the agent is working.
     * Call the agent's `run` method.
     * Display the `research_summary` as bullet points and the `outreach_draft` using
       `st.markdown`.
     * Handle potential errors gracefully, displaying them with `st.error` and the raw
       output with `st.json`.
   * Show a `st.success` message upon completion.
   * Add a footer: `*Powered by Nexaverse & American Corner*`.

**Important:** Ensure all necessary imports are present in each file. The `agent.py` should
import `AgentOutput` from `schema.py`. The `app.py` should import `UniversalTaskAutomator`
from `agent.py`.

```

</details>

---

## 7. Key Takeaways & Next Steps

> **❓ What is the first autonomous agent you will build this week?**

### Key Takeaways

- **Execution > Generation** — The future of AI is not just talking, but doing. Agents are the bridge to autonomous action.
- **Anatomy of Autonomy** — Brain (LLM) + Memory + Tools + Planning = A complete autonomous system.
- **Vibe Coding Power** — Natural language is the new programming language for rapid agent prototyping.

### Next Steps

- **Explore Frameworks** — Dive into LangChain, LlamaIndex, or CrewAI for complex multi-agent systems.
- **Build on Replit** — Use the provided demo as a template to build your own specialized business assistant.
- **Join the Community** — Explore the latest agentic research and connect with other builders in the field.

> 🚀 **GO BUILD THE FUTURE OF AUTOMATION**

## PDF Guide
![[Workshop_Guide_Build_Your_First_AI_Agent_in_30_Minutes.pdf]]