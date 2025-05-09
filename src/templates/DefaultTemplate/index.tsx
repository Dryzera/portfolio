import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

type DefaultTemplateProps = {
  children: React.ReactNode;
};

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
