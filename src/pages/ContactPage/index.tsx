import { Contacts } from '../../components/Contacts';
import DefaultTemplate from '../../templates/DefaultTemplate';

export default function HomePage() {
  return (
    <DefaultTemplate>
      <Contacts title='Quer Falar Comigo' />
    </DefaultTemplate>
  );
}
