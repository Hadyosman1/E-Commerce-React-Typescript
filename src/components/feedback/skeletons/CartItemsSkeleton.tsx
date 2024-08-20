import { Stack } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const CartItemsSkeleton = () => {
  return (
    <Stack className="list-unstyled" as={"ul"} gap={4}>
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <ContentLoader
            key={i}
            speed={1}
            backgroundColor="#c7c7c7"
            foregroundColor="#ededed"
            viewBox="0 0 1500 350"
          >
            <rect x="20" y="15" rx="20" ry="20" width="300" height="330" />
            <rect x="361" y="17" rx="10" ry="10" width="420" height="33" />
            <rect x="361" y="71" rx="10" ry="10" width="315" height="33" />
            <rect x="361" y="125" rx="10" ry="10" width="233" height="20" />
            <rect x="361" y="216" rx="5" ry="5" width="195" height="13" />
            <rect x="367" y="311" rx="8" ry="8" width="130" height="38" />
          </ContentLoader>
        ))}
    </Stack>
  );
};

export default CartItemsSkeleton;
