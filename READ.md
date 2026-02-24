Title
The Prank Calculator
A functional web-based calculator with a built-in Chaos Engine designed to surprise users with unexpected results.

Overview
ChaosCalc is a JavaScript application that functions as a standard calculator for daily tasks—until the prank logic triggers. Built with a 30% "Prank Probability," the app occasionally injects random numeric values into the result, accompanied by visual glitches and audio cues.

Features

1. Core Arithmetic
   Supports addition, subtraction, multiplication, division, and percentage calculations using JavaScript evaluation logic.

Handles decimal point precision and prevents multiple consecutive operators to ensure valid mathematical strings.

2. Prank Logic (30% Probability)
   Randomized Injection: Every time a result is calculated, the system calls a randomization function. If the generated number satisfies the specific threshold, a random integer is added to the true total.

Audiovisual Feedback: When a prank is triggered, the UI dynamically updates by applying a CSS class to the display and triggering a synchronized audio alert.

3. Smart Input Handling
   Hybrid Interaction: Users can operate the calculator via the Graphical User Interface (GUI) or through a physical keyboard.

Keyboard Filtering: The system listens for keypresses but intelligently ignores non-mathematical keys to prevent invalid inputs.

Visual Feedback: Buttons feature a active-state scale effect to provide tactile feedback during use.

4. Input Validation
   Prevents multiple decimals within a single number set.

Automatically sanitizes strings by removing trailing operators if a calculation is triggered prematurely.

Tech Stack
HTML5: Semantic structure for the interface.

CSS3: Custom properties for theme management and keyframe animations for the prank state.

JavaScript (ES6):

Mathematical string processing via eval().

Global event listeners for keyboard integration.

Web Audio API for sound effect management.

Logic Implementation
The core of the prank is handled within the display calculation function, which checks for the random condition before rendering the final total:
