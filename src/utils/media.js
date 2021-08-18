const size = {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1450px',
};
export const media = {
    down: {
        xs: `@media (max-width: ${size.xs})`,
        sm: `@media (max-width: ${size.sm})`,
        md: `@media (max-width: ${size.md})`,
        lg: `@media (max-width: ${size.lg})`,
        xl: `@media (max-width: ${size.xl})`,
    },
    up: {
        xs: `@media (min-width: ${size.xs})`,
        sm: `@media (min-width: ${size.sm})`,
        md: `@media (min-width: ${size.md})`,
        lg: `@media (min-width: ${size.lg})`,
        xl: `@media (min-width: ${size.xl})`,
    },
    orientation: {
        portrait: `@media screen and (orientation: portrait)`,
        landscape: `@media screen and (orientation: landscape)`,
    }
};
