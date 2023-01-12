import { render } from '@testing-library/react';
// import { ThemeProvider } from 'my-ui-lib';

const AllTheProviders = ({ children }) => <>{children}</>;
// return (
//   <ThemeProvider theme="light">
//     {children}
//   </ThemeProvider>
// );

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react';

// override render method
// eslint-disable-next-line import/export
export { customRender as render };
