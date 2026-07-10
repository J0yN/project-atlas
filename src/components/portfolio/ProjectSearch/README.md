Purpose

Client-side search input with debounce and accessible markup.

Props

- placeholder?: string
- onSearch?: (q) => void
- debounceMs?: number

Accessibility

- role="search" and labelled input. Debounced onChange for performance.

Future

- Integrate with global search or server-side search endpoints.
