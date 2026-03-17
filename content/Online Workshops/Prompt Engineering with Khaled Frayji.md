## Product Development Workflow

### Initial Project Phase

- Corporate asks for projects that aren't completely clear in all aspects (e.g., online banks)
- Focus on building what's essential rather than everything at once

### MVP (Minimum Viable Product)

- A concept focusing on minimum features for a product
- Used for market validation instead of building everything
- Build only what's required to validate the market

### POC (Proof of Concept)

- Companies who buy software will ask for it to make the software work and prove it works
- Focus on specific features to roll it out
- Market validation is used to make an MVP, then we call it POC after deployment
- **Note:** POC traditionally comes first in corporate settings to prove technical feasibility, but when using AI with PRD, we can build MVP rapidly which serves both purposes

### Market Considerations

After POC, we need to check if the product is:

- **B2C** (Business to Consumer)
- **B2B** (Business to Business)

This distinction makes the difference while inserting the layers.

---

## Documentation Requirements

### PRD (Product Requirement Document)

- Summarizes all steps already completed and requirements
- Includes: performance, speed, age restriction, etc.
- Prompt engineering lets you get the best possible outcome using the previous data

### SRS (Software Requirements Specification Document)

- Detailed document for technical requirements, features, rules, etc.
- More comprehensive than PRD

---

## Practical Implementation: Neo Bank App

### Rapid MVP Development (30-minute approach)

1. Take a screenshot and send it to an AI like ChatGPT
2. Send the screenshot and ask it to make it using the tech stack as PRD with the website link
3. Get the requirements and information from the AI as needed
4. Open an AI IDE and create these requirements as an .md file
5. Use the .md file to tell the AI about the PRD
6. Ask it to build the MVP and focus on the specific area you want (e.g., frontend only, to avoid trying to build the full project)
7. Check the code and install dependencies

### Iterative Development

After the first steps are done, you can continue building by:

- Using the PRD as context, including what was done and what was not done
- Giving it necessary files to keep adding features
- Consulting AI on what is the recommended approach for further steps

---

## Key Takeaway

We've been using these concepts without knowing, but on broader fields. These concepts make the prompt more scoped and provide better results.