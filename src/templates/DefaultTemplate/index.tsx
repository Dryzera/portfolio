import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { BurguerMenu } from '../../components/BurguerMenu';

type DefaultTemplateProps = {
  children: React.ReactNode;
};

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <>
      <Header />
      <BurguerMenu />
      {children}
      <Footer />
    </>
  );
}
