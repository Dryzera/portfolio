import { Link } from 'react-router';

type RouteLinkProps = {
  href: string;
  children: React.ReactNode;
} & React.ComponentProps<'a'>;

export function RouteLink({ href, children, ...props }: RouteLinkProps) {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
