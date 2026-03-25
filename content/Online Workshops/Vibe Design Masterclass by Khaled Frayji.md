# The key to better prompts and better designs
- Ideate: The hardest part is getting past the blank page. The best way to create better designs is through iteration, not perfect initial prompts. Let's follow a simple formula.
- **Starting prompt examples:** A good recipe for an initial prompt follows this formula:
  - **PROMPT**
  - **IDEA:** What it is.
  - **THEME:** The idea for the core theme.
  - **CONTENT:** The content.
  - **IMAGE:** Optional reference image.

- Your first prompt doesn't need to be perfect. Describe the specific content you want on the page and the general vibe. Don't worry about specific font selections or hex codes yet. Stitch will help you with this ideation process. We need to get past the blank prompt and into creativity.
- **Here's an example:**
  - **IDEA:** A landing page for a running podcast named "The Pacing Project".
  - **THEME:** Modern, edgy, and high contrast. Use black and white with hard angles.
  - **CONTENT:** A hero section with the headline "Stories and lessons about racing and proper pacing" and links to podcast platforms.

- Each page is a screen
- Choose a screen type, can be changed later too

# Make one major change at a time
- Pick one thing you want to change, just one. Select the Screen you want to change, click Edit, Add to Chat, and write a prompt. Be specific about what to change and how to change it. 
- For example, if the pricing table needs to emphasize the best value tier:
  > "Update the pricing table to emphasize the middle card. Increase its container height and add a drop shadow. Reduce the scale of the sibling cards to create a clear visual hierarchy."

- Select the design mode that most suits you
- The difference lies on use case

## Thinking with 3 Pro
- **Best for:** Complex logic, deep reasoning, and your "Production" candidate.
- This is the heavy lifter. Powered by Gemini 3 Pro, this mode prioritizes reasoning over speed. It takes a little longer to generate because it is "thinking" through the implications of your prompt—how the navigation should flow, what the hierarchy implies, and how the colors interact.
- If you are building a complex dashboard or a nuance-heavy landing page, this is where you should be. The wait is worth the pixel-perfect logic it returns.

## Redesign (Nano Banana Pro)
- **Best for:** Modernizing old apps, stylistic experiments, and "vibes" based workflows.
- The Redesign agent is your best friend when it comes to Vibe Design. It is incredible for taking a dated interface and applying a specific design aesthetic.
- **PROMPT**
  - **ACTION:** Redesign this dashboard.
  - **STYLE:** Use a modern Bento Grid layout.
  - **DETAILS:** Dark mode background. Use the Inter font for the headers.

## 2.5 Pro
- **Best for:** High-fidelity HTML and A/B comparisons.
- Gemini 2.5 Pro produces exceptionally high-quality code and design fidelity. It is often useful to generate a prompt in Thinking with 3 Pro and then run the exact same prompt in 2.5 Pro to see two different high-level interpretations of your idea.

## Fast
- **Best for:** Rapid wireframing and Figma exports.
- The Rapid mode is optimized for compatibility if your primary goal is to export your initial sketches directly to Figma for manual refinement.

# Setup and Usage
- MCP can be linked through mcp.json from Stitch's docs for auth, then should be added in the IDE through adding an mcp server
- Github Copilot extension is needed to use Stitch through MCP
- To use stitch, use the built-in commands with it
- Screens can be edited manually or using AI