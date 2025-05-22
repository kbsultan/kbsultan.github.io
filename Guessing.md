```mermaid
flowchart TD
A[START] --> B["Generate random number 1-100"]
 B --> C[Prompt user for a guess]
 C --> D{Is input a number?}
 D -- No --> E["Display error: 'Enter a number'"]
E --> C
D -- Yes --> F{"Is guess correct?"}
F -- Yes --> G["Display 'Correct!' message"]
F -- No --> H{"Is guess too high?"}
 H -- Yes --> I["Display 'Too High!'"]
 H -- No --> J["Display 'Too Low!'"]
 I --> C
 J --> C
G --> K[End]
