# Unit 18: Probability and Statistics

## Overview
This unit introduces students to probability and statistics, two interconnected branches of mathematics that deal with uncertainty, data analysis, and making predictions. Probability provides tools for quantifying the likelihood of events, while statistics involves collecting, analyzing, interpreting, and presenting data. Together, these concepts help students make sense of random phenomena, draw conclusions from data, and develop critical thinking skills for evaluating claims based on data.

## Key Concepts

### Concept 1: Basic Probability
**Definition**: Probability is a measure of the likelihood that an event will occur, expressed as a number between 0 (impossible) and 1 (certain).

**Clarification**: Probability can be calculated as the ratio of favorable outcomes to the total number of possible outcomes, assuming all outcomes are equally likely. Understanding probability helps students quantify uncertainty and make predictions about random events.

**Example**: 
- When rolling a fair six-sided die, the probability of rolling a 3 is 1/6 because there is 1 favorable outcome out of 6 possible outcomes.
- When drawing a card from a standard deck, the probability of drawing a heart is 13/52 = 1/4 because there are 13 hearts out of 52 cards.
- The probability of a coin landing on heads is 1/2, assuming the coin is fair.

```
    Basic Probability
    
    Probability formula:
    
    P(event) = Number of favorable outcomes / Total number of possible outcomes
    
    Example 1: Rolling a die
    
    ┌───┬───┬───┐
    │ 1 │ 2 │ 3 │
    ├───┼───┼───┤
    │ 4 │ 5 │ 6 │
    └───┴───┴───┘
    
    P(rolling a 3) = 1/6
    
    Favorable outcomes: {3}
    Total possible outcomes: {1, 2, 3, 4, 5, 6}
    
    Example 2: Drawing a card from a standard deck
    
    Standard deck: 52 cards
    - 4 suits (hearts ♥, diamonds ♦, clubs ♣, spades ♠)
    - 13 cards per suit (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K)
    
    P(drawing a heart) = 13/52 = 1/4
    
    Favorable outcomes: 13 hearts
    Total possible outcomes: 52 cards
    
    Example 3: Flipping a coin
    
    ┌─────┬─────┐
    │  H  │  T  │
    └─────┴─────┘
    
    P(heads) = 1/2
    
    Favorable outcomes: {H}
    Total possible outcomes: {H, T}
    
    Probability scale:
    
    0                   0.5                   1
    |-------------------|-------------------|
    Impossible      Equally likely        Certain
    
    Examples on probability scale:
    
    0      0.25     0.5      0.75     1
    |-------|-------|-------|-------|
           ↑        ↑       ↑
    P(roll 12    P(coin   P(card is
     with two    lands    red) = 0.5
     dice) = 1/36  heads)
     ≈ 0.028      = 0.5
```

### Concept 2: Experimental vs. Theoretical Probability
**Definition**: Theoretical probability is calculated mathematically based on the possible outcomes, while experimental probability is determined by conducting experiments and observing the results.

**Clarification**: Theoretical probability represents what should happen in the long run, while experimental probability represents what actually happened in a specific experiment. As the number of trials increases, experimental probability tends to approach theoretical probability. This concept helps students understand the relationship between mathematical models and real-world observations.

**Example**: 
- Theoretical probability of rolling a 6 on a die: 1/6 ≈ 0.167
- Experimental probability after 10 rolls with 2 sixes: 2/10 = 0.2
- Experimental probability after 1000 rolls with 158 sixes: 158/1000 = 0.158

```
    Experimental vs. Theoretical Probability
    
    Theoretical Probability:
    - Based on mathematical calculations
    - Represents what should happen in the long run
    - Formula: P(event) = Number of favorable outcomes / Total number of possible outcomes
    
    Experimental Probability:
    - Based on actual experiments or observations
    - Represents what actually happened in a specific experiment
    - Formula: P(event) = Number of times event occurred / Total number of trials
    
    Example: Rolling a 6 on a die
    
    Theoretical probability:
    P(rolling a 6) = 1/6 ≈ 0.167
    
    Experimental probability:
    
    After 10 rolls:
    Roll results: 3, 1, 6, 4, 2, 6, 5, 1, 3, 4
    Number of 6s: 2
    P(rolling a 6) = 2/10 = 0.2
    
    After 100 rolls:
    Number of 6s: 18
    P(rolling a 6) = 18/100 = 0.18
    
    After 1000 rolls:
    Number of 6s: 158
    P(rolling a 6) = 158/1000 = 0.158
    
    Visual representation of convergence:
    
    Probability
    of rolling a 6
    ^
    |
    0.5|
       |
       |
       |                *
    0.2|                *
       |    *           *   *
       |                *       *
    0.167|-------------*---------------*-----*----
       |                            *     *
       |
    0.1|
       |
       |
    0.0+---+---+---+---+---+---+---+---+---+----> Number of rolls
       0   10  20  50  100 200 300 500 700 1000
    
    As the number of trials increases, experimental probability
    tends to approach theoretical probability.
```

### Concept 3: Compound Events and Sample Spaces
**Definition**: Compound events involve multiple simple events, and a sample space is the set of all possible outcomes of an experiment.

**Clarification**: Calculating probabilities for compound events requires understanding how to count outcomes systematically. Techniques include using tree diagrams, tables, and the multiplication principle. The sample space provides the denominator for probability calculations.

**Example**: 
- When rolling two dice, the sample space consists of 36 possible outcomes (pairs of numbers).
- The probability of rolling a sum of 7 is 6/36 = 1/6 because there are 6 favorable outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), and (6,1).
- When flipping a coin twice, the sample space is {HH, HT, TH, TT}, and the probability of getting exactly one head is 2/4 = 1/2.

```
    Compound Events and Sample Spaces
    
    Sample Space:
    - The set of all possible outcomes of an experiment
    - Used as the denominator in probability calculations
    
    Example 1: Rolling two dice
    
    Sample space (36 possible outcomes):
    
    ┌───┬───┬───┬───┬───┬───┬───┐
    │   │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
    ├───┼───┼───┼───┼───┼───┼───┤
    │ 1 │1,1│1,2│1,3│1,4│1,5│1,6│
    ├───┼───┼───┼───┼───┼───┼───┤
    │ 2 │2,1│2,2│2,3│2,4│2,5│2,6│
    ├───┼───┼───┼───┼───┼───┼───┤
    │ 3 │3,1│3,2│3,3│3,4│3,5│3,6│
    ├───┼───┼───┼───┼───┼───┼───┤
    │ 4 │4,1│4,2│4,3│4,4│4,5│4,6│
    ├───┼───┼───┼───┼───┼───┼───┤
    │ 5 │5,1│5,2│5,3│5,4│5,5│5,6│
    ├───┼───┼───┼───┼───┼───┼───┤
    │ 6 │6,1│6,2│6,3│6,4│6,5│6,6│
    └───┴───┴───┴───┴───┴───┴───┘
    
    Probability of rolling a sum of 7:
    
    Favorable outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)
    Number of favorable outcomes: 6
    Total number of possible outcomes: 36
    
    P(sum of 7) = 6/36 = 1/6
    
    Example 2: Flipping a coin twice
    
    Sample space (4 possible outcomes):
    {HH, HT, TH, TT}
    
    Tree diagram:
    
                 ┌─ H ─ HH
             ┌─ H ┤
             │    └─ T ─ HT
    Start ───┤
             │    ┌─ H ─ TH
             └─ T ┤
                  └─ T ─ TT
    
    Probability of getting exactly one head:
    
    Favorable outcomes: {HT, TH}
    Number of favorable outcomes: 2
    Total number of possible outcomes: 4
    
    P(exactly one head) = 2/4 = 1/2
    
    Multiplication Principle:
    
    If there are m ways to perform task A and n ways to perform task B,
    then there are m × n ways to perform both tasks.
    
    Example: 3 shirts and 2 pants = 3 × 2 = 6 possible outfits
```

### Concept 4: Data Collection and Representation
**Definition**: Data collection involves gathering information systematically, and data representation involves organizing and displaying that information in various formats.

**Clarification**: Different methods of data collection and representation are appropriate for different types of data and purposes. Common representations include tables, bar graphs, line plots, histograms, and scatter plots. Understanding these representations helps students interpret and communicate information effectively.

**Example**: 
- A survey of students' favorite colors might be represented in a bar graph, with colors on the x-axis and number of students on the y-axis.
- Temperature measurements over time might be displayed in a line graph to show trends.
- The distribution of test scores might be shown in a histogram to visualize the frequency of scores in different ranges.

```
    Data Collection and Representation
    
    Data Collection Methods:
    - Surveys/questionnaires
    - Observations
    - Experiments
    - Measurements
    - Existing records
    
    Data Representation Types:
    
    1. Bar Graph
    
    Example: Students' Favorite Colors
    
    Number of
    Students
    12 |                   ■
       |                   ■
    10 |                   ■
       |                   ■
     8 |     ■             ■
       |     ■             ■
     6 |     ■             ■     ■
       |     ■             ■     ■
     4 | ■   ■             ■     ■
       | ■   ■             ■     ■
     2 | ■   ■     ■       ■     ■
       | ■   ■     ■       ■     ■
     0 +─────────────────────────────
         Red Blue Green Purple Yellow
    
    2. Line Graph
    
    Example: Temperature Over a Week
    
    Temperature (°F)
    ^
    |
    90|                *
    85|               / \
    80|        *     /   \     *
    75|       / \   /     \   /
    70|      /   \ /       \ /
    65|     /     *         *
    60|    /
    55|   /
    50| */
       +---+---+---+---+---+---+---+---> Day
       Mon Tue Wed Thu Fri Sat Sun
    
    3. Histogram
    
    Example: Test Score Distribution
    
    Number of
    Students
    10 |             ■
       |             ■
     8 |             ■
       |             ■
     6 |         ■   ■
       |         ■   ■
     4 |     ■   ■   ■   ■
       |     ■   ■   ■   ■
     2 | ■   ■   ■   ■   ■   ■
       | ■   ■   ■   ■   ■   ■
     0 +─────────────────────────────
        50-59 60-69 70-79 80-89 90-100
                  Score Range
    
    4. Scatter Plot
    
    Example: Height vs. Weight
    
    Weight (kg)
    ^
    |
    80|                 *
    75|             *     *
    70|         *     *
    65|     *     *
    60| *     *
    55|     *
    50| *
       +---+---+---+---+---+---+---+---> Height (cm)
       150 155 160 165 170 175 180
    
    5. Pie Chart
    
    Example: Budget Allocation
    
    ┌─────────────────────────┐
    │     Housing             │
    │    (40%)                │
    │  ┌───────┐              │
    │  │       │              │
    │  │       │              │
    │  │       │              │
    │  └───────┘              │
    │Food      \  Transport   │
    │(30%)      \ (15%)       │
    │            \            │
    │             \           │
    │              \          │
    │               \         │
    │                \        │
    │                 \       │
    │                  \      │
    │                   \     │
    │                    \    │
    │                     \   │
    │                      \  │
    │                       \ │
    │         Other          \│
    │         (15%)           │
    └─────────────────────────┘
```

### Concept 5: Measures of Central Tendency
**Definition**: Measures of central tendency are values that represent the center or typical value of a data set, including the mean (average), median (middle value), and mode (most frequent value).

**Clarification**: Each measure provides different information about the data and is appropriate in different contexts. The mean is influenced by all values but can be skewed by outliers. The median is resistant to outliers. The mode shows the most common value(s). Understanding these measures helps students summarize and compare data sets.

**Example**: 
For the data set {4, 7, 10, 12, 12, 15, 20}:
- Mean = (4 + 7 + 10 + 12 + 12 + 15 + 20) ÷ 7 = 80 ÷ 7 ≈ 11.4
- Median = 12 (the middle value when ordered)
- Mode = 12 (the most frequent value)

```
    Measures of Central Tendency
    
    Data set: {4, 7, 10, 12, 12, 15, 20}
    
    1. Mean (Average)
    
    Formula: Mean = Sum of all values / Number of values
    
    Mean = (4 + 7 + 10 + 12 + 12 + 15 + 20) ÷ 7
         = 80 ÷ 7
         ≈ 11.4
    
    Visual representation:
    
    Original data:
    4   7   10  12  12  15  20
    
    Balancing point (mean):
    
    4   7   10  [11.4]  12  15  20
                  ^
                 Mean
    
    2. Median (Middle Value)
    
    Step 1: Arrange the data in order
            {4, 7, 10, 12, 12, 15, 20}
    
    Step 2: Find the middle value
            For odd number of values, median is the middle value
            For even number of values, median is the average of the two middle values
    
    Median = 12 (the 4th value in the ordered set of 7 values)
    
    Visual representation:
    
    Ordered data:
    4   7   10  12  12  15  20
                ^
              Median
    
    3. Mode (Most Frequent Value)
    
    Mode = 12 (appears twice, more than any other value)
    
    Visual representation:
    
    Frequency:
    2 |             ■
      |             ■
    1 | ■   ■   ■       ■   ■
      | ■   ■   ■       ■   ■
    0 +─────────────────────────
        4   7   10  12  15  20
                   ^
                  Mode
    
    Comparison of measures:
    
    ┌───────┬───────────────────────────────────────────┐
    │Measure│ Characteristics                           │
    ├───────┼───────────────────────────────────────────┤
    │ Mean  │ - Uses all values                         │
    │       │ - Affected by outliers                    │
    │       │ - Best for symmetric distributions        │
    ├───────┼───────────────────────────────────────────┤
    │Median │ - Position-based                          │
    │       │ - Resistant to outliers                   │
    │       │ - Best for skewed distributions           │
    ├───────┼───────────────────────────────────────────┤
    │ Mode  │ - Frequency-based                         │
    │       │ - Can have multiple modes or no mode      │
    │       │ - Best for categorical data               │
    └───────┴───────────────────────────────────────────┘
    
    Example with outlier:
    
    Data set: {4, 7, 10, 12, 12, 15, 100}
    
    Mean = (4 + 7 + 10 + 12 + 12 + 15 + 100) ÷ 7 = 160 ÷ 7 ≈ 22.9
    Median = 12
    Mode = 12
    
    The mean is significantly affected by the outlier (100),
    while the median and mode remain the same.
```

### Concept 6: Measures of Variation
**Definition**: Measures of variation describe how spread out the data is, including range, interquartile range (IQR), and standard deviation.

**Clarification**: These measures provide information about the dispersion or variability of the data. The range is the difference between the maximum and minimum values. The IQR is the difference between the third quartile (Q3) and the first quartile (Q1). The standard deviation measures the average distance of each data point from the mean. Understanding variation helps students assess the consistency and reliability of data.

**Example**: 
For the data set {4, 7, 10, 12, 12, 15, 20}:
- Range = 20 - 4 = 16
- Q1 = 7, Q3 = 15, so IQR = 15 - 7 = 8
- Standard deviation involves calculating the average of the squared differences from the mean

```
    Measures of Variation
    
    Data set: {4, 7, 10, 12, 12, 15, 20}
    
    1. Range
    
    Formula: Range = Maximum value - Minimum value
    
    Range = 20 - 4 = 16
    
    Visual representation:
    
    4   7   10  12  12  15  20
    |<----------------------->|
              Range = 16
    
    2. Interquartile Range (IQR)
    
    Step 1: Find the quartiles
            Q1 (first quartile): the median of the lower half of the data
            Q2 (second quartile): the median of the entire data set
            Q3 (third quartile): the median of the upper half of the data
    
    For {4, 7, 10, 12, 12, 15, 20}:
    
    Lower half: {4, 7, 10}
    Q1 = 7
    
    Median (Q2) = 12
    
    Upper half: {12, 15, 20}
    Q3 = 15
    
    IQR = Q3 - Q1 = 15 - 7 = 8
    
    Visual representation:
    
    4   7   10  12  12  15  20
        |<------------->|
              IQR = 8
    
    3. Standard Deviation
    
    Formula: σ = √[(Σ(x - μ)²) / n]
             where σ is the standard deviation,
             μ is the mean, and n is the number of values
    
    For {4, 7, 10, 12, 12, 15, 20} with mean μ = 11.4:
    
    Step 1: Find the deviation of each value from the mean
            4 - 11.4 = -7.4
            7 - 11.4 = -4.4
            10 - 11.4 = -1.4
            12 - 11.4 = 0.6
            12 - 11.4 = 0.6
            15 - 11.4 = 3.6
            20 - 11.4 = 8.6
    
    Step 2: Square each deviation
            (-7.4)² = 54.76
            (-4.4)² = 19.36
            (-1.4)² = 1.96
            (0.6)² = 0.36
            (0.6)² = 0.36
            (3.6)² = 12.96
            (8.6)² = 73.96
    
    Step 3: Find the mean of the squared deviations
            (54.76 + 19.36 + 1.96 + 0.36 + 0.36 + 12.96 + 73.96) ÷ 7
            = 163.72 ÷ 7
            ≈ 23.39
    
    Step 4: Take the square root
            σ = √23.39 ≈ 4.84
    
    Box Plot (Box-and-Whisker Plot):
    
    A visual representation of the five-number summary:
    minimum, Q1, median, Q3, maximum
    
         +-----+--+-------+
    -----+     |  |       +-----
         +-----+--+-------+
         4     7  12      15    20
         Min   Q1 Med     Q3    Max
    
    Comparison of measures:
    
    ┌───────────────┬───────────────────────────────────────┐
    │ Measure       │ Characteristics                       │
    ├───────────────┼───────────────────────────────────────┤
    │ Range         │ - Simple to calculate                 │
    │               │ - Affected by outliers                │
    │               │ - Only uses two values                │
    ├───────────────┼───────────────────────────────────────┤
    │ IQR           │ - Resistant to outliers               │
    │               │ - Describes middle 50% of data        │
    │               │ - Used to identify outliers           │
    ├───────────────┼───────────────────────────────────────┤
    │ Standard      │ - Uses all values                     │
    │ Deviation     │ - Affected by outliers                │
    │               │ - Useful for normal distributions     │
    └───────────────┴───────────────────────────────────────┘
```

### Concept 7: Making Inferences and Predictions
**Definition**: Making inferences involves drawing conclusions about a population based on a sample, while making predictions involves using data and probability to forecast future events or values.

**Clarification**: These processes require understanding the relationship between samples and populations, as well as the role of randomness and variability. Statistical inferences are always accompanied by a level of uncertainty, which can be quantified using probability. This concept helps students use data to make informed decisions and evaluate claims.

**Example**: 
- If a random sample of 100 students shows that 65% prefer digital textbooks, we might infer that about 65% of all students at the school prefer digital textbooks, with some margin of error.
- Based on historical weather data showing that it has rained on 30% of April days, we might predict a 30% chance of rain on any given day in April.
- If a basketball player has made 80% of free throws this season, we might predict an 80% chance of making the next free throw.

```
    Making Inferences and Predictions
    
    Statistical Inference:
    - Drawing conclusions about a population based on a sample
    - Always involves some uncertainty
    - Requires random sampling to be valid
    
    Example 1: Digital Textbook Preference
    
    Sample: 100 students randomly selected from a school of 1,000 students
    Result: 65 students (65%) prefer digital textbooks
    
    Inference: Approximately 65% of all students at the school prefer digital textbooks
    
    Visual representation:
    
    Sample (100 students):
    
    Prefer digital: 65%  |  Prefer print: 35%
    ■■■■■■■■■■■■■■■■■■■■■|■■■■■■■■■■■
    
    Inference about population (1,000 students):
    
    Prefer digital: ~65% ± margin of error  |  Prefer print: ~35% ± margin of error
    ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■|■■■■■■■■■■■■■■■■■■■
    
    Prediction:
    - Using data and probability to forecast future events or values
    - Based on patterns, trends, or known probabilities
    
    Example 2: Weather Prediction
    
    Historical data: It has rained on 30% of April days over the past 10 years
    
    Prediction: There is approximately a 30% chance of rain on any given day in April
    
    Visual representation:
    
    April days with rain:
    
    ☔ ☔ ☔ ☀ ☀ ☀ ☀ ☀ ☀ ☀
    30% rainy days  |  70% non-rainy days
    
    Example 3: Basketball Free Throws
    
    Data: A player has made 80 out of 100 free throws this season (80%)
    
    Prediction: The player has approximately an 80% chance of making the next free throw
    
    Visual representation:
    
    Free throw attempts:
    
    ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✗ ✓
    ✓ ✓ ✓ ✗ ✓ ✓ ✓ ✓ ✓ ✓
    ...
    80% made  |  20% missed
    
    Factors affecting the reliability of inferences and predictions:
    
    ┌───────────────┬───────────────────────────────────────┐
    │ Factor        │ Impact                                │
    ├───────────────┼───────────────────────────────────────┤
    │ Sample size   │ Larger samples generally provide more │
    │               │ reliable inferences                   │
    ├───────────────┼───────────────────────────────────────┤
    │ Randomness    │ Random samples reduce bias            │
    ├───────────────┼───────────────────────────────────────┤
    │ Variability   │ Higher variability in data increases  │
    │               │ uncertainty                           │
    ├───────────────┼───────────────────────────────────────┤
    │ Relevance     │ Past data must be relevant to future  │
    │               │ predictions                           │
    └───────────────┴───────────────────────────────────────┘
```

## Summary
Unit 18 introduces students to probability and statistics, focusing on quantifying uncertainty and analyzing data. Students learn about basic probability concepts, the difference between experimental and theoretical probability, compound events and sample spaces, data collection and representation, measures of central tendency and variation, and making inferences and predictions. These concepts provide tools for making sense of random phenomena, drawing conclusions from data, and developing critical thinking skills for evaluating claims based on data.

## Connection to Next Unit
The probability and statistics concepts learned in Unit 18 provide a foundation for Unit 19, which focuses on financial literacy. Statistical analysis is often applied in financial contexts, such as analyzing market trends, assessing risk, and making investment decisions. Probability concepts are essential for understanding financial risk and making informed financial choices. Additionally, the data analysis skills developed in this unit will be useful for interpreting financial data and evaluating financial options. The critical thinking skills fostered through statistical reasoning will also support sound financial decision-making.

---
**Previous**: [[Education/Math/Arithmetic/Unit_17_Algebraic_Thinking|Unit 17: Algebraic Thinking]] | **Next**: [[Education/Math/Arithmetic/Unit_19_Financial_Literacy|Unit 19: Financial Literacy]]
