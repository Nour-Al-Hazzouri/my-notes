# Resource Monitoring in Linux

Effective resource monitoring is essential for maintaining optimal system performance. This guide explains how to monitor system resources in Linux using load metrics and common monitoring commands.

## Understanding Load in Linux

In Linux, **load** represents the set of processes a CPU is currently running or waiting to run:
- Each running or waiting process adds 1 to the load
- An idle system with no processes has a load of 0
- Example: 3 running applications + 2 waiting = load of 5

## Load Average Metrics

Linux uses load average calculations over three time periods instead of percentages:

1. **1-minute average**: Recent system activity
2. **5-minute average**: Medium-term system activity
3. **15-minute average**: Long-term system activity

Load average values are decimal numbers where:
- 0.03 represents approximately 3% CPU utilization
- Higher values indicate increased resource usage

## Monitoring Commands

### The uptime Command

The `uptime` command provides a quick view of load averages:
- Displays three decimal values representing 1, 5, and 15-minute averages
- Simple way to quickly check system resource usage

### The top Command

The `top` (table of processes) command provides comprehensive resource monitoring:
- First line shows the same load average information as `uptime`
- Second line displays task output with process status information

The five process states shown in top:

1. **Total**: Sum of all processes in any state
2. **Running**: Processes currently executing with CPU access
3. **Sleeping**: Processes awaiting resources in normal state
4. **Stopped**: Processes ending and releasing resources
5. **Zombie**: Processes waiting for parent process to release resources (a few are normal)

## Key Takeaways

- Monitoring load averages helps identify resource imbalances
- A balanced system with appropriate resource usage runs with fewer issues
- The `top` command provides detailed information about running processes
- IT professionals can use these tools to determine which processes to terminate when balancing system resources
