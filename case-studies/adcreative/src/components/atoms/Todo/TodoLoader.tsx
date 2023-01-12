import ContentLoader from 'react-content-loader';

export const TodoLoader = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={42}
    viewBox="0 0 400 42"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="200" height="20" />
    <rect x="calc(100% - 20px)" y="0" rx="3" ry="3" width="20" height="20" />
    <rect x="0" y="24" rx="3" ry="3" width="140" height="11" />
    <rect x="calc(100% - 48px)" y="0" rx="0" ry="0" width="20" height="20" />
  </ContentLoader>
);
