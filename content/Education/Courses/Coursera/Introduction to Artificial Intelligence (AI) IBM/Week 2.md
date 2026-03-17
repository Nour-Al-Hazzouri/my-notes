# Week 2: Cognitive Computing and Machine Learning

## Cognitive Computing (Perception, Learning, Reasoning)

- AI is ushering in a new era of cognitive computing, radically different from previous programmable computing systems
- Conventional computing follows rigid rules and decision trees, struggling with complex data and decisions
- Cognitive computing enables deriving insights from vast data, enhancing human expertise
- It mirrors key elements of human expertise: observing, interpreting, evaluating, and deciding

### Key Capabilities
- Unlike conventional computing limited to structured data, cognitive computing understands unstructured data (80% of data)
- Relies on natural language processing, understanding grammar, context, and cultural nuances
- Cognitive systems read and interpret text like humans, breaking it down grammatically and semantically
- They grasp real intent behind language, drawing inferences through linguistic models
- Cognitive systems learn, adapt, and get smarter from interactions and experience, like humans

---

## Terminology and Related Concepts

### Key AI Terms Differentiated

| Term | Definition |
|------|------------|
| **Artificial Intelligence** | Simulates intelligent behavior like planning, learning, reasoning, etc. |
| **Machine Learning** | Uses algorithms to analyze data and make intelligent decisions without explicit programming |
| **Deep Learning** | Specialized ML subset using layered neural networks to simulate human decision-making |
| **Neural Networks** | Inspired by biological neural networks, made of computing units/neurons |

### Machine Learning Characteristics
- Algorithms are trained on large data sets and learn from examples, not rules-based
- Enables machines to solve problems and make accurate predictions on their own

### Deep Learning Capabilities
- Can label, categorize information and identify patterns
- Allows AI systems to continuously learn and improve accuracy by determining correct decisions

### Neural Networks Function
- Take incoming data and learn to make decisions over time
- Layered deep, become more efficient as data volume increases vs. other ML plateauing

### AI vs. Data Science
- **Data Science**: Extracts knowledge from large data using math, stats, visualization, ML etc.
- **AI**: Allows computers to learn to solve problems and make intelligent decisions
- Data science encompasses overall data processing methodology
- Both AI and data science can involve using big data

---

## Machine Learning

### Core Concepts
- Machine Learning (ML) is a subset of AI that uses algorithms to analyze data and make intelligent decisions based on learning, instead of following rules-based algorithms
- ML builds models to classify data and make predictions from data inputs
- Unlike traditional programming algorithms that follow defined rules, ML creates the algorithm rules itself by learning from data and answers provided
- ML relies on examining large datasets to define behavioral rules and find common patterns

### Types of Machine Learning
- **Supervised Learning**: Algorithm trained on human-labeled data to classify new data
- **Unsupervised Learning**: Algorithm finds patterns itself from unlabeled data inputs
- **Reinforcement Learning**: Algorithm learns through trial-and-error using rules/constraints to maximize rewards

### Key Differentiators
- ML models can continuously learn and improve predictions, rather than following static rules defined by programmers
- ML models are algorithms that automatically find patterns in data without explicit programming of those patterns

---

## Machine Learning Techniques and Training

### Three Main Categories
1. **Supervised Learning**
   - Uses labeled data to build classification models
   - Can be divided into:
     - Regression (estimates continuous values)
     - Classification (assigns discrete class labels based on input features)
     - Neural Networks (mimic the structure of the human brain)

2. **Unsupervised Learning**
   - Does not have class labels
   - Must discover class labels from unstructured data
   - Often involves clustering techniques

3. **Reinforcement Learning**
   - Uses a reward function to penalize bad actions or reward good actions

### Training Process
- Involves using a learning algorithm to determine model parameters
- Shows the algorithm labeled data to learn patterns

### Dataset Splitting
| Dataset | Purpose |
|---------|---------|
| **Training Set** | Used to train the algorithm |
| **Validation Set** | Used to validate results and fine-tune parameters |
| **Test Set** | Used to evaluate the model's performance |

### Model Evaluation
- Metrics like accuracy, precision, and recall indicate model performance

---

## Deep Learning

### Relationship to AI
- Machine Learning is a subset of Artificial Intelligence
- Deep Learning is a specialized subset of Machine Learning

### Key Characteristics
- Creates Neural Networks that mimic the brain's structure and functionality
- Enables AI systems to continuously learn and improve accuracy
- Allows learning from unstructured data like images, videos, audio
- Enables natural language understanding capabilities in AI

### Architecture
- Deep Learning algorithms have multiple layers of processing units
- Each layer passes output to the next layer
- Many layers give it the name "deep learning"

### Development Process
- Configure number of layers and connection functions
- Train model with lots of annotated examples (e.g., images and labels)
- Algorithm adjusts weights to detect patterns in similar examples

### Advantages
- Efficiency doesn't plateau with large datasets (unlike older algorithms)
- Very efficient for tasks like:
  - Image captioning
  - Voice recognition
  - Facial recognition
  - Medical imaging
  - Language translation
- Key component in driverless cars

---

## Neural Networks

### Basic Concept
- Artificial neural networks are modeled after the human brain's neural networks
- They consist of computing units called neurons that process information

### Learning Process
- Neural networks learn through backpropagation:
  - Training data maps inputs to desired outputs
  - Network outputs are compared to desired outputs
  - Weights are adjusted to reduce errors

### Components
- Input layer
- Output layer
- One or more hidden layers that simulate brain activity
- Hidden layers use weighted inputs and activation functions

### Types of Neural Networks
1. **Simple Perceptrons**
   - Single input/output layers

2. **Deep Neural Networks**
   - Multiple hidden layers

3. **Convolutional Neural Networks (CNNs)**
   - Used for image/video processing
   - Inspired by animal visual cortex
   - Use mathematical convolutions to detect features
   - Build complex features from simpler ones over layers

4. **Recurrent Neural Networks (RNNs)**
   - Used for sequential data
   - Outputs feed into subsequent inputs
   - Can account for context/dependencies in sequences

---

## Key Fields of Applications in AI

### Major Application Areas
1. **Natural Language Processing (NLP)**
   - Most complex data for machine learning
   - Human-invented, conceptual rather than literal
   - Challenges like ambiguity, context, symbolic representations

2. **Computer Vision**
   - Popular application area
   - Enables understanding of visual data
   - Human vision is the primary sense

3. **Audio/Speech Processing**
   - Combines multiple challenges
   - Supporting multiple languages, accents, pronunciations
   - High data volumes (44,000 data points per second)

4. **Structured Data**
   - Traditional area of applying machine learning
   - Working with tabular, structured datasets

---

## Natural Language Processing, Speech, Computer Vision

### Natural Language Processing (NLP)
- Enables computers to understand and process human language
- Uses machine learning and deep learning algorithms
- Deconstructs language grammatically, relationally, structurally to understand context
- Can determine intent, emotion, and meaning behind words
- Subcategories include speech-to-text and text-to-speech

### Speech Technologies
- **Speech-to-text**:
  - Converts speech to readable text
  - Neural networks learn patterns to map audio to text
  - Enables real-time transcription, captioning

- **Text-to-speech (speech synthesis)**:
  - Converts text to audio
  - Neural networks learn to generate natural-sounding voices
  - Used for enhanced customer experience, accessibility

### Computer Vision
- Replicates human visual system to identify objects in images/videos
- Enables technologies like:
  - Self-driving cars
  - Facial recognition
  - Augmented reality
- Utilizes deep learning and neural networks
- Surpasses humans in object detection and labeling tasks
- Used in applications like photo libraries to classify content

---
**Previous**: [[Education/Courses/Coursera/Introduction to Artificial Intelligence (AI) IBM/Week 1|Week 1: Introduction to Artificial Intelligence]] | **Next**: [[Education/Courses/Coursera/Introduction to Artificial Intelligence (AI) IBM/Week 3|Week 3: AI Ethics and Governance]]
