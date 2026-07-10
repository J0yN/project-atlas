Purpose

Client-side progressive loader using IntersectionObserver. Simulates loading more items; replace placeholder with real API calls.

Props

- initialItems?: ProjectItem[]
- pageSize?: number
- children: (items) => ReactNode (render prop)

Accessibility

- sentinel has aria-hidden; loading indicator should be announced by ARIA live regions in future when integrating real API.
