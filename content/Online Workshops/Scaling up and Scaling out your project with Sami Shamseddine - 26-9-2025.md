a
# Scaling and Software Architecture - Meeting Notes

## 📋 Session Overview
- **Duration:** 1 hour (explanation and Q&A)
- **Topic:** Scale up and scale out project concepts
- **Focus:** Working projects vs localhost projects - handling 100 to 10,000 requests
- **Approach:** Conceptual only (no code)

---

## 🎯 Introduction to Scaling

### Definition
**Scaling:** The process of increasing capacity or performance to handle growing demands or requirements.

### Core Problem
- Applications need to handle specific request volumes
- Usage spikes cause user dissatisfaction
- Scaling is about "making it bigger"

### Types of Scaling
1. **Scaling Up (Vertical)**
2. **Scaling Out (Horizontal)**

### Temporary Solution Approach
- Increase CPU and RAM resources during spikes
- Return to normal capacity afterward to reduce costs
- **Issue:** There's a limit to resource increases
- **Alternative:** Host service across multiple servers

---

## 👥 Roles and Responsibilities

### Software Architecture vs Development
- **Software Architecture:** Defines components, relationships, and interactions
- **Software Engineer vs Developer:** 
  - SE engineers features with additional responsibilities (mentoring, etc.)
  - SE creates the blueprint
  - Developer builds the implementation
  - Architecture creates the software map
- **Stakeholder Interaction:** Architect is closest to stakeholders, gets permission for high-level features

---

## 🏗️ Architecture Types

## Monolithic Architecture

![Monolothic Architecture](Monolothic_Architecture.png)
### Description
- Everything in one repository and on one server
- Database is always separate (most important component)
- Server downtime is tolerable, but data loss is not

### Recommendation
**Start your project as monolithic architecture**
- Microservices require a team and more work
- This architecture is okay and not bad for projects scaling correctly

### Advantages
- **Simplicity:** Easier development and deployment
- **Centralized Management:** Single codebase for development and deployment
- **Tight Integration:** Easier communication between components

### Disadvantages
- **Scalability Limitations:** Easier to build but harder to scale (resource limits exist)
  - *Note: Reaching this limit means software is doing very well and worth using microservices*
- **Technology Stack Dependency:** Replacing technology may require significant changes
- **Deployment Complexity:** Entire application needs deployment at once

### Why Start Monolithic?
1. Experiment quickly
2. Focus on business logic
3. Prevent initial overdesign
4. Manageable by a small team

### When to Move Away from Monolithic
1. More product requirements
2. Onboarding new team members becomes difficult
3. Too much cognitive load
4. Delaying deployments to sync features
5. No independent scaling
6. Messy to debug

![Microservice Architecture](Microservice_Architecture.png)

---

## Microservices Architecture

### Description
- Each service has its own server and database
- Services are independent from each other
- APIs facilitate communication between services
- For large SaaS with 100,000+ requests, each service has a dedicated team
- Each new service requires a new server

### Challenges of Microservices Architecture
- **Design Complexity:** Coordinating communication between microservices requires clear boundaries and careful planning
- **Data Consistency:** Independent data management can lead to duplication and inconsistency across services
- **Security Concerns:** Securing distributed microservices across multiple environments presents challenges in data integrity and access control
- **Operational Complexity:** Managing numerous microservices demands sophisticated tooling and coordination

![Project Setup](Project_Setup.png)

---

## ❓ Q&A Session

### Q: As a fresh grad SE, what do I need to work in a company?
**A:** Each company has different systems and codes. Bosses want to know:
- Is the fresh grad a problem solver?
- Can they learn quickly?
These are the most important traits for fresh employees.

### Q: How do I showcase these skills?
**A:** 
- Interviews will test these traits
- Go deep in a specific language (you won't work in all of them)
- Keep working on projects
- Spear fishing for specific jobs is better than applying randomly

### Q: What does a senior look for when hiring a junior?
**A:** 
- Communication skills
- Dedication to work
- Seniors need someone easy to communicate with for instruction
- Juniors handle redundant work while seniors focus on critical parts

### Q: How to choose a specific major with general majors like CS?
**A:** 
- Try making a basic "hello world" app in each field
- See what you like most and pursue that direction

### Q: How to know when you qualify for a skill required by a company?
**A:** 
- If you have a base and it's easy to learn: you can apply
- If you have no base: you're not ready
- **Rule of thumb:** Have 80% of the requirements