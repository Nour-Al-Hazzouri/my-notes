# Logic Gates

## Introduction

- **Definition**: Electrical components that tell computers how to perform binary calculations
- **Function**: Specify rules for producing electrical output based on one or more electrical inputs
- **Binary States**: Computers use electrical signals to represent two states:
  - "On" state (typically representing binary 1)
  - "Off" state (typically representing binary 0)

## Six Common Logic Gates

### NOT Gate
- **Inputs**: One input signal
- **Function**: Outputs the opposite binary state of the input
- **Truth Table**:
  - Input: Off → Output: On
  - Input: On → Output: Off
- **Representation**: Triangle with small circle on output side

### AND Gate
- **Inputs**: Two input signals
- **Function**: Outputs "on" only when both inputs are "on"
- **Truth Table**:
  - Input A: Off, Input B: Off → Output: Off
  - Input A: Off, Input B: On → Output: Off
  - Input A: On, Input B: Off → Output: Off
  - Input A: On, Input B: On → Output: On

### OR Gate
- **Inputs**: Two input signals
- **Function**: Outputs "off" only when both inputs are "off"
- **Truth Table**:
  - Input A: Off, Input B: Off → Output: Off
  - Input A: Off, Input B: On → Output: On
  - Input A: On, Input B: Off → Output: On
  - Input A: On, Input B: On → Output: On

### XOR Gate (Exclusive OR)
- **Inputs**: Two input signals
- **Function**: Outputs "on" when only one input is "on" (but not both)
- **Truth Table**:
  - Input A: Off, Input B: Off → Output: Off
  - Input A: Off, Input B: On → Output: On
  - Input A: On, Input B: Off → Output: On
  - Input A: On, Input B: On → Output: Off

### NAND Gate (Not-AND)
- **Inputs**: Two input signals
- **Function**: Combination of AND and NOT gates; outputs opposite of AND gate
- **Truth Table**:
  - Input A: Off, Input B: Off → Output: On
  - Input A: Off, Input B: On → Output: On
  - Input A: On, Input B: Off → Output: On
  - Input A: On, Input B: On → Output: Off

### XNOR Gate (Not-XOR)
- **Inputs**: Two input signals
- **Function**: Combination of XOR and NOT gates; outputs "on" when inputs match
- **Truth Table**:
  - Input A: Off, Input B: Off → Output: On
  - Input A: Off, Input B: On → Output: Off
  - Input A: On, Input B: Off → Output: Off
  - Input A: On, Input B: On → Output: On

## Building Circuits

- **Circuit Definition**: Complex electrical systems built by linking multiple logic gates
- **Connection Methods**:
  - Output from one gate serves as input for another gate
  - Same inputs used for multiple gates
- **Circuit Example**:
  - Components: XOR gate, NOT gate, AND gate
  - Inputs: A and B
  - Outputs: Two different outputs based on the gate combinations
- **Importance**: Computers are complex electrical systems built from interconnected logic gates

---
**Next**: [[Education/Courses/Coursera/Google IT Support/Course 1/2- Readings/Week 1/Power Supplies|Power Supplies]]
