```markdown
# Online Food Ordering Process

```mermaid
flowchart TD
    A[Customer browses menu] --> B[Selects items to order]
    B --> C{Items in cart?}
    C -- Yes --> D[Proceed to checkout]
    C -- No --> A
    D --> E[Enter delivery address & payment info]
    E --> F{Payment successful?}
    F -- Yes --> G[Order confirmed and sent to restaurant]
    F -- No --> H[Show error message and retry]
    G --> I[Restaurant prepares food]
    I --> J[Delivery dispatched]
    J --> K[Customer receives order]
## Diagram Description

- **A. Customer browses menu**: The user opens the app/website and explores available food items.
- **B. Selects items to order**: The customer adds preferred items to their cart.
- **C. Items in cart?**: Decision point — if there are no items, return to browsing.
- **D. Proceed to checkout**: Customer decides to finalize the order.
- **E. Enter delivery address & payment info**: Required fields to complete the purchase.
- **F. Payment successful?**: If not successful, an error is shown and the user retries.
- **G. Order confirmed and sent to restaurant**: The order is placed successfully.
- **I. Restaurant prepares food**: Staff begin preparing the selected items.
- **J. Delivery dispatched**: Order is picked up by a delivery person.
- **K. Customer receives order**: Final step where the customer gets their food.

This diagram visualizes a streamlined, user-driven process, highlighting key interactions and decisions that lead to a successful food delivery.
---
